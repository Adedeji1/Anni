# Amara & Chidi — A Memory Kept

A romantic, cinematic scrapbook site built with React, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To type-check and build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.tsx                     # Orchestrates the intro gate + main page
├── components/
│   ├── PageLayout.tsx          # The one source of truth for global layout:
│   │                           #   background, centering, max-width, padding,
│   │                           #   petals, and the shared scroll-reveal Section
│   ├── IntroExperience.tsx     # The opening envelope / letter reveal
│   ├── StorySection.tsx        # Left memories · love letter · music player
│   └── MemoryGallery.tsx       # Milestones, photo gallery, closing message
└── data/
    └── content.ts              # All copy, photos, and typed content
```

## Editing the content

Everything you'll want to personalize — names, date, the letter, photo URLs
and captions, the song, milestones, and the closing message — lives in
`src/data/content.ts`. Swap in real photos by replacing the `src` values on
each `Photo` entry with your own image URLs or local imports.

## Notes

- Layout is controlled in exactly one place (`PageLayout.tsx`); individual
  sections do not set their own outer width, margin, or centering.
- Decorative motion (background drift, falling petals) is skipped entirely
  when the user's system requests reduced motion.
- The music player simulates playback locally — wire up a real `<audio>`
  element in `MusicPlayer` (inside `StorySection.tsx`) to play an actual track.
