'use client'

import { useEffect, useRef } from "react"
import { ChevronDown, Download, Gift, Plane } from "lucide-react"
import { ASSETS } from "./data"

const platforms = ['Windows', 'macOS', 'Linux', 'iPhone', 'iPad', 'Steam']

export default function Hero() {
    const art = useRef<HTMLDivElement>(null)

    // The sky drifts with the pointer and sinks slowly as you scroll
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        let mx = 0, my = 0, raf = 0
        const apply = () => {
            raf = 0
            const sy = Math.min(window.scrollY, window.innerHeight * 1.2)
            if (art.current) art.current.style.transform = `translate3d(${mx * -16}px, ${sy * 0.25 + my * -10}px, 0) scale(1.08)`
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
        <section id="top" className="relative isolate pt-16 md:h-[100svh] md:max-h-[72rem] md:min-h-[44rem] md:pt-0" aria-label="Stormbreak Squadron">
            {/* Key art: full-bleed on desktop, a 16:9 banner on phones so the squadron stays in frame */}
            <div className="relative aspect-[16/9] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                <div ref={art} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.08)' }}>
                    <img src={`${ASSETS}/keyart.webp`} fetchPriority="high"
                         alt="Kestrel fighters of Stormbreak Squadron break through storm clouds over a turquoise coral archipelago"
                         className="h-full w-full object-cover object-[65%_40%]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sb-ink to-transparent md:h-2/3 md:via-sb-ink/40" />
                <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#06101ced_0%,#06101c99_34%,transparent_62%)] md:block" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-10 px-4 pb-16 pt-4 sm:px-6 md:absolute md:inset-x-0 md:bottom-0 md:top-0 md:pb-24 md:pt-24 lg:px-8">
                <div className="min-w-0 max-w-2xl flex-1">
                    <p className="sb-in sb-label inline-flex items-center gap-2 rounded border border-sb-gold/40 bg-sb-ink/70 px-3 py-1.5 text-xs text-sb-gold backdrop-blur"
                       style={{ animationDelay: '.15s' }}>
                        <Plane className="h-3.5 w-3.5 -rotate-45" /> Operation Stormbreak
                    </p>
                    <h1 className="sb-in mt-5" style={{ animationDelay: '.3s' }}>
                        <span className="sr-only">Stormbreak Squadron</span>
                        <span aria-hidden="true" className="sb-display block text-[clamp(2.4rem,12.2vw,4.5rem)] leading-[0.92] sm:text-7xl lg:text-[5.5rem]">
                            <span className="sb-sky-text block">Stormbreak</span>
                            <span className="sb-gold block">Squadron</span>
                        </span>
                    </h1>
                    <p className="sb-in sb-label mt-6 text-sm text-sb-sky sm:text-base" style={{ animationDelay: '.45s' }}>
                        Hold the skies. <span className="text-sb-gold">Bring down the fortress.</span>
                    </p>
                    <p className="sb-in mt-5 max-w-xl text-lg leading-relaxed text-sb-sky/85 sm:text-xl" style={{ animationDelay: '.6s' }}>
                        A vertical-scrolling arcade shoot &apos;em up built for touch. Fly the Kestrel through 24 stages across six
                        theatres of war, from sun-bleached coral reefs to the edge of space.
                    </p>
                    <div className="sb-in mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '.75s' }}>
                        <a href="#download" className="sb-btn sb-glint"><Download className="h-4 w-4" /> Download Free</a>
                        <a href="#gallery" className="sb-btn-ghost">See it in action</a>
                    </div>
                    <p className="sb-in sb-label mt-5 flex items-center gap-2 text-xs text-sb-gold sm:text-sm" style={{ animationDelay: '.8s' }}>
                        <Gift className="h-4 w-4" /> Free on Windows, macOS &amp; Linux for a limited time
                    </p>
                    <ul className="sb-in sb-label mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-sb-mist sm:text-sm"
                        style={{ animationDelay: '.9s' }} aria-label="Platforms">
                        {platforms.map((p, i) => (
                            <li key={p} className="flex items-center gap-5">
                                {i > 0 && <span className="sb-roundel !h-2 !w-2" aria-hidden="true" />}
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gameplay on a phone, floating over the sky on wide screens */}
                <div className="sb-in hidden shrink-0 xl:block" style={{ animationDelay: '.6s' }}>
                    <div className="sb-bob relative w-[17rem] rounded-[2.6rem] border border-white/20 bg-[#05080e] p-2.5 shadow-[0_40px_80px_-20px_#000,0_0_60px_-10px_#3aa8ff66]"
                         style={{ ['--tilt' as any]: '4deg' }}>
                        <img src={`${ASSETS}/devices/iphone.webp`} alt="Stormbreak Squadron on iPhone: the Kestrel fires a five-barrel volley over the reef"
                             className="aspect-[1206/2622] w-full rounded-[2.1rem] object-cover" />
                    </div>
                </div>

                <a href="#story" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-sb-sky/50 hover:text-sb-gold md:block" aria-label="Scroll to the story">
                    <ChevronDown className="h-6 w-6" style={{ animation: 'ss-scroll-cue 2s ease-in-out infinite' }} />
                </a>
            </div>
        </section>
    )
}
