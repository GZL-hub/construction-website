# BuildPro Construction Website

A high-performance, SEO-optimized corporate construction website built with Next.js 14+, TypeScript, and TailwindCSS.

## Features

- **Fast Loading**: Optimized images, code splitting, and modern performance best practices
- **SEO Optimized**: Metadata, structured data, sitemap, and semantic HTML
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Type-Safe**: Full TypeScript implementation with strict mode
- **Modern Stack**: Next.js 14 App Router, TailwindCSS, React Hook Form, Zod validation

## Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 3.4
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Image Optimization**: Next.js Image component with Sharp

## Getting Started

### Prerequisites

- Node.js 18+ (LTS)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd construction-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your values
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Page sections (Hero, Services, CTA)
├── lib/
│   ├── utils.ts         # Utility functions
│   └── constants.ts     # App constants
└── types/
    └── index.ts         # TypeScript type definitions
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for comprehensive architectural documentation including:
- Complete project structure
- SEO strategy
- Performance optimization
- Component patterns
- Development guidelines

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Custom VPS with Docker

## Performance

This website is optimized for Core Web Vitals:
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## License

Copyright © 2025 BuildPro Construction. All rights reserved.
