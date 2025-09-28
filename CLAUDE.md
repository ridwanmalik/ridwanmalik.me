# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
yarn dev          # Start development server on http://localhost:3000

# Building and production
yarn build        # Build for production
yarn start        # Start production server

# Code quality
yarn lint         # Run ESLint for code linting
```

## Project Architecture

This is a Next.js 14 personal portfolio website using the App Router architecture.

### Core Structure
- **App Router**: Uses the new Next.js App Router (`app/` directory)
- **Component Architecture**: Modular component system organized by type
  - `components/layouts/`: Layout components (Layout, Navbar)
  - `components/pages/`: Page-specific components (Home, About, Experience)
  - Barrel exports via `index.ts` files for clean imports

### Styling & Design
- **Tailwind CSS**: Primary styling framework with custom configuration
- **Custom Theme**: Extended Tailwind config with:
  - Custom colors (oxford-blue: #0A192F)
  - Custom background gradients (glowing-blue)
  - Custom font families (Calibre, Inter, SF Pro Text system fonts with monospace fallbacks)
- **Typography**: Uses professional font stack prioritizing system fonts (Calibre, SF Pro Text) with Inter fallback

### Code Standards
- **ESLint**: Uses Next.js core web vitals configuration
- **Prettier**: Configured with 2-space indentation, no semicolons, double quotes
- **TypeScript**: Full TypeScript setup with strict typing
- **Import Patterns**: Consistent use of barrel exports and path aliases (`@/components`)

### Key Files
- `app/layout.tsx`: Root layout with global styles and font configuration
- `app/page.tsx`: Main page composing Home, About, and Experience sections
- `components/index.ts`: Central component export hub
- `tailwind.config.ts`: Extended Tailwind configuration with custom theme
- dont run yran dev if i told you. only run lint and ts check or build if needed