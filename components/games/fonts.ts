import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Self-hosted: next/font/google fails to resolve Bricolage Grotesque's font files in CI builds
const display = localFont({ src: './fonts/bricolage-grotesque-latin.woff2', weight: '600 800', variable: '--font-bricolage', display: 'swap' })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' })

/** Font variables for the .gs-page root of the game support pages */
export const fontVariables = `${display.variable} ${body.variable}`
