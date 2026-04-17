# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Lecaffee Coffee Shop (`artifacts/lecaffee`)
- **Type**: React + Vite, frontend-only (no backend)
- **Preview path**: `/`
- **Stack**: React, TypeScript, Tailwind CSS, wouter, shadcn/ui
- **Pages**: Home, Menu, Blog, Contact, Franchise, Order Online
- **Key files**:
  - `src/data/menuData.ts` — all menu items (60+ items with UK pricing)
  - `src/pages/` — all page components
  - `src/components/Navbar.tsx` — sticky navigation
  - `src/components/Footer.tsx` — footer with hours, contact, locations
  - `public/logo.jpeg` — Lecaffee logo (also used as favicon)
- **Brand**: Forest green (#1a3a2a), warm cream (#f0e8d8), amber (#c8873a)
- **Contact**: info@lecaffee.co.uk, +44 7393454245, Hastings & Eastbourne

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
