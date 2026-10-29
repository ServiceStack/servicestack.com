import { Chakra_Petch, Share_Tech_Mono } from 'next/font/google'

const display = Chakra_Petch({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-chakra-petch', display: 'swap' })
const mono = Share_Tech_Mono({ subsets: ['latin'], weight: '400', variable: '--font-share-tech-mono', display: 'swap' })

/** Font variables for the .cz-page root of every Cortex Zero page: the game's own UI typefaces */
export const fontVariables = `${display.variable} ${mono.variable}`
