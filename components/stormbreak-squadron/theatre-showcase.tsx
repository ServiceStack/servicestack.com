'use client'

import { useState } from "react"
import { Castle, Crosshair, Sun } from "lucide-react"
import { ASSETS, theatres } from "./data"

export default function TheatreShowcase() {
    const [index, setIndex] = useState(0)
    const t = theatres[index]
    const first = index * 4 + 1

    const onKeyDown = (e: React.KeyboardEvent) => {
        const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0
        if (!step) return
        e.preventDefault()
        const next = (index + step + theatres.length) % theatres.length
        setIndex(next)
        document.getElementById(`theatre-tab-${theatres[next].id}`)?.focus()
    }

    return (
        <div className="mt-14">
            {/* Theatre tabs, like the in-game chapter select */}
            <div role="tablist" aria-label="Theatres of war" onKeyDown={onKeyDown}
                 className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6" data-reveal>
                {theatres.map((x, i) => {
                    const active = i === index
                    return (
                        <button key={x.id} id={`theatre-tab-${x.id}`} role="tab" type="button"
                                aria-selected={active} aria-controls="theatre-panel" tabIndex={active ? 0 : -1}
                                onClick={() => setIndex(i)}
                                className={`group relative overflow-hidden rounded border-2 text-left transition-all duration-300 ${active
                                    ? 'shadow-[0_0_28px_-6px_var(--c)]'
                                    : 'border-white/10 opacity-70 hover:-translate-y-0.5 hover:opacity-100'}`}
                                style={{ ['--c' as any]: x.color, borderColor: active ? x.color : undefined }}>
                            <img src={`${ASSETS}/theatres/${x.id}.webp`} alt="" loading="lazy"
                                 className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <span className="absolute inset-0 bg-gradient-to-t from-sb-ink via-sb-ink/40 to-transparent" />
                            <span className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5">
                                <span className="sb-label block text-[0.6rem] text-sb-mist sm:text-[0.68rem]">{x.chapter}</span>
                                <span className="block truncate text-sm font-semibold leading-tight sm:text-base" style={{ color: active ? x.color : undefined }}>{x.name}</span>
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Chapter briefing */}
            <div id="theatre-panel" role="tabpanel" aria-labelledby={`theatre-tab-${t.id}`} key={t.id}
                 className="sb-in mt-6 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
                <div className="sb-frame relative min-h-[18rem]">
                    <img src={`${ASSETS}/theatres/${t.id}.webp`} alt={`${t.name}: ${t.setting}`}
                         className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sb-ink via-sb-ink/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <p className="sb-label text-sm" style={{ color: t.color }}>
                            {t.chapter} · Stages {first}–{first + 3}
                        </p>
                        <h3 className="sb-display mt-1 text-4xl text-sb-sky sm:text-5xl">{t.name}</h3>
                        <p className="mt-3 max-w-lg text-sb-sky/80">{t.fortress.debrief}</p>
                    </div>
                </div>

                <ol className="space-y-3">
                    {t.stages.map((s, i) => (
                        <li key={s.id} className="flex gap-4 rounded border border-white/10 bg-sb-ink-2/80 p-3">
                            <img src={`${ASSETS}/stages/${s.id}.webp`} alt="" loading="lazy"
                                 className="aspect-[16/9] w-28 shrink-0 rounded-sm object-cover sm:w-32" />
                            <div className="min-w-0">
                                <p className="sb-label flex flex-wrap items-center gap-x-3 text-[0.7rem] text-sb-mist">
                                    <span style={{ color: t.color }}>Stage {first + i}</span>
                                    <span className="inline-flex items-center gap-1"><Sun className="h-3 w-3" /> {s.time}</span>
                                </p>
                                <p className="sb-display text-lg leading-tight text-sb-sky">{s.name}</p>
                                <p className="mt-0.5 text-sm leading-snug text-sb-sky/75">{s.briefing}</p>
                                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-sb-mist">
                                    <Crosshair className="h-3 w-3 text-sb-red" /> {s.target}
                                </p>
                            </div>
                        </li>
                    ))}
                    <li className="flex gap-4 rounded border p-3"
                        style={{ borderColor: `${t.color}66`, background: `linear-gradient(90deg, ${t.color}1f, transparent 85%)` }}>
                        <img src={`${ASSETS}/bosses/${t.id}.webp`} alt="" loading="lazy"
                             className="aspect-[16/9] w-28 shrink-0 rounded-sm object-cover sm:w-32" />
                        <div className="min-w-0">
                            <p className="sb-label flex items-center gap-1.5 text-[0.7rem]" style={{ color: t.color }}>
                                <Castle className="h-3 w-3" /> Stage {first + 3} · Fortress
                            </p>
                            <p className="sb-display text-lg leading-tight text-sb-sky">{t.fortress.name}</p>
                            <p className="mt-0.5 text-sm leading-snug text-sb-sky/75">{t.fortress.briefing}</p>
                            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-sb-mist">
                                <Crosshair className="h-3 w-3 text-sb-red" /> The {t.fortress.boss}
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}
