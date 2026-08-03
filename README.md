# ReflexAuto — site

Marketing site for **ReflexAuto**, a standalone Windows app for automatic X-ray reflectivity (XRR) fitting.
Load a scan, press Run, and get layer thickness, density and roughness with error bars in seconds.

Live at **https://xrayreflectometry.github.io**

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Static output, English and Korean locales.

## Requirements

Node.js >= 22.12.0

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deploying   |
| `npm run check`   | Type-check, lint, and check formatting       |
| `npm run fix`     | Apply ESLint and Prettier fixes              |

## Structure

```
public/                      static files copied verbatim (robots.txt, _headers, .nojekyll)
src/
  assets/
    favicons/                favicon.ico, favicon.svg, apple-touch-icon.png
    images/                  screenshots used on the page
    styles/tailwind.css      Tailwind theme tokens and custom utilities
  components/
    HomeSections.astro       every section of the landing page
    Logo.astro               inline SVG wordmark
    CustomStyles.astro       CSS variables for colors and fonts
  i18n.ts                    all page copy, English and Korean
  pages/
    index.astro              /
    ko/index.astro           /ko
    404.astro
  config.yaml                site URL, SEO defaults, theme
astro.config.ts
.github/workflows/deploy.yml
```

## Editing content

Nearly all visible text lives in `src/i18n.ts`, keyed by locale (`en`, `ko`). Section layout and markup live in
`src/components/HomeSections.astro`. Site URL, default SEO metadata and theme are in `src/config.yaml`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
The repository's Pages source must be set to **GitHub Actions** (Settings → Pages → Build and deployment).

To serve the site from a custom domain instead, add a `public/CNAME` file containing the domain, update `site.site` in
`src/config.yaml` to match, and point the domain's DNS at GitHub Pages.

## License

Built on the [AstroWind](https://github.com/arthelokyo/astrowind) template, MIT licensed — see [LICENSE.md](./LICENSE.md).
Site content, copy and images are © ReflexAuto.
