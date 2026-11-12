import type { Metadata } from 'next'
import { fontVariables } from "@/components/stormbreak-squadron/fonts"
import SiteNav from "@/components/stormbreak-squadron/site-nav"
import Hero from "@/components/stormbreak-squadron/hero"
import TheatreShowcase from "@/components/stormbreak-squadron/theatre-showcase"
import Gallery from "@/components/stormbreak-squadron/gallery"
import { RevealObserver } from "@/components/spell-stone/effects"
import {
  Download, Enemies, Features, Fortresses, Modes, Platforms, SiteFooter, Stats, Story,
} from "@/components/stormbreak-squadron/sections"

const description = 'A vertical-scrolling arcade shoot \'em up built for touch. Fly the Kestrel through 24 stages across six theatres of war and bring down the Ashen Dominion\'s flying fortresses. Free on Windows, macOS and Linux for a limited time.'

export const metadata: Metadata = {
  title: 'Stormbreak Squadron · An arcade aerial shoot \'em up by ServiceStack',
  description,
  alternates: { canonical: '/games/stormbreak-squadron' },
  icons: { icon: '/img/stormbreak-squadron/favicon-64.png', apple: '/img/stormbreak-squadron/apple-icon-180.png' },
  openGraph: {
    title: 'Stormbreak Squadron',
    description,
    images: [{ url: '/img/stormbreak-squadron/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stormbreak Squadron',
    description,
    images: ['/img/stormbreak-squadron/og.jpg'],
  },
}

export default function StormbreakSquadronPage() {
  return (
    <div className={`sb-page ${fontVariables}`}>
      <SiteNav />
      <main>
        <Hero />
        <Download />
        <Stats />
        <Story />
        <Features />
        <section id="campaign" className="relative overflow-hidden bg-sb-ink-2 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#ffc23a14,transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <p className="sb-eyebrow sb-eyebrow-center">The Campaign</p>
              <h2 className="sb-display sb-sky-text mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Six theatres. 24 stages. One war.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-sb-sky/80 sm:text-xl">
                Each theatre is four stages: three that end with a named stage leader, then the theatre&apos;s fortress.
                Choose a chapter to read its briefings.
              </p>
            </div>
            <TheatreShowcase />
          </div>
        </section>
        <Fortresses />
        <Enemies />
        <Modes />
        <section id="gallery" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal>
              <p className="sb-eyebrow sb-eyebrow-center">Gun Camera</p>
              <h2 className="sb-display sb-sky-text mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                See it in action
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-sb-sky/80 sm:text-xl">
                Captured in-engine on the iPad build, from the reef to the edge of space.
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
