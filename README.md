# REAP Solutions Website

A production-grade, scalable website for REAP Solutions, a B-BBEE transformation consulting firm in South Africa.

## Overview

REAP Solutions stands for **Real Empowerment Accumulates Profit**. This website positions B-BBEE transformation as a strategic growth lever, not just a compliance requirement.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth.js (Auth.js)
- **Email**: Resend
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Features

### Public Site
- Modern, responsive marketing pages
- Services overview and detail pages
- Resources hub with search and filtering
- FAQ section
- Contact form with email notifications
- SEO optimized with sitemap and robots.txt

### Admin Panel
- Protected admin routes
- CRUD for Services, Resources, FAQ
- Lead management dashboard
- Content management system

### Future Features (Phase 2)
- Power BI dashboard embedding
- AI chatbot ("Ask REAP")
- Client portal
- Advanced analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (local or hosted)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reap-solutions
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/reap_solutions"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
CONTACT_EMAIL="info@reapsolutions.co.za"

# Optional
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

4. Set up the database:
```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed the database
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Default Admin Credentials

After seeding:
- Email: `admin@reapsolutions.co.za`
- Password: `admin123`

**⚠️ Change these credentials immediately in production!**

## Project Structure

```
reap-solutions/
├── app/
│   ├── (public)/          # Public routes
│   │   ├── page.tsx       # Home page
│   │   ├── about/
│   │   ├── services/
│   │   ├── resources/
│   │   ├── faq/
│   │   └── contact/
│   ├── admin/             # Admin panel
│   │   ├── page.tsx       # Dashboard
│   │   ├── services/
│   │   ├── resources/
│   │   ├── faq/
│   │   └── leads/
│   ├── api/               # API routes
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── admin/             # Admin components
│   ├── header.tsx
│   └── footer.tsx
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── public/
```

## Database Schema

Key models:
- **User**: Admin users
- **Service**: Consulting services
- **Resource**: Knowledge hub content
- **ResourceCategory**: Resource categories
- **FAQ**: Frequently asked questions
- **Lead**: Contact form submissions
- **Dashboard**: Power BI dashboard configs (for Phase 2)

## Power BI Integration (Phase 2)

The project is prepared for Power BI embedding:

1. **Database Model**: `Dashboard` model stores dashboard configurations
2. **Component**: `components/powerbi-embed.tsx` (placeholder)
3. **Page**: `/insights` page ready for dashboards

### Implementation Steps (Future)

1. Install Power BI client:
```bash
npm install powerbi-client
```

2. Create embed token API route:
   - Authenticate user
   - Call Power BI REST API to generate embed token
   - Return token securely

3. Update `PowerBIEmbed` component:
   - Fetch embed token from API
   - Use `powerbi-client` to embed report
   - Handle authentication and errors

4. Security considerations:
   - Never expose Power BI credentials client-side
   - Generate embed tokens server-side only
   - Use Row-Level Security (RLS) in Power BI
   - Implement proper authentication
   - Set appropriate token expiration

See `components/powerbi-embed.tsx` for detailed comments.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Database Setup

For production, use a managed PostgreSQL service:
- **Neon** (recommended for Vercel)
- **Supabase**
- **Railway**
- **AWS RDS**

Update `DATABASE_URL` in your environment variables.

### Environment Variables (Production)

Ensure all variables from `.env` are set in your hosting platform.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## Design System

- **Primary Colors**: Orange (#f97316) and Green (#22c55e)
- **Components**: shadcn/ui
- **Typography**: Inter font
- **Spacing**: Tailwind's default scale

## SEO

- Metadata on all pages
- Sitemap.xml auto-generated
- Robots.txt configured
- Semantic HTML
- Server-side rendering

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

[Your License Here]

## Support

For questions or support, contact: info@reapsolutions.co.za

---

Built with ❤️ for REAP Solutions


