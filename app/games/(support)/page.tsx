import type { Metadata } from 'next'
import { ArrowRight } from "lucide-react"
import { cardUrl, GameId, games, iconUrl } from "@/components/games/data"

export const metadata: Metadata = {
  title: 'Games · ServiceStack',
  description: 'Games made by the team behind ServiceStack: Cortex Zero and Spell & Stone.',
  alternates: { canonical: '/games' },
}

// Featured in the same order and words as the home page
const featured: { id: GameId, badge: string, text: string, platforms: string }[] = [
  {
    id: 'cortex-zero',
    badge: 'New game · Free on desktop',
    text: 'A neo-noir real-time tactics and stealth game. Lead four resurrected Enforcers through a rain-soaked megacity and sever the Chime.',
    platforms: 'Windows · macOS · Linux · iPhone · iPad · Steam',
  },
  {
    id: 'spell-stone',
    badge: 'New game · Coming soon',
    text: 'A hand-painted fantasy tower defense. Build towers, train eight heroes and stop the Ash King\'s army across a 24-map campaign.',
    platforms: 'iPhone · iPad · Windows · macOS · Linux',
  },
]

export default function GamesPage() {
  return (
    <>
      <header className="gs-hero gs-wrap">
        <p className="gs-eyebrow">ServiceStack Games</p>
        <h1 className="gs-hero-title">Our games</h1>
        <p className="gs-lede">Games made by the team behind ServiceStack.</p>
      </header>

      <section className="gs-wrap gs-showcase" aria-label="Games">
        {featured.map(x => {
          const game = games.find(g => g.id === x.id)!
          return (
            <article key={x.id} className="gs-feature" data-game={x.id}>
              <img className="gs-feature-art" src={cardUrl(x.id)} alt="" width={1200} height={515} />
              <div className="gs-feature-body">
                <p className="gs-game-status">{x.badge}</p>
                <h2 className="gs-feature-title">
                  <img src={iconUrl(x.id)} alt="" width={56} height={56} />
                  <a href={`/games/${x.id}`} className="gs-feature-link">{game.name}</a>
                </h2>
                <p className="gs-feature-text">{x.text}</p>
                <p className="gs-feature-platforms">{x.platforms}</p>
                <div className="gs-feature-actions">
                  <span className="gs-btn" aria-hidden="true">Explore the game <ArrowRight /></span>
                  <a href={`/games/support?game=${x.id}`} className="gs-btn gs-btn-ghost">Get support</a>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}
