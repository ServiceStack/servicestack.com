// Games covered by the support pages. Ids, topics and devices mirror GameSupportRequest in servicestack-api,
// which validates them, so keep both in step.

export const ASSETS = '/img/games'
export const CONTACT = 'team@servicestack.net'

export type GameId = 'spell-stone' | 'cortex-zero'

export type SupportedGame = {
    id: GameId
    name: string
    genre: string
    status: string
    devices: string[]
}

export const games: SupportedGame[] = [
    { id: 'spell-stone', name: 'Spell & Stone', genre: 'Hand-painted fantasy tower defense', status: 'Out now',
      devices: ['iPhone', 'iPad', 'Mac', 'Windows', 'Linux', 'Other'] },
    { id: 'cortex-zero', name: 'Cortex Zero', genre: 'Neo-noir real-time tactics', status: 'In development',
      devices: ['iPad', 'Mac', 'Windows', 'Linux', 'Other'] },
]

export const topics = ['Gameplay help', 'Bug or crash', 'Purchase or restore', 'Saves and progress', 'Feedback and ideas', 'Something else']

/** Every device across all games, with "Other" last */
export const allDevices = [...new Set(games.flatMap(x => x.devices))].sort((a, b) => Number(a === 'Other') - Number(b === 'Other'))

export const iconUrl = (id: GameId) => `${ASSETS}/${id}-icon.webp`
export const cardUrl = (id: GameId) => `${ASSETS}/${id}-card.webp`

export const isGameId = (id: string | null): id is GameId => games.some(x => x.id === id)
