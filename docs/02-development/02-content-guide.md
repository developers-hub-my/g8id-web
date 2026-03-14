# Content Guide

How to add, edit, and maintain content on the G8ID marketing website.

## Editing Existing Sections

Each section is a standalone `.astro` file in `src/components/`. Most sections store their
content as data arrays in the frontmatter:

```astro
---
const features = [
  { title: 'Feature Name', description: '...', icon: `<svg>...</svg>` },
];
---
```

To edit content, modify the data array in the relevant component file. The template below the frontmatter handles rendering.

## Adding a New Section

1. Create a new component in `src/components/`:

    ```astro
    ---
    // Data goes here
    ---

    <section id="your-section" class="relative py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6">
        <!-- Section content -->
      </div>
    </section>
    ```

2. Import and place the component in `src/pages/index.astro`:

    ```astro
    ---
    import YourSection from '../components/YourSection.astro';
    ---

    <YourSection />
    ```

3. If the section should be in the navigation, add it to the `navLinks` array in
    `Navbar.astro` and the `links` array in `Footer.astro`.

## Product Content Rules

When updating website content, these rules must be followed to maintain product accuracy.

### Keycloak

G8ID does **not** manage Keycloak directly. Keycloak federates from Active Directory via LDAP
automatically. When referencing connectors:

- List only **Active Directory** and **LDAP** as managed targets
- Add the note: *"SSO providers like Keycloak pick up changes automatically via federation"*
- Never list Keycloak as a connector or managed target

### Contact Emails

Use branded `@g8id.com` emails only. Never use `@devhub.my` on the public site:

| Purpose          | Email               |
| :--------------- | :------------------ |
| Demo requests    | `hello@devhub.my`   |
| General contact  | `tech@devhub.my`    |
| Security         | `tech@devhub.my`    |

### Industries and Compliance

- Use **"Built for Regulated Industries"** not "Trusted by" (no client references yet)
- Use **PDPA** for the SEA market, not HIPAA (US-specific)
- Target industries: Banking, Healthcare, Government, Telco, Defence

### Attribution

- Copyright: `© {year} G8ID. A product of Developers Hub Sdn Bhd.`
- Never reference "Cleanique Coders" in attribution

## Reference Repository

For detailed product specs, features, and architecture decisions, refer to the G8ID application
repository:

- Path: `/Users/nasrulhazim/Products/g8id/g8id-app/`
- Key files: `CLAUDE.md`, `docs/`

## Next Steps

- [Components Reference](../01-architecture/03-components.md) — full component index
- [Design System](../01-architecture/02-design-system.md) — UI patterns to follow
