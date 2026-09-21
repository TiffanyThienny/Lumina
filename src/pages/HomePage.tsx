import React from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Heart, 
  Volume2, 
  Clock, 
  Flame,
  Compass,
  Headphones,
  CheckCircle2,
  User,
  Cpu,
  Atom,
  Briefcase,
  GraduationCap,
  Brain,
  Landmark
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import type { Category } from '../types';

export const HomePage: React.FC = () => {
  const { 
    books, 
    navigateTo, 
    favoriteIds, 
    toggleFavorite, 
    playAudioTrack,
    savedSummaryIds
  } = useLibrary();

  // Primary featured reading book
  const continuingBook = books[0];

  const categories: { name: Category; icon: React.ReactNode }[] = [
    { name: 'Fiction', icon: <BookOpen size={14} /> },
    { name: 'Self Development', icon: <User size={14} /> },
    { name: 'Technology', icon: <Cpu size={14} /> },
    { name: 'Science', icon: <Atom size={14} /> },
    { name: 'Business', icon: <Briefcase size={14} /> },
    { name: 'Education', icon: <GraduationCap size={14} /> },
    { name: 'Psychology', icon: <Brain size={14} /> },
    { name: 'History', icon: <Landmark size={14} /> }
  ];

  const quickReads = books.slice(0, 4);
  const recentReads = books.slice(1, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-12 animate-fade-in">
      {/* Editorial Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FAF0E6] via-[#FAEBD7] to-[#F7E7CE] border border-[#CDB891]/60 p-6 sm:p-10 shadow-sm">
        {/* Decorative Background Pattern */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#CDB891]/10 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 -mb-20 w-64 h-64 rounded-full bg-[#8C7355]/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="editorial-tag shadow-xs">
              Elunè Sanctuary
            </span>
            <span className="text-xs text-[#8C7B73] font-mono">
              • Quiet Evening Session
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2421] tracking-tight leading-tight max-w-3xl">
            Good evening, Eleanor. <br />
            <span className="text-[#8C7355] font-serif italic text-2xl sm:text-3xl lg:text-4xl font-normal">
              Where shall your mind wander today?
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-[#5E504A] font-normal max-w-2xl leading-relaxed">
            Welcome to your distraction-free digital library. Immerse yourself in Stoic wisdom, explore book summaries, or continue your peaceful reading room journey.
          </p>

          {/* Quick Live Stats Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#8C7B73] font-medium border-t border-[#CDB891]/30">
            <div className="flex items-center gap-1.5">
              <BookOpen size={14} className="text-[#8C7355]" />
              <span>1 Active Book</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen size={14} className="text-[#8C7355]" />
              <span>{savedSummaryIds.length} Saved Summaries</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Headphones size={14} className="text-[#8C7355]" />
              <span>Audio Narrator Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUE READING - Featured Physical Book Banner */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-[#8C7355]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B73]">
              Continue Reading
            </h2>
          </div>
          <span className="text-xs font-medium text-[#8C7355]">
            Last read 2 hours ago
          </span>
        </div>

        {/* Feature Banner */}
        <div className="bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 shadow-soft">
          {/* Visual Physical 3D Book Cover */}
          <div 
            className="w-44 h-64 sm:w-52 sm:h-72 rounded-2xl shadow-book book-spine shrink-0 flex flex-col justify-between p-6 text-center cursor-pointer transition-transform hover:-translate-y-1.5 hover:shadow-2xl border border-black/10 relative overflow-hidden group"
            style={{ background: continuingBook.coverBg }}
            onClick={() => navigateTo('reader', continuingBook.id)}
          >
            {/* Subtle Metallic Foil Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-70 group-hover:opacity-90 transition-opacity" />

            <span className="relative z-10 text-[10px] font-semibold uppercase tracking-widest text-[#CDB891]">
              {continuingBook.category}
            </span>

            <div className="relative z-10 space-y-1">
              <h3 className="font-serif font-bold text-lg sm:text-xl leading-tight drop-shadow-xs" style={{ color: continuingBook.coverTextColor || '#FAF0E6' }}>
                {continuingBook.title}
              </h3>
              <p className="text-xs opacity-85 font-serif italic" style={{ color: continuingBook.coverTextColor || '#FAF0E6' }}>
                {continuingBook.author}
              </p>
            </div>

            <span className="relative z-10 text-[10px] font-mono opacity-70 text-white">
              {continuingBook.publicationYear} Edition
            </span>
          </div>

          {/* Book Details & Progress */}
          <div className="flex-1 space-y-6 w-full text-center md:text-left">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="editorial-tag text-[#8C7355]">
                  Chapter {continuingBook.progress.chapterIndex + 1}
                </span>
                <span className="text-xs text-[#8C7B73]">
                  • Page {continuingBook.progress.pageNumber} of {continuingBook.totalPages}
                </span>
              </div>

              <h3 
                onClick={() => navigateTo('book-detail', continuingBook.id)}
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer"
              >
                {continuingBook.title}
              </h3>
              <p className="text-sm text-[#8C7B73] font-serif italic mt-1 mb-3">
                by {continuingBook.author}
              </p>
              <p className="text-xs sm:text-sm text-[#5E504A] line-clamp-3 leading-relaxed">
                {continuingBook.description}
              </p>
            </div>

            {/* Reading Progress Bar */}
            <div className="space-y-2 bg-[#FFF8E7] p-3.5 rounded-2xl border border-[#E8DACD]">
              <div className="flex justify-between text-xs text-[#8C7B73] font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#8C7355]" />
                  Chapter {continuingBook.progress.chapterIndex + 1}: {continuingBook.chapters[0].title}
                </span>
                <span>{continuingBook.progress.percent}%</span>
              </div>
              <div className="w-full h-2.5 bg-[#FAEBD7] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#CDB891] to-[#8C7355] rounded-full transition-all duration-500 shadow-xs"
                  style={{ width: `${continuingBook.progress.percent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <button
                onClick={() => navigateTo('reader', continuingBook.id)}
                className="px-7 py-3.5 rounded-full bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] text-xs font-semibold transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <BookOpen size={16} />
                <span>Continue Reading</span>
              </button>

              <button
                onClick={() => navigateTo('ai-summary', continuingBook.id)}
                className="px-6 py-3.5 rounded-full bg-[#F7E7CE] text-[#8C7355] hover:bg-[#CDB891] hover:text-[#2C2421] border border-[#CDB891]/40 text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <BookOpen size={15} />
                <span>View Summary</span>
              </button>

              <button
                onClick={() => playAudioTrack(continuingBook, 'book')}
                className="p-3.5 rounded-full bg-[#FAF0E6] text-[#5E504A] hover:bg-[#F7E7CE] border border-[#E8DACD] transition-smooth cursor-pointer"
                title="Listen to Audiobook"
              >
                <Volume2 size={18} className="text-[#8C7355]" />
              </button>

              <button
                onClick={() => toggleFavorite(continuingBook.id)}
                className={`p-3.5 rounded-full border border-[#E8DACD] transition-smooth cursor-pointer ${
                  favoriteIds.includes(continuingBook.id)
                    ? 'bg-[#FFE4C4] text-[#8C7355]'
                    : 'bg-[#FAF0E6] text-[#8C7B73] hover:text-[#8C7355]'
                }`}
                title="Favorite"
              >
                <Heart size={18} fill={favoriteIds.includes(continuingBook.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="editorial-divider" />

      {/* EXPLORE CATEGORIES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass size={16} className="text-[#8C7355]" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B73]">
              Explore Genres
            </h2>
          </div>
          <button 
            onClick={() => navigateTo('discover')}
            className="text-xs font-semibold text-[#8C7355] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View All Genres</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => navigateTo('discover')}
              className="px-4 py-2.5 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] text-xs font-medium text-[#5E504A] hover:bg-[#F7E7CE] hover:text-[#2C2421] hover:border-[#CDB891] transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span className="text-[#8C7355]">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* QUICK READS & AI INSIGHTS GRID */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2421]">
              Quick Reads & AI Insights
            </h2>
            <p className="text-xs text-[#5E504A] mt-0.5">
              Distilled wisdom ready in 5-minute summaries
            </p>
          </div>
          <button 
            onClick={() => navigateTo('ai-summary')}
            className="text-xs font-semibold text-[#8C7355] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>See All Summaries</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickReads.map((book) => (
            <div 
              key={book.id}
              className="group flex flex-col justify-between p-4 rounded-3xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Book Cover Thumbnail */}
                <div 
                  onClick={() => navigateTo('book-detail', book.id)}
                  className="w-full h-48 rounded-2xl mb-4 shadow-sm book-spine flex flex-col justify-between p-4 text-center cursor-pointer group-hover:-translate-y-1 transition-transform border border-black/5 relative overflow-hidden"
                  style={{ background: book.coverBg }}
                >
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#CDB891]">
                    {book.category}
                  </span>
                  <h4 className="font-serif font-bold text-base leading-tight line-clamp-2" style={{ color: book.coverTextColor || '#FAF0E6' }}>
                    {book.title}
                  </h4>
                  <span className="text-[10px] font-serif italic text-white/70">
                    {book.author}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 
                    onClick={() => navigateTo('book-detail', book.id)}
                    className="font-serif text-base font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer line-clamp-1"
                  >
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#8C7B73]">by {book.author}</p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 mt-4 border-t border-[#E8DACD]/70 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#8C7B73] flex items-center gap-1 font-mono">
                  <Clock size={13} />
                  {book.readingTime}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => navigateTo('ai-summary', book.id)}
                    className="px-3 py-1.5 rounded-xl bg-[#F7E7CE] text-[#8C7355] hover:bg-[#CDB891] hover:text-[#2C2421] transition-smooth font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen size={13} />
                    <span>Summary</span>
                  </button>

                  <button
                    onClick={() => navigateTo('reader', book.id)}
                    className="p-2 rounded-xl bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] transition-smooth cursor-pointer"
                    title="Read Book"
                  >
                    <BookOpen size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENTLY READ TIMELINE */}
      <section className="space-y-4 bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD]">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold text-[#2C2421]">
            Recently Opened
          </h2>
          <button
            onClick={() => navigateTo('history')}
            className="text-xs font-semibold text-[#8C7355] hover:underline cursor-pointer"
          >
            View History
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentReads.map((book) => (
            <div
              key={book.id}
              onClick={() => navigateTo('reader', book.id)}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF8E7] border border-[#E8DACD] hover:border-[#CDB891] transition-smooth cursor-pointer group"
            >
              <div 
                className="w-12 h-16 rounded-xl shrink-0 flex items-center justify-center p-1 text-center border border-black/5 shadow-xs"
                style={{ background: book.coverBg }}
              >
                <BookOpen size={16} className="text-white/80" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm font-semibold text-[#2C2421] truncate group-hover:text-[#8C7355] transition-smooth">
                  {book.title}
                </h4>
                <p className="text-xs text-[#8C7B73] truncate">
                  {book.author}
                </p>
                <div className="mt-2 w-full h-1.5 bg-[#F7E7CE] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#8C7355] rounded-full"
                    style={{ width: `${book.progress.percent || 20}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
