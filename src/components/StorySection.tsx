import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Music2, Pause, Play } from 'lucide-react';
import { Section } from './PageLayout';
import {
  leftNote,
  leftPhotos,
  loveLetter,
  rightNote,
  rightPhotos,
  song,
  type NoteContent,
  type Photo,
  type PhotoSize,
  type SongContent,
} from '../data/content';

/* -------------------------------------------------------------------------
 * Polaroid — a single photograph rendered as a physical print: slight tilt,
 * soft shadow, and a handwritten caption. Hover corrects the tilt and lifts
 * the print slightly, but never moves surrounding layout.
 * ---------------------------------------------------------------------- */
const POLAROID_WIDTH: Record<PhotoSize, string> = {
  sm: 'w-36 sm:w-40',
  md: 'w-44 sm:w-52',
  lg: 'w-56 sm:w-64',
};

interface PolaroidProps {
  photo: Photo;
  className?: string;
}

export function Polaroid({ photo, className = '' }: PolaroidProps): JSX.Element {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 22, rotate: photo.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${POLAROID_WIDTH[photo.size]} shrink-0 select-none rounded-[2px] bg-ivory p-3 pb-6 shadow-polaroid transition-shadow duration-300 hover:shadow-paper ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-[1px] object-cover"
      />
      <figcaption className="mt-3 text-center font-hand text-base text-ink/70 sm:text-lg">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

/* -------------------------------------------------------------------------
 * HandwrittenNote — a small torn-paper note with a personal line, tilted
 * like it was tucked in by hand.
 * ---------------------------------------------------------------------- */
function HandwrittenNote({ note }: { note: NoteContent }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transform: `rotate(${note.rotation}deg)` }}
      className="max-w-[220px] rounded-[2px] bg-cream/80 p-4 shadow-paper"
    >
      <p className="font-hand text-lg leading-snug text-ink/80 sm:text-xl">{note.text}</p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
 * MusicPlayer — a compact, scrapbook-styled player. It simulates playback
 * locally (no real audio asset is assumed) so the interaction and visual
 * language can be dropped onto a real track later.
 * ---------------------------------------------------------------------- */
function formatTime(fraction: number, durationSeconds: number): string {
  const totalSeconds = Math.round(fraction * durationSeconds);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// function MusicPlayer({ song: track }: { song: SongContent }): JSX.Element {
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [progress, setProgress] = useState<number>(0);

//   useEffect(() => {
//     if (!isPlaying) {
//       return;
//     }

//     const intervalId = window.setInterval(() => {
//       setProgress((previous) => {
//         const next = previous + 1 / track.durationSeconds;
//         return next >= 1 ? 0 : next;
//       });
//     }, 1000);

//     return () => window.clearInterval(intervalId);
//   }, [isPlaying, track.durationSeconds]);

//   const handleToggle = (): void => setIsPlaying((previous) => !previous);

//   return (
//     <div className="w-full max-w-[260px] rounded-md bg-cream/90 p-5 shadow-paper">
//       <div className="flex items-center gap-4">
//         <motion.div
//           animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
//           transition={
//             isPlaying ? { duration: 6, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }
//           }
//           className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burgundy text-cream shadow-md"
//         >
//           <Music2 className="h-5 w-5" aria-hidden="true" />
//         </motion.div>
//         <div className="min-w-0">
//           <p className="truncate font-serif text-base font-medium text-ink">{track.title}</p>
//           <p className="truncate font-hand text-sm text-ink/60">{track.artist}</p>
//         </div>
//       </div>

//       <div className="mt-4 flex items-center gap-3">
//         <button
//           type="button"
//           onClick={handleToggle}
//           aria-label={isPlaying ? 'Pause the song' : 'Play the song'}
//           className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-burgundy text-cream transition-transform hover:scale-105"
//         >
//           {isPlaying ? (
//             <Pause className="h-4 w-4" aria-hidden="true" />
//           ) : (
//             <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
//           )}
//         </button>
//         <div className="flex-1">
//           <div className="h-1 w-full overflow-hidden rounded-full bg-ink/10">
//             <div
//               className="h-full rounded-full bg-dustyrose transition-[width] duration-500"
//               style={{ width: `${progress * 100}%` }}
//             />
//           </div>
//           <div className="mt-1 flex justify-between font-serif text-[11px] text-ink/50">
//             <span>{formatTime(progress, track.durationSeconds)}</span>
//             <span>{formatTime(1, track.durationSeconds)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function MusicPlayer({ song: track }: { song: SongContent }): JSX.Element {
  return (
    <div className="w-full max-w-[320px] rounded-md bg-cream/90 p-3 shadow-paper">
      <div className="mb-3 flex items-center gap-3 px-2 pt-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-cream shadow-md">
          <Music2 className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <p className="truncate font-serif text-base font-medium text-ink">
            {track.title}
          </p>

          <p className="truncate font-hand text-sm text-ink/60">
            {track.artist}
          </p>
        </div>
      </div>

      <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator&si=283025179be94c03"
        width="100%"
        height="112"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
        title={`${track.title} by ${track.artist}`}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * LoveLetterCard — the visual and emotional centerpiece of the page.
 * ---------------------------------------------------------------------- */
function LoveLetterCard(): JSX.Element {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="bg-grain mx-auto w-full max-w-[560px] rounded-sm bg-ivory px-8 py-10 shadow-paper sm:px-12 sm:py-14"
    >
      <p className="font-hand text-2xl text-burgundy sm:text-3xl">{loveLetter.salutation}</p>
      <div className="mt-6 space-y-5">
        {loveLetter.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="font-serif text-lg leading-relaxed text-ink/85 sm:text-xl">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-9">
        <p className="font-serif text-lg text-ink/85">{loveLetter.signOff}</p>
        <p className="mt-1 font-script text-3xl text-burgundy">{loveLetter.signature}</p>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------
 * StorySection — assembles the three-part composition. The center column
 * is the widest and visually dominant; the side columns support it and
 * never compete with it for attention.
 * ---------------------------------------------------------------------- */
export default function StorySection(): JSX.Element {
  return (
    <Section id="the-letter">
      <div className="mb-14 text-center">
        <p className="font-hand text-xl text-dustyrose sm:text-2xl">a letter, kept safe</p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Reading it again</h2>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div className="order-2 flex flex-wrap items-start justify-center gap-8 lg:order-1 lg:col-span-3 lg:flex-col lg:items-start">
          <Polaroid photo={leftPhotos[0]} />
          <HandwrittenNote note={leftNote} />
          <Polaroid photo={leftPhotos[1]} className="lg:self-end" />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <LoveLetterCard />
        </div>

        <div className="order-3 flex flex-wrap items-start justify-center gap-8 lg:col-span-3 lg:flex-col lg:items-end">
          <MusicPlayer song={song} />
          <Polaroid photo={rightPhotos[0]} />
          <HandwrittenNote note={rightNote} />
          <Polaroid photo={rightPhotos[1]} className="lg:self-start" />
        </div>
      </div>
    </Section>
  );
}
