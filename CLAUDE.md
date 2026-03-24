# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

A single-page documentation site ("Design to Code Guide") built with Next.js 16. It teaches a Figma-to-production workflow using Claude Code, Cursor, Figma MCP, Storybook, GitHub, and Vercel. The site is content-heavy with no backend — all content is authored as React components.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, Next.js core-web-vitals + TypeScript rules)

No test runner is configured.

## Architecture

**Single-page app:** Everything renders on `/` via `src/app/page.tsx`. There is no multi-page routing — the page imports all 19 section components and renders them sequentially inside `DocsLayout`.

**Content system:** Each guide section lives in `src/content/sections/NN-slug.tsx` (01 through 19). Section metadata (id, title, description, subsections) is defined in `src/content/sections-meta.ts` and drives both sidebar navigation and heading-based scroll tracking.

**Layout:** `DocsLayout` (client component) wraps the page with `LeftSidebar` (section nav), `RightSidebar` (on-this-page links), and `MobileNav`. Active section is tracked via `useActiveHeading` hook using IntersectionObserver on heading IDs.

**Code highlighting:** Uses Shiki (server-side) with a singleton highlighter pattern in `src/lib/shiki.ts`. `CodeBlock` is an async server component; `CodeBlockWrapper` is the client-side copy/expand wrapper.

**Doc components:** Reusable content building blocks in `src/components/docs/` — `CodeBlock`, `PromptBlock`, `StepList`, `Callout` (tip/warning/note/important variants), `SectionHeader`.

**UI layer:** shadcn/ui (base-nova style) with Base UI primitives. Components in `src/components/ui/`. Tailwind CSS v4 with CSS variables for theming. Dark mode via `next-themes`.

**Fonts:** Inter (body) and JetBrains Mono (code), loaded via `next/font/google`.

## Key Conventions

- Path alias: `@/*` maps to `src/*`
- When adding a new guide section: create `src/content/sections/NN-slug.tsx`, add metadata to `sections-meta.ts`, import and add to the array in `page.tsx`
- shadcn components are added via `npx shadcn@latest add <component>`
