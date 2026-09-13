import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageLayout, { Section } from './components/PageLayout';
import IntroExperience from './components/IntroExperience';
import StorySection from './components/StorySection';
import MemoryGallery from './components/MemoryGallery';
import { introContent } from './data/content';

export default function App(): JSX.Element {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        {!hasEntered && <IntroExperience key="intro" onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>

      <PageLayout>
        <Section id="entering" className="flex flex-col items-center text-center">
          <p className="font-hand text-xl text-dustyrose sm:text-2xl">welcome to</p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">{introContent.names}</h1>
          <p className="mt-4 max-w-md font-serif text-lg text-ink/70 sm:text-xl">
            A small, unfinished archive of an ordinary, extraordinary love.
          </p>
        </Section>

        <StorySection />
        <MemoryGallery />
      </PageLayout>
    </>
  );
}
