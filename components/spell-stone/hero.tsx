'use client'

import { useEffect, useRef } from "react"
import { ChevronDown, Download, Gift } from "lucide-react"
import { ASSETS } from "./data"
import { Embers } from "./effects"

const platforms = ['iPhone', 'iPad', 'Windows', 'macOS', 'Linux']

export default function Hero() {
    const bg = useRef<HTMLDivElement>(null)
    const fg = useRef<HTMLDivElement>(null)

    // Layered parallax: the painted backdrop drifts slowly, the cliff-top party drifts faster
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        let mx = 0, my = 0, raf = 0
        const apply = () => {
            raf = 0
            const sy = Math.min(window.scrollY, window.innerHeight * 1.2)
            if (bg.current) bg.current.style.transform = `translate3d(${mx * -10}px, ${sy * 0.25 + my * -8}px, 0) scale(1.08)`
            if (fg.current) fg.current.style.transform = `translate3d(${mx * -28}px, ${sy * 0.05 + my * -14}px, 0) scale(1.08)`
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
        <section id="top" className="relative isolate pt-16 md:h-[100svh] md:pt-0 md:max-h-[72rem] md:min-h-[40rem]" aria-label="Spell & Stone">
            {/* Painted layers: full-bleed on desktop, a 16:9 banner on phones so the logo is never cropped */}
            <div className="relative aspect-[2752/1536] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                <div ref={bg} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.08)' }}>
                    <img src={`${ASSETS}/start-bg.webp`} alt="Spell & Stone: the Spell Stone castle above a valley of glowing lanterns"
                         className="h-full w-full object-cover object-[50%_18%]" fetchPriority="high" />
                </div>
                <Embers className="absolute inset-0 h-full w-full" density={90} />
                <div ref={fg} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.08)' }}>
                    <img src={`${ASSETS}/start-fg.webp`} alt="" className="h-full w-full object-cover object-[50%_18%]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent md:h-2/3 md:from-ink md:via-ink/60" />
                <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_50%_100%,#0c0907_0%,transparent_55%)] md:block" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-2 text-center sm:px-6 md:absolute md:inset-x-0 md:bottom-0 md:pb-24">
                <p className="ss-hero-in mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold backdrop-blur"
                   style={{ animationDelay: '.2s' }}>
                    <Gift className="h-3.5 w-3.5" /> Free on desktop for a limited time
                </p>
                <h1 className="ss-hero-in font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                    style={{ animationDelay: '.35s' }}>
                    <span className="ss-gold">Hold the road. Save the realm.</span>
                </h1>
                <p className="ss-hero-in mt-5 max-w-2xl text-lg leading-relaxed text-parchment/90 sm:text-xl"
                   style={{ animationDelay: '.5s' }}>
                    A hand-painted fantasy tower defense. Build and upgrade four kinds of tower, train eight heroes
                    and call down meteors to stop the Ash King&apos;s army across a 24-map campaign.
                </p>
                <div className="ss-hero-in mt-9 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '.65s' }}>
                    <a href="#download" className="ss-btn-gold text-base">
                        <Download className="h-4 w-4" /> Download Free
                    </a>
                    <a href="#gallery" className="ss-btn-ghost text-base">See it in Action</a>
                </div>
                <ul className="ss-hero-in mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-parchment-dim"
                    style={{ animationDelay: '.8s' }} aria-label="Platforms">
                    {platforms.map((p, i) => (
                        <li key={p} className="flex items-center gap-5">
                            {i > 0 && <span className="h-1 w-1 rotate-45 bg-gold/60" aria-hidden="true" />}
                            {p}
                        </li>
                    ))}
                </ul>
                <a href="#story" className="mt-10 hidden flex-col items-center text-parchment/60 hover:text-gold md:flex" aria-label="Scroll to the story">
                    <ChevronDown className="h-6 w-6" style={{ animation: 'ss-scroll-cue 2s ease-in-out infinite' }} />
                </a>
            </div>
        </section>
    )
}
