import type { Metadata } from 'next'

/** Metadata for a page that has moved: points search engines at the new URL and keeps the old one out of the index */
export const movedMetadata = (to: string, title: string): Metadata => ({
  title,
  alternates: { canonical: to },
  robots: { index: false, follow: true },
})

/**
 * Static export has no server redirects, so pages that moved keep a stub at their old URL that forwards to the new one
 * (with the old #fragment), falling back to a meta refresh and a plain link without JavaScript.
 */
export default function Redirect({ to }: { to: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(to)} + location.hash)` }} />
      <p className="p-8 text-slate-300">This page has moved to <a href={to} className="text-sky-400 underline">{to}</a>.</p>
    </>
  )
}
