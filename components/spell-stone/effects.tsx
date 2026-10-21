'use client'

import { useEffect, useRef } from "react"

/** Adds `is-visible` to every [data-reveal] element as it scrolls into view */
export function RevealObserver() {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
        if (!('IntersectionObserver' in window)) {
            els.forEach(el => el.classList.add('is-visible'))
            return
        }
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible')
                    io.unobserve(e.target)
                }
            })
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
        els.forEach(el => io.observe(el))
        return () => io.disconnect()
    }, [])
    return null
}

type EmbersProps = {
    className?: string
    density?: number
    /** Hue range of the sparks: ember (orange) or arcane (blue/violet) */
    palette?: 'ember' | 'arcane' | 'mixed'
}

/** Canvas of glowing sparks drifting upwards, like the lanterns in the key art */
export function Embers({ className, density = 70, palette = 'mixed' }: EmbersProps) {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = ref.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const hues = palette === 'ember' ? [22, 32, 42]
            : palette === 'arcane' ? [195, 210, 270]
            : [22, 32, 42, 38, 200, 270]

        type P = { x: number, y: number, r: number, vy: number, vx: number, life: number, max: number, hue: number, tw: number }
        let w = 0, h = 0, dpr = 1, raf = 0, visible = true
        let ps: P[] = []

        const spawn = (initial = false): P => ({
            x: Math.random() * w,
            y: initial ? Math.random() * h : h + 10,
            r: 0.6 + Math.random() * 2.2,
            vy: 0.2 + Math.random() * 0.7,
            vx: (Math.random() - 0.5) * 0.3,
            life: 0,
            max: 300 + Math.random() * 500,
            hue: hues[Math.floor(Math.random() * hues.length)],
            tw: Math.random() * Math.PI * 2,
        })

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2)
            w = canvas.clientWidth
            h = canvas.clientHeight
            canvas.width = w * dpr
            canvas.height = h * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            const n = Math.round(density * Math.min(1, (w * h) / (1440 * 900)) + 12)
            ps = Array.from({ length: n }, () => spawn(true))
        }

        const tick = () => {
            raf = requestAnimationFrame(tick)
            if (!visible) return
            ctx.clearRect(0, 0, w, h)
            ctx.globalCompositeOperation = 'lighter'
            for (let i = 0; i < ps.length; i++) {
                const p = ps[i]
                p.life++
                p.tw += 0.05
                p.y -= p.vy
                p.x += p.vx + Math.sin(p.tw * 0.5) * 0.25
                const t = p.life / p.max
                const a = Math.sin(Math.PI * Math.min(1, t)) * (0.55 + 0.45 * Math.sin(p.tw))
                if (t >= 1 || p.y < -20) { ps[i] = spawn(); continue }
                const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
                g.addColorStop(0, `hsla(${p.hue}, 100%, 75%, ${a})`)
                g.addColorStop(0.3, `hsla(${p.hue}, 100%, 60%, ${a * 0.35})`)
                g.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`)
                ctx.fillStyle = g
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
        io.observe(canvas)
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()
        tick()
        return () => {
            cancelAnimationFrame(raf)
            io.disconnect()
            ro.disconnect()
        }
    }, [density, palette])

    return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none ${className ?? ''}`} />
}
