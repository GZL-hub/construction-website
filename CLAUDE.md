# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A high-performance, SEO-optimized corporate construction website built with Next.js 14+ App Router, TypeScript, and TailwindCSS. The architecture prioritizes fast loading, SEO, image galleries, forms, and long-term maintainability.

## Development Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking
npm run analyze          # Bundle size analysis
```

## Architecture Patterns

### Route Organization

The project uses Next.js 14+ App Router with route groups:
- `app/(marketing)/` - Main site pages (home, about, services, projects, contact, quote)
- `app/api/` - API routes for form submissions and dynamic content
- Dynamic routes: `app/(marketing)/projects/[slug]/` for individual project pages

### Component Structure

Components are organized by function, not by type:
- `components/ui/` - Base UI primitives (Button, Card, Input, Modal, etc.)
- `components/forms/` - Form-specific components (ContactForm, QuoteForm, FormField)
- `components/gallery/` - Gallery system (ProjectGallery, GalleryGrid, GalleryModal, ImageOptimized)
- `components/layout/` - Layout components (Header, Footer, Navigation, MobileMenu)
- `components/sections/` - Page sections (Hero, Services, Projects, Testimonials, CTA)
- `components/seo/` - SEO components (StructuredData, Breadcrumbs)

### Data Management

Static data lives in `src/data/`:
- `projects.ts` - Project portfolio data with image galleries
- `services.ts` - Service offerings
- `testimonials.ts` - Client testimonials
- `navigation.ts` - Navigation structure

Type definitions in `src/types/` with dedicated files per domain (project.ts, service.ts, form.ts).

### Form Handling Pattern

Forms use React Hook Form + Zod validation:
1. Define schema in `lib/validators.ts`
2. Client component handles form state and submission
3. POST to `/api/contact` or `/api/quote` route
4. API route validates with Zod, sends email via `lib/email.ts`

### Image Optimization Strategy

All images use next/image with specific patterns:
- **Above-fold images**: Use `priority` prop
- **Gallery images**: Three-tier sizing (thumb-400px, medium-800px, full-1920px)
- **Format**: WebP with JPEG fallback (automatic via next/image)
- **Placeholder**: Blur placeholders for better UX
- **Lazy loading**: Automatic for below-fold images
- Images stored in `public/images/` organized by type (projects/, services/, team/, logos/)

### SEO Implementation

SEO is handled through multiple layers:
1. **Static metadata**: Root layout.tsx has default metadata with template
2. **Dynamic metadata**: generateMetadata() in page components for project details
3. **Structured data**: StructuredData component with JSON-LD schemas (Organization, LocalBusiness, BreadcrumbList)
4. **Sitemap**: app/sitemap.ts generates dynamic sitemap from project data
5. **Robots**: app/robots.ts for crawler configuration

### Performance Priorities

Core Web Vitals targets:
- **LCP < 2.5s**: Priority images, preload fonts, static generation, CDN
- **FID < 100ms**: Code splitting, React Server Components, lazy loading heavy components
- **CLS < 0.1**: Always specify image dimensions, reserve space for dynamic content

Use dynamic imports for heavy client components:
```typescript
const GalleryModal = dynamic(() => import('@/components/gallery/GalleryModal'), { ssr: false })
```

### TypeScript Conventions

- Strict mode enabled with additional strictness flags
- Interface over type for object shapes
- Explicit prop interfaces for all components with JSDoc for complex props
- Zod schemas define runtime validation and infer TypeScript types

### Styling Approach

TailwindCSS with:
- Utility-first in components
- Custom animations in `src/styles/animations.css`
- Responsive design mobile-first
- `lib/utils.ts` contains `cn()` helper for conditional classes

## Project-Specific Patterns

### Gallery Data Structure

Projects use this structure (see `types/project.ts`):
```typescript
{
  id, slug, title, description,
  category: 'commercial' | 'residential' | 'industrial',
  location, completionDate, client?,
  images: ProjectImage[],
  mainImage: ProjectImage,
  stats?: { sqft?, duration?, budget? }
}
```

### Form Validation

All form schemas in `lib/validators.ts`:
- `contactFormSchema` - Contact form (name, email, phone?, subject, message, consent)
- `quoteFormSchema` - Quote requests (adds project type, timeline, budget, description)

### Component File Structure

Standard pattern for components:
1. Imports
2. Interface with JSDoc
3. Component function with hooks first
4. Event handlers
5. Render helpers
6. Return JSX

### Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SITE_URL` - Full site URL for SEO
- `NEXT_PUBLIC_SITE_NAME` - Company name
- `CONTACT_EMAIL` - Where form submissions go
- SMTP credentials for email (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD)

## Key Focus Areas

When working on this codebase:

1. **Always consider performance**: Check image sizes, bundle impact, rendering strategy
2. **SEO is critical**: Ensure metadata, structured data, semantic HTML
3. **Mobile-first**: Design and test mobile experience first
4. **Type safety**: No `any` types, validate external data with Zod
5. **Accessibility**: Proper labels, ARIA attributes, keyboard navigation
6. **Image dimensions**: Always specify width/height to prevent CLS

## Architecture Details

See `ARCHITECTURE.md` for comprehensive documentation including:
- Complete project structure breakdown
- SEO strategy and implementation examples
- Gallery implementation details
- Form handling patterns
- Performance optimization techniques
- Landing page structure templates
- Deployment checklist
