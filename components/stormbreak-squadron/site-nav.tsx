'use client'

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ASSETS } from "./data"

const links = [
    { href: '#story', name: 'Story' },
    { href: '#gameplay', name: 'Gameplay' },
    { href: '#campaign', name: 'Campaign' },
    { href: '#fortresses', name: 'Fortresses' },
    { href: '#gallery', name: 'Gallery' },
    { href: '#download', name: 'Download' },
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
            ? 'bg-sb-ink/85 backdrop-blur-xl shadow-[0_1px_0_#3aa8ff2e,0_20px_40px_-20px_#000]'
            : 'bg-gradient-to-b from-sb-ink/80 to-transparent'}`}
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#top" className="group flex items-center gap-3" aria-label="Stormbreak Squadron, back to top">
                    <img src={`${ASSETS}/app-icon-180.webp`} alt="" className="h-9 w-9 rounded-lg transition-transform group-hover:scale-105" />
                    <span className="flex flex-col leading-none">
                        <span className="sb-display text-[1.02rem] tracking-[0.08em] text-sb-sky">Stormbreak Squadron</span>
                        <span className="sb-label mt-1 text-[0.68rem] text-sb-mist">by ServiceStack</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
                    {links.map(l => (
                        <a key={l.href} href={l.href}
                           className="sb-label px-3.5 py-2 text-sm text-sb-sky/75 transition-colors hover:text-sb-gold">
                            {l.name}
                        </a>
                    ))}
                </nav>

                <button type="button" onClick={() => setOpen(!open)}
                        className="rounded-md p-2 text-sb-sky hover:bg-white/10 lg:hidden"
                        aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && (
                <nav className="border-t border-sb-blue/20 px-4 pb-6 pt-2 lg:hidden" aria-label="Sections">
                    {links.map(l => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                           className="sb-label block border-b border-white/5 py-3.5 text-lg text-sb-sky hover:text-sb-gold">
                            {l.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    )
}
