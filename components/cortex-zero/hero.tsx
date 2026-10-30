'use client'

import { useEffect, useRef } from "react"
import { ChevronDown, Download, Gift, Radio } from "lucide-react"
import { ASSETS } from "./data"
import { Rain } from "./effects"

const platforms = ['iPhone', 'iPad', 'Mac', 'Steam']

export default function Hero() {
    const art = useRef<HTMLDivElement>(null)

    // The skyline drifts with the pointer and sinks slowly as you scroll
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        let mx = 0, my = 0, raf = 0
        const apply = () => {
            raf = 0
            const sy = Math.min(window.scrollY, window.innerHeight * 1.2)
            if (art.current) art.current.style.transform = `translate3d(${mx * -14}px, ${sy * 0.22 + my * -10}px, 0) scale(1.08)`
        }
        const queue = () => { if (!raf) raf = requestAnimationFrame(apply) }
        const onMove = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse') return
            mx = e.clientX / window.innerWidth - 0.5
            my = e.clientY / window.innerHeight - 0.5
            queue()
        }
        window.addEventListener('scroll', queue, { passive: true })
        window.addEventListener('pointermove', onMove, { passive: true })
        apply()
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('scroll', queue)
            window.removeEventListener('pointermove', onMove)
        }
    }, [])

    return (
        <section id="top" className="relative isolate pt-16 md:h-[100svh] md:max-h-[72rem] md:min-h-[42rem] md:pt-0" aria-label="Cortex Zero">
            {/* Key art: full-bleed on desktop, a 16:9 banner on phones so the squad stays in frame */}
            <div className="relative aspect-[1920/1072] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                <div ref={art} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.08)' }}>
                    <img src={`${ASSETS}/keyart.webp`} fetchPriority="high"
                         alt="Four trench-coated Enforcers on a rain-soaked rooftop watch a police Spinner over New Meridian, the Citadel Spire glowing red beyond"
                         className="h-full w-full object-cover object-[70%_40%]" />
                </div>
                <Rain className="absolute inset-0 h-full w-full" />
                <div className="cz-scan absolute inset-0" />
                <div className="cz-sweep pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-cz-cyan/[0.04] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cz-ink to-transparent md:h-3/4 md:via-cz-ink/50" />
                <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#070a12ee_0%,#070a1299_35%,transparent_65%)] md:block" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 md:absolute md:inset-x-0 md:bottom-0 md:top-0 md:justify-center md:pb-24 md:pt-24 lg:px-8">
                <div className="max-w-2xl">
                    <p className="cz-in inline-flex items-center gap-2 border border-cz-amber/40 bg-cz-ink/70 px-3 py-1.5 font-cz-mono text-xs uppercase tracking-[0.25em] text-cz-amber backdrop-blur"
                       style={{ animationDelay: '.15s' }}>
                        <Radio className="h-3.5 w-3.5" /> New Meridian · 2124 <span className="cz-blink">_</span>
                    </p>
                    <h1 className="cz-in mt-5" style={{ animationDelay: '.3s' }}>
                        <span className="sr-only">Cortex Zero</span>
                        <span aria-hidden="true" className="cz-glitch cz-neon block text-6xl font-bold uppercase leading-[0.9] tracking-[0.04em] sm:text-7xl lg:text-8xl">
                            Cortex<br /><span className="cz-neon-amber">Zero</span>
                        </span>
                    </h1>
                    <p className="cz-in mt-6 font-cz-mono text-sm uppercase tracking-[0.2em] text-cz-fog sm:text-base" style={{ animationDelay: '.45s' }}>
                        Destroy The Concordance. <span className="text-cz-crimson">Sever the Chime.</span> Save the City.
                    </p>
                    <p className="cz-in mt-5 max-w-xl text-lg leading-relaxed text-cz-fog/85 sm:text-xl" style={{ animationDelay: '.6s' }}>
                        A neo-noir real-time tactics and stealth game. Command a squad of four resurrected Enforcers through
                        the rain-soaked megacity of New Meridian, guided by Lyra, the rogue AI who woke you up.
                    </p>
                    <div className="cz-in mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '.75s' }}>
                        <a href="#download" className="cz-btn">
                            <Download className="h-4 w-4" /> Download Free
                        </a>
                        <a href="#gallery" className="cz-btn-ghost">See it in action</a>
                    </div>
                    <p className="cz-in mt-5 flex items-center gap-2 font-cz-mono text-xs uppercase tracking-[0.2em] text-cz-amber sm:text-sm"
                       style={{ animationDelay: '.8s' }}>
                        <Gift className="h-4 w-4" /> Free on Windows, macOS &amp; Linux for a limited time
                    </p>
                    <ul className="cz-in mt-8 flex flex-wrap gap-x-5 gap-y-2 font-cz-mono text-xs uppercase tracking-[0.22em] text-cz-fog-dim sm:text-sm"
                        style={{ animationDelay: '.9s' }} aria-label="Platforms">
                        {platforms.map((p, i) => (
                            <li key={p} className="flex items-center gap-5">
                                {i > 0 && <span className="h-1 w-1 bg-cz-cyan/60" aria-hidden="true" />}
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
                <a href="#story" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-cz-fog/50 hover:text-cz-cyan md:block" aria-label="Scroll to the story">
                    <ChevronDown className="h-6 w-6" style={{ animation: 'ss-scroll-cue 2s ease-in-out infinite' }} />
                </a>
            </div>
        </section>
    )
}
