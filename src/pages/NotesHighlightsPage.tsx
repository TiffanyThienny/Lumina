import React from 'react';
import { Highlighter, Copy, Trash2, BookOpen, MessageSquare } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const NotesHighlightsPage: React.FC = () => {
  const { highlights, deleteHighlight, navigateTo } = useLibrary();

  const colorBadgeMap = {
    yellow: 'bg-[#FCE8B2] text-[#2C2421]',
    green: 'bg-[#D3EBCD] text-[#2C2421]',
    blue: 'bg-[#D4E3FC] text-[#2C2421]',
    rose: 'bg-[#FAD4D8] text-[#2C2421]'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Personal Notebook</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421]">
          Notes & Quotes
        </h1>
        <p className="text-xs sm:text-sm text-[#5E504A]">
          Your highlighted excerpts, reflections, and annotations across all books.
        </p>
      </div>

      {highlights.length === 0 ? (
        <div className="text-center py-20 bg-[#FAF0E6] rounded-3xl border border-[#E8DACD] space-y-3">
          <Highlighter size={40} className="text-[#8C7B73] mx-auto opacity-50" />
          <h3 className="font-serif text-xl font-semibold text-[#2C2421]">No highlights yet</h3>
          <p className="text-xs text-[#5E504A]">Highlight text while reading inside the reader view to save quotes and add notes.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {highlights.map((hl) => (
            <div
              key={hl.id}
              className="p-6 rounded-3xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] transition-smooth space-y-4"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${colorBadgeMap[hl.color]}`}>
                    {hl.color} highlight
                  </span>
                  <span className="text-xs text-[#8C7B73] font-serif italic">
                    {hl.bookTitle} • {hl.chapterTitle}
                  </span>
                </div>

                <span className="text-[11px] text-[#8C7B73] font-mono">
                  {hl.createdAt}
                </span>
              </div>

              {/* Highlighted Text */}
              <blockquote className="font-serif text-sm sm:text-base text-[#2C2421] italic leading-relaxed bg-[#FFF8E7] p-4 rounded-2xl border-l-4 border-[#CDB891]">
                "{hl.text}"
              </blockquote>

              {/* Personal Note if exists */}
              {hl.note && (
                <div className="flex items-start gap-2 bg-[#FAF0E6] p-3 rounded-xl text-xs text-[#5E504A] border border-[#E8DACD]">
                  <MessageSquare size={15} className="text-[#8C7355] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C2421] block mb-0.5">Note:</span>
                    <span>{hl.note}</span>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-[#E8DACD]/60 text-xs">
                <button
                  onClick={() => navigateTo('reader', hl.bookId)}
                  className="text-[#8C7355] hover:underline font-medium flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen size={14} />
                  <span>Jump to Chapter in Reader</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(hl.text)}
                    className="p-1.5 text-[#8C7B73] hover:text-[#2C2421] transition-smooth cursor-pointer"
                    title="Copy Quote"
                  >
                    <Copy size={15} />
                  </button>
                  <button
                    onClick={() => deleteHighlight(hl.id)}
                    className="p-1.5 text-[#8C7B73] hover:text-rose-700 transition-smooth cursor-pointer"
                    title="Delete Note"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
