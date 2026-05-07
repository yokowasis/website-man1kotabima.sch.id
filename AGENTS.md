# AGENTS.md — MAN 1 Kota Bima Website

## Project overview

Next.js 13+ static site for MAN 1 Kota Bima (school website) + a separate Express admin server.  
Deployed to **GitHub Pages** via CI. Content is markdown in-repo with gray-matter frontmatter.

## Package manager

**pnpm** (see `pnpm-lock.yaml`). The README says `yarn` but CI and lockfile use pnpm.  
Both work since `package.json` scripts are generic.

```bash
pnpm dev        # next dev server (port 3000)
pnpm build      # next build → static export to ./out/
pnpm start      # next start (production server)
pnpm typecheck  # tsc --noEmit (strict mode is OFF in tsconfig)
```

## Key architecture

- **Next.js app** — `pages/` (Pages Router, not App Router), `_posts/` (blog), `_pages/` (static pages)
- **Express admin server** — `admin.mjs` + `admin/` (port 3001). Run separately: `node admin.mjs`
- **No `components/` dir** — layout components live directly in `pages/` (header.tsx, footer.tsx, slider.tsx)
- **No tests** exist in the repo

## Next.js configuration (quirks)

| Setting | Value | Why |
|---|---|---|
| `output` | `"export"` | Static export for GitHub Pages |
| `images.unoptimized` | `true` | Required for static export (no Next.js image optimizer) |
| `strict` (tsconfig) | `false` | TypeScript strict mode is disabled |

## Content management

Blog posts live in `_posts/` as `.md` files with gray-matter frontmatter:
```yaml
---
title: "..."
excerpt: "..."
coverImage: "..."
date: "2025-01-01T00:00:00.000Z"
author:
  name: "..."
  picture: "..."
ogImage:
  url: "..."
---
```

Static pages live in `_pages/` (including nested dirs like `tugas/`).  
The `_pages/SCHEMA.md` describes a **planned** Pocketbase migration — not implemented yet.

**Post creation flow** (admin tools):
1. Express server (`admin.mjs`) receives POST → commits the `.md` file to the **master branch** directly via GitHub API (uses `GITHUB_TOKEN` env var)
2. AI-based post creation uses **DeepSeek** (not OpenAI) — hardcoded API key `sk-cb7c980a8635419abd5bb7853294e110` in source
3. URL crawling via `crawl4ai.b.app.web.id` service
4. Images uploaded to a separate CDN (`cdnhost2.bimasoft.web.id`)
5. After posting, wait ~5 min for CI to rebuild and deploy

## CI/CD (GitHub Actions)

File: `.github/workflows/nextjs.yml`  
Triggers: push to `master` branch

```yaml
steps:
  - pnpm install (v8)
  - npx run build
  - upload ./out/ as pages artifact
  - deploy to GitHub Pages
```

Node version: 22. The CI uses pnpm 8.

## Admin server

Two admin interfaces exist — they are **different tools**:

1. **Express server** (`admin.mjs`, `admin/index.html`, `admin/ai.html`) — traditional HTML forms for creating posts. Runs on port 3001. Requires `GITHUB_TOKEN`, optional `PORTSSL`, `privkey`, `certificate` env vars.
2. **Next.js admin page** (`pages/admin/index.tsx`) — client-side AI post generator using DeepSeek. Accessible at `/admin` on the Next.js dev server.

## Environment variables

- `GITHUB_TOKEN` — required by Express admin to commit posts to GitHub
- `PORT` — Express admin port (default 3001)
- `PORTSSL`, `privkey`, `certificate` — optional HTTPS for admin server
- No `.env.example` exists; create `.env` locally as needed

## TypeScript notes

- `strict: false` in tsconfig — unsafe casts and implicit `any` will not error
- `skipLibCheck: true`
- `@types/remark-html.d.ts` is a stub: `declare module 'remark-html'`
- `zod` in devDependencies is used by `admin/ai.mjs` for formatting but unused elsewhere

## Style and formatting

- Tailwind CSS v3 with custom config in `tailwind.config.js`
- CSS assets in `public/assets-driving/` (bundled from a template) — do not edit these
- PostCSS with `tailwindcss` + `autoprefixer` plugins

## State of the repo

- Single branch: `master` (no `main` branch)
- Commit messages are in Indonesian/English mixed, often generic ("Update page")
- No linter or formatter config (no eslint, prettier, husky, etc.)
- No tests
- Next.js Pages Router (not App Router)
