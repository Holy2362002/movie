## Movie Explorer (Next.js + TMDB)

A simple movie browsing app built with Next.js App Router that fetches data from The Movie Database (TMDB). It lists movies by genre and shows movie detail pages with cast information. Missing images are handled with clean Tailwind placeholders.

## Features

- Movie detail page with backdrop, overview, and cast
- Genre-based discovery page
- Client-side navigation with `Link`
- Tailwind CSS styling with responsive fallbacks when images are unavailable
- TypeScript types for movies and people

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- TMDB API v3 (using Bearer token header)

## Prerequisites

- Node.js 18+
- TMDB account and a Read Access Token (v4)

## Environment Variables

Create a `.env.local` file in the project root:

```bash
TMDB_KEY=YOUR_TMDB_V4_READ_ACCESS_TOKEN
```

Notes:
- This token is used in an Authorization header as `Bearer ${process.env.TMDB_KEY}`.
- Image base URLs used:
  - Posters/Profiles: `http://image.tmdb.org/t/p/w185`
  - Backdrops: `http://image.tmdb.org/t/p/w1280`

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and Start

```bash
npm run build
npm start
```

## Scripts

- `dev`: Start the Next.js development server
- `build`: Build for production
- `start`: Run the production build

## Project Structure

```
app/
  genre/[movie]/[id]/page.tsx   # Discover movies by genre
  movie/[id]/page.tsx           # Movie details + cast
components/
  movie.tsx                     # Movie card used on lists
types/
  global.ts                     # Shared TypeScript types
```

## Image Fallbacks

When a backdrop, poster, or profile image is not available, the UI renders a Tailwind-based placeholder (neutral background, subtle border, rounded corners, and an icon + text). This keeps layouts consistent and avoids layout shift.

## Notes

- Rate limits and availability are governed by TMDB. Ensure your token has proper access.
- For production, consider using Next Image (`next/image`) with TMDB image domains configured for optimization.

## License

MIT
