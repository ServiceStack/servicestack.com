import type { Metadata } from 'next'
import SupportHub from "@/components/games/support-hub"

export const metadata: Metadata = {
  title: 'Game Support · ServiceStack',
  alternates: { canonical: '/games/support' },
}

export default function GamesSupportPage() {
  return <SupportHub />
}
