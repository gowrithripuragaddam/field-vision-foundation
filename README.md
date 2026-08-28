# SmartAgri AI

**Smart Agriculture Crop Disease and Farm Advisory System** — frontend foundation (Step 1).

This repository currently contains only the UI foundation: design system, layout shell,
navigation structure, placeholder pages and an API client stub. No AI, detection, weather,
soil, irrigation or backend logic is implemented yet.

## Tech stack

- React 19 + TypeScript
- Vite
- TanStack Router (file-based routing, with SSR via TanStack Start)
- Tailwind CSS v4
- shadcn/ui + lucide-react
- TanStack Query (available for future data fetching)

> Note: routing uses TanStack Router instead of React Router — it is the router fixed by this
> project template. The routing concepts (routes, layouts, links) map one-to-one.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

The app runs on the port printed by Vite (default `8080`).

Other scripts:

```bash
npm run build     # production build
npm run lint      # lint
npm run format    # prettier
```

## Environment variables

Copy `.env.example` to `.env` and fill in:

```
VITE_API_BASE_URL=
```

No API keys or secrets are stored in this repository.

## Project structure

```
src/
  components/     shared UI (common/, layout/, ui/ shadcn primitives)
  pages/          page components (Landing, Login, Register, Dashboard, NotFound)
  layouts/        AppLayout (sidebar + header) and AuthLayout
  routes/         file-based routes (thin wrappers around pages)
  services/       api.ts — API client placeholder
  hooks/          reusable React hooks
  contexts/       React context providers
  types/          shared TypeScript types
  utils/          navigation data, icon registry
  assets/         static assets imported by components
```

## Current scope

- Landing page
- Login page (UI only)
- Register page (UI only)
- Farmer dashboard placeholder with cards for Crop Health, Weather, Irrigation, Soil Health, Alerts
- 404 page
- Reusable app layout: sidebar, top header, main content area, responsive mobile navigation
- Placeholder routes for Dashboard, My Farm, Crop Doctor, Crop Health, Weather, Irrigation,
  Soil Health, Alerts, AI Advisor, History, Notifications, Profile
- Reusable components: Button, Card, Input, Navbar, Sidebar, PageHeader, StatusBadge,
  LoadingState, EmptyState
- API client placeholder with `VITE_API_BASE_URL` support

## Future modules

- Authentication and farmer accounts (backend + database)
- Crop disease detection from images (ML model integration)
- Crop health monitoring per field
- Weather API integration and advisories
- Irrigation scheduling logic
- Soil health analysis
- Alerts and notifications delivery
- AI advisory assistant (RAG + LLM)
- Activity and diagnosis history
- Farmer profile and preferences
