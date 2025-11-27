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
- **Routing**: Uses React Router with a shared layout component (AppLayout) that includes header, footer, and "Related Apps" section
- **Apps Configuration**: All apps are defined in `src/apps.config.ts` for central management

**Route Naming Convention**:
- Routes should use short, descriptive, kebab-case paths that clearly indicate the technique demonstrated
- Format: `/{technique-type}-{descriptive-name}`
- Examples:
  - `/css-liquid-button` - for a CSS liquid button effect
  - `/js-particle-effect` - for a JavaScript particle effect
  - `/css-3d-card-flip` - for a 3D card flip using CSS
  - `/js-smooth-scroll` - for a smooth scroll implementation
- Avoid generic names like `/app1`, `/demo`, or `/example`
- Keep paths concise but meaningful (2-4 words maximum)

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

1. **Add the app to `src/apps.config.ts`** with:
   - `name`: Display name of the app
   - `path`: Route following the naming convention (e.g., `/css-liquid-button`)
   - `description`: Brief description of the technique demonstrated
   - `tags`: Array of relevant tags (e.g., `["css", "animation"]`)

2. **Create a new component** in `src/` (e.g., `LiquidButton.tsx`)

3. **Create a dedicated CSS file** for the app (e.g., `LiquidButton.css`)

4. **Import the CSS only in that component**: `import './LiquidButton.css'`

5. **Update App.tsx** to import and route to your new component

The app will automatically:
- Appear on the landing page
- Get wrapped with the AppLayout (header, footer, related apps)
- Be accessible via its defined route

Each mini app should be self-contained with its own styles to demonstrate specific CSS/JS techniques without interference from Tailwind or other app styles.

## Important Notes

- This project uses SWC instead of Babel, which means the React Compiler is not currently compatible
- The `dist` directory is ignored by ESLint and should contain build output only
- All source files are in the `src` directory
- Build output goes through TypeScript compilation (`tsc -b`) before Vite bundling
- **Do not use Tailwind classes in mini app components** - only use Tailwind on the landing page
- Each mini app should demonstrate a specific, lesser-known CSS or JavaScript technique
