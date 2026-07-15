# Fishman Docs

Documentation site for **[Fishman](https://github.com/nkrider7/fishman)** — an open-source native desktop API IDE (Tauri v2 + React).

- **Live docs:** https://nkrider7.github.io/fishman-docs/
- **Marketing site:** https://nkrider7.github.io/fishman/
- **App repo:** https://github.com/nkrider7/fishman

This repo is a standalone docs product (not the marketing landing page). Visual system: see [`DESIGN.md`](./DESIGN.md).

## Stack

- Vite + React 19 + TypeScript (strict)
- React Router (BrowserRouter) with GitHub Pages `base`
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Component pages + content modules (MDX-ready layout)

## Local setup

```bash
npm install
npm run dev
```

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local Vite dev server |
| `npm run build` | `tsc -b` + production build |
| `npm run preview` | Preview `dist` (use to verify `/fishman-docs/` base) |
| `npm run lint` | ESLint |
| `npm run typecheck` | Typecheck only |

Local dev serves at the root (`http://localhost:5173/`). Production builds use the `/fishman-docs/` base for GitHub Pages.

```bash
npm run build
npm run preview
# open http://localhost:4173/fishman-docs/
```

## GitHub Pages

1. Vite `base` is `/` in `dev`, `/fishman-docs/` in `build` (override with `BASE_URL` env).
2. Assets and router basename use `import.meta.env.BASE_URL`.
3. `public/404.html` redirects nested paths back into the SPA (`?redirect=`).
4. Deploy workflow: `.github/workflows/deploy.yml` (build on `main` → upload artifact → `deploy-pages`).

In the GitHub repo settings:

- **Pages → Source:** GitHub Actions
- Ensure the site is published under the `fishman-docs` project path

## Adding a docs page

1. Create `src/content/pages/your-page.tsx` (export page component + headings for TOC).
2. Register the route meta in `src/content/navigation.ts` (sidebar + prev/next).
3. Wire the slug in `src/pages/DocRoutePage.tsx`.
4. Run `npm run typecheck` and open a PR.

## SEO

The docs site includes:

- Per-page titles, descriptions, canonical URLs, Open Graph + Twitter tags
- JSON-LD (`WebSite`, `SoftwareApplication`, `TechArticle` / `WebPage`)
- `public/robots.txt` and `public/sitemap.xml`

After deploy, submit the sitemap in [Google Search Console](https://search.google.com/search-console):

`https://nkrider7.github.io/fishman-docs/sitemap.xml`

## License

Docs content in this repo follows the same project spirit as Fishman. See the [main repository](https://github.com/nkrider7/fishman) for product licensing.
