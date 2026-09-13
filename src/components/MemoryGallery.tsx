import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';
import { Section } from './PageLayout';
import { Polaroid } from './StorySection';
import { closing, galleryPhotos, milestones, type StoryMilestone } from '../data/content';

/* -------------------------------------------------------------------------
 * MilestoneTimeline — a short, quiet sequence of dates. This is genuinely
 * sequential content (a timeline), which is the one case a numbered /
 * ordered structural device is earning its place rather than decorating.
 * ---------------------------------------------------------------------- */
function MilestoneStop({ milestone, isLast }: { milestone: StoryMilestone; isLast: boolean }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-1 flex-col items-center gap-3 px-4 text-center"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blush/70 text-burgundy">
        <Flower2 className="h-4 w-4" aria-hidden="true" />
      </div>
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[18px] hidden h-px w-full -translate-x-0 bg-dustyrose/30 sm:block"
          style={{ left: 'calc(50% + 18px)', width: 'calc(100% - 18px)' }}
        />
      )}
      <p className="font-hand text-lg text-dustyrose">{milestone.date}</p>
      <p className="font-display text-lg text-ink">{milestone.title}</p>
      <p className="max-w-[220px] font-serif text-base leading-snug text-ink/70">{milestone.description}</p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------
 * ClosingSection — the calm, final emotional beat of the page.
 * ---------------------------------------------------------------------- */
function ClosingSection(): JSX.Element {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-10 text-center">
      <Flower2 className="h-6 w-6 text-dustyrose" aria-hidden="true" />
      <p className="font-hand text-lg text-dustyrose sm:text-xl">{closing.eyebrow}</p>
      <div className="space-y-1">
        {closing.lines.map((line) => (
          <p key={line} className="font-display text-2xl italic text-ink sm:text-3xl">
            {line}
          </p>
        ))}
      </div>
      <p className="mt-4 font-script text-3xl text-burgundy">{closing.signature}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * MemoryGallery — a centered, size-varied collection of photographs. On
 * mobile it becomes a horizontally snapping filmstrip; it never animates
 * its own container position, only individual entrance/hover states.
 * ---------------------------------------------------------------------- */
export default function MemoryGallery(): JSX.Element {
  return (
    <Section id="memories">
      <div className="mb-14 text-center">
        <p className="font-hand text-xl text-dustyrose sm:text-2xl">moving through memories</p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">A few of the pages</h2>
      </div>

      <div className="mb-20 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        {milestones.map((milestone, index) => (
          <MilestoneStop key={milestone.id} milestone={milestone} isLast={index === milestones.length - 1} />
        ))}
      </div>

      <div
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
        style={{ scrollPaddingInline: '1rem' }}
      >
        {galleryPhotos.map((photo) => (
          <div key={photo.id} className="shrink-0 snap-center sm:snap-align-none">
            <Polaroid photo={photo} />
          </div>
        ))}
      </div>

      <div className="mt-24">
        <ClosingSection />
      </div>
    </Section>
  );
}
