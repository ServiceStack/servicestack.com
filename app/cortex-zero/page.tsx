import type { Metadata } from 'next'
import { fontVariables } from "@/components/cortex-zero/fonts"
import SiteNav from "@/components/cortex-zero/site-nav"
import Hero from "@/components/cortex-zero/hero"
import SquadShowcase from "@/components/cortex-zero/squad-showcase"
import Gallery from "@/components/cortex-zero/gallery"
import { RevealObserver } from "@/components/spell-stone/effects"
import {
  Arsenal, Campaign, Concordance, Download, Features, Platforms, SiteFooter, Stats, Story,
} from "@/components/cortex-zero/sections"

const description = 'A neo-noir real-time tactics and stealth game. Command four resurrected Enforcers through the rain-soaked megacity of New Meridian and sever the Chime across a 24-mission campaign.'

export const metadata: Metadata = {
  title: 'Cortex Zero · A neo-noir real-time tactics game by ServiceStack',
  description,
  alternates: { canonical: '/cortex-zero' },
  icons: { icon: '/img/cortex-zero/favicon-64.png', apple: '/img/cortex-zero/apple-icon-180.png' },
  openGraph: {
    title: 'Cortex Zero',
    description,
    images: [{ url: '/img/cortex-zero/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cortex Zero',
    description,
    images: ['/img/cortex-zero/og.jpg'],
  },
}

export default function CortexZeroPage() {
  return (
    <div className={`cz-page ${fontVariables}`}>
      <SiteNav />
      <main>
        <Hero />
        <Download />
        <Stats />
        <Story />
        <section id="squad" className="cz-grid relative overflow-hidden bg-cz-ink-2 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#ff9e0012,transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center" data-reveal>
              <p className="cz-eyebrow cz-eyebrow-center">The Squad</p>
              <h2 className="cz-neon-amber mt-4 text-4xl font-bold uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-6xl">
                Four ghosts from before the Chime
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cz-fog/80 sm:text-xl">
                Pre-Collapse Special Forces, frozen, chipped or caged by the Concordance. Free them one mission at a time.
              </p>
            </div>
            <SquadShowcase />
          </div>
        </section>
        <Features />
        <Campaign />
        <Arsenal />
        <Concordance />
        <section id="gallery" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal>
              <p className="cz-eyebrow cz-eyebrow-center">Surveillance Feed</p>
              <h2 className="cz-neon mt-4 text-4xl font-bold uppercase leading-[1.05] tracking-wide sm:text-5xl lg:text-6xl">
                See New Meridian
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cz-fog/80 sm:text-xl">
                Captured in-engine from the current build.
              </p>
            </div>
            <Gallery />
          </div>
        </section>
        <Platforms />
      </main>
      <SiteFooter />
      <RevealObserver />
    </div>
  )
}
