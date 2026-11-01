import Redirect, { movedMetadata } from "@/components/redirect"

// Moved to /games/spell-stone
export const metadata = movedMetadata('/games/spell-stone', 'Spell & Stone')

export default function Moved() {
  return <Redirect to="/games/spell-stone" />
}
