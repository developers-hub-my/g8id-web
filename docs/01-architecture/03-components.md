# Components

All section components live in `src/components/`. Each is a self-contained `.astro` file with data defined in frontmatter.

## Component Index

| Component               | Section ID      | Purpose                                             |
| :---------------------- | :-------------- | :-------------------------------------------------- |
| `Navbar.astro`          | —               | Fixed top navigation with mobile menu (Alpine.js)   |
| `Hero.astro`            | —               | Hero banner with tagline, CTAs, architecture SVG    |
| `ProblemSection.astro`  | —               | Pain points cards (red-tinted)                      |
| `SolutionSection.astro` | —               | G8ID value proposition with flow diagram SVG        |
| `FeaturesSection.astro` | `#features`     | Feature cards grid (6 features)                     |
| `OnPremiseSection.astro`| —               | On-premise benefits + industry badges               |
| `WhyOnPremiseSection.astro` | —           | Comparison against cloud IAM (Okta, Azure AD, etc.) |
| `ModulesSection.astro`  | `#modules`      | Tabbed platform modules (Alpine.js tabs)            |
| `UseCasesSection.astro` | `#use-cases`    | Industry use case cards (4 verticals)               |
| `HowItWorksSection.astro` | `#how-it-works` | 6-step provisioning flow timeline                 |
| `TechnicalSection.astro`| `#technical`    | Technical specs table for IT teams                  |
| `DocsSection.astro`     | `#docs`         | Documentation resources cards                       |
| `CtaSection.astro`      | `#contact`      | Demo request CTA with pricing signal                |
| `Footer.astro`          | —               | Footer with links, social icons, copyright          |

## Data Patterns

### Array-Driven Rendering

Most section components define an array of objects in frontmatter and iterate over them:

```astro
---
const features = [
  { title: 'Feature Name', description: 'Description text', icon: `<svg>...</svg>` },
  // ...
];
---

{features.map((feature) => (
  <div class="card">
    <Fragment set:html={feature.icon} />
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
))}
```

Components using this pattern: `FeaturesSection`, `ProblemSection`, `OnPremiseSection`,
`ModulesSection`, `UseCasesSection`, `HowItWorksSection`, `TechnicalSection`.

### Static Content

Some components render static markup without data arrays: `Hero`, `SolutionSection`,
`WhyOnPremiseSection`, `DocsSection`, `CtaSection`.

### Alpine.js Interactive

Two components use Alpine.js for client-side interactivity:

- **Navbar**: Mobile menu toggle with `x-data="{ open: false }"`
- **ModulesSection**: Tab switching with `x-data="{ active: 'core' }"`

Both use `x-cloak` to prevent flash of unstyled content, with a corresponding CSS rule:

```css
[x-cloak] { display: none !important; }
```

## Navigation Anchors

Internal navigation links reference these section IDs:

| Nav Label    | Anchor          | Component            |
| :----------- | :-------------- | :------------------- |
| Features     | `#features`     | FeaturesSection      |
| How It Works | `#how-it-works` | HowItWorksSection    |
| Use Cases    | `#use-cases`    | UseCasesSection      |
| Modules      | `#modules`      | ModulesSection       |
| Docs         | `#docs`         | DocsSection          |
| Contact      | `mailto:...`    | External email link  |

## Contact Emails

All public-facing emails use branded `@g8id.com` addresses:

| Address              | Usage                           |
| :------------------- | :------------------------------ |
| `hello@devhub.my`    | Demo request CTAs, general contact |
| `tech@devhub.my`     | Security disclosure, footer     |

> **Important**: Never use `@devhub.my` addresses on the public site.

## Next Steps

- [Getting Started](../02-development/01-getting-started.md) — how to add or modify sections
