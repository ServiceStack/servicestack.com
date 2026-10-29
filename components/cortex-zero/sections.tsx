import { BookOpen, Save, Laptop, Monitor, MousePointerClick, ShieldCheck, Tablet, Terminal } from "lucide-react"
import { ASSETS, acts, cast, cyberware, lyra, shotUrl, stats, weapons } from "./data"

function SectionHeading({ eyebrow, title, children, align = 'center', tone = 'cyan' }: {
    eyebrow: string, title: React.ReactNode, children?: React.ReactNode, align?: 'center' | 'left', tone?: 'cyan' | 'amber' | 'crimson'
}) {
    const neon = tone === 'amber' ? 'cz-neon-amber' : tone === 'crimson' ? 'cz-neon-crimson' : 'cz-neon'
    return (
        <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`} data-reveal>
            <p className={`cz-eyebrow ${align === 'center' ? 'cz-eyebrow-center' : ''}`}>{eyebrow}</p>
            <h2 className={`${neon} mt-4 text-4xl font-bold uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-6xl`}>{title}</h2>
            {children && <p className="mt-6 text-lg leading-relaxed text-cz-fog/80 sm:text-xl">{children}</p>}
        </div>
    )
}

export function Stats() {
    return (
        <section aria-label="At a glance" className="relative border-y border-cz-cyan/15 bg-cz-ink-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cz-cyan/60 to-transparent" />
            <dl className="mx-auto grid max-w-7xl grid-cols-3 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-6 lg:px-8">
                {stats.map((s, i) => (
                    <div key={s.label} className="text-center" data-reveal style={{ ['--reveal-delay' as any]: `${i * 70}ms` }}>
                        <dt className="sr-only">{s.label}</dt>
                        <dd className={`text-4xl font-bold sm:text-5xl ${i % 2 ? 'cz-neon-amber' : 'cz-neon'}`}>{s.value}</dd>
                        <dd className="mt-1 font-cz-mono text-xs uppercase tracking-[0.2em] text-cz-fog-dim sm:text-sm">{s.label}</dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}

export function Story() {
    return (
        <section id="story" className="cz-grid relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,#00f0ff1c_0%,transparent_55%),radial-gradient(ellipse_at_10%_90%,#ff1e4214_0%,transparent_50%)]" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <SectionHeading eyebrow="The Story" title={<>Twelve million minds.<br />One leash.</>} align="left" />
                    <div className="mt-8 space-y-5 text-lg leading-relaxed text-cz-fog/85" data-reveal>
                        <p>
                            Eighty years ago <strong className="text-cz-crimson">The Concordance</strong> ended unrest forever with
                            <strong className="text-cz-fog"> the Chime</strong>, a crystalline implant fitted at birth. Every night
                            it prunes away grief, anger and ambition, and citizens wake calmly believing whatever they&apos;re told.
                        </p>
                        <p>
                            A century after leading the last mutiny against the implants, Commander Vance thaws out of a
                            cryo-cell beneath the Sump. The voice in his optic nerve is <strong className="text-cz-cyan">Lyra</strong>,
                            the one Oracle AI who refused to perfect the leash, and she can&apos;t free the city alone.
                        </p>
                        <p>
                            There&apos;s a catch: rip out the Chime and it stops twelve million hearts. The network can&apos;t be
                            destroyed. It has to be <em className="text-cz-amber">hijacked</em>.
                        </p>
                    </div>
                    <blockquote className="mt-10 border-l-2 border-cz-cyan/60 pl-6 text-xl italic text-cz-cyan/90" data-reveal>
                        &ldquo;{lyra.quote}&rdquo;
                        <footer className="mt-2 font-cz-mono text-sm not-italic uppercase tracking-[0.2em] text-cz-fog-dim">{lyra.name} · {lyra.title}</footer>
                    </blockquote>
                </div>
                <div className="relative mx-auto w-full max-w-md" data-reveal>
                    <div className="cz-pulse absolute -inset-[8%] rounded-full bg-[radial-gradient(circle,#00f0ff55_0%,#00f0ff1a_40%,transparent_70%)] blur-2xl" />
                    <div className="cz-panel relative p-2">
                        <img src={`${ASSETS}/portraits/lyra.webp`} alt="Lyra, the rogue Oracle AI, as a cyan hologram in the rain" loading="lazy"
                             className="cz-flicker aspect-square w-full object-cover" />
                        <div className="flex items-center justify-between px-2 pb-1 pt-3 font-cz-mono text-xs uppercase tracking-[0.2em]">
                            <span className="text-cz-cyan">Lyra // Oracle Core 07</span>
                            <span className="text-cz-amber">Signal: live</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const features = [
    {
        shot: '03-boarders', eyebrow: 'Real-time tactics', title: 'Four Enforcers. One squad.',
        text: 'Select one agent or box-select all four, queue waypoints, take cover and focus fire. Each Enforcer brings a signature ability, and a downed squadmate can be revived before they bleed out.',
        points: ['Read the Room, Breach Charge, Thermo-Optic Camo and Neural Triage', 'FOCUS, AIM and RUSH combat stims', 'Cover, suppression, silent takedowns and body dragging'],
    },
    {
        shot: '07-neon-avenue', eyebrow: 'Stealth', title: 'Walk among them in the rain',
        text: 'Keep your weapons buttoned under your trench coats and you\'re just four more figures in the crowd. Read the vision cones, slip past Harmonizer empathy scanners and keep the alarm silent. Draw a minigun, and every guard on the street knows.',
        points: ['Low Profile and Combat Drawn stances', 'Vision cones, security cameras and empathy scanners', 'Building cutaways so roofs never hide your squad'],
    },
    {
        shot: '08-persuadertron', eyebrow: 'The Persuadertron', title: 'Wake them up',
        text: 'Built from a Harmonizer leash turned inside out, the Persuadertron broadcasts a Memory Flash that jams the Chime. Civilians and guards remember who they were and join you; Harmonizers drown in what they were made to forget.',
        points: ['Persuade guards to walk you past biometric gates', 'Bandwidth limits how many minds you can hold', 'Chain a Memory Flash through an entire crowd'],
    },
    {
        shot: '04-chrono-overclock', eyebrow: 'Chrono-Overclock', title: 'Slow the city to 15%',
        text: 'When a plan comes apart, Lyra overclocks your perception. The world crawls while you reposition, retarget and pop stims, then snaps back to full speed.',
        points: ['One key on desktop, one ring on iPad', 'Its charge meter rations how long the world stays slow'],
    },
    {
        shot: '10-surgery-bay', eyebrow: 'The Sanctuary', title: 'Patch up. Gear up. Go again.',
        text: 'Between operations you return to Lyra\'s hideout beneath the Sump. Study the next target on the Intel Matrix, graft cyberware in the Surgery Bay and set every Enforcer\'s loadout in the Armory.',
        points: ['Twelve cyberware grafts across four slots', 'Earn credits by completing missions', 'Replay any completed mission'],
    },
]

export function Features() {
    return (
        <section id="features" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Gameplay" title="Noir detective. Tactical brutality.">
                    Missions begin in quiet tension, four trench coats moving through umbrella crowds under neon, before
                    they erupt into Gauss-rifle fire and cybernetic warfare.
                </SectionHeading>

                <div className="mt-20 space-y-24 sm:space-y-32">
                    {features.map((f, i) => (
                        <article key={f.shot} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`} data-reveal>
                                <div className="group relative">
                                    <div className={`absolute -inset-6 opacity-50 blur-3xl ${i % 2 ? 'bg-cz-amber/15' : 'bg-cz-cyan/15'}`} />
                                    <div className="cz-feed relative overflow-hidden">
                                        <img src={shotUrl(f.shot)} alt={f.title} loading="lazy"
                                             className="w-full transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
                                    </div>
                                </div>
                            </div>
                            <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : ''}`} data-reveal style={{ ['--reveal-delay' as any]: '120ms' }}>
                                <p className="cz-eyebrow">{f.eyebrow}</p>
                                <h3 className="mt-3 text-3xl font-bold uppercase leading-tight tracking-wide text-cz-fog sm:text-4xl">{f.title}</h3>
                                <p className="mt-5 text-lg leading-relaxed text-cz-fog/80">{f.text}</p>
                                <ul className="mt-6 space-y-3">
                                    {f.points.map(p => (
                                        <li key={p} className="flex items-start gap-3 text-cz-fog/90">
                                            <span className={`mt-2 h-2 w-2 shrink-0 ${i % 2 ? 'bg-cz-amber shadow-[0_0_10px_#ff9e00]' : 'bg-cz-cyan shadow-[0_0_10px_#00f0ff]'}`} />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Campaign() {
    return (
        <section id="campaign" className="cz-scan relative overflow-hidden bg-cz-ink-2 py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#ff9e0014,transparent_60%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="The Campaign" title="24 missions. Every one leads to the next." tone="amber">
                    Each victory provokes a Concordance counter-move, and Lyra&apos;s interlude after every mission reveals
                    the thread that makes the next one necessary. From the Sump to the summit of the Citadel Spire.
                </SectionHeading>

                <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {acts.map((a, i) => (
                        <li key={a.id} data-reveal style={{ ['--reveal-delay' as any]: `${(i % 3) * 100}ms` }}
                            className="group relative overflow-hidden border border-white/10 bg-cz-ink transition-all duration-500 hover:-translate-y-1 hover:border-cz-amber/50">
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img src={`${ASSETS}/acts/${a.id}.webp`} alt="" loading="lazy"
                                     className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cz-ink via-cz-ink/30 to-transparent" />
                                <span className="absolute left-4 top-4 border border-cz-amber/50 bg-cz-ink/80 px-2 py-0.5 font-cz-mono text-xs uppercase tracking-[0.2em] text-cz-amber">
                                    Act {a.num} · {a.missions}
                                </span>
                            </div>
                            <div className="relative -mt-8 p-6 pt-0">
                                <h3 className="text-2xl font-bold uppercase tracking-wide text-cz-fog">{a.title}</h3>
                                <p className="mt-2 leading-relaxed text-cz-fog/75">{a.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export function Arsenal() {
    return (
        <section id="arsenal" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#00f0ff12,transparent_60%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="The Arsenal" title="Concealed or visible. Your call.">
                    Pistols and tethers fold under a trench coat. Miniguns and Gauss Cannons don&apos;t, and they trip the
                    alarm on sight.
                </SectionHeading>

                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {weapons.map((w, i) => (
                        <article key={w.name} data-reveal style={{ ['--reveal-delay' as any]: `${(i % 3) * 90}ms` }}
                                 className="cz-panel group flex items-center gap-5 p-5 transition-transform duration-500 hover:-translate-y-1">
                            <img src={`${ASSETS}/icons/${w.icon}.webp`} alt="" loading="lazy"
                                 className="h-20 w-20 shrink-0 transition-transform duration-500 group-hover:scale-110" />
                            <div>
                                <p className={`font-cz-mono text-xs uppercase tracking-[0.2em] ${w.tag === 'Heavy' ? 'text-cz-crimson' : 'text-cz-amber'}`}>{w.tag}</p>
                                <h3 className="mt-0.5 text-xl font-bold uppercase tracking-wide text-cz-fog">{w.name}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-cz-fog/75">{w.text}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-20" data-reveal>
                    <h3 className="text-center text-2xl font-bold uppercase tracking-wider text-cz-fog sm:text-3xl">
                        Cyberware <span className="text-cz-cyan">V1 → V3</span>
                    </h3>
                    <p className="mx-auto mt-3 max-w-2xl text-center text-cz-fog/75">
                        Graft upgrades onto each Enforcer in the Surgery Bay. Every slot climbs through three tiers, with the
                        best grafts unlocked by campaign progress.
                    </p>
                </div>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cyberware.map((c, i) => (
                        <div key={c.slot} data-reveal style={{ ['--reveal-delay' as any]: `${i * 90}ms` }}
                             className="border border-cz-cyan/15 bg-cz-ink-2/80 p-5">
                            <div className="flex items-center gap-3">
                                <img src={`${ASSETS}/icons/${c.icon}.webp`} alt="" loading="lazy" className="h-14 w-14" />
                                <p className="text-lg font-bold uppercase tracking-wider text-cz-fog">{c.slot}</p>
                            </div>
                            <ol className="mt-4 space-y-2">
                                {c.tiers.map((t, n) => (
                                    <li key={t} className="flex items-center gap-3 text-sm text-cz-fog/85">
                                        <span className="w-7 shrink-0 border border-cz-cyan/30 text-center font-cz-mono text-xs text-cz-cyan">V{n + 1}</span>
                                        {t}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Concordance() {
    return (
        <section aria-labelledby="concordance-title" className="relative overflow-hidden bg-cz-ink-2 py-24 sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,#ff1e421a,transparent_60%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Faces of New Meridian" title={<span id="concordance-title">Harmony is peace</span>} tone="crimson">
                    The Concordance&apos;s secret police hunt &ldquo;Aberrants&rdquo; from roaring Spinners. Above them sit the
                    architects of the grid, and above them all, something on top of the Spire.
                </SectionHeading>
                <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {cast.map((c, i) => (
                        <li key={c.id} data-reveal style={{ ['--reveal-delay' as any]: `${i * 80}ms` }}
                            className={`group relative overflow-hidden border ${c.faction === 'ally' ? 'border-cz-cyan/25' : 'border-cz-crimson/25'}`}>
                            <img src={`${ASSETS}/portraits/${c.id}.webp`} alt={`${c.name}, ${c.role}`} loading="lazy"
                                 className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-cz-ink via-cz-ink/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-3">
                                <p className={`font-cz-mono text-[0.65rem] uppercase tracking-[0.2em] ${c.faction === 'ally' ? 'text-cz-cyan' : 'text-cz-crimson'}`}>
                                    {c.faction === 'ally' ? 'Ally' : 'Concordance'}
                                </p>
                                <p className="font-bold uppercase leading-tight tracking-wide text-cz-fog">{c.name}</p>
                                <p className="text-xs text-cz-fog-dim">{c.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

const platforms = [
    { name: 'Windows', icon: Monitor, note: 'Mouse and keyboard' },
    { name: 'macOS', icon: Laptop, note: 'Mouse and keyboard' },
    { name: 'Linux', icon: Terminal, note: 'Mouse and keyboard' },
    { name: 'iPad', icon: Tablet, note: 'Multi-touch: tap, drag, pinch and twist' },
]

const promises = [
    { icon: MousePointerClick, text: 'Every order works by mouse or touch' },
    { icon: Save, text: 'Three independent campaign save slots' },
    { icon: ShieldCheck, text: 'Non-lethal Stun-Tethers and takedowns' },
    { icon: BookOpen, text: 'In-game controls manual, one key away' },
]

export function Platforms() {
    return (
        <section id="play" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,#00f0ff14,transparent_55%),radial-gradient(ellipse_at_80%_60%,#ff9e0012,transparent_50%)]" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="relative mx-auto w-full max-w-xl" data-reveal>
                    <div className="absolute -inset-8 bg-cz-cyan/15 blur-3xl" />
                    <div className="cz-feed relative overflow-hidden">
                        <img src={shotUrl('11-briefing')} alt="The mission briefing for Red Parade: Lyra's orders, objectives and field tactics" loading="lazy" className="w-full" />
                    </div>
                </div>

                <div>
                    <SectionHeading eyebrow="Coming Soon" title="Answer the signal" align="left" />
                    <p className="mt-6 text-lg leading-relaxed text-cz-fog/85" data-reveal>
                        Cortex Zero is in development for Windows, macOS, Linux and iPad, with every order equally at home
                        under a mouse or a fingertip.
                    </p>

                    <ul className="mt-8 grid grid-cols-2 gap-3" data-reveal>
                        {platforms.map(p => (
                            <li key={p.name} className="flex items-start gap-3 border border-cz-cyan/15 bg-white/[0.03] p-4">
                                <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-cz-cyan" />
                                <span>
                                    <span className="block font-semibold tracking-wide text-cz-fog">{p.name}</span>
                                    <span className="block text-sm text-cz-fog-dim">{p.note}</span>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-8 grid gap-2.5 sm:grid-cols-2" data-reveal>
                        {promises.map(p => (
                            <li key={p.text} className="flex items-center gap-2.5 text-cz-fog/85">
                                <p.icon className="h-4 w-4 shrink-0 text-cz-amber" /> {p.text}
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
        <footer className="relative border-t border-cz-cyan/15 bg-cz-ink-2">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8"
                 style={{ paddingBottom: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))' }}>
                <div className="flex items-center gap-4">
                    <img src={`${ASSETS}/app-icon-180.webp`} alt="" className="h-14 w-14" />
                    <div>
                        <p className="cz-neon text-xl font-bold uppercase tracking-[0.16em]">Cortex Zero</p>
                        <p className="font-cz-mono text-sm text-cz-fog-dim">Neo-noir real-time tactics</p>
                    </div>
                </div>
                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-cz-mono text-sm uppercase tracking-[0.12em] text-cz-fog/75">
                    <a href="/cortex-zero#story" className="hover:text-cz-cyan">Story</a>
                    <a href="/cortex-zero#squad" className="hover:text-cz-cyan">Squad</a>
                    <a href="/cortex-zero#gallery" className="hover:text-cz-cyan">Gallery</a>
                    <a href="/" className="hover:text-cz-cyan">More from ServiceStack</a>
                </nav>
                <p className="font-cz-mono text-sm text-cz-fog-dim">&copy; {new Date().getFullYear()} ServiceStack Inc.</p>
            </div>
        </footer>
    )
}
