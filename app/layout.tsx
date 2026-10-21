import "../styles/index.css"
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://servicestack.com'),
  title: 'ServiceStack',
  description: 'Products from ServiceStack',
}

export const viewport: Viewport = {
  themeColor: '#0c0907',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#07080c]">{children}</body>
    </html>
  )
}
