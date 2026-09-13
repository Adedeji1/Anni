/**
 * All copy and structured content for the scrapbook lives here.
 * Components should stay purely presentational — this is the single
 * source of truth for "what the page says", so the story can be
 * edited without touching layout code.
 */

export interface IntroContent {
  names: string;
  date: string;
  taglineLines: string[];
  cta: string;
}

export type PhotoSize = 'sm' | 'md' | 'lg';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** Small deliberate tilt, in degrees. Kept subtle: -6 to 6. */
  rotation: number;
  size: PhotoSize;
}

export interface LoveLetterContent {
  salutation: string;
  paragraphs: string[];
  signOff: string;
  signature: string;
}

export interface NoteContent {
  id: string;
  text: string;
  rotation: number;
}

export interface SongContent {
  title: string;
  artist: string;
  durationSeconds: number;
}

export interface ClosingContent {
  eyebrow: string;
  lines: string[];
  signature: string;
}

export interface StoryMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const introContent: IntroContent = {
  names: 'Odunayo & Adedeji',
  date: '18 . 09 . 2025',
  taglineLines: ['one year.', 'Hundreds of memories.', 'One story.'],
  cta: 'Open',
};

export const loveLetter: LoveLetterContent = {
  salutation: 'My love,',
  paragraphs: [
    'Some memories are not measured by time. They are measured by how deeply they remain with us — the smell of rain on the balcony, the way you laugh before the joke is finished, and all the ordinary days that somehow became unforgettable.',
    'I keep these memories here so that neither of us ever forgets how something so simple became something so important.',
    'Every photograph in this little collection is a door back into a day we lived together. I did not save them because they were perfect. I saved them because they were ours.',
  ],
  signOff: 'Always,',
  signature: 'A.',
};

export const leftNote: NoteContent = {
  id: 'note-left',
  text: 'still the best decision I ever made, choosing the window seat next to you.',
  rotation: -3,
};

export const rightNote: NoteContent = {
  id: 'note-right',
  text: 'play this one loud, the way we did in the kitchen that night.',
  rotation: 2,
};

export const leftPhotos: Photo[] = [
  {
    id: 'left-1',
    src: 'https://picsum.photos/seed/amara-chidi-01/460/560',
    alt: 'Amara and Chidi sitting together at the beach at sunset',
    caption: 'the beach, that first summer',
    rotation: -4,
    size: 'md',
  },
  {
    id: 'left-2',
    src: 'https://picsum.photos/seed/amara-chidi-02/420/420',
    alt: 'A close, candid photo taken during a rainy afternoon in Lagos',
    caption: 'rainy Lagos afternoon',
    rotation: 3,
    size: 'sm',
  },
];

export const rightPhotos: Photo[] = [
  {
    id: 'right-1',
    src: 'https://picsum.photos/seed/amara-chidi-03/460/380',
    alt: 'Chidi laughing over a badly lit birthday cake',
    caption: 'your birthday, badly lit cake',
    rotation: 4,
    size: 'md',
  },
  {
    id: 'right-2',
    src: 'https://picsum.photos/seed/amara-chidi-04/420/520',
    alt: 'A quiet moment during the trip they almost cancelled',
    caption: 'the trip we almost cancelled',
    rotation: -3,
    size: 'sm',
  },
];

export const galleryPhotos: Photo[] = [
  {
    id: 'gallery-1',
    src: 'https://picsum.photos/seed/amara-chidi-05/520/650',
    alt: 'Odunayo and Adedeji walking down a quiet street at dusk',
    caption: 'the road back from the market',
    rotation: -3,
    size: 'lg',
  },
  {
    id: 'gallery-2',
    src: 'https://picsum.photos/seed/amara-chidi-06/460/460',
    alt: 'A close-up photo booth strip style picture of the couple laughing',
    caption: 'four frames, one bad joke',
    rotation: 4,
    size: 'sm',
  },
  {
    id: 'gallery-3',
    src: 'https://picsum.photos/seed/amara-chidi-07/480/600',
    alt: 'Odunayo cooking in the kitchen while Adedeji watches',
    caption: 'the night we burned the rice',
    rotation: 2,
    size: 'md',
  },
  {
    id: 'gallery-4',
    src: 'https://picsum.photos/seed/amara-chidi-08/500/380',
    alt: 'A view from the balcony during a storm',
    caption: 'the storm that kept us in',
    rotation: -5,
    size: 'sm',
  },
  {
    id: 'gallery-5',
    src: 'https://picsum.photos/seed/amara-chidi-09/470/610',
    alt: 'Odunayo asleep on the train home',
    caption: 'asleep before the second stop',
    rotation: 3,
    size: 'lg',
  },
  {
    id: 'gallery-6',
    src: 'https://picsum.photos/seed/amara-chidi-10/480/480',
    alt: 'Two coffee cups on a windowsill, one half finished',
    caption: 'sunday mornings, mostly quiet',
    rotation: -2,
    size: 'sm',
  },
  {
    id: 'gallery-7',
    src: 'https://picsum.photos/seed/amara-chidi-11/500/620',
    alt: 'The couple dancing barefoot in the living room',
    caption: 'no reason, just that song',
    rotation: 4,
    size: 'md',
  },
];

export const song: SongContent = {
  title: 'Kitchen Light',
  artist: 'for A., recorded badly on a phone',
  durationSeconds: 194,
};

export const milestones: StoryMilestone[] = [
  {
    id: 'milestone-1',
    date: 'Sep 2025',
    title: 'The window seat',
    description: 'A delayed flight, a borrowed pen, and a conversation neither of us wanted to end.',
  },
  {
    id: 'milestone-2',
    date: 'December 2025',
    title: 'The small flat',
    description: 'Two suitcases, one bad sofa, and the first place that felt like ours.',
  },
  {
    id: 'milestone-3',
    date: 'Year 2026',
    title: 'The long trip',
    description: 'The one we almost cancelled twice, and still talk about the most.',
  },
];

export const closing: ClosingContent = {
  eyebrow: 'For now, and the pages after',
  lines: ["here's to the pages", "we haven't written yet.", 'still choosing you,', 'on repeat.'],
  signature: '— O. & A.',
};
