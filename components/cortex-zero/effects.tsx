'use client'

import { useEffect, useRef } from "react"

type RainProps = {
    className?: string
    density?: number
}

/** Canvas of slanted acid-rain streaks catching the neon, like New Meridian's perpetual drizzle */
export function Rain({ className, density = 160 }: RainProps) {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = ref.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        // Mostly cool white-blue, with the odd streak lit cyan, amber or crimson by the signs
        const tints = ['200,225,255', '200,225,255', '200,225,255', '200,225,255', '0,240,255', '255,158,0', '255,30,66']
        type Drop = { x: number, y: number, len: number, speed: number, alpha: number, tint: string }
        let w = 0, h = 0, dpr = 1, raf = 0, visible = true
        let drops: Drop[] = []
        const slant = 0.18

        const spawn = (initial = false): Drop => ({
            x: Math.random() * (w + h * slant),
            y: initial ? Math.random() * h : -40 - Math.random() * h * 0.3,
            len: 10 + Math.random() * 26,
            speed: 9 + Math.random() * 12,
            alpha: 0.08 + Math.random() * 0.32,
            tint: tints[Math.floor(Math.random() * tints.length)],
        })

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2)
            w = canvas.clientWidth
            h = canvas.clientHeight
            canvas.width = w * dpr
            canvas.height = h * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            const n = Math.round(density * Math.min(1, (w * h) / (1440 * 900)) + 30)
            drops = Array.from({ length: n }, () => spawn(true))
        }

        const tick = () => {
            raf = requestAnimationFrame(tick)
            if (!visible) return
            ctx.clearRect(0, 0, w, h)
            ctx.lineCap = 'round'
            ctx.lineWidth = 1
            for (let i = 0; i < drops.length; i++) {
                const d = drops[i]
                d.y += d.speed
                d.x -= d.speed * slant
                if (d.y - d.len > h) { drops[i] = spawn(); continue }
                ctx.strokeStyle = `rgba(${d.tint},${d.alpha})`
                ctx.beginPath()
                ctx.moveTo(d.x, d.y)
                ctx.lineTo(d.x + d.len * slant, d.y - d.len)
                ctx.stroke()
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
    }, [density])

    return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none ${className ?? ''}`} />
}
