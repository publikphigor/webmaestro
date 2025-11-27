# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a showcase project for cool mini apps demonstrating unpopular CSS and JavaScript tricks. Built with React + TypeScript + Vite using React 19.2.0 and SWC for Fast Refresh.

**Project Purpose**: Collection of mini applications, each showcasing unique CSS and JavaScript techniques that are lesser-known but powerful.

## Development Commands

```bash
# Start development server with HMR (hot module replacement)
bun dev

# Build for production (runs TypeScript compiler first, then Vite build)
bun build

# Lint all files
bun lint

# Preview production build locally
bun preview

# Install dependencies
bun install
```

## Architecture

**App Structure**: This project contains multiple mini applications, each demonstrating different CSS/JavaScript techniques:
- **Landing Page**: Uses Tailwind CSS for styling
- **Mini Apps**: Each app lives in its own route with its own dedicated CSS file
- **Routing**: Each mini app is accessible via a separate route (e.g., `/app1`, `/app2`, etc.)

**Styling Convention**:
- Landing page and shared layouts: Tailwind CSS
- Individual mini apps: Separate vanilla CSS files (no Tailwind)
- Each app's CSS should be imported only in that app's component to avoid style conflicts

**Package Manager**: Bun (use `bun` commands instead of `npm`)

**Build System**: Vite with @vitejs/plugin-react-swc for Fast Refresh

**TypeScript Configuration**: Project uses TypeScript 5.9.3 with strict mode enabled. The configuration is split across:
- `tsconfig.json` - Root config with project references
- `tsconfig.app.json` - App-specific config (src directory)
- `tsconfig.node.json` - Node/Vite config

**Module System**: ES Modules (type: "module" in package.json)

**Entry Point**: `src/main.tsx` renders the root `App` component into `#root` element wrapped in StrictMode

**Linting**: ESLint 9 with flat config format using:
- TypeScript ESLint recommended rules
- React Hooks rules
- React Refresh rules for Vite

## TypeScript Settings

The app uses bundler module resolution with strict type checking:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`

JSX is configured as `react-jsx` (new JSX transform, no need to import React in components).

## Creating New Mini Apps

When adding a new mini app to the showcase:

1. **Create a new component** in `src/` (e.g., `MiniApp1.tsx`)
2. **Create a dedicated CSS file** for the app (e.g., `MiniApp1.css`)
3. **Import the CSS only in that component**: `import './MiniApp1.css'`
4. **Add a route** for the app in the routing configuration
5. **Add a link** from the landing page to showcase the new app

Each mini app should be self-contained with its own styles to demonstrate specific CSS/JS techniques without interference from Tailwind or other app styles.

## Important Notes

- This project uses SWC instead of Babel, which means the React Compiler is not currently compatible
- The `dist` directory is ignored by ESLint and should contain build output only
- All source files are in the `src` directory
- Build output goes through TypeScript compilation (`tsc -b`) before Vite bundling
- **Do not use Tailwind classes in mini app components** - only use Tailwind on the landing page
- Each mini app should demonstrate a specific, lesser-known CSS or JavaScript technique
