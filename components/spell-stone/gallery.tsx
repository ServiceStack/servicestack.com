'use client'

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { shots, shotUrl } from "./data"

// The opening battle and the Ash King get the large tiles
const isFeatured = (i: number) => i === 0 || i === 7

export default function Gallery() {
    const [open, setOpen] = useState<number | null>(null)

    const go = useCallback((step: number) =>
        setOpen(i => i == null ? i : (i + step + shots.length) % shots.length), [])

    useEffect(() => {
        if (open == null) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(null)
            else if (e.key === 'ArrowRight') go(1)
            else if (e.key === 'ArrowLeft') go(-1)
        }
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = prev
            window.removeEventListener('keydown', onKey)
        }
    }, [open, go])

    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4 lg:gap-5">
                {shots.map((s, i) => (
                    <button key={s.id} type="button" onClick={() => setOpen(i)} data-reveal
                            style={{ ['--reveal-delay' as any]: `${(i % 4) * 80}ms` }}
                            className={`group relative aspect-[2868/1320] overflow-hidden rounded-2xl bg-ink-2 text-left ring-1 ring-gold/15 transition-all duration-500 hover:ring-gold/60 ${isFeatured(i) ? 'sm:col-span-2 lg:row-span-2 lg:aspect-auto' : ''}`}>
                        <img src={shotUrl(s.id, !isFeatured(i))} alt={`${s.title}: ${s.caption}`} loading="lazy"
                             className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${s.crop ? 'scale-[1.32] group-hover:scale-[1.38]' : 'group-hover:scale-105'}`} />
                        <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                            <span>
                                <span className={`block font-serif-caps font-bold text-parchment ${isFeatured(i) ? 'text-xl' : 'text-base'}`}>{s.title}</span>
                                {isFeatured(i) && <span className="mt-1 block text-sm text-parchment/75">{s.caption}</span>}
                            </span>
                            <Expand className="h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                    </button>
                ))}
            </div>

            {open != null && (
                <div role="dialog" aria-modal="true" aria-label={shots[open].title}
                     className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                     onClick={() => setOpen(null)}>
                    <button type="button" aria-label="Close" onClick={() => setOpen(null)}
                            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
                            style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}>
                        <X className="h-6 w-6" />
                    </button>
                    <figure className="relative w-full max-w-7xl" onClick={e => e.stopPropagation()}>
                        <img key={shots[open].id} src={shotUrl(shots[open].id)} alt={shots[open].title}
                             className="ss-hero-in mx-auto max-h-[78vh] w-auto rounded-xl shadow-2xl ring-1 ring-gold/30" />
                        <figcaption className="mt-5 text-center">
                            <span className="block font-display text-2xl font-bold"><span className="ss-gold">{shots[open].title}</span></span>
                            <span className="mt-1 block text-parchment/80">{shots[open].caption}</span>
                            <span className="mt-2 block text-xs tracking-widest text-parchment-dim">{open + 1} / {shots.length}</span>
                        </figcaption>
                        <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)}
                                className="absolute left-0 top-[39vh] -translate-y-1/2 rounded-full bg-ink/70 p-3 text-parchment ring-1 ring-gold/30 hover:bg-ink sm:-left-4">
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button type="button" aria-label="Next screenshot" onClick={() => go(1)}
                                className="absolute right-0 top-[39vh] -translate-y-1/2 rounded-full bg-ink/70 p-3 text-parchment ring-1 ring-gold/30 hover:bg-ink sm:-right-4">
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </figure>
                </div>
            )}
        </>
    )
}
