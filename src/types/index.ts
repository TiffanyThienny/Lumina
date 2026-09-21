export type PageView = 
  | 'home'
  | 'discover'
  | 'book-detail'
  | 'reader'
  | 'ai-summary'
  | 'chapter-summary'
  | 'ai-qa'
  | 'upload'
  | 'my-library'
  | 'favorites'
  | 'history'
  | 'notes-highlights'
  | 'settings';

export type Category = 
  | 'Fiction'
  | 'Self Development'
  | 'Technology'
  | 'Science'
  | 'Business'
  | 'Education'
  | 'Psychology'
  | 'History';

export interface Chapter {
  id: string;
  number: number;
  title: string;
  readingTime: string;
  summary: string;
  keyPoints: string[];
  content: string;
}

export interface BookSummary {
  quickOverview: string;
  mainIdeas: string[];
  keyTakeaways: string[];
  importantConcepts: { title: string; explanation: string }[];
}

export interface PresetQA {
  question: string;
  answer: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: Category;
  coverBg: string; // Tailored warm gradient / CSS cover background style
  coverPattern?: string;
  coverTextColor?: string;
  readingTime: string;
  totalPages: number;
  description: string;
  publicationYear: string;
  isUploaded?: boolean;
  uploadedAt?: string;
  isAudioAvailable: boolean;
  audioDuration?: string;
  audioUrl?: string;
  chapters: Chapter[];
  summary: BookSummary;
  presetQAs: PresetQA[];
  progress: {
    chapterIndex: number;
    pageNumber: number;
    percent: number;
    lastRead: string;
  };
}

export interface Highlight {
  id: string;
  bookId: string;
  bookTitle: string;
  chapterId: string;
  chapterTitle: string;
  text: string;
  color: 'yellow' | 'green' | 'blue' | 'rose';
  note?: string;
  createdAt: string;
}

export interface ReadingHistoryItem {
  id: string;
  bookId: string;
  bookTitle: string;
  author: string;
  coverBg: string;
  chapterTitle: string;
  percent: number;
  lastOpened: string;
  timePeriod: 'Today' | 'Yesterday' | 'This Week' | 'Earlier';
}

export interface ReaderSettings {
  fontFamily: 'Literata' | 'Lora' | 'Merriweather' | 'Source Serif 4';
  fontSize: number; // e.g., 18px
  lineHeight: number; // e.g., 1.75
  theme: 'light' | 'warm' | 'dark';
}

export interface AudioState {
  isPlaying: boolean;
  trackTitle: string;
  bookTitle: string;
  bookId: string;
  coverBg: string;
  currentTime: number;
  duration: number; // in seconds
  speed: 0.75 | 1 | 1.25 | 1.5 | 2;
  isModalOpen: boolean;
  type: 'book' | 'chapter' | 'summary';
}
