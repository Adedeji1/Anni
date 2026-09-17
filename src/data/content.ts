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

export type PhotoType = 'image' | 'video';

export interface Photo {
  id: string;
  src: string;
  type: PhotoType;
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
    "Sometimes I actually stop and think about how strange this whole thing is. One random yes, one year, and somehow you became such a big part of my life that I can’t really remember what it felt like before you were in it.",
  ],
  signOff: 'Still stuck with me,',
  signature: 'A.',
};

export const leftNote: NoteContent = {
  id: 'note-left',
  text: "Woman of My Dreams Today, Tomorrow and Forever😍😍❤️.",
  rotation: -3,
};

export const rightNote: NoteContent = {
  id: 'note-right',
  text: 'One of the random Moment, Now Golden.',
  rotation: 2,
};

export const leftPhotos: Photo[] = [
  {
    id: 'left-1',
    type: 'image',
    src: 'https://res.cloudinary.com/dzq0ikg4b/video/upload/v1789601070/first_pic_e5y9pm.jpg',
    alt: 'Odunayo and Adedeji during NYSC in Ibadan',
    caption: 'Ibadan, before we knew where this was going',
    rotation: -4,
    size: 'md',
  },
  {
    id: 'left-2',
    type: 'image',
    src: 'https://res.cloudinary.com/dzq0ikg4b/video/upload/v1789601064/first_date_qnsi4n.jpg',
    alt: 'Odunayo and Adedeji after a CDS day',
    caption: 'First Official Date, La Baby, La Cramps 😂😂😭😭',
    rotation: 3,
    size: 'sm',
  },
];

export const rightPhotos: Photo[] = [
  {
    id: 'right-1',
    type: 'video',
    src: 'https://res.cloudinary.com/dzq0ikg4b/video/upload/v1789601086/random_keke_moment_g0sm7c.mp4',
    alt: 'Odunayo and Adedeji going to work during NYSC',
    caption: 'Random Moments, one of many',
    rotation: 4,
    size: 'md',
  },
  {
    id: 'right-2',
    type: 'video',
    src: 'https://res.cloudinary.com/dzq0ikg4b/video/upload/v1789601082/Pop_day_yr2ulw.mp4',
    alt: 'Odunayo and Adedeji on a Sunday after church',
    caption: 'And just like that, NYSC was over, but we were just getting started 😍❤️',
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
    description: 'Ibadan, CDS, work, and one girl I somehow started seeing everywhere.',
  },
  {
    id: 'milestone-2',
    date: 'After NYSC',
    title: 'The distance',
    description: '"Are you home?" suddenly needed transport, planning, and suffering. LDR is wickedness.',
  },
  {
    id: 'milestone-3',
    date: 'One year later',
    title: 'Still here',
    description: 'Still two stubborn people, still choosing each other, still disturbing each other’s peace.',
  },
];

export const closing: ClosingContent = {
  eyebrow: 'One year down',
  lines: ['one year down.', 'still choosing the ordinary days,', 'still choosing you,', '(one year later, and I still Love you like day 1.❤️😂)'],
  signature: '— O. & A.',
};