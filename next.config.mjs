/**
 * Fully static site: `npm run build` exports plain HTML/CSS/JS to dist/ for GitHub Pages.
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    output: 'export',
    // Export to dist/, but keep the dev server's cache in .next so it never ends up in a deploy
    distDir: process.env.NODE_ENV === 'production' ? 'dist' : '.next',
    // No image optimization server on a static host
    images: {
        unoptimized: true
    },
    // Keep clean URLs without trailing slashes (GitHub Pages serves /page from page.html)
    trailingSlash: false,
}

export default nextConfig
