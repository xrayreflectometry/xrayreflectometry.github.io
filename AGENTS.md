# ReflexAuto Site — Agent Instructions

## Project Overview

Marketing site for **ReflexAuto**, a standalone Windows app for automatic X-ray reflectivity (XRR) fitting.
A fully static, two-locale (English / Korean) single-page site built on the AstroWind template.

**Stack:** Astro v6 | Tailwind CSS v4 | TypeScript 5.9 | MDX | Sharp

**Deployment:** pushes to `main` run `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages
at https://xrayreflectometry.github.io. The repository's Pages source must be set to **GitHub Actions**.

## Quick Reference

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview production build locally    |
| `npm run check`   | Run astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier issues   |

**Node.js requirement:** >= 22.12.0

## Architecture

### Routes

Three pages only: `/` (`src/pages/index.astro`), `/ko` (`src/pages/ko/index.astro`), and `/404`.
Both locale pages render the same `HomeSections.astro` with a different `lang` prop.

### Directory Structure

```
src/
  assets/
    favicons/                  favicon.ico, favicon.svg, apple-touch-icon.png
    images/                    reflexauto-fit / -benchmark / -superlattice screenshots
    styles/tailwind.css        Tailwind v4 config (theme tokens, utilities, plugins)
  components/
    HomeSections.astro         every section of the landing page, in order
    Logo.astro                 inline SVG wordmark (no image file)
    Favicons.astro             favicon <link> tags
    CustomStyles.astro         CSS variables for colors and fonts
    common/                    Image, Metadata, Analytics, ToggleTheme, ToggleLanguage
    ui/                        primitives: Button, Headline, WidgetWrapper, Form, Timeline
    widgets/Header.astro       site header (the only widget in use)
  i18n.ts                      ALL page copy, keyed by locale
  layouts/                     Layout, PageLayout, LandingLayout, MarkdownLayout
  pages/                       index.astro, ko/index.astro, 404.astro
  config.yaml                  site URL, SEO defaults, theme (virtual module)
  navigation.ts                navigation structure
  types.d.ts                   TypeScript type definitions
vendor/integration/            custom Astro integration for config loading
public/                        robots.txt, _headers, .nojekyll (copied verbatim)
```

### Content and copy

**All visible text lives in `src/i18n.ts`** as `ui.en` and `ui.ko`, with matching key shapes: `meta`, `nav`, `hero`,
`imageAlt`, `stats`, `features`, `benchmarks`, `pricing`, `faq`, and so on. Some values contain inline HTML
(`<span class="text-primary">…</span>`, `&nbsp;`, `<br>`) and are rendered with `set:html`.

Editing rules:

- Change copy in `i18n.ts`, not in the components.
- **Edit both locales.** An English-only change silently leaves `/ko` stale.
- Numbers repeat across keys (a single figure can appear in `stats`, `imageAlt`, feature body text and the FAQ).
  Grep the whole file for the old value before assuming one occurrence.
- Some figures are also hardcoded in `HomeSections.astro` markup (e.g. the hero image FOM badge). Grep there too.

Current reference figures: single 250 Å film **FOM 0.01**; 16-layer superlattice **FOM 0.0196**.

### Blog

Disabled (`apps.blog.isEnabled: false` in `config.yaml`). There are no posts and no `src/data/post/`.
`content.config.ts` and `utils/blog.ts` are inherited from the template and unused — leave them alone unless
the blog is being turned on.

### Path Aliases

Use `~/` to import from `src/`:

```typescript
import Image from '~/components/common/Image.astro';
import { SITE } from 'astrowind:config';
import { ui } from '~/i18n';
```

### Configuration System

Site config lives in `src/config.yaml` and is loaded as a Vite virtual module `astrowind:config` by the custom
integration in `vendor/integration/`. Exports: `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS`.

`site.site` must stay in sync with where the site is actually served — it drives canonical URLs, Open Graph tags and
the sitemap. It is currently `https://xrayreflectometry.github.io`. Moving to a custom domain means updating this
value **and** adding `public/CNAME`.

## Tailwind CSS v4

Configuration is CSS-first in `src/assets/styles/tailwind.css`:

- **Theme tokens:** `@theme { --color-primary: var(--aw-color-primary); ... }`
- **Custom utilities:** `@utility bg-page { ... }`
- **Dark mode:** Class-based via `@variant dark (&:where(.dark, .dark *))`
- **Plugins:** `@plugin "@tailwindcss/typography"`
- **Custom variant:** `@custom-variant intersect (&:not([no-intersect]))`

CSS variables for colors/fonts are defined in `src/components/CustomStyles.astro` with light/dark theme variants.

The Vite plugin `@tailwindcss/vite` is configured in `astro.config.ts` (not as an Astro integration).

### Class Merging

Components use `twMerge` from `tailwind-merge` v3 for conditional class composition.

## Component Patterns

- Props extend interfaces from `~/types`
- Use `class:list` for conditional classes
- Use `twMerge()` when accepting className overrides
- Use named slots for layout composition

## Image Handling

`src/components/common/Image.astro` supports:

- Local images via `astro:assets` (optimized by Sharp)
- Remote images via Unpic CDN
- Allowed domains (for providers Unpic can't detect, processed by Sharp): `cdn.pixabay.com`

Hero images use `loading="eager"` and `fetchpriority="high"`.

## Verification Checklist

After changes, always verify:

1. `npm run build` succeeds
2. `npm run check` passes (astro check + ESLint + Prettier)
3. Both locales still say the same thing: `/` and `/ko`
4. Visual check in browser: dark mode, mobile menu, language toggle
