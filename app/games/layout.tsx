import "../../styles/games.css"
import type { Metadata } from 'next'
import { fontVariables } from "@/components/games/fonts"
import { CONTACT, games, iconUrl } from "@/components/games/data"

const description = 'Help and support for games by ServiceStack, including Spell & Stone and Cortex Zero. Find answers, restore purchases, report a bug or contact the team.'

export const metadata: Metadata = {
  title: 'Game Support · ServiceStack',
  description,
  openGraph: {
    title: 'ServiceStack Game Support',
    description: 'Answers, purchase help and a direct line to the team behind every ServiceStack game.',
    images: [{ url: '/img/spell-stone/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}

const mailto = `mailto:${CONTACT}?subject=Game%20support`

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`gs-page ${fontVariables}`}>
      <a className="gs-skip" href="#main">Skip to content</a>

      <nav className="gs-nav gs-wrap" aria-label="Site">
        <a href="/games/support" className="gs-nav-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6 12h4M8 10v4"/><circle cx="15.5" cy="11" r=".6" fill="currentColor"/><circle cx="17.5" cy="13" r=".6" fill="currentColor"/></svg>
          ServiceStack Games
        </a>
        <a href={mailto} className="gs-nav-link">{CONTACT}</a>
      </nav>

      <main id="main">
        {children}
      </main>

      <footer className="gs-footer">
        <div className="gs-wrap">
          <ul className="gs-footer-games">
            {games.map(game => (
              <li key={game.id}><a href={`/${game.id}`}><img src={iconUrl(game.id)} alt="" width={40} height={40} loading="lazy" /><span>{game.name}</span></a></li>
            ))}
          </ul>
          <p>Games by <a href="/">ServiceStack</a>. Prefer email? Write to <a href={mailto}>{CONTACT}</a></p>
          <p className="gs-footer-links"><a href="/games/support">Support</a> · <a href="/games/privacy">Privacy Policy</a></p>
          <p className="gs-footer-copy">&copy; {new Date().getFullYear()} ServiceStack, Inc.</p>
        </div>
      </footer>
    </div>
  )
}
