import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Volume2, 
  Clock
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import type { Category } from '../types';

export const HomePage: React.FC = () => {
  const { 
    books, 
    navigateTo, 
    favoriteIds, 
    toggleFavorite, 
    playAudioTrack
  } = useLibrary();

  // Primary featured reading book
  const continuingBook = books[0];

  const categories: Category[] = [
    'Fiction',
    'Self Development',
    'Technology',
    'Science',
    'Business',
    'Education',
    'Psychology',
    'History'
  ];

  const quickReads = books.slice(0, 4);
  const recentReads = books.slice(1, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-12 animate-fade-in">
      {/* Editorial Greeting Header */}
      <div className="space-y-4 text-center sm:text-left">
        <span className="editorial-tag text-[#8C7355] bg-[#F7E7CE]">
          Welcome back
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C2421] tracking-tight leading-tight">
          Good evening, what would you like to read?
        </h1>
        <p className="text-sm sm:text-base text-[#5E504A] font-normal max-w-2xl">
          Step into your peaceful sanctuary. Discover wisdom, resume your journey, or reflect with your AI reading companion.
        </p>
      </div>

      {/* CONTINUE READING - Editorial Feature Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B73]">
            Continue Reading
          </h2>
          <span className="text-xs font-medium text-[#8C7355]">
            Last opened 2 hours ago
          </span>
        </div>

        {/* Feature Banner - Subtle Warm Background */}
        <div className="bg-[#FAF0E6] border border-[#E8DACD] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 transition-smooth hover:border-[#CDB891]/60">
          {/* Visual Book Cover */}
          <div 
            className="w-40 h-56 sm:w-48 sm:h-64 rounded-2xl shadow-xl shrink-0 flex flex-col justify-between p-6 text-center cursor-pointer transition-transform hover:scale-102 border border-black/10"
            style={{ background: continuingBook.coverBg }}
            onClick={() => navigateTo('reader', continuingBook.id)}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CDB891] opacity-80">
              {continuingBook.category}
            </span>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg leading-tight" style={{ color: continuingBook.coverTextColor || '#FAF0E6' }}>
                {continuingBook.title}
              </h3>
              <p className="text-xs opacity-75 font-serif italic" style={{ color: continuingBook.coverTextColor || '#FAF0E6' }}>
                {continuingBook.author}
              </p>
            </div>
            <span className="text-[11px] font-mono opacity-60 text-white">
              {continuingBook.publicationYear}
            </span>
          </div>

          {/* Book Content Summary & Progress */}
          <div className="flex-1 space-y-6 w-full text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="editorial-tag text-[#8C7355]">
                  Chapter {continuingBook.progress.chapterIndex + 1}
                </span>
                <span className="text-xs text-[#8C7B73]">
                  • Page {continuingBook.progress.pageNumber} of {continuingBook.totalPages}
                </span>
              </div>
              <h3 
                onClick={() => navigateTo('book-detail', continuingBook.id)}
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer"
              >
                {continuingBook.title}
              </h3>
              <p className="text-sm text-[#8C7B73] font-serif italic mb-3">
                by {continuingBook.author}
              </p>
              <p className="text-xs sm:text-sm text-[#5E504A] line-clamp-3 leading-relaxed">
                {continuingBook.description}
              </p>
            </div>

            {/* Reading Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#8C7B73] font-medium">
                <span>Reading Progress</span>
                <span>{continuingBook.progress.percent}%</span>
              </div>
              <div className="w-full h-2 bg-[#F7E7CE] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#8C7355] rounded-full transition-all duration-500"
                  style={{ width: `${continuingBook.progress.percent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={() => navigateTo('reader', continuingBook.id)}
                className="px-6 py-3 rounded-full bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] text-xs font-semibold transition-smooth flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <BookOpen size={16} />
                <span>Continue Reading</span>
              </button>

              <button
                onClick={() => navigateTo('ai-summary', continuingBook.id)}
                className="px-5 py-3 rounded-full bg-[#FAEBD7] text-[#5E504A] hover:bg-[#F7E7CE] border border-[#CDB891]/40 text-xs font-medium transition-smooth flex items-center gap-2 cursor-pointer"
              >
                <Sparkles size={15} className="text-[#8C7355]" />
                <span>AI Summary</span>
              </button>

              <button
                onClick={() => playAudioTrack(continuingBook, 'book')}
                className="p-3 rounded-full bg-[#FAEBD7] text-[#5E504A] hover:bg-[#F7E7CE] border border-[#CDB891]/40 text-xs font-medium transition-smooth cursor-pointer"
                title="Listen to Audio"
              >
                <Volume2 size={16} className="text-[#8C7355]" />
              </button>

              <button
                onClick={() => toggleFavorite(continuingBook.id)}
                className={`p-3 rounded-full border border-[#CDB891]/40 transition-smooth cursor-pointer ${
                  favoriteIds.includes(continuingBook.id)
                    ? 'bg-[#FFE4C4] text-[#8C7355]'
                    : 'bg-[#FAEBD7] text-[#8C7B73] hover:text-[#8C7355]'
                }`}
                title="Favorite"
              >
                <Heart size={16} fill={favoriteIds.includes(continuingBook.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="editorial-divider" />

      {/* EXPLORE CATEGORIES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B73]">
            Explore Genres
          </h2>
          <button 
            onClick={() => navigateTo('discover')}
            className="text-xs font-medium text-[#8C7355] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => navigateTo('discover')}
              className="px-4 py-2 rounded-full bg-[#FAF0E6] border border-[#E8DACD] text-xs font-medium text-[#5E504A] hover:bg-[#F7E7CE] hover:text-[#2C2421] transition-smooth shrink-0 cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* QUICK READS (SUMMARIES AVAILABLE) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C2421]">
              Quick Reads & AI Insights
            </h2>
            <p className="text-xs text-[#5E504A] mt-0.5">
              Distilled wisdom ready in 5-minute summaries
            </p>
          </div>
          <button 
            onClick={() => navigateTo('ai-summary')}
            className="text-xs font-medium text-[#8C7355] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>See Summaries</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Book Grid - Quiet Editorial Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickReads.map((book) => (
            <div 
              key={book.id}
              className="group flex flex-col justify-between p-4 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] transition-smooth"
            >
              <div>
                {/* Book Cover Thumbnail */}
                <div 
                  onClick={() => navigateTo('book-detail', book.id)}
                  className="w-full h-44 rounded-xl mb-4 shadow-sm flex flex-col justify-between p-4 text-center cursor-pointer group-hover:scale-101 transition-transform border border-black/5"
                  style={{ background: book.coverBg }}
                >
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#CDB891]">
                    {book.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm leading-tight line-clamp-2" style={{ color: book.coverTextColor || '#FAF0E6' }}>
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
              <div className="pt-4 mt-4 border-t border-[#E8DACD]/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#8C7B73] flex items-center gap-1">
                  <Clock size={13} />
                  {book.readingTime}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => navigateTo('ai-summary', book.id)}
                    className="p-1.5 rounded-lg text-[#8C7355] hover:bg-[#F7E7CE] transition-smooth cursor-pointer"
                    title="View Summary"
                  >
                    <Sparkles size={15} />
                  </button>
                  <button
                    onClick={() => navigateTo('reader', book.id)}
                    className="p-1.5 rounded-lg text-[#2C2421] hover:bg-[#F7E7CE] transition-smooth cursor-pointer"
                    title="Read Book"
                  >
                    <BookOpen size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENTLY READ & HISTORY TIMELINE */}
      <section className="space-y-4 bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD]">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold text-[#2C2421]">
            Recently Opened
          </h2>
          <button
            onClick={() => navigateTo('history')}
            className="text-xs font-medium text-[#8C7355] hover:underline cursor-pointer"
          >
            View History
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentReads.map((book) => (
            <div
              key={book.id}
              onClick={() => navigateTo('reader', book.id)}
              className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FFF8E7] border border-[#E8DACD] hover:border-[#CDB891] transition-smooth cursor-pointer"
            >
              <div 
                className="w-12 h-16 rounded-lg shrink-0 flex items-center justify-center p-1 text-center border border-black/5"
                style={{ background: book.coverBg }}
              >
                <BookOpen size={16} className="text-white/80" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm font-semibold text-[#2C2421] truncate">
                  {book.title}
                </h4>
                <p className="text-xs text-[#8C7B73] truncate">
                  {book.author}
                </p>
                <div className="mt-2 w-full h-1 bg-[#F7E7CE] rounded-full overflow-hidden">
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
