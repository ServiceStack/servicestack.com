'use client'

import { useState } from "react"
import { Feather, Sword, Zap } from "lucide-react"
import { ASSETS, heroes } from "./data"

export default function HeroesShowcase() {
    const [index, setIndex] = useState(0)
    const hero = heroes[index]

    const onKeyDown = (e: React.KeyboardEvent) => {
        const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0
        if (!step) return
        e.preventDefault()
        const next = (index + step + heroes.length) % heroes.length
        setIndex(next)
        document.getElementById(`hero-tab-${heroes[next].id}`)?.focus()
    }

    return (
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Stage */}
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]" data-reveal>
                <div className="ss-pulse-glow absolute inset-[8%] rounded-full blur-3xl transition-colors duration-700"
                     style={{ background: `radial-gradient(circle, ${hero.color}aa 0%, ${hero.color}33 45%, transparent 70%)` }} />
                <div className="absolute inset-[10%] rounded-full border border-gold/15" />
                <div className="absolute inset-[18%] rounded-full border border-dashed border-gold/10" />
                {/* Stone dais */}
                <div className="absolute inset-x-[18%] bottom-[12%] h-[12%] rounded-[50%] bg-[radial-gradient(ellipse,#00000099,transparent_70%)]" />
                <img key={hero.id} src={`${ASSETS}/heroes/${hero.id}.webp`} alt={`${hero.name} ${hero.title}`}
                     className="ss-hero-in absolute inset-[14%] m-auto h-[72%] w-[72%] object-contain drop-shadow-[0_20px_30px_#000c]" />
            </div>

            {/* Details */}
            <div>
                <div role="tablist" aria-label="Heroes" onKeyDown={onKeyDown}
                     className="mb-8 grid grid-cols-4 gap-3 sm:grid-cols-8 lg:grid-cols-4 xl:grid-cols-8">
                    {heroes.map((h, i) => {
                        const active = i === index
                        return (
                            <button key={h.id} id={`hero-tab-${h.id}`} role="tab" type="button"
                                    aria-selected={active} aria-controls="hero-panel" tabIndex={active ? 0 : -1}
                                    onClick={() => setIndex(i)} title={`${h.name} ${h.title}`}
                                    className={`group relative aspect-square rounded-2xl border transition-all duration-300 ${active
                                        ? 'scale-105 border-gold bg-ink-3 shadow-[0_0_24px_-4px_var(--c)]'
                                        : 'border-gold/15 bg-ink-2 hover:-translate-y-1 hover:border-gold/50'}`}
                                    style={{ ['--c' as any]: h.color }}>
                                <span className="absolute inset-0 rounded-2xl opacity-40" style={{ background: `radial-gradient(circle at 50% 70%, ${h.color}66, transparent 70%)` }} />
                                <img src={`${ASSETS}/heroes/${h.id}.webp`} alt="" className={`relative h-full w-full object-contain p-1.5 transition-all ${active ? '' : 'grayscale-[40%] group-hover:grayscale-0'}`} />
                                <span className="sr-only">{h.name}</span>
                            </button>
                        )
                    })}
                </div>

                <div id="hero-panel" role="tabpanel" aria-live="polite" key={hero.id} className="ss-hero-in">
                    <p className="text-sm font-bold uppercase tracking-[0.25em]" style={{ color: hero.color }}>
                        Hero {index + 1} of {heroes.length}
                    </p>
                    <h3 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
                        <span className="ss-gold">{hero.name}</span>
                    </h3>
                    <p className="mt-1 font-serif-caps text-xl text-parchment-dim">{hero.title}</p>
                    <p className="mt-5 text-lg leading-relaxed text-parchment/90">{hero.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
                        <li className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-white/5 px-3 py-1">
                            <Sword className="h-3.5 w-3.5 text-gold" /> {hero.role}
                        </li>
                        <li className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-white/5 px-3 py-1">
                            <Feather className="h-3.5 w-3.5 text-gold" /> {hero.hitsAir ? 'Hits flyers' : 'Ground only'}
                        </li>
                    </ul>

                    <div className="mt-6 rounded-2xl border p-5" style={{ borderColor: `${hero.color}55`, background: `linear-gradient(135deg, ${hero.color}22, transparent 70%)` }}>
                        <p className="flex items-center gap-2 font-serif-caps text-lg font-bold text-parchment">
                            <Zap className="h-5 w-5" style={{ color: hero.color }} /> {hero.special}
                        </p>
                        <p className="mt-1.5 leading-relaxed text-parchment/80">{hero.specialText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
