import type { Metadata } from 'next'
import { ArrowLeft } from "lucide-react"
import { fontVariables } from "@/components/spell-stone/fonts"
import { ASSETS } from "@/components/spell-stone/data"
import { SiteFooter } from "@/components/spell-stone/sections"

const description = 'Spell & Stone collects no personal data. No accounts, analytics, ads or tracking: your progress stays on your device.'

export const metadata: Metadata = {
  title: 'Privacy Policy · Spell & Stone',
  description,
  alternates: { canonical: '/spell-stone/privacy' },
  openGraph: {
    title: 'Spell & Stone Privacy Policy',
    description,
    images: [{ url: '/img/spell-stone/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}

const updated = 'October 21, 2026'
const contact = 'team@servicestack.net'

const sections = [
  {
    title: 'We collect no data',
    body: <>
      Spell &amp; Stone does not collect, store, transmit or share any personal information. There are no accounts or
      sign-ins, no analytics, no advertising, no tracking and no third-party SDKs that collect data. We don&rsquo;t
      receive any information about you or how you play.
    </>,
  },
  {
    title: 'Your progress stays on your device',
    body: <>
      Your save slots and settings are stored only on your own device. They are never sent to us or anyone else.
      On iPhone and iPad, deleting the app deletes them.
    </>,
  },
  {
    title: 'In-app purchase',
    body: <>
      On iPhone and iPad, the optional <strong className="text-parchment">Unlock Full Game</strong> purchase is handled
      entirely by Apple through the App Store. We never see your payment details or Apple ID. The app only asks Apple
      whether the purchase has been made, so it can unlock the full game. Apple&rsquo;s handling of purchases is
      covered by the <a href="https://www.apple.com/legal/privacy/" className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">Apple Privacy Policy</a>.
    </>,
  },
  {
    title: 'No online features',
    body: <>
      The game has no chat, sharing, multiplayer or user-generated content, and doesn&rsquo;t use your location,
      camera, microphone, contacts or photos.
    </>,
  },
  {
    title: 'Children',
    body: <>
      Because the game collects no personal information from anyone, it collects none from children.
    </>,
  },
  {
    title: 'Changes to this policy',
    body: <>
      If this policy ever changes, we&rsquo;ll update this page and the date below before the change takes effect.
    </>,
  },
  {
    title: 'Contact',
    body: <>
      Questions about this policy? Email us at <a href={`mailto:${contact}`} className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">{contact}</a>.
      Spell &amp; Stone is made by ServiceStack, Inc.
    </>,
  },
]

export default function SpellStonePrivacyPage() {
  return (
    <div className={`ss-page ${fontVariables}`}>
      <header className="border-b border-gold/15 bg-ink-2" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <a href="/spell-stone" className="group flex items-center gap-3">
            <img src={`${ASSETS}/app-icon-180.webp`} alt="" className="h-9 w-9 rounded-xl shadow-lg shadow-black/50 ring-1 ring-gold/30 transition-transform group-hover:scale-105" />
            <span className="font-serif-caps text-[1.05rem] font-bold tracking-wide text-parchment">Spell &amp; Stone</span>
          </a>
          <a href="/spell-stone" className="flex items-center gap-1.5 text-sm font-semibold text-parchment/80 hover:text-gold">
            <ArrowLeft className="h-4 w-4" /> Back to the game
          </a>
        </div>
      </header>

      <main className="relative py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_50%_0%,#f5c46a14,transparent_70%)]" />
        <article className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-serif-caps text-sm font-bold uppercase tracking-[0.3em] text-gold">Spell &amp; Stone</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            <span className="ss-gold">Privacy Policy</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-parchment/85 sm:text-xl">
            The short version: Spell &amp; Stone collects no data about you. Not your name, not your email, not how you play.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map(s => (
              <section key={s.title}>
                <h2 className="font-serif-caps text-xl font-bold text-parchment sm:text-2xl">{s.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-parchment/80">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-14 border-t border-gold/15 pt-6 text-sm text-parchment-dim">Last updated: {updated}</p>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
