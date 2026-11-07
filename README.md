# Portfolio Frontend

My personal portfolio website. It showcases my projects, achievements and skills, and lets visitors contact me or request access to project code.

**Live site:** https://aditya-patil-portfolio.onrender.com/

The server lives in a separate repository: **Portfolio-Backend**.

## Features

- **Projects showcase** with details and links.
- **Achievements modal** with a lightbox to view certificates and photos.
- **Contact form** that sends me an email through the backend.
- **Request Code Access** modal for visitors who want to see a project's source code.
- **Smooth animations** with Framer Motion.
- **Light and dark themes**.
- **Responsive layout** with a mobile hamburger menu.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix UI), lucide-react, react-icons, sonner |
| Animation | Framer Motion |
| Routing and data | React Router, TanStack Query, React Hook Form, Zod |
| Charts | Recharts |
| Testing and linting | Vitest, Testing Library, ESLint |
| Package manager | npm |

## Getting started

### Prerequisites

- Node.js (LTS)
- npm (comes with Node.js)
- The Portfolio backend running (see the **Portfolio-Backend** repository)

### Clone

```bash
git clone https://github.com/aditya79373/Portfolio-Frontend.git
cd Portfolio-Frontend
```

### Install and run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

### Environment variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

For production, point `VITE_API_URL` at your deployed backend URL (https://backend-arjv.onrender.com).

### Build for the web

```bash
npm run build
npm run preview       # optional: preview the production build
```

## Scripts

| Script | What it does |
| --- | --- |
| `dev` | Start the Vite dev server |
| `build` | Production build |
| `build:dev` | Development-mode build |
| `preview` | Preview the production build |
| `lint` | Run ESLint |
| `test` | Run the tests once |
| `test:watch` | Run the tests in watch mode |

## Notes

- Do not commit `.env` files.
- The backend runs on Render's free tier, so the first contact form submit after a while can take 30-60 seconds.
