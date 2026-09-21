import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Volume2, 
  Heart, 
  ChevronRight, 
  MessageSquare,
  ArrowLeft,
  BookmarkCheck
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const BookDetailPage: React.FC = () => {
  const { 
    activeBook, 
    navigateTo, 
    favoriteIds, 
    toggleFavorite, 
    savedSummaryIds, 
    toggleSaveSummary, 
    playAudioTrack 
  } = useLibrary();

  const [activeTab, setActiveTab] = useState<'book' | 'summary' | 'chapters' | 'audio'>('book');

  const book = activeBook;
  const isFav = favoriteIds.includes(book.id);
  const isSummarySaved = savedSummaryIds.includes(book.id);
  const cleanBookTitle = book.title.replace(/\.(pdf|epub)$/i, '').replace(/_/g, ' ');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-10 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={() => navigateTo('discover')}
        className="inline-flex items-center gap-2 text-xs font-medium text-[#8C7B73] hover:text-[#2C2421] transition-smooth cursor-pointer"
      >
        <ArrowLeft size={16} />
        <span>Back to Discover</span>
      </button>

      {/* Book Hero Header - Editorial Split Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
        {/* Book Cover */}
        <div className="w-56 h-80 sm:w-64 sm:h-92 rounded-2xl shadow-xl shrink-0 flex flex-col justify-between p-6 sm:p-8 text-center border border-black/10 relative overflow-hidden"
          style={{ background: book.coverBg }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#CDB891]">
            {book.category}
          </span>

          <div className="space-y-2 max-w-full">
            <h1 className="font-serif font-bold text-xl sm:text-2xl leading-snug break-words line-clamp-4 px-1" style={{ color: book.coverTextColor || '#FAF0E6' }}>
              {cleanBookTitle}
            </h1>
            <p className="text-xs sm:text-sm font-serif italic text-white/80 truncate">
              {book.author}
            </p>
          </div>

          <div className="text-[11px] font-mono text-white/60">
            {book.publicationYear} Edition
          </div>
        </div>

        {/* Book Info & Actions */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="editorial-tag text-[#8C7355]">{book.category}</span>
              <span className="text-xs text-[#8C7B73]">• {book.readingTime}</span>
              <span className="text-xs text-[#8C7B73]">• {book.totalPages} Pages</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421] tracking-tight">
              {cleanBookTitle}
            </h1>
            <p className="text-base text-[#8C7B73] font-serif italic mt-1">
              by {book.author}
            </p>
          </div>

          <p className="text-sm text-[#5E504A] leading-relaxed">
            {book.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              onClick={() => navigateTo('reader', book.id)}
              className="px-6 py-3 rounded-full bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] text-xs font-semibold transition-smooth flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <BookOpen size={16} />
              <span>{book.progress.percent > 0 ? 'Continue Reading' : 'Start Reading'}</span>
            </button>

            <button
              onClick={() => navigateTo('ai-summary', book.id)}
              className="px-5 py-3 rounded-full bg-[#F7E7CE] text-[#8C7355] hover:bg-[#CDB891] hover:text-[#2C2421] border border-[#CDB891]/40 text-xs font-medium transition-smooth flex items-center gap-2 cursor-pointer"
            >
              <Sparkles size={16} />
              <span>Read AI Summary</span>
            </button>

            <button
              onClick={() => navigateTo('ai-qa', book.id)}
              className="px-5 py-3 rounded-full bg-[#FAF0E6] text-[#5E504A] hover:bg-[#FAEBD7] border border-[#E8DACD] text-xs font-medium transition-smooth flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare size={16} className="text-[#8C7355]" />
              <span>Ask AI</span>
            </button>

            {/* TTS Options: Full Book vs Summary Audio */}
            {book.isAudioAvailable && (
              <div className="flex items-center gap-1.5 bg-[#FAF0E6] p-1 rounded-full border border-[#E8DACD]">
                <button
                  onClick={() => playAudioTrack(book, 'book', `${cleanBookTitle} (Full Book)`)}
                  className="px-3.5 py-2 rounded-full hover:bg-[#F7E7CE] text-[#5E504A] text-xs font-medium transition-smooth flex items-center gap-1.5 cursor-pointer"
                  title="Listen Full Book Audio"
                >
                  <Volume2 size={15} className="text-[#8C7355]" />
                  <span>Full Audio</span>
                </button>
                <button
                  onClick={() => playAudioTrack(book, 'summary', `${cleanBookTitle} (AI Summary)`)}
                  className="px-3.5 py-2 rounded-full hover:bg-[#F7E7CE] text-[#8C7355] text-xs font-semibold transition-smooth flex items-center gap-1.5 cursor-pointer"
                  title="Listen AI Summary Audio"
                >
                  <Sparkles size={14} />
                  <span>Summary Audio</span>
                </button>
              </div>
            )}

            <button
              onClick={() => toggleFavorite(book.id)}
              className={`p-3 rounded-full border border-[#E8DACD] transition-smooth cursor-pointer ${
                isFav ? 'bg-[#FFE4C4] text-[#8C7355]' : 'bg-[#FAF0E6] text-[#8C7B73] hover:text-[#8C7355]'
              }`}
              title="Favorite"
            >
              <Heart size={16} fill={isFav ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      <hr className="editorial-divider" />

      {/* Tabs Navigation */}
      <div className="space-y-6">
        <div className="flex border-b border-[#E8DACD] gap-8">
          {(['book', 'summary', 'chapters', 'audio'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-xs sm:text-sm font-medium uppercase tracking-wider transition-smooth border-b-2 cursor-pointer ${
                activeTab === tab 
                  ? 'border-[#8C7355] text-[#2C2421] font-semibold' 
                  : 'border-transparent text-[#8C7B73] hover:text-[#2C2421]'
              }`}
            >
              {tab === 'book' && 'Book Details'}
              {tab === 'summary' && 'AI Summary Preview'}
              {tab === 'chapters' && `Chapters (${book.chapters.length})`}
              {tab === 'audio' && 'Audiobook'}
            </button>
          ))}
        </div>

        {/* Tab 1: Book Description & Info */}
        {activeTab === 'book' && (
          <div className="space-y-6 bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD]">
            <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
              About this Book
            </h3>
            <p className="text-sm text-[#5E504A] leading-relaxed">
              {book.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E8DACD]">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8C7B73]">Category</span>
                <p className="text-xs font-semibold text-[#2C2421] mt-0.5">{book.category}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8C7B73]">Publication</span>
                <p className="text-xs font-semibold text-[#2C2421] mt-0.5">{book.publicationYear}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8C7B73]">Estimated Time</span>
                <p className="text-xs font-semibold text-[#2C2421] mt-0.5">{book.readingTime}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8C7B73]">Audio Format</span>
                <p className="text-xs font-semibold text-[#2C2421] mt-0.5">{book.isAudioAvailable ? 'Available' : 'Text Only'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Summary Preview */}
        {activeTab === 'summary' && (
          <div className="space-y-6 bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#8C7355]" />
                <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
                  AI Key Takeaways
                </h3>
              </div>
              <button
                onClick={() => toggleSaveSummary(book.id)}
                className={`text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-smooth cursor-pointer ${
                  isSummarySaved ? 'bg-[#CDB891] text-[#2C2421] font-semibold' : 'bg-[#FAEBD7] text-[#5E504A] hover:bg-[#F7E7CE]'
                }`}
              >
                <BookmarkCheck size={14} />
                <span>{isSummarySaved ? 'Saved Summary' : 'Save Summary'}</span>
              </button>
            </div>

            <p className="text-sm text-[#5E504A] italic leading-relaxed bg-[#FFF8E7] p-4 rounded-xl border border-[#E8DACD]">
              "{book.summary.quickOverview}"
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[#8C7B73] uppercase tracking-wider">Main Ideas</h4>
              <ul className="space-y-2">
                {book.summary.mainIdeas.map((idea, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#5E504A]">
                    <span className="w-5 h-5 rounded-full bg-[#F7E7CE] text-[#8C7355] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigateTo('ai-summary', book.id)}
              className="w-full py-3 rounded-xl bg-[#8C7355] text-[#FFF8E7] hover:bg-[#755F43] text-xs font-semibold transition-smooth text-center cursor-pointer"
            >
              Read Full Detailed AI Summary
            </button>
          </div>
        )}

        {/* Tab 3: Chapters List */}
        {activeTab === 'chapters' && (
          <div className="space-y-4">
            {book.chapters.map((ch) => (
              <div
                key={ch.id}
                className="p-5 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] transition-smooth flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase text-[#8C7355]">
                    Chapter {ch.number}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#2C2421]">
                    {ch.title}
                  </h4>
                  <p className="text-xs text-[#5E504A] line-clamp-1">
                    {ch.summary}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-[#8C7B73] font-mono hidden sm:inline">
                    {ch.readingTime}
                  </span>
                  <button
                    onClick={() => navigateTo('reader', book.id)}
                    className="p-2.5 rounded-full bg-[#F7E7CE] text-[#2C2421] hover:bg-[#CDB891] transition-smooth cursor-pointer"
                    title="Read Chapter"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Audio Player Option */}
        {activeTab === 'audio' && (
          <div className="space-y-6 bg-[#FAF0E6] p-8 rounded-3xl border border-[#E8DACD] text-center">
            <div className="w-16 h-16 rounded-full bg-[#F7E7CE] text-[#8C7355] mx-auto flex items-center justify-center">
              <Volume2 size={28} />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
                Narrated Audio Experience
              </h3>
              <p className="text-xs text-[#5E504A]">
                Full Duration: {book.audioDuration || '3 hrs 45 mins'} • AI Summary Duration: ~7 mins • Lumina TTS Engine
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => playAudioTrack(book, 'book', `${cleanBookTitle} (Full Book)`)}
                className="px-8 py-3.5 rounded-full bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] text-xs font-semibold transition-smooth inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Volume2 size={16} />
                <span>Listen Full Book Narration</span>
              </button>

              <button
                onClick={() => playAudioTrack(book, 'summary', `${cleanBookTitle} (AI Summary)`)}
                className="px-8 py-3.5 rounded-full bg-[#F7E7CE] text-[#8C7355] hover:bg-[#CDB891] hover:text-[#2C2421] text-xs font-semibold transition-smooth inline-flex items-center gap-2 cursor-pointer border border-[#CDB891]/50"
              >
                <Sparkles size={16} />
                <span>Listen AI Summary Audio</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
