'use client'

import { useEffect, useRef } from "react"

type TracersProps = {
    className?: string
    density?: number
}

/** Canvas of cannon tracers streaking up the screen, like the Kestrel's Storm Cannon in flight */
export function Tracers({ className, density = 26 }: TracersProps) {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = ref.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        // Mostly the player's blue-white rounds, with the odd gold tracer
        const tints = ['170,215,255', '170,215,255', '170,215,255', '255,205,90']
        type Burst = { x: number, y: number, speed: number, alpha: number, tint: string, n: number, gap: number }
        let w = 0, h = 0, dpr = 1, raf = 0, visible = true
        let bursts: Burst[] = []

        const spawn = (initial = false): Burst => ({
            x: Math.random() * w,
            y: initial ? Math.random() * h : h + 20 + Math.random() * h * 0.4,
            speed: 7 + Math.random() * 7,
            alpha: 0.12 + Math.random() * 0.35,
            tint: tints[Math.floor(Math.random() * tints.length)],
            n: 2 + Math.floor(Math.random() * 3),
            gap: 5 + Math.random() * 4,
        })

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2)
            w = canvas.clientWidth
            h = canvas.clientHeight
            canvas.width = w * dpr
            canvas.height = h * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            const n = Math.round(density * Math.min(1, (w * h) / (1440 * 700)) + 8)
            bursts = Array.from({ length: n }, () => spawn(true))
        }

        const tick = () => {
            raf = requestAnimationFrame(tick)
            if (!visible) return
            ctx.clearRect(0, 0, w, h)
            ctx.lineCap = 'round'
            ctx.lineWidth = 2
            for (let i = 0; i < bursts.length; i++) {
                const b = bursts[i]
                b.y -= b.speed
                if (b.y < -40) { bursts[i] = spawn(); continue }
                ctx.strokeStyle = `rgba(${b.tint},${b.alpha})`
                ctx.beginPath()
                // A short volley of parallel rounds from multiple barrels
                for (let k = 0; k < b.n; k++) {
                    const x = b.x + (k - (b.n - 1) / 2) * b.gap
                    ctx.moveTo(x, b.y)
                    ctx.lineTo(x, b.y + 14)
                }
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
