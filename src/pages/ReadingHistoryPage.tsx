import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const ReadingHistoryPage: React.FC = () => {
  const { readingHistory, navigateTo } = useLibrary();

  const periods = ['Today', 'Yesterday', 'This Week', 'Earlier'] as const;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Timeline</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421]">
          Reading History
        </h1>
        <p className="text-xs sm:text-sm text-[#5E504A]">
          Track your personal reading journey across chapters and books.
        </p>
      </div>

      <div className="space-y-8">
        {periods.map((period) => {
          const items = readingHistory.filter(h => h.timePeriod === period);
          if (items.length === 0) return null;

          return (
            <div key={period} className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B73] border-b border-[#E8DACD] pb-2">
                {period}
              </h2>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] transition-smooth flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      {/* Cover Thumbnail */}
                      <div
                        className="w-12 h-16 rounded-xl shadow-xs shrink-0 flex items-center justify-center text-center border border-black/5"
                        style={{ background: item.coverBg }}
                      >
                        <BookOpen size={16} className="text-white/80" />
                      </div>

                      <div className="space-y-1">
                        <h3 
                          onClick={() => navigateTo('reader', item.bookId)}
                          className="font-serif text-base font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer"
                        >
                          {item.bookTitle}
                        </h3>
                        <p className="text-xs text-[#8C7B73]">by {item.author}</p>
                        <p className="text-xs font-serif italic text-[#5E504A]">
                          Last read: {item.chapterTitle} ({item.percent}%)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      <span className="text-[11px] text-[#8C7B73] font-mono">
                        {item.lastOpened}
                      </span>
                      <button
                        onClick={() => navigateTo('reader', item.bookId)}
                        className="px-4 py-2 rounded-full bg-[#2C2421] text-[#FFF8E7] text-xs font-semibold hover:bg-[#4A3E3D] transition-smooth flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Continue</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
