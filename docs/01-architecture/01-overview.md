# Overview

The G8ID website is a single-page static marketing site for the G8ID Identity Data Management product.

## Tech Stack

| Layer          | Technology                          |
| :------------- | :---------------------------------- |
| Framework      | Astro 5 (static output)             |
| Styling        | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Interactivity  | Alpine.js (`@astrojs/alpinejs`)     |
| Fonts          | Space Mono (display) + IBM Plex Sans (body) via Bunny Fonts |
| Deployment     | Netlify (static, publishes `dist/`) |

## Site Structure

The site is a single page (`src/pages/index.astro`) composed of section components rendered in order:

```text
BaseLayout
├── Navbar
├── Hero
├── ProblemSection
├── SolutionSection
├── FeaturesSection
├── OnPremiseSection
├── WhyOnPremiseSection
├── ModulesSection
├── UseCasesSection
├── HowItWorksSection
├── TechnicalSection
├── DocsSection
├── CtaSection
└── Footer
```

## Key Architecture Decisions

### Static Output

Astro is configured with `output: 'static'` — the entire site is pre-rendered at build time.
No server-side runtime is needed.

### No Tailwind Config File

Tailwind CSS v4 is used via the `@tailwindcss/vite` plugin. Custom theme values (colors, fonts)
are defined directly in `src/styles/global.css` using the `@theme` directive —
there is no `tailwind.config.mjs`.

### Alpine.js for Interactivity

Alpine.js handles two interactive patterns:

- **Navbar**: Mobile menu toggle (`x-data="{ open: false }"`)
- **ModulesSection**: Tab switching between platform modules (`x-data="{ active: 'core' }"`)

### Self-Contained Components

Each section component defines its own data in the Astro frontmatter (`---` block)
and renders it in the template. There is no shared data layer or CMS.

## Next Steps

- [Design System](02-design-system.md) — colors, typography, spacing
- [Components Reference](03-components.md) — all section components
