# American Drinks & Candies

## Overview

A full-stack e-commerce catalog website for an American snacks and beverages export company. The application allows customers to browse products by category, view product details, and submit inquiries or quote requests. Built with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with custom theme configuration (orange/black brand palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **Fonts**: Montserrat (body) and Oswald (display/headings)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod schema validation
- **Build Process**: Vite for frontend, esbuild for production server bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` defines three tables: products, categories, inquiries
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

### API Structure
Routes are defined in `shared/routes.ts` with type-safe schemas:
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `GET /api/categories` - List categories
- `POST /api/inquiries` - Submit contact inquiry

### Key Design Decisions

**Shared Schema Approach**: Database schemas and API contracts are defined in the `shared/` directory, allowing both client and server to import the same type definitions. This ensures type safety across the full stack.

**Storage Abstraction**: The `server/storage.ts` file implements an `IStorage` interface with a `DatabaseStorage` class, making it easy to swap storage implementations if needed.

**Component Library**: Using shadcn/ui provides accessible, customizable components that can be modified directly in the codebase rather than being locked in a node_modules dependency.

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions (available but session auth not currently implemented)

### Development Tools
- **Vite**: Development server with HMR
- **Drizzle Kit**: Database migrations and schema management
- **Replit plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Frontend Libraries
- **@tanstack/react-query**: Async state management
- **react-hook-form**: Form handling with `@hookform/resolvers` for Zod integration
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Build & Runtime
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling with selective dependency bundling for faster cold starts