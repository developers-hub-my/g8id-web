# Netlify Deployment

The G8ID website is deployed as a static site on Netlify.

## Configuration

Build settings are defined in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

| Setting        | Value            | Purpose                              |
| :------------- | :--------------- | :----------------------------------- |
| Build command  | `npm run build`  | Runs Astro static build              |
| Publish dir    | `dist`           | Directory served by Netlify          |
| Node version   | 20               | Runtime for build process            |
| Redirect       | `/* → /index.html` | SPA-style fallback for navigation |

## Deployment Workflow

Netlify deploys automatically on push to the `main` branch:

1. Push to `main`
2. Netlify triggers build (`npm run build`)
3. Static files from `dist/` are published
4. Site is live at [g8id.com](https://g8id.com)

## Domain

The site is served at `https://g8id.com`. The `site` property in `astro.config.mjs` is set to match:

```javascript
export default defineConfig({
  site: 'https://g8id.com',
});
```

## Build Verification

Before pushing, verify the build passes locally:

```bash
npm run build
npm run preview
```

## Next Steps

- [Getting Started](../02-development/01-getting-started.md) — local development setup
