import { Alegreya_Sans, Cinzel, Cinzel_Decorative } from 'next/font/google'

const display = Cinzel_Decorative({ subsets: ['latin'], weight: ['700', '900'], variable: '--font-cinzel-decorative', display: 'swap' })
const caps = Cinzel({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-cinzel', display: 'swap' })
const body = Alegreya_Sans({ subsets: ['latin'], weight: ['400', '500', '700', '800'], style: ['normal', 'italic'], variable: '--font-alegreya-sans', display: 'swap' })

/** Font variables for the .ss-page root of every Spell & Stone page */
export const fontVariables = `${display.variable} ${caps.variable} ${body.variable}`
