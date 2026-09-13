import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

/* -------------------------------------------------------------------------
 * useReducedMotion
 * A tiny local hook so decorative-only motion (the background drift and the
 * falling petals) can be switched off entirely for users who ask for it,
 * rather than relying on CSS alone.
 * ---------------------------------------------------------------------- */
function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent): void => {
      setPrefersReduced(event.matches);
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}

/* -------------------------------------------------------------------------
 * AnimatedBackground
 * A single fixed layer of layered radial gradients that drift extremely
 * slowly. It never affects layout — it is absolutely positioned and sits
 * behind everything, at a fixed z-index.
 * ---------------------------------------------------------------------- */
function AnimatedBackground(): JSX.Element {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ivory">
      <div
        className="motion-decorative absolute -left-1/4 -top-1/4 h-[70vh] w-[70vh] animate-drift-slow rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F0CBD4 0%, transparent 70%)' }}
      />
      <div
        className="motion-decorative absolute -right-1/4 top-0 h-[65vh] w-[65vh] animate-drift rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #DAD2E6 0%, transparent 70%)' }}
      />
      <div
        className="motion-decorative absolute bottom-[-20%] left-1/4 h-[75vh] w-[75vh] animate-drift-slow rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, #E7D6B8 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'linear-gradient(180deg, #FBF5EF 0%, #F6E9DE 45%, #FBF5EF 100%)',
          mixBlendMode: 'normal',
        }}
      />
      <div className="bg-grain absolute inset-0" />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * FloatingPetals
 * Decorative, pointer-events-none petals that fall slowly across the full
 * viewport height. Fully typed, randomised once via useMemo, and skipped
 * entirely when the user prefers reduced motion.
 * ---------------------------------------------------------------------- */
interface Petal {
  id: number;
  leftPercent: number;
  sizePx: number;
  durationSeconds: number;
  delaySeconds: number;
  driftPx: number;
  tone: string;
}

const PETAL_TONES = ['#F0CBD4', '#E7D6B8', '#DAD2E6', '#C98CA0'];
const PETAL_COUNT = 12;

function FloatingPetals(): JSX.Element | null {
  const prefersReducedMotion = usePrefersReducedMotion();

  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: PETAL_COUNT }, (_, index) => ({
      id: index,
      leftPercent: Math.round(Math.random() * 100),
      sizePx: 8 + Math.round(Math.random() * 10),
      durationSeconds: 18 + Math.round(Math.random() * 14),
      delaySeconds: Math.round(Math.random() * 20),
      driftPx: Math.round((Math.random() - 0.5) * 160),
      tone: PETAL_TONES[index % PETAL_TONES.length],
    }));
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="motion-decorative absolute top-0 animate-fall rounded-[60%_40%_60%_40%]"
          style={
            {
              left: `${petal.leftPercent}%`,
              width: `${petal.sizePx}px`,
              height: `${petal.sizePx * 0.8}px`,
              backgroundColor: petal.tone,
              opacity: 0.55,
              animationDuration: `${petal.durationSeconds}s`,
              animationDelay: `${petal.delaySeconds}s`,
              '--drift': `${petal.driftPx}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Section
 * The shared scroll-reveal wrapper every major section uses, so entrance
 * animation is consistent and defined in exactly one place.
 * ---------------------------------------------------------------------- */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps): JSX.Element {
  return (
    <motion.section
      id={id}
      className={`w-full ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}

/* -------------------------------------------------------------------------
 * PageLayout
 * The single controller of global structure: full-viewport background,
 * one centered content container with a sensible max width and responsive
 * padding, and consistent vertical rhythm between sections. Individual
 * sections must not introduce their own outer width/margin — they simply
 * render their content and let PageLayout position them.
 * ---------------------------------------------------------------------- */
interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-ivory">
      <AnimatedBackground />
      <FloatingPetals />
      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col gap-24 px-5 py-16 sm:gap-32 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        {children}
      </div>
    </div>
  );
}
