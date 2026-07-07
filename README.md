# Panorama Marketing Website

Official public marketing website for Panorama — بانوراما, a smart academic platform for university students and university operations.

This repository contains the public website only. It does not include the dashboard, mobile app, backend APIs, authentication, database, or Vercel deployment.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Static-first pages and sections
- Next.js standalone output for private-server deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

The production build intentionally uses `next build --webpack`. Turbopack hit a Windows filesystem `EPERM` rename issue in the local workspace during Phase 1; webpack is the stable build path for this project unless that environment issue is safely resolved later.

## Project Structure

```text
src/app              App Router pages, metadata, sitemap, robots, global CSS
src/components       Layout, section, and reusable UI components
src/data             Site, navigation, and feature content configuration
src/lib              Shared utilities
public/brand         Logo assets for final launch
public/og            OpenGraph image assets for final launch
```

## Environment

Copy `.env.example` to `.env` for production builds or Docker Compose deployments:

```bash
NEXT_PUBLIC_SITE_URL=https://بانوراما.tech
NEXT_PUBLIC_CONTACT_EMAIL=panoramacompany31@gmail.com
```

These are public build-time values, not secrets.

## Deployment

Private-server deployment instructions are in `README_DEPLOYMENT.md`.

Before final launch, provide:

- `public/brand/panorama-logo.png`
- `public/brand/panorama-logo-horizontal.png`
- `public/brand/logo-mark.png`
- `public/og/opengraph-image.png`
