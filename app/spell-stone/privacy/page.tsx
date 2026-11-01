import Redirect, { movedMetadata } from "@/components/redirect"

// Moved to /games/spell-stone/privacy
export const metadata = movedMetadata('/games/spell-stone/privacy', 'Privacy Policy · Spell & Stone')

export default function Moved() {
  return <Redirect to="/games/spell-stone/privacy" />
}
