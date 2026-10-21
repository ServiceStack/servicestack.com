'use client'

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ASSETS } from "./data"

const links = [
    { href: '#story', name: 'Story' },
    { href: '#features', name: 'Features' },
    { href: '#heroes', name: 'Heroes' },
    { href: '#arsenal', name: 'Arsenal' },
    { href: '#gallery', name: 'Gallery' },
    { href: '#play', name: 'Play' },
]

export default function SiteNav() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open
            ? 'bg-ink/80 backdrop-blur-xl shadow-[0_1px_0_#f5c46a22,0_20px_40px_-20px_#000]'
            : 'bg-gradient-to-b from-ink/70 to-transparent'}`}
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#top" className="group flex items-center gap-3" aria-label="ServiceStack home">
                    <img src={`${ASSETS}/app-icon-180.webp`} alt="" className="h-9 w-9 rounded-xl shadow-lg shadow-black/50 ring-1 ring-gold/30 transition-transform group-hover:scale-105" />
                    <span className="flex flex-col leading-none">
                        <span className="font-serif-caps text-[1.05rem] font-bold tracking-wide text-parchment">Spell &amp; Stone</span>
                        <span className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-parchment-dim">by ServiceStack</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
                    {links.map(l => (
                        <a key={l.href} href={l.href}
                           className="rounded-full px-3.5 py-2 font-serif-caps text-sm font-semibold tracking-wide text-parchment/80 transition-colors hover:bg-white/5 hover:text-gold">
                            {l.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setOpen(!open)}
                            className="rounded-full p-2 text-parchment hover:bg-white/10 lg:hidden"
                            aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {open && (
                <nav className="border-t border-gold/15 px-4 pb-6 pt-2 lg:hidden" aria-label="Sections">
                    {links.map(l => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                           className="block border-b border-white/5 py-3.5 font-serif-caps text-lg font-semibold text-parchment hover:text-gold">
                            {l.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    )
}
