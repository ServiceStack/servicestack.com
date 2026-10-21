import type { Metadata } from 'next'
import { fontVariables } from "@/components/spell-stone/fonts"
import SiteNav from "@/components/spell-stone/site-nav"
import Hero from "@/components/spell-stone/hero"
import HeroesShowcase from "@/components/spell-stone/heroes-showcase"
import Gallery from "@/components/spell-stone/gallery"
import { RevealObserver } from "@/components/spell-stone/effects"
import {
  Arsenal, Bestiary, Features, Missions, Play, SiteFooter, Stats, Story,
} from "@/components/spell-stone/sections"

const description = 'A hand-painted fantasy tower defense. Build and upgrade four kinds of tower, train eight heroes and call down meteors to stop the Ash King\'s army across a 24-map campaign.'

export const metadata: Metadata = {
  title: 'Spell & Stone · A hand-painted fantasy tower defense by ServiceStack',
  description,
  alternates: { canonical: '/spell-stone' },
  openGraph: {
    title: 'Spell & Stone',
    description,
    images: [{ url: '/img/spell-stone/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spell & Stone',
    description,
    images: ['/img/spell-stone/og.jpg'],
  },
}

export default function SpellStonePage() {
  return (
    <div className={`ss-page ${fontVariables}`}>
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <Story />
        <Features />
        <Missions />
        <section id="heroes" className="ss-grain relative overflow-hidden bg-ink-2 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#f5c46a12,transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center" data-reveal>
              <p className="ss-ornament font-serif-caps text-sm font-bold uppercase tracking-[0.3em]">The Heroes</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                <span className="ss-gold">Eight heroes. One realm.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-parchment/80 sm:text-xl">
                Each with their own special. Train their attack, defence, health, speed, range and special between battles,
                then lead from the front.
              </p>
            </div>
            <HeroesShowcase />
          </div>
        </section>
        <Arsenal />
        <Bestiary />
        <section id="gallery" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal>
              <p className="ss-ornament font-serif-caps text-sm font-bold uppercase tracking-[0.3em]">Gallery</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                <span className="ss-gold">See the realm</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-parchment/80 sm:text-xl">
                Unretouched renders from the game itself.
              </p>
            </div>
            <Gallery />
          </div>
        </section>
        <Play />
      </main>
      <SiteFooter />
      <RevealObserver />
    </div>
  )
}
