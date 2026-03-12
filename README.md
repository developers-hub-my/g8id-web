# G8ID Web

[![Latest Version](https://img.shields.io/github/v/release/developers-hub-my/g8id-web?style=flat-square)](https://github.com/developers-hub-my/g8id-web/releases)
[![Netlify Status](https://img.shields.io/netlify/placeholder?style=flat-square)](https://app.netlify.com)

Marketing website for [G8ID](https://g8id.com) — an on-premise Identity Data Management system by [Developers Hub Sdn Bhd](https://devhub.my).

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) (static output)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Interactivity**: [Alpine.js](https://alpinejs.dev)
- **Deployment**: [Netlify](https://netlify.com)

## Getting Started

```bash
npm install
npm run dev        # Dev server at localhost:4321
```

## Commands

| Command           | Action                             |
| :---------------- | :--------------------------------- |
| `npm run dev`     | Start local dev server             |
| `npm run build`   | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally   |

## Project Structure

```text
src/
├── components/          # Landing page sections
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── ProblemSection.astro
│   ├── SolutionSection.astro
│   ├── FeaturesSection.astro
│   ├── OnPremiseSection.astro
│   ├── WhyOnPremiseSection.astro
│   ├── ModulesSection.astro
│   ├── UseCasesSection.astro
│   ├── HowItWorksSection.astro
│   ├── TechnicalSection.astro
│   ├── DocsSection.astro
│   ├── CtaSection.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css       # Tailwind v4 @theme (colors, fonts)
```

## Documentation

See [docs/README.md](docs/README.md) for full documentation.

## Related

- **G8ID App** — the product codebase (Laravel)
- **Domain**: [g8id.com](https://g8id.com)
