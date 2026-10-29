'use client'

import { useState } from "react"
import { Crosshair, Snowflake, Zap } from "lucide-react"
import { ASSETS, squad } from "./data"

export default function SquadShowcase() {
    const [index, setIndex] = useState(0)
    const agent = squad[index]

    const onKeyDown = (e: React.KeyboardEvent) => {
        const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0
        if (!step) return
        e.preventDefault()
        const next = (index + step + squad.length) % squad.length
        setIndex(next)
        document.getElementById(`agent-tab-${squad[next].id}`)?.focus()
    }

    return (
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            {/* Squad cards, like the in-game HUD */}
            <div role="tablist" aria-label="Enforcers" onKeyDown={onKeyDown} className="grid grid-cols-2 gap-4" data-reveal>
                {squad.map((a, i) => {
                    const active = i === index
                    return (
                        <button key={a.id} id={`agent-tab-${a.id}`} role="tab" type="button"
                                aria-selected={active} aria-controls="agent-panel" tabIndex={active ? 0 : -1}
                                onClick={() => setIndex(i)}
                                className={`group relative overflow-hidden border-2 text-left transition-all duration-300 ${active
                                    ? 'shadow-[0_0_30px_-6px_var(--c)]'
                                    : 'border-white/10 opacity-75 hover:-translate-y-1 hover:opacity-100'}`}
                                style={{ ['--c' as any]: a.color, borderColor: active ? a.color : undefined }}>
                            <img src={`${ASSETS}/portraits/${a.id}.webp`} alt="" loading="lazy"
                                 className={`aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105 ${active ? '' : 'grayscale-[50%]'}`} />
                            <span className="absolute inset-0 bg-gradient-to-t from-cz-ink via-cz-ink/20 to-transparent" />
                            <span className="absolute left-2.5 top-2.5 bg-cz-ink/80 px-1.5 font-cz-mono text-xs text-cz-fog">{i + 1}</span>
                            <span className="absolute inset-x-0 bottom-0 p-3">
                                <span className="block text-xl font-bold uppercase tracking-wider sm:text-2xl" style={{ color: a.color }}>{a.name}</span>
                                <span className="block font-cz-mono text-[0.65rem] uppercase tracking-[0.18em] text-cz-fog-dim sm:text-xs">{a.role.split(' · ')[0]}</span>
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Dossier */}
            <div id="agent-panel" role="tabpanel" aria-live="polite" key={agent.id} className="cz-in cz-panel p-6 sm:p-8">
                <p className="font-cz-mono text-sm uppercase tracking-[0.25em]" style={{ color: agent.color }}>
                    {agent.designation} · Recruited {agent.recruited}
                </p>
                <h3 className="mt-2 text-5xl font-bold uppercase tracking-wide sm:text-6xl" style={{ color: agent.color, textShadow: `0 0 24px ${agent.color}55` }}>
                    {agent.name}
                </h3>
                <p className="mt-1 font-cz-mono text-base uppercase tracking-[0.16em] text-cz-fog-dim">{agent.role}</p>
                <p className="mt-6 text-lg leading-relaxed text-cz-fog/90">{agent.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2 font-cz-mono text-sm">
                    <li className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1">
                        <Crosshair className="h-3.5 w-3.5 text-cz-amber" /> {agent.loadout}
                    </li>
                    {agent.id === 'vance' && (
                        <li className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1">
                            <Snowflake className="h-3.5 w-3.5 text-cz-cyan" /> Unchipped
                        </li>
                    )}
                </ul>

                <div className="mt-6 border-l-2 p-5" style={{ borderColor: agent.color, background: `linear-gradient(90deg, ${agent.color}1f, transparent 80%)` }}>
                    <p className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-cz-fog">
                        <Zap className="h-5 w-5" style={{ color: agent.color }} /> {agent.ability}
                        <span className="ml-1 border border-white/20 px-1.5 font-cz-mono text-xs text-cz-fog-dim">C</span>
                    </p>
                    <p className="mt-1.5 leading-relaxed text-cz-fog/80">{agent.abilityText}</p>
                </div>
            </div>
        </div>
    )
}
