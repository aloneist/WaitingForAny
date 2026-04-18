# Waiting For AI

Waiting For AI is a lightweight app for tracking things that are pending on someone or something else. It is designed for externally blocked items like replies, deliveries, refunds, bookings, repairs, and subscription decisions rather than personal task management.

## Repo Structure

```text
apps/mobile    Expo + Expo Router mobile scaffold
apps/web       Next.js web app prepared for Vercel
packages/shared Shared TypeScript types and constants
docs           Product and scope-defining documents
supabase       Placeholder directories for future backend work
```

## Stack

- `pnpm` workspaces
- `turbo` for monorepo tasks
- `Next.js` with App Router and Tailwind CSS for web
- `Expo` with Expo Router for mobile
- `TypeScript` across the repo

## Run Web In Codespaces

```bash
pnpm install
pnpm dev:web
```

The web app runs on port `3000`.

## Run Mobile In Codespaces

```bash
pnpm install
pnpm dev:mobile
```

Expo starts on port `8081`. In Codespaces, use the Expo QR or tunnel flow that matches your device setup.

## Deployment Notes

Vercel should import the repository with the project root set to `apps/web`.

Expo and EAS handle mobile development and release flows. Vercel is only for the web app.
