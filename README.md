# SchoolOps AI

SchoolOps AI is a responsive school operations workspace for managing daily administration, people, schedules, attendance, rooms, documents, alerts, and operational decisions from one interface.

## Features

- School operations dashboard with attendance, staffing, schedule, and alert summaries
- Teacher management with workload and status views
- Weekly timetable with class, room, teacher, conflict, and period context
- Class and room scheduling
- Attendance marking and RFID event simulation
- Document extraction review and approval workflow
- Alerts and operational notifications
- Ops Assistant workspace
- Responsive interface for desktop, tablet, and mobile

## Tech stack

- React 19
- Vite
- JavaScript and JSX
- Recharts
- Lucide React
- CSS custom properties and responsive CSS

## Installation

```bash
git clone https://github.com/Rudi-rock/SchoolOps-AI.git
cd SchoolOps-AI
npm install
cp .env.example .env
```

The current application uses seeded demo data and does not require a configured external service for the default local experience. Add real values to `.env` only when connecting additional services.

## Development

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env` and replace placeholders only for integrations you configure:

- `API_KEY` — optional service API key
- `DATABASE_URL` — optional database connection string
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` — optional Supabase development redirect URL

Never commit `.env`, `.env.local`, or real credentials.

## Deployment

The project is deployed with Vercel using the Vite build output. The production deployment is available at:

https://schoolops-ai-sx.vercel.app

For a new Vercel project, configure the project root as the repository root, use `npm install` for installation, `npm run build` for the build command, and `dist` as the output directory.
