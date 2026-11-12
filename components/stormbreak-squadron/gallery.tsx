'use client'

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { shots, shotUrl } from "./data"

// Portrait 3:4 captures, so the grid is a wall of tall tiles
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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                {shots.map((s, i) => (
                    <button key={s.id} type="button" onClick={() => setOpen(i)} data-reveal
                            style={{ ['--reveal-delay' as any]: `${(i % 4) * 80}ms` }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-sb-blue/20 bg-sb-ink-2 text-left transition-all duration-500 hover:border-sb-gold/60 hover:shadow-[0_0_30px_-8px_#ffc23a88]">
                        <img src={shotUrl(s.id, true)} alt={`${s.title}: ${s.caption}`} loading="lazy"
                             className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute inset-0 bg-gradient-to-t from-sb-ink/90 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
                            <span>
                                <span className="sb-label block text-[0.65rem] text-sb-gold">{String(i + 1).padStart(2, '0')}</span>
                                <span className="sb-display block text-sm text-sb-sky sm:text-base">{s.title}</span>
                            </span>
                            <Expand className="h-4 w-4 shrink-0 text-sb-gold opacity-0 transition-opacity group-hover:opacity-100" />
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
                    <figure className="relative flex w-full max-w-3xl flex-col items-center" onClick={e => e.stopPropagation()}>
                        <img key={shots[open].id} src={shotUrl(shots[open].id)} alt={shots[open].title}
                             className="sb-in sb-frame max-h-[76vh] w-auto" />
                        <figcaption className="mt-5 text-center">
                            <span className="sb-display sb-gold block text-2xl">{shots[open].title}</span>
                            <span className="mt-1 block text-sb-sky/80">{shots[open].caption}</span>
                            <span className="sb-label mt-2 block text-xs text-sb-mist">{open + 1} / {shots.length}</span>
                        </figcaption>
                        <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)}
                                className="absolute left-0 top-[38vh] -translate-y-1/2 rounded-full bg-sb-ink/80 p-3 text-sb-sky ring-1 ring-sb-blue/40 hover:bg-sb-ink">
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button type="button" aria-label="Next screenshot" onClick={() => go(1)}
                                className="absolute right-0 top-[38vh] -translate-y-1/2 rounded-full bg-sb-ink/80 p-3 text-sb-sky ring-1 ring-sb-blue/40 hover:bg-sb-ink">
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </figure>
                </div>
            )}
        </>
    )
}
