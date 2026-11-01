import Redirect, { movedMetadata } from "@/components/redirect"

// Moved to /games/cortex-zero
export const metadata = movedMetadata('/games/cortex-zero', 'Cortex Zero')

export default function Moved() {
  return <Redirect to="/games/cortex-zero" />
}
