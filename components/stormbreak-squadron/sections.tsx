import { Award, Ban, Castle, CloudOff, Cog, Crosshair, Download as DownloadIcon, Eye, Gamepad2, Gauge, Gift, Hand, Keyboard, Laptop, Monitor, Smartphone, Tablet, Target, Terminal, Timer, WifiOff } from "lucide-react"
import { ASSETS, downloads, enemies, medals, miniBosses, pickups, prologue, shotUrl, stats, theatres } from "./data"
import { Tracers } from "./effects"

function SectionHeading({ eyebrow, title, children, align = 'center' }: {
    eyebrow: string, title: React.ReactNode, children?: React.ReactNode, align?: 'center' | 'left'
}) {
    return (
        <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`} data-reveal>
            <p className={`sb-eyebrow ${align === 'center' ? 'sb-eyebrow-center' : ''}`}>{eyebrow}</p>
            <h2 className="sb-display sb-sky-text mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
            {children && <p className="mt-6 text-lg leading-relaxed text-sb-sky/80 sm:text-xl">{children}</p>}
        </div>
    )
}

const downloadIcons = { windows: Monitor, macos: Laptop, linux: Terminal }

export function Download() {
    return (
        <section id="download" className="relative overflow-hidden border-t border-sb-blue/15 bg-sb-ink-2 py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#3aa8ff24,transparent_60%),radial-gradient(ellipse_at_50%_100%,#ffc23a14,transparent_55%)]" />
            <Tracers className="absolute inset-0 h-full w-full opacity-60" density={18} />
            <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <p className="sb-label mx-auto inline-flex items-center gap-2 rounded border border-sb-gold/50 bg-sb-gold/10 px-4 py-1.5 text-xs text-sb-gold" data-reveal>
                    <Gift className="h-3.5 w-3.5" /> Limited time only
                </p>
                <h2 className="sb-display sb-sky-text mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl" data-reveal>
                    Download the full game <span className="sb-gold">free</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sb-sky/85 sm:text-xl" data-reveal>
                    Ahead of its release on the App Store and Steam, the complete 24-stage campaign is free to download for
                    Windows, macOS and Linux. Grab it before the offer ends.
                </p>

                <ul className="mx-auto mt-12 grid max-w-md gap-4 lg:max-w-none lg:grid-cols-3" data-reveal>
                    {downloads.map(d => {
                        const Icon = downloadIcons[d.id]
                        return (
                            <li key={d.id}>
                                <a href={d.url} download className="sb-dl group" aria-label={`Download Stormbreak Squadron free for ${d.name} (${d.size})`}>
                                    <Icon className="h-9 w-9 shrink-0" strokeWidth={1.75} />
                                    <span className="min-w-0 flex-1">
                                        <span className="sb-label block text-[0.7rem] opacity-75">Download free for</span>
                                        <span className="sb-display block text-2xl leading-tight">{d.name}</span>
                                        <span className="sb-label mt-0.5 block text-xs opacity-75">{d.size}</span>
                                    </span>
                                    <DownloadIcon className="h-6 w-6 shrink-0 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
                                </a>
                                <p className="mt-2.5 text-sm text-sb-mist">{d.note}</p>
                            </li>
                        )
                    })}
                </ul>

                <p className="sb-label mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sb-mist" data-reveal>
                    <span className="inline-flex items-center gap-2"><Keyboard className="h-4 w-4 text-sb-gold" /> Keyboard &amp; mouse</span>
                    <span className="inline-flex items-center gap-2"><Gamepad2 className="h-4 w-4 text-sb-gold" /> Controller</span>
                    <span>iPhone &amp; iPad coming soon to the App Store · PC on Steam</span>
                </p>
            </div>
        </section>
    )
}

export function Stats() {
    return (
        <section aria-label="At a glance" className="relative border-y border-sb-blue/15 bg-sb-ink-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sb-gold/60 to-transparent" />
            <dl className="mx-auto grid max-w-7xl grid-cols-3 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-6 lg:px-8">
                {stats.map((s, i) => (
                    <div key={s.label} className="text-center" data-reveal style={{ ['--reveal-delay' as any]: `${i * 70}ms` }}>
                        <dt className="sr-only">{s.label}</dt>
                        <dd className={`sb-display text-4xl sm:text-5xl ${i % 2 ? 'sb-sky-text' : 'sb-gold'}`}>{s.value}</dd>
                        <dd className="sb-label mt-1 text-xs text-sb-mist sm:text-sm">{s.label}</dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}

export function Story() {
    return (
        <section id="story" className="sb-grid relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,#3aa8ff22_0%,transparent_55%),radial-gradient(ellipse_at_10%_90%,#ef4b3c14_0%,transparent_50%)]" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <SectionHeading eyebrow="The Story" title={<>The free islands<br />are falling</>} align="left" />
                    <div className="mt-8 space-y-5 text-lg leading-relaxed text-sb-sky/85" data-reveal>
                        <p>
                            The <strong className="text-sb-red">Ashen Dominion</strong>, an industrial junta, has built
                            Storm-class flying fortresses, and it&apos;s rolling up the free islands one archipelago at a time.
                        </p>
                        <p>
                            <strong className="text-sb-gold">Stormbreak Squadron</strong>, what&apos;s left of the carrier
                            <em> Resolute</em>&apos;s air wing, is all that stands in the way. Climb into the Kestrel and fly
                            Operation Stormbreak in order, arcade style: from the first patrol over the reef to the Dominion&apos;s
                            last command ship in orbit.
                        </p>
                        <p>
                            Every stage opens with a briefing and closes with a debrief, and ends with the Kestrel landing back
                            aboard the carrier.
                        </p>
                    </div>
                    <blockquote className="mt-10 border-l-2 border-sb-gold/70 pl-6 text-xl italic text-sb-sky/90" data-reveal>
                        &ldquo;{prologue}&rdquo;
                        <footer className="sb-label mt-2 text-sm not-italic text-sb-mist">Prologue · Operation Stormbreak</footer>
                    </blockquote>
                </div>
                <div className="relative mx-auto w-full max-w-md" data-reveal>
                    <div className="absolute -inset-[10%] rounded-full bg-[radial-gradient(circle,#ffc23a40_0%,#3aa8ff1a_45%,transparent_70%)] blur-2xl" />
                    <div className="sb-panel relative p-2.5">
                        <img src={`${ASSETS}/kestrel.webp`} alt="The Kestrel, a blue-grey propeller fighter with a gold nose and roundels, firing its wing cannons over the sea" loading="lazy"
                             className="aspect-square w-full rounded-sm object-cover" />
                        <div className="sb-label flex items-center justify-between px-2 pb-1 pt-3 text-xs">
                            <span className="text-sb-blue">Kestrel · Storm Cannon</span>
                            <span className="text-sb-gold">Power 1 of 8</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Pickups() {
    return (
        <ul className="mt-6 flex flex-wrap gap-2">
            {pickups.map(p => (
                <li key={p.key} className="inline-flex items-center gap-2.5 rounded border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3 text-sm">
                    <span className="sb-display grid h-7 w-7 place-items-center rounded text-sb-ink" style={{ background: p.color, boxShadow: `0 0 14px ${p.color}88` }}>{p.key}</span>
                    <span><strong className="text-sb-sky">{p.name}</strong> <span className="text-sb-mist">{p.text}</span></span>
                </li>
            ))}
        </ul>
    )
}

const features = [
    {
        shot: '02-reef', eyebrow: 'Built for touch', title: 'Twin-thumb flying',
        text: 'Your left thumb fires, rolls and bombs. Your right thumb drags anywhere to steer with a floating stick, so your fingers never cover the Kestrel.',
        points: ['Hold FIRE, or turn on auto-fire', 'Floating stick: drag anywhere on the right', 'Pause any time from the top of the screen'],
    },
    {
        shot: '06-space', eyebrow: 'Power-ups', title: 'Eight levels of firepower',
        text: 'Every stage starts the Storm Cannon back at power 1, so the power-ups along the way matter. Each level only adds: more barrels, then side spread guns, then heavier rounds. Bombers drop supplies when they go down.',
        points: ['Losing a life costs one power level', 'Bombs and score carry from stage to stage'],
        pickups: true,
    },
    {
        shot: '05-desert', eyebrow: 'Roll and bomb', title: 'Thread the bullet curtain',
        text: 'A barrel roll gives you a split second of immunity to bullets, so you can roll straight through a fan of fire. When the sky gets too full, drop a bomb and clear the screen.',
        points: ['Enemies stay and fight until they\'re shot down', 'New waves hold while the sky is full', 'A checkpoint before every boss'],
    },
    {
        shot: '04-arctic', eyebrow: 'Living skies', title: 'Weather, light and an orchestra',
        text: 'Every theatre has its own lighting, sea, clouds, weather, islands, enemy paint and soundtrack, and every stage its own time of day. Fly through snow over the fjords, sandstorms on the coast and thunderstorms at night.',
        points: ['A mission and a boss track for every theatre', 'Dawn, midday, dusk, overcast and night stages', '3D aircraft, ocean and destruction'],
    },
]

export function Features() {
    return (
        <section id="gameplay" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Gameplay" title="Classic arcade. Made for your thumbs.">
                    A vertical-scrolling shooter in the arcade tradition, with deterministic rules, readable bullets and
                    bosses you take apart piece by piece.
                </SectionHeading>

                <div className="mt-20 space-y-24 sm:space-y-28">
                    {features.map((f, i) => (
                        <article key={f.shot} className="grid items-center gap-10 md:grid-cols-12 lg:gap-16">
                            <div className={`md:col-span-5 lg:col-span-4 ${i % 2 ? 'md:order-2 md:col-start-8 lg:col-start-9' : 'lg:col-start-2'}`} data-reveal>
                                <div className="group relative mx-auto max-w-sm">
                                    <div className={`absolute -inset-8 opacity-50 blur-3xl ${i % 2 ? 'bg-sb-gold/20' : 'bg-sb-blue/20'}`} />
                                    <div className="sb-frame relative">
                                        <img src={shotUrl(f.shot)} alt={f.title} loading="lazy"
                                             className="aspect-[3/4] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
                                    </div>
                                </div>
                            </div>
                            <div className={`md:col-span-7 lg:col-span-6 ${i % 2 ? 'md:order-1 lg:col-start-2' : ''}`} data-reveal style={{ ['--reveal-delay' as any]: '120ms' }}>
                                <p className="sb-eyebrow">{f.eyebrow}</p>
                                <h3 className="sb-display mt-3 text-3xl leading-tight text-sb-sky sm:text-4xl">{f.title}</h3>
                                <p className="mt-5 text-lg leading-relaxed text-sb-sky/80">{f.text}</p>
                                {f.pickups && <Pickups />}
                                <ul className="mt-6 space-y-3">
                                    {f.points.map(p => (
                                        <li key={p} className="flex items-center gap-3 text-sb-sky/90">
                                            <span className="sb-roundel" aria-hidden="true" />
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

const phases = [
    { num: '1', name: 'Turrets', text: 'Silence the gun turrets on its wings and hull.' },
    { num: '2', name: 'Engines', text: 'Knock out the engines as it sways across the sky.' },
    { num: '3', name: 'Core', text: 'Pour fire into the core the moment it opens.' },
]

export function Fortresses() {
    return (
        <section id="fortresses" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#ef4b3c1a,transparent_60%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Fortress Bosses" title="Bring down the Storm-class">
                    Every fourth stage ends with one of the Dominion&apos;s flying fortresses: a three-phase boss built from
                    destructible parts, each tougher than the last.
                </SectionHeading>

                <ol className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3" data-reveal>
                    {phases.map(p => (
                        <li key={p.num} className="sb-panel flex items-start gap-4 p-5">
                            <span className="sb-display sb-gold text-4xl leading-none">{p.num}</span>
                            <span>
                                <span className="sb-display block text-lg text-sb-sky">{p.name}</span>
                                <span className="block text-sm text-sb-sky/75">{p.text}</span>
                            </span>
                        </li>
                    ))}
                </ol>

                <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {theatres.map((t, i) => (
                        <li key={t.id} data-reveal style={{ ['--c' as any]: `${t.color}99`, ['--reveal-delay' as any]: `${(i % 3) * 100}ms` }}
                            className="group relative overflow-hidden rounded-lg border border-white/10 bg-sb-ink-2 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--c)]">
                            <div className="relative aspect-[2/1] overflow-hidden">
                                <img src={`${ASSETS}/bosses/${t.id}.webp`} alt={`The ${t.fortress.boss}, the ${t.name} fortress`} loading="lazy"
                                     className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-sb-ink-2 via-transparent to-transparent" />
                                <span className="sb-label absolute left-3 top-3 rounded bg-sb-ink/80 px-2 py-0.5 text-[0.68rem]" style={{ color: t.color }}>
                                    Stage {(i + 1) * 4} · {t.fortress.name}
                                </span>
                            </div>
                            <div className="relative -mt-6 p-5 pt-0">
                                <h3 className="sb-display text-2xl text-sb-sky">The {t.fortress.boss}</h3>
                                <p className="mt-1.5 flex items-start gap-2 text-sm leading-relaxed text-sb-sky/75">
                                    <Crosshair className="mt-0.5 h-4 w-4 shrink-0 text-sb-red" /> {t.fortress.intel}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export function Enemies() {
    return (
        <section aria-labelledby="enemies-title" className="sb-grid relative overflow-hidden bg-sb-ink-2 py-24 sm:py-28">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Know Your Enemy" title={<span id="enemies-title">The Dominion air wing</span>}>
                    Darts dive from the very first stage. Strafers, flak bombers, veteran aces and heavy bombers join the fight
                    as the campaign goes on.
                </SectionHeading>

                <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {enemies.map((e, i) => (
                        <li key={e.name} data-reveal style={{ ['--reveal-delay' as any]: `${(i % 4) * 80}ms` }}
                            className="rounded-lg border border-white/10 bg-sb-ink/70 p-5">
                            <p className="sb-label text-[0.7rem] text-sb-red">{e.kind}</p>
                            <h3 className="sb-display mt-0.5 text-xl text-sb-sky">{e.name}</h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-sb-sky/75">{e.text}</p>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 grid gap-4 md:grid-cols-[auto_1fr_1fr] md:items-stretch" data-reveal>
                    <div className="flex items-center gap-3 px-1 md:max-w-[14rem]">
                        <Target className="h-9 w-9 shrink-0 text-sb-gold" />
                        <p className="text-sm text-sb-sky/80"><strong className="sb-display block text-base text-sb-gold">Stage leaders</strong> close stages 1 to 3 of every theatre</p>
                    </div>
                    {miniBosses.map(m => (
                        <div key={m.name} className="rounded-lg border border-sb-gold/30 bg-[linear-gradient(90deg,#ffc23a14,transparent_80%)] p-5">
                            <p className="sb-label text-[0.7rem] text-sb-gold">Mini-boss</p>
                            <h3 className="sb-display mt-0.5 text-xl text-sb-sky">{m.name}</h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-sb-sky/75">{m.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const difficulties = [
    { name: 'Assist', text: 'Extra armour, a wider roll window and slower enemy fire.' },
    { name: 'Standard', text: 'The game as designed.' },
    { name: 'Ace', text: 'Faster enemy fire, for a 1.5× score multiplier.' },
]

const assists = [
    { icon: Gauge, text: 'Game speed down to 60%' },
    { icon: Eye, text: 'High-contrast bullets' },
    { icon: Crosshair, text: 'Always show your hitbox' },
    { icon: Hand, text: 'Auto-fire: tap FIRE to toggle' },
    { icon: CloudOff, text: 'Reduced flashes and adjustable screen shake' },
    { icon: Cog, text: 'Separate music, effects and ambience volumes' },
]

export function Modes() {
    return (
        <section id="modes" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,#3aa8ff14,transparent_55%),radial-gradient(ellipse_at_85%_70%,#ffc23a10,transparent_50%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Fly It Your Way" title="Chase gold wings, or just enjoy the flight">
                    Replay any stage you&apos;ve reached in Score Attack for medals and personal bests, or drill the boss in
                    Finale Practice. Three difficulties and a set of assists let everyone see the war through.
                </SectionHeading>

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    <div className="sb-panel p-6 sm:p-7" data-reveal>
                        <h3 className="sb-display flex items-center gap-2.5 text-xl text-sb-sky"><Award className="h-5 w-5 text-sb-gold" /> Six medals a stage</h3>
                        <ul className="mt-5 space-y-3">
                            {medals.map((m, i) => (
                                <li key={m.name} className="flex items-start gap-3">
                                    <span className="mt-1 h-3.5 w-3.5 shrink-0 rotate-45 rounded-[2px]" aria-hidden="true"
                                          style={{ background: ['#c98a4b', '#c9d3e0', '#ffc23a', '#3fe0d0', '#ef4b3c', '#3aa8ff'][i] }} />
                                    <span className="text-sm leading-snug"><strong className="block text-sb-sky">{m.name}</strong><span className="text-sb-mist">{m.text}</span></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sb-panel p-6 sm:p-7" data-reveal style={{ ['--reveal-delay' as any]: '100ms' }}>
                        <h3 className="sb-display flex items-center gap-2.5 text-xl text-sb-sky"><Timer className="h-5 w-5 text-sb-gold" /> Three difficulties</h3>
                        <ul className="mt-5 space-y-4">
                            {difficulties.map(d => (
                                <li key={d.name} className="border-l-2 border-sb-blue/50 pl-4">
                                    <p className="sb-display text-sb-sky">{d.name}</p>
                                    <p className="text-sm text-sb-mist">{d.text}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-sm text-sb-sky/70">Assisted runs are recorded separately, so every personal best stays comparable.</p>
                    </div>

                    <div className="sb-panel p-6 sm:p-7" data-reveal style={{ ['--reveal-delay' as any]: '200ms' }}>
                        <h3 className="sb-display flex items-center gap-2.5 text-xl text-sb-sky"><Eye className="h-5 w-5 text-sb-gold" /> Assists &amp; comfort</h3>
                        <ul className="mt-5 space-y-3">
                            {assists.map(a => (
                                <li key={a.text} className="flex items-center gap-3 text-sm text-sb-sky/85">
                                    <a.icon className="h-4 w-4 shrink-0 text-sb-blue" /> {a.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const promises = [
    { icon: Ban, text: 'No ads and no in-app purchases' },
    { icon: WifiOff, text: 'Plays fully offline' },
    { icon: Eye, text: 'No accounts and no data collected' },
    { icon: Castle, text: 'The whole 24-stage campaign in one purchase' },
]

const platforms = [
    { name: 'iPhone', icon: Smartphone, note: 'App Store · portrait, twin-thumb touch controls' },
    { name: 'iPad', icon: Tablet, note: 'App Store · the full 3:4 playfield, pixel for pixel' },
    { name: 'Steam', icon: Gamepad2, note: 'Windows PC · keyboard, mouse or controller' },
    { name: 'Free today', icon: Gift, note: 'Windows, macOS and Linux, for a limited time' },
]

const bezel = 'border border-white/15 bg-[#05080e] shadow-[0_30px_60px_-20px_#000,0_0_40px_-12px_#3aa8ff66]'

export function Platforms() {
    return (
        <section id="play" className="relative overflow-hidden border-t border-sb-blue/15 bg-sb-ink-2 py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#3aa8ff1f,transparent_60%),radial-gradient(ellipse_at_50%_100%,#ffc23a12,transparent_55%)]" />
            <Tracers className="absolute inset-0 h-full w-full opacity-70" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
                <div>
                    <SectionHeading eyebrow="Take Off" title="Scramble the squadron" align="left">
                        Stormbreak Squadron is coming to iPhone and iPad on the App Store, and to PC on Steam. One price for the
                        whole war, with no ads, no in-app purchases and nothing to sign up for. Play it free on Windows, macOS and
                        Linux today.
                    </SectionHeading>
                    <div className="mt-9" data-reveal>
                        <a href="#download" className="sb-btn sb-glint"><DownloadIcon className="h-4 w-4" /> Download Free</a>
                    </div>
                    <ul className="mt-10 grid gap-3 sm:grid-cols-2" data-reveal>
                        {platforms.map(p => (
                            <li key={p.name} className="flex items-start gap-3 rounded-lg border border-sb-blue/20 bg-white/[0.03] p-4">
                                <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-sb-gold" />
                                <span>
                                    <span className="block font-semibold text-sb-sky">{p.name}</span>
                                    <span className="block text-sm text-sb-mist">{p.note}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <ul className="mt-8 grid gap-2.5 sm:grid-cols-2" data-reveal>
                        {promises.map(p => (
                            <li key={p.text} className="flex items-center gap-2.5 text-sb-sky/85">
                                <p.icon className="h-4 w-4 shrink-0 text-sb-gold" /> {p.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* The same build on both screens: an iPad with an iPhone propped in front of it */}
                <div className="relative mx-auto w-full max-w-lg pb-[6%] pr-[14%]" data-reveal>
                    <div className="absolute inset-[8%] bg-sb-blue/20 blur-3xl" />
                    <figure className={`${bezel} relative rounded-[1.6rem] p-[2.6%]`}>
                        <img src={shotUrl('13-dreadskull')} loading="lazy" className="aspect-[3/4] w-full rounded-[1rem] object-cover"
                             alt="Stormbreak Squadron on iPad: the Kestrel at full power takes on the Dreadskull in orbit" />
                    </figure>
                    <figure className={`${bezel} absolute bottom-0 right-0 w-[34%] rounded-[1.4rem] p-[1.4%]`}>
                        <img src={`${ASSETS}/devices/iphone-boss.webp`} loading="lazy" className="aspect-[1206/2622] w-full rounded-[1.1rem] object-cover"
                             alt="Stormbreak Squadron on iPhone: fighting the Tempest in a storm" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export function SiteFooter() {
    return (
        <footer className="relative border-t border-sb-blue/15 bg-sb-ink">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8"
                 style={{ paddingBottom: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))' }}>
                <div className="flex items-center gap-4">
                    <img src={`${ASSETS}/app-icon-180.webp`} alt="" className="h-14 w-14 rounded-xl" />
                    <div>
                        <p className="sb-display sb-gold text-xl">Stormbreak Squadron</p>
                        <p className="sb-label text-sm text-sb-mist">Arcade aerial shoot &apos;em up</p>
                    </div>
                </div>
                <nav aria-label="Footer" className="sb-label flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-sb-sky/75">
                    <a href="/games/stormbreak-squadron#campaign" className="hover:text-sb-gold">Campaign</a>
                    <a href="/games/stormbreak-squadron#gallery" className="hover:text-sb-gold">Gallery</a>
                    <a href="/games/support?game=stormbreak-squadron" className="hover:text-sb-gold">Support</a>
                    <a href="/games/privacy" className="hover:text-sb-gold">Privacy</a>
                    <a href="/" className="hover:text-sb-gold">More from ServiceStack</a>
                </nav>
                <p className="sb-label text-sm text-sb-mist">&copy; {new Date().getFullYear()} ServiceStack Inc.</p>
            </div>
        </footer>
    )
}
