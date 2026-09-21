import React, { useState } from 'react';
import { 
  BookmarkCheck, 
  Volume2, 
  MessageSquare, 
  ArrowLeft,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const AISummaryPage: React.FC = () => {
  const { 
    activeBook, 
    navigateTo, 
    savedSummaryIds, 
    toggleSaveSummary, 
    playAudioTrack 
  } = useLibrary();

  const [mode, setMode] = useState<'quick' | 'detailed' | 'keyPoints'>('quick');

  const book = activeBook;
  const isSaved = savedSummaryIds.includes(book.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      {/* Back CTA */}
      <button
        onClick={() => navigateTo('book-detail', book.id)}
        className="inline-flex items-center gap-2 text-xs font-medium text-[#8C7B73] hover:text-[#2C2421] transition-smooth cursor-pointer"
      >
        <ArrowLeft size={16} />
        <span>Back to {book.title}</span>
      </button>

      {/* Header Banner */}
      <div className="bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center sm:text-left">
          {/* Small Book Cover Thumbnail */}
          <div 
            className="w-16 h-24 rounded-xl shadow-md shrink-0 flex flex-col justify-center p-2 text-center border border-black/10"
            style={{ background: book.coverBg }}
          >
            <BookOpen size={16} className="text-white/80 mx-auto" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="editorial-tag text-[#8C7355]">AI Reading Companion</span>
              <span className="text-[11px] text-[#8C7B73]">• Generated with AI</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2421]">
              {book.title}
            </h1>
            <p className="text-xs text-[#8C7B73] font-serif italic">
              by {book.author}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleSaveSummary(book.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-smooth cursor-pointer ${
              isSaved ? 'bg-[#CDB891] text-[#2C2421]' : 'bg-[#FFF8E7] text-[#5E504A] border border-[#E8DACD] hover:bg-[#F7E7CE]'
            }`}
          >
            <BookmarkCheck size={15} />
            <span>{isSaved ? 'Saved' : 'Save Summary'}</span>
          </button>

          <button
            onClick={() => playAudioTrack(book, 'summary')}
            className="p-2.5 rounded-full bg-[#FFF8E7] text-[#5E504A] border border-[#E8DACD] hover:bg-[#F7E7CE] transition-smooth cursor-pointer"
            title="Listen to Summary Audio"
          >
            <Volume2 size={16} className="text-[#8C7355]" />
          </button>

          <button
            onClick={() => navigateTo('ai-qa', book.id)}
            className="p-2.5 rounded-full bg-[#FFF8E7] text-[#5E504A] border border-[#E8DACD] hover:bg-[#F7E7CE] transition-smooth cursor-pointer"
            title="Ask AI Q&A"
          >
            <MessageSquare size={16} className="text-[#8C7355]" />
          </button>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center justify-center sm:justify-start gap-2 border-b border-[#E8DACD] pb-3">
        {(['quick', 'detailed', 'keyPoints'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-smooth cursor-pointer ${
              mode === m 
                ? 'bg-[#2C2421] text-[#FFF8E7] font-semibold shadow-xs' 
                : 'bg-[#FAF0E6] text-[#5E504A] border border-[#E8DACD] hover:bg-[#F7E7CE]'
            }`}
          >
            {m === 'quick' && 'Quick Overview'}
            {m === 'detailed' && 'Detailed Summary'}
            {m === 'keyPoints' && 'Key Takeaways'}
          </button>
        ))}
      </div>

      {/* MODE 1: QUICK OVERVIEW */}
      {mode === 'quick' && (
        <div className="space-y-6 bg-[#FAF0E6] p-8 rounded-3xl border border-[#E8DACD]">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
              Core Essence
            </h3>
            <p className="text-base text-[#2C2421] font-serif leading-relaxed italic bg-[#FFF8E7] p-5 rounded-2xl border border-[#E8DACD]">
              "{book.summary.quickOverview}"
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E8DACD]">
            <h3 className="font-serif text-lg font-semibold text-[#2C2421]">
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {book.summary.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FFF8E7] border border-[#E8DACD] space-y-2">
                  <span className="w-6 h-6 rounded-full bg-[#F7E7CE] text-[#8C7355] flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-[#5E504A] leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: DETAILED SUMMARY */}
      {mode === 'detailed' && (
        <div className="space-y-6 bg-[#FAF0E6] p-8 rounded-3xl border border-[#E8DACD]">
          <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
            Chapter-by-Chapter Insight Synthesis
          </h3>

          <div className="space-y-4">
            {book.summary.importantConcepts.map((concept, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FFF8E7] border border-[#E8DACD] space-y-2">
                <h4 className="font-serif text-base font-semibold text-[#8C7355]">
                  {concept.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5E504A] leading-relaxed">
                  {concept.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => navigateTo('chapter-summary', book.id)}
              className="px-6 py-3 rounded-full bg-[#8C7355] text-[#FFF8E7] text-xs font-semibold hover:bg-[#755F43] transition-smooth cursor-pointer"
            >
              Explore Chapter-by-Chapter Breakdowns
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: KEY POINTS */}
      {mode === 'keyPoints' && (
        <div className="space-y-6 bg-[#FAF0E6] p-8 rounded-3xl border border-[#E8DACD]">
          <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
            Essential Principles to Remember
          </h3>

          <ul className="space-y-4">
            {book.summary.mainIdeas.map((idea, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8E7] border border-[#E8DACD]">
                <CheckCircle2 size={20} className="text-[#8C7355] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2C2421] leading-relaxed font-serif">
                  {idea}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
