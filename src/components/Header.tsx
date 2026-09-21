import React from 'react';
import { Search, Upload, BookOpen, Sun, Moon } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { LuminaLogo } from './LuminaLogo';

export const Header: React.FC = () => {
  const { currentView, searchQuery, setSearchQuery, navigateTo, appTheme, toggleAppTheme } = useLibrary();
  const isDark = appTheme === 'dark';

  // Hide global header inside distraction-free reader screen
  if (currentView === 'reader') {
    return null;
  }

  return (
    <header className={`sticky top-0 backdrop-blur-sm z-10 border-b px-6 py-3.5 flex items-center justify-between gap-4 transition-colors duration-300 ${
      isDark
        ? 'bg-[#1A1714]/95 border-[#332D28]/70'
        : 'bg-[var(--bg-app)]/90 border-[#E8DACD]/50'
    }`}>
      {/* Mobile Brand Logo */}
      <div 
        onClick={() => navigateTo('home')}
        className="flex md:hidden items-center cursor-pointer"
      >
        <LuminaLogo size="sm" showText={true} />
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-md relative">
        <Search 
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-[#CDB891]' : 'text-[#8C7355]'}`} 
          size={17} 
        />
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
          className={`w-full text-sm rounded-full pl-10 pr-4 py-2 border focus:outline-none focus:ring-2 shadow-xs transition-smooth ${
            isDark
              ? 'bg-[#2D2823] text-[#EDE0D4] placeholder-[#6A5C54] border-[#3D3530] focus:border-[#CDB891] focus:ring-[#CDB891]/20'
              : 'bg-[#FAF0E6] text-[#2C2421] placeholder-[#8C7B73] border-[#CDB891]/60 focus:border-[#8C7355] focus:ring-[#8C7355]/20'
          }`}
        />
      </div>

      {/* Quick Action Button & Theme Toggle */}
      <div className="flex items-center gap-3">
        {/* Light / Dark Mode Switch */}
        <button
          onClick={toggleAppTheme}
          className={`p-2.5 rounded-full border transition-smooth cursor-pointer ${
            isDark
              ? 'bg-[#2D2823] text-[#CDB891] hover:bg-[#3A3028] border-[#3D3530]'
              : 'bg-[#FAF0E6] text-[#8C7355] hover:bg-[#F7E7CE] border-[#CDB891]/40'
          }`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button
          onClick={() => navigateTo('upload')}
          className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-md border cursor-pointer ${
            isDark
              ? 'bg-[#CDB891] text-[#1A1714] hover:bg-[#E0C99A] border-[#CDB891]/60'
              : 'bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] border-[#CDB891]/40'
          }`}
        >
          <Upload size={15} className={isDark ? 'text-[#3A3028]' : 'text-[#CDB891]'} />
          <span>Upload Book</span>
        </button>

        <button
          onClick={() => navigateTo('my-library')}
          className={`sm:hidden p-2 rounded-full border ${
            isDark
              ? 'bg-[#2D2823] text-[#C4AD99] border-[#3D3530]'
              : 'bg-[#FAF0E6] text-[#5E504A] border-[#E8DACD]'
          }`}
          title="My Library"
        >
          <BookOpen size={18} />
        </button>
      </div>
    </header>
  );
};
