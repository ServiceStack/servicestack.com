import { Bricolage_Grotesque, Inter } from 'next/font/google'

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '800'], variable: '--font-bricolage', display: 'swap' })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter', display: 'swap' })

/** Font variables for the .gs-page root of the game support pages */
export const fontVariables = `${display.variable} ${body.variable}`
