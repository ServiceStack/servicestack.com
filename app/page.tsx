import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { ArrowRight, ArrowUpRight, Radio, Sparkles } from "lucide-react"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'ServiceStack · Software, templates and games',
  description: 'Developer frameworks, .NET React templates and games from the team behind ServiceStack.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ServiceStack',
    description: 'Developer frameworks, .NET React templates and games from the team behind ServiceStack.',
    images: [{ url: '/img/spell-stone/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}

type Site = {
  href: string
  domain: string
  eyebrow: string
  title: string
  text: string
  cta: string
  img: string
  glow: string
}

const sites: Site[] = [
  {
    href: 'https://servicestack.net',
    domain: 'servicestack.net',
    eyebrow: '.NET Framework',
    title: 'Simplicity at Speed',
    text: 'One framework to power them all. Write your HTTP APIs once and get end-to-end typed integrations for 15 languages, instant Admin UIs, queryable data APIs and safe AI capabilities.',
    cta: 'Visit servicestack.net',
    img: '/img/hub/servicestack.webp',
    glow: '#3b82f6',
  },
  {
    href: 'https://react-templates.net',
    domain: 'react-templates.net',
    eyebrow: 'Templates',
    title: 'React + .NET',
    text: 'Ultimate .NET 10 React Templates for AI generated UIs, running on robust and scalable .NET backends, with full-stack type safety from C# to TypeScript.',
    cta: 'Visit react-templates.net',
    img: '/img/hub/react-templates.webp',
    glow: '#22d3ee',
  },
]

export default function Home() {
  return (
    <div className={`${inter.variable} hub-page min-h-screen bg-[#07080c] font-[family-name:var(--font-inter)] text-slate-200`}>
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,#000_20%,transparent_70%)]" />
      </div>

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8"
              style={{ paddingTop: 'calc(1.5rem + env(safe-area-inset-top, 0px))' }}>
        <Link href="/" className="flex items-center gap-3" aria-label="ServiceStack home">
          <img src="/img/servicestack-logo.svg" alt="" className="h-8 w-8 invert" />
          <span className="text-xl font-bold tracking-tight text-white">ServiceStack</span>
        </Link>
        <nav aria-label="Sites" className="flex items-center gap-1 text-sm font-medium">
          <Link href="/spell-stone" className="hidden rounded-full px-3 py-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:inline-block">Spell &amp; Stone</Link>
          <Link href="/cortex-zero" className="hidden rounded-full px-3 py-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:inline-block">Cortex Zero</Link>
          <a href="https://react-templates.net" className="hidden rounded-full px-3 py-2 text-slate-300 transition-colors hover:bg-white/5 hover:text-white md:inline-block">React Templates</a>
          <a href="https://servicestack.net" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white transition-colors hover:border-white/30 hover:bg-white/10">
            servicestack.net <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <section className="py-14 text-center sm:py-20">
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Crafted by{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">ServiceStack</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Developer frameworks, templates and games from the team behind ServiceStack.
          </p>
        </section>

        {/* Featured: Spell & Stone */}
        <Link href="/spell-stone" aria-label="Spell & Stone: explore the game"
              className="group relative block overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60 ring-1 ring-amber-200/15 transition-all duration-500 hover:ring-amber-200/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
            {/* On wide screens the art sits right of the copy so its painted logo stays fully visible */}
            <div className="absolute inset-0 overflow-hidden bg-[#0c0907] lg:left-[24%]">
              <img src="/img/spell-stone/start-bg.webp" alt="" fetchPriority="high"
                   className="absolute inset-0 h-full w-full object-cover object-[60%_20%] transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
              <img src="/img/spell-stone/start-fg.webp" alt=""
                   className="absolute inset-0 h-full w-full object-cover object-[60%_20%] transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/50 to-transparent lg:bg-gradient-to-r lg:from-[#0c0907] lg:from-[24%] lg:via-[#0c0907]/40 lg:via-[38%] lg:to-transparent lg:to-[55%]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:inset-y-0 lg:right-auto lg:flex lg:max-w-md lg:flex-col lg:justify-center lg:p-12">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> New game · Coming soon
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Spell &amp; Stone</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">
                A hand-painted fantasy tower defense. Build towers, train eight heroes and stop the Ash King&apos;s army across a 24-map campaign.
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">iPhone · iPad · Windows · macOS · Linux</p>
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-amber-200 to-amber-500 px-6 py-3 font-bold text-amber-950 shadow-lg shadow-amber-500/30 transition-transform group-hover:translate-x-1">
                Explore the game <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Featured: Cortex Zero */}
        <Link href="/cortex-zero" aria-label="Cortex Zero: explore the game"
              className="group relative mt-8 block overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60 ring-1 ring-cyan-300/15 transition-all duration-500 hover:ring-cyan-300/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
            {/* The squad stands on the right of the key art, clear of the copy */}
            <div className="absolute inset-0 overflow-hidden bg-[#070a12] lg:left-[24%]">
              <img src="/img/cortex-zero/keyart.webp" alt=""
                   className="absolute inset-0 h-full w-full object-cover object-[75%_40%] transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/50 to-transparent lg:bg-gradient-to-r lg:from-[#070a12] lg:from-[24%] lg:via-[#070a12]/40 lg:via-[38%] lg:to-transparent lg:to-[55%]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:inset-y-0 lg:right-auto lg:flex lg:max-w-md lg:flex-col lg:justify-center lg:p-12">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur">
                <Radio className="h-3.5 w-3.5" /> New game · In development
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Cortex Zero</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">
                A neo-noir real-time tactics and stealth game. Lead four resurrected Enforcers through a rain-soaked megacity and sever the Chime.
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">Windows · macOS · Linux · iPad</p>
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-cyan-200 to-cyan-400 px-6 py-3 font-bold text-cyan-950 shadow-lg shadow-cyan-400/30 transition-transform group-hover:translate-x-1">
                Explore the game <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Related sites */}
        <section aria-label="Related sites" className="mt-8 grid gap-8 md:grid-cols-2">
          {sites.map(s => (
            <a key={s.href} href={s.href}
               className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[#0d1017] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">
              <div className="relative aspect-[16/8] overflow-hidden">
                <img src={s.img} alt="" loading="lazy"
                     className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] to-transparent" />
                <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-xs text-slate-200 backdrop-blur sm:left-8">
                  {s.domain}
                </span>
              </div>
              <div className="relative flex flex-1 flex-col p-6 pt-0 sm:p-8 sm:pt-0">
                <div className="absolute -top-16 left-0 h-32 w-2/3 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                     style={{ background: `radial-gradient(ellipse, ${s.glow}, transparent 70%)` }} />
                <p className="relative text-xs font-bold uppercase tracking-[0.2em]" style={{ color: s.glow }}>{s.eyebrow}</p>
                <h2 className="relative mt-2 text-3xl font-extrabold tracking-tight text-white">{s.title}</h2>
                <p className="relative mt-3 flex-1 leading-relaxed text-slate-400">{s.text}</p>
                <span className="relative mt-6 inline-flex items-center gap-1.5 font-semibold text-white">
                  {s.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </section>
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8"
             style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
          <p>&copy; {new Date().getFullYear()} ServiceStack Inc.</p>
          <nav aria-label="Footer" className="flex gap-6">
            <Link href="/spell-stone" className="hover:text-slate-300">Spell &amp; Stone</Link>
            <Link href="/cortex-zero" className="hover:text-slate-300">Cortex Zero</Link>
            <a href="https://servicestack.net" className="hover:text-slate-300">servicestack.net</a>
            <a href="https://react-templates.net" className="hover:text-slate-300">react-templates.net</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
