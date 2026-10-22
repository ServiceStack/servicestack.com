import {
    Ban, CheckCircle2, Code2, Download as DownloadIcon, Gift, Laptop, Monitor, ShieldCheck, Smartphone, Sparkles, Tablet,
} from "lucide-react"
import {
    ASSETS, alchemist, downloads, enemies, missions, powers, shotUrl, stats, towerLines,
} from "./data"
import { Embers } from "./effects"

function SectionHeading({ eyebrow, title, children, align = 'center' }: {
    eyebrow: string, title: React.ReactNode, children?: React.ReactNode, align?: 'center' | 'left'
}) {
    return (
        <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`} data-reveal>
            <p className={`ss-ornament ${align === 'left' ? '!justify-start before:!hidden' : ''} font-serif-caps text-sm font-bold uppercase tracking-[0.3em]`}>
                {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                <span className="ss-gold">{title}</span>
            </h2>
            {children && <p className="mt-6 text-lg leading-relaxed text-parchment/80 sm:text-xl">{children}</p>}
        </div>
    )
}

const downloadIcons = { windows: Monitor, macos: Laptop, linux: Code2 }

export function Download() {
    return (
        <section id="download" className="ss-grain relative overflow-hidden border-t border-gold/15 bg-ink-2 py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#f5c46a1f,transparent_60%)]" />
            <Embers className="absolute inset-0 h-full w-full opacity-60" density={40} />
            <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <p className="ss-pulse-glow mx-auto inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold" data-reveal>
                    <Gift className="h-3.5 w-3.5" /> Limited time only
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl" data-reveal>
                    <span className="ss-gold">Download the full game free</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-parchment/85 sm:text-xl" data-reveal>
                    While we wait for Spell &amp; Stone to arrive on Steam, the complete desktop game is free to download
                    for Windows, macOS and Linux. Grab it before the offer ends.
                </p>

                <ul className="mt-12 grid gap-4 sm:grid-cols-3" data-reveal>
                    {downloads.map(d => {
                        const Icon = downloadIcons[d.id]
                        return (
                            <li key={d.id}>
                                <a href={d.url} download
                                   className="ss-frame group flex h-full flex-col items-center px-6 py-7 transition-transform duration-300 hover:-translate-y-1">
                                    <Icon className="h-10 w-10 text-gold drop-shadow-[0_0_12px_#f5c46a66]" />
                                    <span className="mt-4 font-serif-caps text-2xl font-bold text-parchment">{d.name}</span>
                                    <span className="mt-1 text-sm text-parchment-dim">{d.note}</span>
                                    <span className="ss-btn-gold mt-6 w-full text-base">
                                        <DownloadIcon className="h-4 w-4" /> Download Free
                                    </span>
                                    <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-parchment-dim">{d.size}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <p className="mt-8 text-sm text-parchment-dim" data-reveal>
                    iPhone &amp; iPad coming soon to the App Store.
                </p>
            </div>
        </section>
    )
}

export function Stats() {
    return (
        <section aria-label="At a glance" className="relative border-y border-gold/15 bg-ink-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <dl className="mx-auto grid max-w-7xl grid-cols-3 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-6 lg:px-8">
                {stats.map((s, i) => (
                    <div key={s.label} className="text-center" data-reveal style={{ ['--reveal-delay' as any]: `${i * 70}ms` }}>
                        <dt className="sr-only">{s.label}</dt>
                        <dd className="font-display text-4xl font-black sm:text-5xl"><span className="ss-gold">{s.value}</span></dd>
                        <dd className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-parchment-dim sm:text-sm">{s.label}</dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}

export function Story() {
    return (
        <section id="story" className="ss-grain relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,#ff6a1f2e_0%,transparent_55%),radial-gradient(ellipse_at_10%_90%,#7fd8ff12_0%,transparent_50%)]" />
            <Embers className="absolute inset-0 h-full w-full" density={45} palette="ember" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <SectionHeading eyebrow="The Story" title="The Ash King has woken" align="left" />
                    <div className="mt-8 space-y-5 text-lg leading-relaxed text-parchment/85" data-reveal>
                        <p>
                            His legions are marching on the realm. Guided by <strong className="text-parchment">Aldric, Sage of the Spell Stone</strong>,
                            hold the roads across forests, marshes, mountain passes and burning wastes.
                        </p>
                        <p>
                            A story unfolds between battles, from the war horns of the Verdant Marches to the gates of the
                            Ashen Spire, ending in a showdown with <strong className="text-ember">Malgrim, the Ash King</strong> himself.
                        </p>
                    </div>
                    <blockquote className="mt-10 border-l-2 border-gold/50 pl-6 font-serif-caps text-xl italic text-gold/90" data-reveal>
                        &ldquo;Stone does not run. Neither do I.&rdquo;
                        <footer className="mt-2 font-body text-sm not-italic tracking-widest text-parchment-dim">Brannoc the Stonewarden</footer>
                    </blockquote>
                </div>
                <div className="relative mx-auto w-full max-w-md lg:max-w-lg" data-reveal>
                    <div className="ss-pulse-glow absolute inset-[6%] rounded-full bg-[radial-gradient(circle,#ff6a1f88_0%,#ff3d0033_40%,transparent_70%)] blur-2xl" />
                    <img src={`${ASSETS}/ashking.webp`} alt="Malgrim, the Ash King, holding a flame in his gauntlet" loading="lazy"
                         className="ss-float relative w-full drop-shadow-[0_30px_40px_#000]" />
                </div>
            </div>
        </section>
    )
}

const features = [
    {
        shot: '01-defend-the-realm', eyebrow: 'Strategy', title: 'Build. Upgrade. Hold the line.',
        text: 'Raise towers on every build spot, rally your soldiers to block the road and lead from the front with your hero. Every wave asks a new question.',
        points: ['Four tower lines, each with four tiers', 'Rally troops anywhere on the road', 'Meteor Storm and Call to Arms battle powers'],
    },
    {
        shot: '02-world-map', eyebrow: 'Campaign', title: 'A 24-map campaign across a living realm',
        text: 'March from the Verdant Marches through the Stoneveil Highlands and the Emberfall Wastes to the Ashen Spire, with a story told between battles.',
        points: ['Casual, Normal and Expert difficulties', 'Earn up to three stars on every map', 'The Sage Scrolls: story, bestiary, towers and powers'],
    },
    {
        shot: '04-lava-lakes', eyebrow: 'Enemies', title: 'Know your foe',
        text: '21 kinds of enemy, from goblins and harpies to wraiths, drakes and colossi, each with strengths and weaknesses to exploit. Fire feeds the Ember Imp; frost snuffs it out.',
        points: ['Flyers that soar over your walls', 'Armoured brutes that shrug off arrows', 'Healers, splitters and spellbreakers'],
    },
    {
        shot: '07-permanent-upgrades', eyebrow: 'Progression', title: 'Shape every tower and power',
        text: 'An upgrade tree that changes how every tower and power plays. Experiment freely: respec at any time at no cost. Then visit the Alchemist and spend the gems you earned in battle.',
        points: ['Respec the upgrade tree for free', 'Gems are earned only by playing', 'Cataclysm, Deep Freeze, Extra Hearts and more'],
    },
]

export function Features() {
    return (
        <section id="features" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="The Game" title="Painted by hand. Built for strategy.">
                    Every battlefield, tower and monster is hand-painted, rendered crisply from phone to desktop.
                </SectionHeading>

                <div className="mt-20 space-y-24 sm:space-y-32">
                    {features.map((f, i) => (
                        <article key={f.shot} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`} data-reveal>
                                <div className="group relative">
                                    <div className={`absolute -inset-6 rounded-[2rem] opacity-60 blur-3xl ${i % 2 ? 'bg-arcane/15' : 'bg-ember/15'}`} />
                                    <div className="ss-frame relative overflow-hidden p-1.5 sm:p-2">
                                        <img src={shotUrl(f.shot)} alt={f.title} loading="lazy"
                                             className="w-full rounded-[0.9rem] transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
                                    </div>
                                </div>
                            </div>
                            <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : ''}`} data-reveal style={{ ['--reveal-delay' as any]: '120ms' }}>
                                <p className="font-serif-caps text-sm font-bold uppercase tracking-[0.3em] text-gold">{f.eyebrow}</p>
                                <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-parchment sm:text-4xl">{f.title}</h3>
                                <p className="mt-5 text-lg leading-relaxed text-parchment/80">{f.text}</p>
                                <ul className="mt-6 space-y-3">
                                    {f.points.map(p => (
                                        <li key={p} className="flex items-start gap-3 text-parchment/90">
                                            <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold shadow-[0_0_10px_#f5c46a]" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                {i === 3 && (
                                    <div className="mt-7 flex gap-3">
                                        {alchemist.map(a => (
                                            <figure key={a.name} className="w-20 text-center">
                                                <img src={`${ASSETS}/icons/${a.img}.webp`} alt="" loading="lazy" className="mx-auto h-14 w-14 drop-shadow-[0_6px_10px_#000]" />
                                                <figcaption className="mt-1.5 text-xs font-semibold text-parchment-dim">{a.name}</figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Missions() {
    return (
        <section aria-labelledby="missions-title" className="relative overflow-hidden py-24 sm:py-32">
            <img src={shotUrl('06-challenge-missions')} alt="" loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="72 Missions" title={<span id="missions-title">Three ways to conquer every map</span>}>
                    Win the campaign, then return for Heroic and Onslaught challenges on all 24 maps.
                </SectionHeading>
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {missions.map((m, i) => (
                        <div key={m.name} className="ss-glass group rounded-3xl p-8 text-center transition-transform duration-500 hover:-translate-y-2"
                             data-reveal style={{ ['--reveal-delay' as any]: `${i * 120}ms` }}>
                            <img src={`${ASSETS}/icons/${m.img}.webp`} alt="" loading="lazy"
                                 className="mx-auto h-28 w-auto drop-shadow-[0_10px_20px_#000] transition-transform duration-500 group-hover:scale-110" />
                            <h3 className="mt-6 font-display text-2xl font-bold"><span className="ss-gold">{m.name}</span></h3>
                            <p className="mt-3 leading-relaxed text-parchment/80">{m.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Arsenal() {
    return (
        <section id="arsenal" className="ss-grain relative overflow-hidden bg-ink-2 py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#7fd8ff14,transparent_60%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="The Arsenal" title="Four tower lines. Endless tactics.">
                    Each line upgrades through four tiers, from the humble Archer Post to the mighty Siege Ballista.
                </SectionHeading>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {towerLines.map((t, i) => (
                        <article key={t.name} data-reveal style={{ ['--reveal-delay' as any]: `${i * 100}ms` }}
                                 className="group relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-ink-3 to-ink p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40">
                            <div className="absolute inset-x-0 top-0 h-48 opacity-50 transition-opacity duration-500 group-hover:opacity-90"
                                 style={{ background: `radial-gradient(ellipse at 50% 80%, ${t.color}55, transparent 70%)` }} />
                            <img src={`${ASSETS}/towers/${t.img}.webp`} alt={`${t.name} tower`} loading="lazy"
                                 className="relative mx-auto h-44 w-auto object-contain drop-shadow-[0_16px_20px_#000] transition-transform duration-500 group-hover:scale-110" />
                            <h3 className="relative mt-4 font-display text-2xl font-bold" style={{ color: t.color }}>{t.name}</h3>
                            <p className="relative mt-2 text-parchment/80">{t.text}</p>
                            <ul className="relative mt-4 flex flex-wrap gap-1.5">
                                {t.tiers.map(n => (
                                    <li key={n} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-parchment-dim">{n}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {powers.map((p, i) => (
                        <div key={p.name} className="ss-glass flex items-center gap-6 rounded-3xl p-6"
                             data-reveal style={{ ['--reveal-delay' as any]: `${i * 100}ms` }}>
                            <img src={`${ASSETS}/icons/${p.img}.webp`} alt="" loading="lazy" className="ss-float h-20 w-20 shrink-0 drop-shadow-[0_10px_16px_#000]"
                                 style={{ animationDelay: `${i * -2}s` }} />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Battle power</p>
                                <h3 className="mt-1 font-display text-2xl font-bold text-parchment">{p.name}</h3>
                                <p className="mt-1 text-parchment/80">{p.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Bestiary() {
    const row = [...enemies, ...enemies]
    return (
        <section aria-labelledby="bestiary-title" className="relative overflow-hidden py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="The Bestiary" title={<span id="bestiary-title">The horde is coming</span>}>
                    Goblin raiders, storm harpies, stone colossi and ashwing drakes. The Sage Scrolls record everything you face.
                </SectionHeading>
            </div>
            <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
                <ul className="ss-marquee flex w-max gap-6 py-6">
                    {row.map((e, i) => (
                        <li key={`${e.id}-${i}`} aria-hidden={i >= enemies.length}
                            className="group flex w-40 shrink-0 flex-col items-center rounded-3xl border border-gold/10 bg-ink-2/80 px-4 pb-4 pt-6 transition-colors hover:border-ember/50">
                            <div className="relative flex h-28 w-full items-end justify-center">
                                <span className="absolute bottom-0 h-4 w-20 rounded-[50%] bg-black/60 blur-sm" />
                                <img src={`${ASSETS}/enemies/${e.id}.webp`} alt={i < enemies.length ? e.name : ''} loading="lazy"
                                     className="relative max-h-28 w-auto object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
                            </div>
                            <p className="mt-4 text-center font-serif-caps text-sm font-bold text-parchment/90">{e.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

const platforms = [
    { name: 'iPhone & iPad', icon: Smartphone, extra: Tablet, note: 'Touch-first, designed for every screen' },
    { name: 'Windows', icon: Monitor, note: 'Windows 10 and 11, 64-bit' },
    { name: 'macOS', icon: Laptop, note: 'Universal: Apple Silicon and Intel' },
    { name: 'Linux', icon: Code2, note: '64-bit with Vulkan drivers' },
]

const promises = [
    { icon: Ban, text: 'No ads, no subscriptions' },
    { icon: ShieldCheck, text: 'Collects no personal data' },
    { icon: Sparkles, text: 'No loot boxes or random paid rewards' },
    { icon: CheckCircle2, text: 'Cartoon fantasy violence, no gore' },
]

export function Play() {
    return (
        <section id="play" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,#7fd8ff1a,transparent_55%),radial-gradient(ellipse_at_80%_60%,#f5c46a14,transparent_50%)]" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="relative mx-auto w-full max-w-lg" data-reveal>
                    <div className="absolute -inset-8 rounded-full bg-arcane/20 blur-3xl" />
                    <img src={`${ASSETS}/promo.webp`} alt="Spell & Stone key art: the wizard, the dwarf and the ranger before the Spell Stone castle" loading="lazy"
                         className="relative w-full rounded-[2rem] shadow-2xl ring-1 ring-gold/30" />
                </div>

                <div>
                    <SectionHeading eyebrow="Play Now" title="Begin your adventure" align="left" />
                    <p className="mt-6 text-lg leading-relaxed text-parchment/85" data-reveal>
                        Spell &amp; Stone is free to download on Windows, macOS and Linux for a limited time, ahead of its
                        Steam release. iPhone and iPad are coming soon.
                    </p>
                    <div className="mt-6" data-reveal>
                        <a href="#download" className="ss-btn-gold text-base">
                            <DownloadIcon className="h-4 w-4" /> Download Free
                        </a>
                    </div>

                    <div className="mt-6 rounded-2xl border border-arcane/30 bg-arcane/5 p-5" data-reveal>
                        <p className="font-serif-caps text-lg font-bold text-parchment">On iPhone &amp; iPad</p>
                        <p className="mt-1.5 leading-relaxed text-parchment/85">
                            Play the first four campaign maps free. Unlock the full adventure with a single, optional in-app
                            purchase: 24 maps, 72 missions across Campaign, Heroic and Onslaught, and eight heroes to earn
                            through progression. No subscription.
                        </p>
                    </div>

                    <ul className="mt-8 grid grid-cols-2 gap-3" data-reveal>
                        {platforms.map(p => (
                            <li key={p.name} className="ss-glass flex items-start gap-3 rounded-2xl p-4">
                                <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                                <span>
                                    <span className="block font-semibold text-parchment">{p.name}</span>
                                    <span className="block text-sm text-parchment-dim">{p.note}</span>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-8 grid gap-2.5 sm:grid-cols-2" data-reveal>
                        {promises.map(p => (
                            <li key={p.text} className="flex items-center gap-2.5 text-parchment/85">
                                <p.icon className="h-4 w-4 shrink-0 text-arcane" /> {p.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export function SiteFooter() {
    return (
        <footer className="relative border-t border-gold/15 bg-ink-2">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8"
                 style={{ paddingBottom: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))' }}>
                <div className="flex items-center gap-4">
                    <img src={`${ASSETS}/app-icon-180.webp`} alt="" className="h-14 w-14 rounded-2xl ring-1 ring-gold/30" />
                    <div>
                        <p className="font-display text-xl font-bold"><span className="ss-gold">Spell &amp; Stone</span></p>
                        <p className="text-sm text-parchment-dim">A hand-painted fantasy tower defense</p>
                    </div>
                </div>
                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-parchment/80">
                    <a href="/spell-stone#story" className="hover:text-gold">Story</a>
                    <a href="/spell-stone#heroes" className="hover:text-gold">Heroes</a>
                    <a href="/spell-stone#gallery" className="hover:text-gold">Gallery</a>
                    <a href="/spell-stone/privacy" className="hover:text-gold">Privacy</a>
                    <a href="/" className="hover:text-gold">More from ServiceStack</a>
                </nav>
                <p className="text-sm text-parchment-dim">&copy; {new Date().getFullYear()} ServiceStack Inc.</p>
            </div>
        </footer>
    )
}
