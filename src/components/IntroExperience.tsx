import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { Heart } from 'lucide-react';
import { introContent } from '../data/content';

type EnvelopeStage = 'closed' | 'opening' | 'revealed';

interface IntroExperienceProps {
  onEnter: () => void;
}

const flapVariants: Variants = {
  closed: { rotateX: 0 },
  open: {
    rotateX: -170,
    transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
  },
};

const letterVariants: Variants = {
  hidden: { y: 18, opacity: 0, scale: 0.96 },
  visible: {
    y: -132,
    opacity: 1,
    scale: 1,
    transition: { delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const overlayExitVariants: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

export default function IntroExperience({ onEnter }: IntroExperienceProps): JSX.Element {
  const [stage, setStage] = useState<EnvelopeStage>('closed');
  const prefersReducedMotion = useReducedMotion();

  const handleOpen = (): void => {
    if (stage !== 'closed') {
      return;
    }

    if (prefersReducedMotion) {
      setStage('revealed');
      window.setTimeout(onEnter, 350);
      return;
    }

    setStage('opening');
    window.setTimeout(() => setStage('revealed'), 1500);
    window.setTimeout(onEnter, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="visible"
        animate={stage === 'revealed' ? 'hidden' : 'visible'}
        variants={overlayExitVariants}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ivory px-6"
        style={{ pointerEvents: stage === 'revealed' ? 'none' : 'auto' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, #F0CBD4 0%, transparent 45%), radial-gradient(circle at 82% 15%, #DAD2E6 0%, transparent 50%), radial-gradient(circle at 50% 100%, #E7D6B8 0%, transparent 55%)',
            opacity: 0.85,
          }}
        />

        <div className="relative flex w-full max-w-md flex-col items-center gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="font-display text-3xl tracking-wide text-ink sm:text-4xl">{introContent.names}</p>
            <p className="font-serif text-lg text-burgundy/80">{introContent.date}</p>
            <div className="space-y-0.5 font-serif text-base italic text-ink/70 sm:text-lg">
              {introContent.taglineLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </motion.div>

          <button
            type="button"
            onClick={handleOpen}
            aria-label={`${introContent.cta} the letter from ${introContent.names}`}
            disabled={stage !== 'closed'}
            className="group relative flex flex-col items-center focus:outline-none"
          >
            <div className="relative h-40 w-56 sm:h-44 sm:w-64" style={{ perspective: '1000px' }}>
              {/* Letter peeking out and sliding upward */}
              <motion.div
                variants={letterVariants}
                initial="hidden"
                animate={stage !== 'closed' ? 'visible' : 'hidden'}
                className="absolute left-1/2 top-2 h-32 w-44 -translate-x-1/2 rounded-sm bg-ivory shadow-paper sm:w-52"
              >
               <p className="px-4 pt-6 font-hand text-lg text-ink/70 sm:text-xl">come in, Aadumaadan.</p>
              </motion.div>

              {/* Envelope body */}
              <div className="absolute inset-0 rounded-md bg-champagne shadow-polaroid" />
              <div
                className="absolute inset-x-0 bottom-0 h-full rounded-md"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(122,59,69,0.08) 100%)',
                }}
              />

              {/* Envelope flap */}
              <motion.div
                variants={flapVariants}
                initial="closed"
                animate={stage !== 'closed' ? 'open' : 'closed'}
                className="absolute inset-x-0 top-0 h-1/2 origin-top"
                style={{
                  background: 'linear-gradient(160deg, #E7D6B8 0%, #DDBF9A 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 4px 10px rgba(74,59,61,0.12)',
                }}
              />

              {/* Wax seal */}
              <div className="absolute left-1/2 top-[38%] z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-burgundy p-2 shadow-md">
                <Heart className="h-4 w-4 fill-blush text-blush" aria-hidden="true" />
              </div>
            </div>

            <span className="mt-6 font-serif text-sm uppercase tracking-[0.3em] text-burgundy/80 transition-colors group-hover:text-burgundy">
              {introContent.cta}
            </span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
