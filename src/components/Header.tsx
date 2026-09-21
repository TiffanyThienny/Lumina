import React from 'react';
import { Search, Upload, BookOpen } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const Header: React.FC = () => {
  const { currentView, searchQuery, setSearchQuery, navigateTo } = useLibrary();

  // Hide global header inside distraction-free reader screen
  if (currentView === 'reader') {
    return null;
  }

  return (
    <header className="sticky top-0 bg-[#FFF8E7]/90 backdrop-blur-sm z-10 border-b border-[#E8DACD]/50 px-6 py-3.5 flex items-center justify-between gap-4">
      {/* Mobile Brand Logo */}
      <div 
        onClick={() => navigateTo('home')}
        className="flex md:hidden items-center gap-2 cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-[#CDB891] text-[#2C2421] flex items-center justify-center font-serif text-sm font-bold">
          L
        </div>
        <span className="font-serif font-semibold text-base text-[#2C2421]">Lumina</span>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7B73]" size={17} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && currentView !== 'discover') {
              navigateTo('discover');
            }
          }}
          placeholder="Search books, authors, or topics..."
          className="w-full bg-[#FAF0E6] text-[#2C2421] placeholder-[#8C7B73] text-sm rounded-full pl-10 pr-4 py-2 border border-[#E8DACD] focus:outline-none focus:border-[#CDB891] focus:ring-2 focus:ring-[#CDB891]/20 transition-smooth"
        />
      </div>

      {/* Quick Action Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigateTo('upload')}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8C7355] text-[#FFF8E7] hover:bg-[#755F43] text-xs font-medium transition-smooth shadow-xs cursor-pointer"
        >
          <Upload size={15} />
          <span>Upload Book</span>
        </button>

        <button
          onClick={() => navigateTo('my-library')}
          className="sm:hidden p-2 rounded-full bg-[#FAF0E6] text-[#5E504A] border border-[#E8DACD]"
          title="My Library"
        >
          <BookOpen size={18} />
        </button>
      </div>
    </header>
  );
};
