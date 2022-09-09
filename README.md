# Nuxt 3 Minimal Starter

## Issue

Start the [development server](#development-server) and browse to http://localhost:3000. Two images load.

Build [production](#production), start via Azure Static Web App CLI, and browse to http://localhost:4280 and only the "not proxied" image loads.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build via Azure Static Web App:

```bash
pnpm run swa
```