import type { Metadata } from 'next'
import { CONTACT, games, iconUrl } from "@/components/games/data"

const description = 'ServiceStack games collect no data about you: no accounts, analytics, ads or tracking. Your progress stays on your device.'

export const metadata: Metadata = {
  title: 'Privacy Policy · ServiceStack Games',
  description,
  alternates: { canonical: '/games/privacy' },
  openGraph: {
    title: 'ServiceStack Games Privacy Policy',
    description,
    images: [{ url: '/img/spell-stone/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}

const updated = 'October 29, 2026'

export default function GamesPrivacyPage() {
  return (
    <article className="gs-wrap gs-policy">
      <p className="gs-eyebrow">ServiceStack Games</p>
      <h1 className="gs-hero-title">Privacy Policy</h1>
      <p className="gs-lede">The short version: our games collect no data about you. Not your name, not your email, not how you play.</p>

      <div className="gs-policy-games">
        <p>This policy covers every game published by ServiceStack, Inc:</p>
        <ul>
          {games.map(game => (
            <li key={game.id} data-game={game.id}><img src={iconUrl(game.id)} alt="" width={40} height={40} /><span><strong>{game.name}</strong> {game.genre}</span></li>
          ))}
        </ul>
      </div>

      <section>
        <h2>We collect no data</h2>
        <p>Our games do not collect, store, transmit or share any personal information. There are no accounts or sign-ins, no analytics, no advertising, no tracking and no third-party SDKs that collect data. We don&apos;t receive any information about you or how you play.</p>
      </section>
      <section>
        <h2>Your progress stays on your device</h2>
        <p>Your save slots, settings and log files are stored only on your own device. They are never sent to us or anyone else. On iPhone and iPad, deleting a game deletes them.</p>
      </section>
      <section>
        <h2>In-app purchases</h2>
        <p>Where a game offers an optional in-app purchase on iPhone or iPad, such as <strong>Unlock Full Game</strong>, it&apos;s handled entirely by Apple through the App Store. We never see your payment details or Apple ID. The game only asks Apple whether the purchase has been made, so it can unlock it. Apple&apos;s handling of purchases is covered by the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.</p>
      </section>
      <section>
        <h2>No online features</h2>
        <p>Our games have no chat, sharing, multiplayer or user-generated content, and don&apos;t use your location, camera, microphone, contacts or photos.</p>
      </section>
      <section>
        <h2>If you contact us</h2>
        <p>If you write to us through our <a href="/games/support">support page</a> or by email, we use your email address only to reply to you. We keep your message and any files you attach privately so we can follow up, and never share them or use them for marketing.</p>
      </section>
      <section>
        <h2>Children</h2>
        <p>Because our games collect no personal information from anyone, they collect none from children.</p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>If this policy ever changes, we&apos;ll update this page and the date below before the change takes effect.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Questions about this policy? Email us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. Our games are made by ServiceStack, Inc.</p>
      </section>

      <p className="gs-policy-updated">Last updated: {updated}</p>
    </article>
  )
}
