# portfolio.jesse-anderson.net

Source for [portfolio.jesse-anderson.net](https://portfolio.jesse-anderson.net).
Static site, Astro + Tailwind, deployed to GitHub Pages.

## Stack

- [Astro](https://astro.build) 5.x — static site generator, ships zero JS by default
- [Tailwind CSS](https://tailwindcss.com) 3.x — styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap.xml at build
- TypeScript (strict)
- Deploy: GitHub Actions -> GitHub Pages

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # serve dist/ locally
```

Node 18+ required (Astro 5). The repo was scaffolded against Node 22.

If Astro reports impossible duplicate content IDs after editing Markdown,
stop any running `astro dev` processes and delete the ignored `.astro/`
cache directory before rebuilding. Stale dev watchers can repopulate that
cache while `npm run build` is syncing content.

## Layout

```
src/
  pages/index.astro     entry point
  layouts/Layout.astro  HTML shell, meta, OG tags, JSON-LD
  components/           Nav, Hero, Footer (more to come)
  data/profile.ts       single source of truth for name/contact/social
  styles/global.css     Tailwind directives + base layer
public/
  CNAME                 portfolio.jesse-anderson.net
  files/                resume.pdf, CV.pdf, seniorDesign.pdf, etc.
  images/               project thumbnails
legacy/                 old ColorLib site, kept for reference during rebuild
.github/workflows/      Pages deploy
```

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

One-time setup in repo settings: **Settings -> Pages -> Build and deployment ->
Source: GitHub Actions**. Custom domain (`portfolio.jesse-anderson.net`)
should already be configured via the `CNAME` file.

## Status

In active rebuild per `REWORK.md`. The current Astro version renders the
hero, featured projects, full project list, publications, experience,
education, and blog listing. Remaining work is copy polish, link checks,
and richer case-study detail.
