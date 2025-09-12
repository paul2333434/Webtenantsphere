# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

TenantSphere is a modern property management website built as a coming-soon/waitlist landing page using Next.js 14 with TypeScript. The site showcases upcoming features for property management software including AI-powered tenant screening, automated rent collection, and maintenance management.

## Common Development Commands

### Development Server
```bash
# Start development server (runs on http://localhost:3000)
npm run dev
```

### Build and Production
```bash
# Create production build
npm run build

# Start production server (after build)
npm start

# Lint the codebase
npm run lint
```

### Package Management
```bash
# Install dependencies
npm install

# Install a new dependency
npm install <package-name>

# Install a dev dependency
npm install -D <package-name>
```

### Single Component Development
When working on individual components:
1. Components are in `src/components/` directory
2. Each component is a standalone `.tsx` file
3. Test changes by checking the home page at `localhost:3000`
4. All components are imported in `src/app/page.tsx`

## Architecture and Code Structure

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (via next/font/google)

### Directory Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and Inter font
│   ├── page.tsx            # Main page that composes all components
│   └── globals.css         # Global styles and Tailwind imports
└── components/             # All UI components
    ├── Navbar.tsx          # Navigation header
    ├── Hero.tsx            # Landing section with CTA
    ├── Features.tsx        # Product features grid
    ├── Benefits.tsx        # Benefits section
    ├── Testimonials.tsx    # Social proof
    ├── Waitlist.tsx        # Email signup form
    ├── CTA.tsx             # Call-to-action section
    └── Footer.tsx          # Site footer
```

### Key Architectural Patterns

**Component Structure**: All components follow a consistent pattern:
- Use `'use client'` directive for interactive components with Framer Motion
- Import icons from `lucide-react`
- Use `motion` components from `framer-motion` for animations
- Follow Tailwind CSS utility-first approach
- Use semantic HTML structure

**Styling System**:
- Custom color palette defined in `tailwind.config.js`
  - Primary colors: purple/violet shades (50, 100, 500, 600, 700, 900)
  - Secondary colors: slate/gray shades
- Consistent animation patterns using `framer-motion`
- Responsive design with mobile-first approach

**TypeScript Configuration**:
- Path alias `@/*` maps to `./src/*`
- Strict mode enabled
- App directory and server components supported

### Animation Patterns
The site uses consistent Framer Motion patterns:
- `initial={{ opacity: 0, y: 20 }}` for fade-in from below
- `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Staggered animations using `delay: index * 0.1`
- Hover effects with `whileHover={{ scale: 1.05 }}`

### Component Dependencies
- Main page (`src/app/page.tsx`) imports and renders components in order:
  1. Navbar (header)
  2. Hero (landing section)
  3. Features (product features)
  4. Benefits (value propositions)
  5. Testimonials (social proof)
  6. Waitlist (email signup)
  7. CTA (call-to-action)
  8. Footer (site footer)

### Build Configuration
- Next.js 14 with minimal configuration
- Netlify deployment ready with `netlify.toml`
- ESLint configured with Next.js rules
- TypeScript strict mode
- Tailwind CSS with PostCSS

## Deployment

The project is configured for Netlify deployment:
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18
- Uses `@netlify/plugin-nextjs` for optimal Next.js support

When making changes that affect the build, always test with `npm run build` before deployment.

## Development Notes

- This is a static marketing site focused on collecting waitlist signups
- All content is currently static (no CMS or API integration)
- The design uses a purple/violet color scheme with modern gradients
- Components are designed to be easily modifiable for future feature additions
- Animation timing is carefully coordinated to create a polished user experience
