ToothHealth

Ask. Learn. Smile.

A dental health education platform that lets users ask anonymous questions about dental concerns, get AI-powered explanations, and find real nearby dentists. No account required. No data stored.
Built by TawakalStudio.

Features

Anonymous AI chat — Ask dental health questions and get structured, plain-language responses powered by Groq. No login, no account, no data retained.
Real dentist directory — Live dental clinic data pulled from OpenStreetMap via the Overpass API using your device's geolocation. Real names, real addresses, real phone numbers.
Dental health blog — Real articles sourced via RSS from Colgate, Healthline, WebMD, and the American Dental Association. Updated hourly.
Privacy by design — No tracking, no cookies, no analytics, no data storage.


Tech Stack

Framework — Next.js 16 App Router, TypeScript
AI — Groq API (llama-3.3-70b-versatile)
Dentist data — OpenStreetMap via Overpass API (free, no key required)
Geocoding — Browser Geolocation API
Blog — RSS feeds aggregated at runtime
Styling — Tailwind CSS with custom design system
Fonts — Fraunces (display), Geist Sans (UI)
Deployment — Vercel


Getting Started
Prerequisites

Node.js 18+
A Groq API key — get one free at console.groq.com

Installation
bashgit clone https://github.com/ridacyber/toothhealth.git
cd toothhealth
npm install
Environment Variables
Create a .env.local file in the root:
GROQ_API_KEY=gsk_your_key_here
NEXT_PUBLIC_URL=http://localhost:3000
Run locally
bashnpm run dev
Open http://localhost:3000.

Project Structure
src/
├── app/
│   ├── page.tsx               # Landing page
│   ├── ask/
│   │   ├── page.tsx           # Ask route (Suspense wrapper)
│   │   └── AskPageClient.tsx  # Client component with useSearchParams
│   ├── dentists/page.tsx      # Full dentist directory
│   ├── privacy/page.tsx       # Privacy policy
│   └── api/
│       ├── ask/route.ts       # Groq API proxy
│       ├── dentists/route.ts  # Overpass API proxy
│       └── blogs/route.ts     # RSS feed aggregator
├── components/
│   ├── ToothMascot.tsx
│   ├── Navbar.tsx
│   ├── HeroSearch.tsx
│   ├── AIResponsePanel.tsx
│   ├── DentistCard.tsx
│   ├── DentistSearch.tsx
│   ├── BlogCard.tsx
│   └── UrgencyBadge.tsx
└── content/

API Routes
RouteMethodDescription/api/askPOSTProxies question to Groq, returns structured JSON response/api/dentistsGETQueries Overpass API with lat and lng params, returns real clinic data/api/blogsGETFetches and parses RSS feeds from dental health publications

Privacy
ToothHealth does not collect, store, or sell any personal data. Questions are processed by Groq's infrastructure — see Groq's privacy policy. Hosting logs are governed by Vercel's privacy policy. Full privacy policy available at /privacy.

Contact
Questions or issues — info@tawakalstudio.com


