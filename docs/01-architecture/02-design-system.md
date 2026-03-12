# Design System

The G8ID website uses a dark, technical aesthetic with a navy background, cyan accents,
and amber CTAs. All design tokens are defined in `src/styles/global.css`.

## Color Palette

| Token        | Hex       | Usage                        |
| :----------- | :-------- | :--------------------------- |
| `navy-950`   | `#0A0E1A` | Page background              |
| `navy-900`   | `#0F1629` | Card backgrounds             |
| `navy-800`   | `#151D38` | SVG diagram node fills       |
| `navy-700`   | `#1C2648` | Hover states                 |
| `navy-600`   | `#253058` | SVG diagram node strokes     |
| `cyan-400`   | `#00D4FF` | Primary accent, links, icons |
| `cyan-500`   | `#00B8E0` | Hover states for cyan        |
| `cyan-600`   | `#0098C0` | Deeper cyan accents          |
| `amber-400`  | `#FBBF24` | Secondary accent             |
| `amber-500`  | `#F59E0B` | CTA buttons                  |

## Typography

| Role    | Font Family   | CSS Variable     | Usage                  |
| :------ | :------------ | :--------------- | :--------------------- |
| Display | Space Mono    | `--font-display` | Headings, labels, tags |
| Body    | IBM Plex Sans | `--font-body`    | Paragraphs, body text  |

Fonts are loaded from Bunny Fonts (privacy-respecting alternative to Google Fonts) in `BaseLayout.astro`.

## Spacing

Sections use consistent vertical padding:

```text
Section:      py-20 lg:py-28
Card padding: p-6 or p-8
Grid gap:     gap-6 or gap-8
```

## Common UI Patterns

### Section Header

Centered with subtitle:

```html
<div class="text-center">
  <h2 class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
    Section Title
  </h2>
  <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
    Section subtitle text.
  </p>
</div>
```

### Card

```html
<div class="rounded-xl border border-white/5 bg-navy-900/50 p-6 transition-colors hover:border-cyan-400/20">
  <!-- content -->
</div>
```

### CTA Button (Primary)

```html
<a href="..." class="rounded-lg bg-amber-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400">
  Button Text
</a>
```

### Tag / Badge

```html
<span class="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-display text-xs text-cyan-400">
  Tag Label
</span>
```

### Section Divider

```html
<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
```

## SVG Diagrams

Architecture diagrams are inline SVGs using the theme colors:

- Node fills: `#151D38` (navy-800)
- Node strokes: `#253058` (navy-600)
- Connection lines: `#00D4FF` (cyan-400) with dashes and low opacity
- Labels: `#94A3B8` (slate-400)

## Next Steps

- [Components Reference](03-components.md)
- [Development Guide](../02-development/01-getting-started.md)
