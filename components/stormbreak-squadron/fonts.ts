import { Russo_One, Saira } from 'next/font/google'

// Russo One for the stencil-like aviation headlines; Saira (with its width axis) for body copy and the condensed HUD labels
const display = Russo_One({ subsets: ['latin'], weight: '400', variable: '--font-russo-one', display: 'swap' })
const body = Saira({ subsets: ['latin'], axes: ['wdth'], variable: '--font-saira', display: 'swap' })

/** Font variables for the .sb-page root of every Stormbreak Squadron page */
export const fontVariables = `${display.variable} ${body.variable}`
