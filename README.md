# servicestack.com

The static website for ServiceStack's products. The home page links to mini sites hosted here, like the
**Spell & Stone** game at `/spell-stone`, and to related sites like [servicestack.net](https://servicestack.net)
and [react-templates.net](https://react-templates.net).

Built with Next.js (static export), React and Tailwind CSS, and hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static site in dist/
npm run preview    # serve dist/ locally
```

## Deploy

Every push to `main` builds the site and deploys it to GitHub Pages via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). It can also be run manually from
**Actions → Deploy to GitHub Pages → Run workflow**.

### One-time setup

1. **Enable Pages:** in the repository go to **Settings → Pages → Build and deployment** and set **Source** to
   **GitHub Actions**.
2. **Custom domain:** in **Settings → Pages → Custom domain**, enter `servicestack.com` and save. GitHub checks the
   DNS records below.
3. **DNS** (at the domain's DNS provider):

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `servicestack.github.io` |

   If the domain is on Cloudflare, set these records to **DNS only** (grey cloud) until GitHub has issued the
   certificate, or keep them proxied with SSL/TLS mode set to **Full**.
4. **HTTPS:** once the certificate is issued, tick **Enforce HTTPS** in **Settings → Pages**.
5. **Recommended:** verify `servicestack.com` for the ServiceStack organization (**Organization settings → Pages →
   Add a domain**) so no other repository can claim it.
