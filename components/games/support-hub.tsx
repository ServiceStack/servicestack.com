'use client'

import { useEffect, useRef, useState } from "react"
import { CONTACT, type GameId, allDevices, cardUrl, games, iconUrl, isGameId, topics } from "./data"
import { faqs } from "./faq"
import { type SupportReceipt, submitSupportRequest } from "./api"

const noFiles = 'or drop them here'

/** A pre-filled email with the form's answers, offered while online messages aren't connected */
function mailtoFor(form: FormData) {
    const game = games.find(x => x.id === form.get('Game'))
    const field = (name: string) => String(form.get(name) ?? '').trim()
    const body = [
        `Game: ${game?.name ?? ''}`,
        `Topic: ${field('Topic')}`,
        `Device: ${field('Device')}`,
        field('AppVersion') ? `Game version: ${field('AppVersion')}` : null,
        field('DisplayName') ? `Name: ${field('DisplayName')}` : null,
        '',
        field('Details').slice(0, 1500),
    ].filter(x => x != null).join('\n')
    const subject = `${game?.name ?? 'Game'} support: ${field('Subject')}`
    return `mailto:${CONTACT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function SupportHub() {
    const [game, setGame] = useState<GameId | null>(null)
    const [device, setDevice] = useState<string | null>(null)
    const [fileNames, setFileNames] = useState(noFiles)
    const [dragOver, setDragOver] = useState(false)
    const [sending, setSending] = useState(false)
    const [fallback, setFallback] = useState<string | null>(null)
    const [receipt, setReceipt] = useState<{ game: GameId, receipt: SupportReceipt } | null>(null)
    const fileInput = useRef<HTMLInputElement>(null)
    const picker = useRef<HTMLFieldSetElement>(null)

    // ?game= preselects a game, and choosing one keeps the URL shareable
    useEffect(() => {
        const id = new URL(location.href).searchParams.get('game')
        if (isGameId(id)) setGame(id)
    }, [])

    const choose = (id: GameId) => {
        setGame(id)
        // Clear a device the chosen game isn't available on, so it can't be submitted hidden
        if (device && !games.find(x => x.id === id)!.devices.includes(device)) setDevice(null)
        const url = new URL(location.href)
        url.searchParams.set('game', id)
        history.replaceState(null, '', url)
    }

    const toPicker = (e: React.MouseEvent) => {
        e.preventDefault()
        picker.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        picker.current?.querySelector<HTMLInputElement>('input:checked, input')?.focus({ preventScroll: true })
    }

    const showFiles = () => {
        const files = fileInput.current?.files
        setFileNames(files?.length ? Array.from(files, f => f.name).join(', ') : noFiles)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        setSending(true)
        setFallback(null)
        try {
            const result = await submitSupportRequest(form)
            setReceipt({ game: form.get('Game') as GameId, receipt: result })
            window.scrollTo({ top: 0 })
        } catch {
            setFallback(mailtoFor(form))
        } finally {
            setSending(false)
        }
    }

    if (receipt) return <Received game={receipt.game} receipt={receipt.receipt} />

    const chosen = games.find(x => x.id === game)
    const shownFaqs = chosen ? [chosen] : games

    return (
        <>
            <header className="gs-hero gs-wrap">
                <p className="gs-eyebrow">Player Support</p>
                <h1 className="gs-hero-title">How can we help?</h1>
                <p className="gs-lede">Choose your game to see answers for it, or send a message straight to the team who made it.</p>

                <fieldset id="picker" ref={picker} className="gs-picker">
                    <legend className="sr-only">Which game do you need help with?</legend>
                    {games.map(g => (
                        <label key={g.id} className="gs-game" data-game={g.id}>
                            <input type="radio" name="Game" id={`game-${g.id}`} value={g.id} form="support-form" required
                                   checked={game === g.id} onChange={() => choose(g.id)} />
                            <img className="gs-game-art" src={cardUrl(g.id)} alt="" width={1200} height={515} />
                            <span className="gs-game-body">
                                <img className="gs-game-icon" src={iconUrl(g.id)} alt="" width={72} height={72} />
                                <span className="gs-game-text">
                                    <span className="gs-game-name">{g.name}</span>
                                    <span className="gs-game-genre">{g.genre}</span>
                                </span>
                                <span className="gs-game-status">{g.status}</span>
                            </span>
                            <span className="gs-game-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span>
                        </label>
                    ))}
                </fieldset>
            </header>

            <section id="faq" className="gs-wrap gs-section" aria-labelledby="faq-title">
                <div className="gs-section-head">
                    <p className="gs-eyebrow">Answers</p>
                    <h2 id="faq-title" className="gs-title">Common questions</h2>
                </div>
                {shownFaqs.map(g => {
                    const Faq = faqs[g.id]
                    return (
                        <div key={g.id} className="gs-faq-group" data-game={g.id}>
                            <h3 className="gs-faq-game"><img src={iconUrl(g.id)} alt="" width={36} height={36} loading="lazy" />{g.name}</h3>
                            <div className="gs-faq"><Faq /></div>
                        </div>
                    )
                })}
            </section>

            <section id="contact" className="gs-wrap gs-section" aria-labelledby="contact-title">
                <div className="gs-section-head">
                    <p className="gs-eyebrow">Contact</p>
                    <h2 id="contact-title" className="gs-title">Message the team</h2>
                    <p className="gs-section-lede">A real person reads every message and replies by email.</p>
                </div>

                <div className="gs-contact">
                    <form id="support-form" onSubmit={onSubmit} encType="multipart/form-data" className="gs-panel gs-form">
                        {fallback && (
                            <div className="gs-alert" role="alert">
                                Online messages aren&apos;t switched on yet, sorry. Your message hasn&apos;t been sent, but you
                                can <a href={fallback}>email it to us instead</a>: we&apos;ve filled in your answers for you. Please
                                attach any screenshots or log files to the email.
                            </div>
                        )}

                        <div className="gs-field">
                            <p className="gs-label">Game</p>
                            {chosen ? (
                                <div className="gs-chosen gs-when-chosen" data-game={chosen.id}>
                                    <img src={iconUrl(chosen.id)} alt="" width={40} height={40} />
                                    <strong>{chosen.name}</strong>
                                    <a href="#picker" className="gs-chosen-change" onClick={toPicker}>Change</a>
                                </div>
                            ) : (
                                <div className="gs-chosen gs-when-none">
                                    <span>No game chosen yet.</span> <a href="#picker" className="gs-chosen-change" onClick={toPicker}>Choose a game</a>
                                </div>
                            )}
                        </div>

                        <fieldset className="gs-field">
                            <legend className="gs-label">What do you need help with?</legend>
                            <div className="gs-chips">
                                {topics.map(topic => (
                                    <label key={topic} className="gs-chip"><input type="radio" name="Topic" value={topic} required /><span>{topic}</span></label>
                                ))}
                            </div>
                        </fieldset>

                        <fieldset className="gs-field">
                            <legend className="gs-label">Where do you play?</legend>
                            <div className="gs-chips">
                                {allDevices.filter(d => !chosen || chosen.devices.includes(d)).map(d => (
                                    <label key={d} className="gs-chip">
                                        <input type="radio" name="Device" value={d} required checked={device === d} onChange={() => setDevice(d)} />
                                        <span>{d}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        <div className="gs-grid">
                            <div className="gs-field">
                                <label htmlFor="DisplayName" className="gs-label">Name <span className="gs-opt">(optional)</span></label>
                                <input id="DisplayName" name="DisplayName" maxLength={200} className="gs-input" autoComplete="name" />
                            </div>
                            <div className="gs-field">
                                <label htmlFor="Email" className="gs-label">Email for our reply</label>
                                <input id="Email" name="Email" type="email" required maxLength={254} className="gs-input" autoComplete="email" placeholder="you@example.com" />
                            </div>
                        </div>

                        <div className="gs-grid gs-grid-wide">
                            <div className="gs-field">
                                <label htmlFor="Subject" className="gs-label">Subject</label>
                                <input id="Subject" name="Subject" required maxLength={200} className="gs-input" placeholder="A short summary of the problem" />
                            </div>
                            <div className="gs-field">
                                <label htmlFor="AppVersion" className="gs-label">Game version <span className="gs-opt">(optional)</span></label>
                                <input id="AppVersion" name="AppVersion" maxLength={50} className="gs-input" placeholder="e.g. 1.0.0" />
                            </div>
                        </div>

                        <div className="gs-field">
                            <label htmlFor="Details" className="gs-label">Your message</label>
                            <textarea id="Details" name="Details" required maxLength={20000} rows={8} className="gs-input"
                                      placeholder="What happened, and what were you expecting? Tell us where in the game you were." />
                        </div>

                        <div className="gs-field">
                            <label htmlFor="Attachments" className="gs-label">Screenshots or log files <span className="gs-opt">(optional)</span></label>
                            <label className={`gs-drop ${dragOver ? 'is-over' : ''}`} htmlFor="Attachments"
                                   onDragEnter={e => { e.preventDefault(); setDragOver(true) }}
                                   onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                                   onDragLeave={() => setDragOver(false)}
                                   onDrop={e => {
                                       e.preventDefault()
                                       setDragOver(false)
                                       if (e.dataTransfer?.files.length && fileInput.current) {
                                           fileInput.current.files = e.dataTransfer.files
                                           showFiles()
                                       }
                                   }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21.4 11.1 12.2 20.3a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/></svg>
                                <span className="gs-drop-text"><strong>Choose files</strong> <span>{fileNames}</span></span>
                                <input ref={fileInput} type="file" name="Attachments" id="Attachments" multiple aria-describedby="attachment-limits" onChange={showFiles} />
                            </label>
                            <p id="attachment-limits" className="gs-hint">Up to five files, 5 MB each and 10 MB in total. If the form shows an error, please choose your files again.</p>
                        </div>

                        <div hidden aria-hidden="true"><label htmlFor="Website">Leave empty</label><input name="Website" id="Website" tabIndex={-1} autoComplete="off" /></div>

                        <div className="gs-form-foot">
                            <p className="gs-hint">We&apos;ll only use your email to reply to you.</p>
                            <button type="submit" disabled={sending} className={`gs-btn ${sending ? 'is-sending' : ''}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>
                                {sending ? 'Sending…' : 'Send message'}
                            </button>
                        </div>
                    </form>

                    <aside className="gs-aside">
                        <div className="gs-tip">
                            <h3>Help us help you</h3>
                            <ul>
                                <li>Where you were in the game when it happened</li>
                                <li>What you did just before it happened</li>
                                <li>A screenshot or screen recording</li>
                                <li>Your game version, from the title screen</li>
                            </ul>
                        </div>
                        <div className="gs-tip gs-tip-alt">
                            <h3>Purchase questions</h3>
                            <p>Try <strong>Restore Purchases</strong> in the game&apos;s settings first. Please don&apos;t send payment card details: we never need them, and the store you bought from handles all billing.</p>
                        </div>
                        {chosen && (
                            <figure className="gs-aside-art gs-when-chosen" data-game={chosen.id}>
                                <img src={cardUrl(chosen.id)} alt="" loading="lazy" width={1200} height={515} />
                                <figcaption>{chosen.name} · {chosen.genre}</figcaption>
                            </figure>
                        )}
                    </aside>
                </div>
            </section>
        </>
    )
}

function Received({ game: id, receipt }: { game: GameId, receipt: SupportReceipt }) {
    const game = games.find(x => x.id === id)!
    const mailSubject = encodeURIComponent(`${game.name} support ${receipt.id}`)
    return (
        <section className="gs-wrap gs-section gs-received">
            <div className="gs-panel gs-received-card" data-game={game.id}>
                <img src={iconUrl(game.id)} alt="" width={88} height={88} className="gs-received-icon" />
                <p className="gs-eyebrow">{game.name}</p>
                <h1 className="gs-title">Your message is on its way</h1>
                <p>Thank you for writing to us. A member of the team will reply to the email address you gave us.</p>

                <div className="gs-reference">
                    <p className="gs-eyebrow">Your reference</p>
                    <p className="gs-reference-id">{receipt.id}</p>
                </div>

                <p>If you need to add anything, email <a href={`mailto:${CONTACT}?subject=${mailSubject}`}>{CONTACT}</a> and include this reference.</p>

                <div className="gs-actions">
                    <a href={`/games/support?game=${game.id}`} className="gs-btn">Back to support</a>
                    <a href={`/games/support?game=${game.id}#faq`} className="gs-btn gs-btn-ghost">Browse answers</a>
                </div>
            </div>
        </section>
    )
}
