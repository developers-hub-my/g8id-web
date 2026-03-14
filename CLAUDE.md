# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**G8ID Web** (`g8id.com`) is the marketing landing page for the G8ID Identity Data Management product.

- **Site**: https://g8id.com
- **Framework**: Astro 5 (static output)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (no separate tailwind.config file)
- **Interactivity**: Alpine.js via `@astrojs/alpinejs`
- **Fonts**: Space Mono (display/headings) + IBM Plex Sans (body)
- **Deployment**: Netlify (static, publishes `dist/`)

## Product Context

G8ID is an **on-premise Identity Data Management (IDM) system** built by **Developers Hub Sdn Bhd** (`devhub.my`). It sits between business processes and identity stores (Active Directory, LDAP). Every identity operation passes through G8ID's approval-gated pipeline.

> **G8** = Gate. **ID** = Identity. Everything passes through the gate.

### Critical Product Facts

- G8ID manages **Active Directory** and **LDAP** directly
- G8ID does **NOT** manage Keycloak directly — Keycloak federates from AD via LDAP automatically
- The product is **on-premise only** — no SaaS, no cloud dependency
- Target market: Malaysian/SEA regulated industries (government, banking, healthcare, enterprise)
- Compliance focus: **PDPA**, SOC2, ISO 27001 — not HIPAA (that's US-specific)
- Company: **Developers Hub Sdn Bhd** — never expose `@devhub.my` emails publicly on the G8ID site

### Branded Contact Emails

| G8ID Address | Forwards To | Purpose |
|---|---|---|
| `sales@g8id.com` | internal | Demo requests |
| `hello@g8id.com` | internal | General contact |
| `security@g8id.com` | internal | Security disclosures |

Never use `@devhub.my` addresses on the public site.

## Architecture

```
src/
├── components/        # Section components for the landing page
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── ProblemSection.astro
│   ├── SolutionSection.astro
│   ├── FeaturesSection.astro
│   ├── LifecycleSection.astro
│   ├── OnPremiseSection.astro
│   ├── WhyOnPremiseSection.astro
│   ├── ModulesSection.astro
│   ├── OffboardingSection.astro
│   ├── IntegrationsSection.astro
│   ├── UseCasesSection.astro
│   ├── HowItWorksSection.astro
│   ├── ComplianceSection.astro
│   ├── DocsSection.astro
│   ├── CtaSection.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro   # HTML shell, meta tags, fonts
├── pages/
│   └── index.astro         # Single-page landing — imports all sections
└── styles/
    └── global.css          # Tailwind v4 @theme (custom colors, fonts)
```

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Build static site to dist/
npm run preview   # Preview built site locally
```

## Design System

### Colors (defined in `src/styles/global.css` via `@theme`)

- **Navy**: `navy-950` (#0A0E1A, page bg) through `navy-600` (#253058)
- **Cyan**: `cyan-400` (#00D4FF) — primary accent
- **Amber**: `amber-500` (#F59E0B) — CTA buttons

### Typography

- **Display/headings**: `font-display` → Space Mono (monospace)
- **Body**: `font-body` → IBM Plex Sans (sans-serif)

### Component Patterns

- Sections use `py-20 lg:py-28` vertical padding
- Cards: `rounded-xl border border-white/5 bg-navy-900/50 p-6`
- CTA buttons: `rounded-lg bg-amber-500 px-8 py-3.5 text-sm font-semibold text-navy-950`
- Section headers: centered `h2` with `font-display text-3xl font-bold tracking-tight text-white sm:text-4xl`
- Alpine.js is used for interactive tabs (ModulesSection) and mobile nav toggle (Navbar)

## Conventions

- Single-page static site — all sections on `index.astro`
- Each section is a self-contained `.astro` component with data defined in the frontmatter
- SVG icons are inline (no icon library)
- Architecture diagrams use inline SVG with the cyan/navy theme
- No external JS beyond Alpine.js
- Copyright: `© {year} G8ID. A product of Developers Hub Sdn Bhd.`

## Related Repository

The G8ID application codebase is at `/Users/nasrulhazim/Products/g8id/g8id-app/` — refer to its `CLAUDE.md` and `docs/` for product specs, architecture decisions, and feature details when updating website content.
