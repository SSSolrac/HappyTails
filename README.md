# Happy Tails Staff Dashboard

A role-based dashboard application for Happy Tails Pet Café staff and owners. The project is organized for long-term maintainability with a clearer architecture, reusable UI primitives, and separated service/hook layers.

## Tech Stack

- React
- Vite
- TypeScript (incremental migration support)
- TailwindCSS-ready folder architecture
- React Router

## Installation

```bash
npm install
npm run dev
```

## Folder Structure

```text
src/
  app/
    App.tsx
    router.tsx

  components/
    dashboard/
      DashboardLayout.tsx
      KPICard.tsx
      index.ts
    navigation/
      CommandBar.tsx
      MobileNav.tsx
      index.ts
    ui/
      Button.tsx
      Image.tsx
      StatusChip.tsx
      index.ts
    index.ts

  hooks/
    useDashboardData.ts

  services/
    dashboardService.ts

  types/
    dashboard.ts

  assets/
  pages/
  utils/
```

## Development Commands

- `npm run dev` — start local development server
- `npm run build` — create production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
