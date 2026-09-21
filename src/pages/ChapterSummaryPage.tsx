import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Volume2, ArrowLeft } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const ChapterSummaryPage: React.FC = () => {
  const { activeBook, navigateTo, playAudioTrack } = useLibrary();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const book = activeBook;

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      <button
        onClick={() => navigateTo('ai-summary', book.id)}
        className="inline-flex items-center gap-2 text-xs font-medium text-[#8C7B73] hover:text-[#2C2421] transition-smooth cursor-pointer"
      >
        <ArrowLeft size={16} />
        <span>Back to Summary Overview</span>
      </button>

      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Detailed Breakdown</span>
        <h1 className="font-serif text-3xl font-semibold text-[#2C2421]">
          Chapter-by-Chapter Summaries
        </h1>
        <p className="text-xs text-[#5E504A]">
          {book.title} by {book.author} ({book.chapters.length} Chapters)
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {book.chapters.map((ch, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={ch.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded 
                  ? 'bg-[#FAF0E6] border-[#CDB891] shadow-soft' 
                  : 'bg-[#FAF0E6]/70 border-[#E8DACD] hover:border-[#CDB891]'
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase text-[#8C7355]">
                    Chapter {ch.number}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#2C2421]">
                    {ch.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-[#8C7B73] font-mono hidden sm:inline">
                    {ch.readingTime}
                  </span>
                  <div className="p-2 rounded-full bg-[#FAEBD7] text-[#8C7355]">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 space-y-5 border-t border-[#E8DACD]/60 animate-fade-in">
                  <p className="text-xs sm:text-sm text-[#5E504A] leading-relaxed italic bg-[#FFF8E7] p-4 rounded-xl border border-[#E8DACD]">
                    "{ch.summary}"
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase text-[#8C7B73] tracking-wider">
                      Key Takeaways from Chapter {ch.number}
                    </h4>
                    <ul className="space-y-2">
                      {ch.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs text-[#5E504A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355] mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => navigateTo('reader', book.id)}
                      className="px-5 py-2.5 rounded-full bg-[#2C2421] text-[#FFF8E7] text-xs font-semibold hover:bg-[#4A3E3D] transition-smooth flex items-center gap-2 cursor-pointer"
                    >
                      <BookOpen size={15} />
                      <span>Read Full Chapter</span>
                    </button>

                    {book.isAudioAvailable && (
                      <button
                        onClick={() => playAudioTrack(book, 'chapter', `Chapter ${ch.number}: ${ch.title}`)}
                        className="px-4 py-2.5 rounded-full bg-[#FAEBD7] text-[#5E504A] border border-[#E8DACD] hover:bg-[#F7E7CE] text-xs font-medium transition-smooth flex items-center gap-2 cursor-pointer"
                      >
                        <Volume2 size={15} className="text-[#8C7355]" />
                        <span>Listen</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
