# Getting Started

How to set up and run the G8ID website locally.

## Prerequisites

- Node.js 20+
- npm

## Installation

```bash
git clone https://github.com/developers-hub-my/g8id-web.git
cd g8id-web
npm install
```

## Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static files are output to `dist/`. Preview the build with:

```bash
npm run preview
```

## Project Layout

| Path                | Purpose                                    |
| :------------------ | :----------------------------------------- |
| `src/pages/`        | Page routes (only `index.astro`)           |
| `src/components/`   | Section components for the landing page    |
| `src/layouts/`      | HTML shell (`BaseLayout.astro`)            |
| `src/styles/`       | Global CSS with Tailwind v4 `@theme`       |
| `public/`           | Static assets (favicon, manifest, images)  |
| `dist/`             | Build output (git-ignored)                 |

## Key Files

| File                       | What it controls                    |
| :------------------------- | :---------------------------------- |
| `astro.config.mjs`         | Astro config, Tailwind + Alpine.js  |
| `src/styles/global.css`    | Color palette, fonts via `@theme`   |
| `src/layouts/BaseLayout.astro` | HTML `<head>`, meta tags, fonts |
| `src/pages/index.astro`    | Section composition and ordering    |
| `netlify.toml`             | Netlify build settings              |

## Next Steps

- [Content Guide](02-content-guide.md) — how to add or edit sections
- [Design System](../01-architecture/02-design-system.md) — colors, typography, patterns
