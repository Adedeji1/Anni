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
  taglineLines: ['one year.', 'somehow NYSC turned into this.', "and I'm not complaining."],
  cta: 'Open',
};

export const loveLetter: LoveLetterContent = {
  salutation: 'My Aadumaadan,',
  paragraphs: [
    "One year ago I was just a corper trying to survive NYSC in Ibadan, and you were the girl from CDS who somehow ended up walking the same road home as me. I didn't plan for any of this. I don't think you did either.",
    "Most of what I remember isn't dramatic. It's going to work, sitting through CDS, walking you home, talking about nothing until nothing became something. Ordinary days I only recognised as memories after they were already memories.",
    'Sundays were their own thing. Church would end and somehow the rest of the day just became ours — no plan, no agenda, just you, me, and whatever nonsense we found to laugh about.',
    "You're stubborn, you no dey hear word most times, and you can disturb my peace like it's your full-time job. You're also still the one person whose matter I don't joke with. Both things are true.",
    'Then NYSC ended, we picked different schools for our Masters, and suddenly "let me just walk down to see you" became a whole logistics conversation. LDR is wickedness, honestly. But it hasn\'t changed how much I want to see you — just how hard I have to work at it now.',
    "It hasn't all been smooth. We've misunderstood each other, said things we had to walk back, gone quiet when we should have talked. But we kept choosing to sort it out instead of walking away, and that matters more to me than pretending we never fought.",
    "I don't just love the version of us with the big moments. I love the boring Tuesdays, the church Sundays, the arguments we survived — all of it. One year down. Still choosing you, even from this distance.",
  ],
  signOff: 'Still stuck with me,',
  signature: 'A.',
};

export const leftNote: NoteContent = {
  id: 'note-left',
  text: "You no dey hear word 😂 but I still wouldn't trade you for anyone who does.",
  rotation: -3,
};

export const rightNote: NoteContent = {
  id: 'note-right',
  text: 'It is well — our official answer to literally everything.',
  rotation: 2,
};

export const leftPhotos: Photo[] = [
  {
    id: 'left-1',
    src: 'PHOTO_PLACEHOLDER_01',
    alt: 'Odunayo and Adedeji during NYSC in Ibadan',
    caption: 'Ibadan, before we knew where this was going',
    rotation: -4,
    size: 'md',
  },
  {
    id: 'left-2',
    src: 'PHOTO_PLACEHOLDER_02',
    alt: 'Odunayo and Adedeji after a CDS day',
    caption: 'straight from CDS, still in uniform',
    rotation: 3,
    size: 'sm',
  },
];

export const rightPhotos: Photo[] = [
  {
    id: 'right-1',
    src: 'PHOTO_PLACEHOLDER_03',
    alt: 'Odunayo and Adedeji walking home from work during NYSC',
    caption: 'the walk back, one of many',
    rotation: 4,
    size: 'md',
  },
  {
    id: 'right-2',
    src: 'PHOTO_PLACEHOLDER_04',
    alt: 'Odunayo and Adedeji on a Sunday after church',
    caption: 'Sunday, after church, before nothing in particular',
    rotation: -3,
    size: 'sm',
  },
];

export const galleryPhotos: Photo[] = [
  {
    id: 'gallery-1',
    src: 'PHOTO_PLACEHOLDER_05',
    alt: 'Odunayo and Adedeji laughing about nothing in particular',
    caption: "laughing at something neither of us can explain now",
    rotation: -3,
    size: 'lg',
  },
  {
    id: 'gallery-2',
    src: 'PHOTO_PLACEHOLDER_06',
    alt: 'A favourite candid photo of Odunayo',
    caption: "this one's just my favourite, no explanation needed",
    rotation: 4,
    size: 'sm',
  },
  {
    id: 'gallery-3',
    src: 'PHOTO_PLACEHOLDER_07',
    alt: "Odunayo and Adedeji before starting their Master's programmes apart",
    caption: 'right before LDR came to disgrace us',
    rotation: 2,
    size: 'md',
  },
  {
    id: 'gallery-4',
    src: 'PHOTO_PLACEHOLDER_08',
    alt: 'A recent photo of Odunayo and Adedeji despite the distance',
    caption: 'proof we still find our way back to each other',
    rotation: -5,
    size: 'sm',
  },
  {
    id: 'gallery-5',
    src: 'PHOTO_PLACEHOLDER_09',
    alt: 'An ordinary everyday photo of Odunayo and Adedeji',
    caption: 'just an ordinary day, kept anyway',
    rotation: 3,
    size: 'lg',
  },
  {
    id: 'gallery-6',
    src: 'PHOTO_PLACEHOLDER_10',
    alt: 'Odunayo and Adedeji on a quiet Sunday morning',
    caption: 'Sunday mornings, mostly quiet, mostly us',
    rotation: -2,
    size: 'sm',
  },
  {
    id: 'gallery-7',
    src: 'PHOTO_PLACEHOLDER_11',
    alt: 'Odunayo and Adedeji celebrating one year together',
    caption: "one year down, and you're still stuck with me",
    rotation: 4,
    size: 'md',
  },
];

export const song: SongContent = {
  title: 'Ordinary',
  artist: 'Alex Warren',
  durationSeconds: 186,
};

export const milestones: StoryMilestone[] = [
  {
    id: 'milestone-1',
    date: 'NYSC, 2025',
    title: 'How it started',
    description: 'Ibadan, work, CDS, and a walk home that somehow became a habit.',
  },
  {
    id: 'milestone-2',
    date: 'After NYSC',
    title: 'The distance',
    description: '"Let me come see you" turned into an actual plan. LDR is wickedness.',
  },
  {
    id: 'milestone-3',
    date: 'One year later',
    title: 'Still here',
    description: 'Same two stubborn people, still choosing each other — misunderstandings and all.',
  },
];

export const closing: ClosingContent = {
  eyebrow: 'One year down',
  lines: ['one year down.', 'still choosing the ordinary days,', 'still choosing you,', '(you\'re still stuck with me 😂)'],
  signature: '— O. & A.',
};