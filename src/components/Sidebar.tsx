import React from 'react';
import { 
  Home, 
  Compass, 
  BookOpen, 
  Heart, 
  History, 
  Upload, 
  Bookmark, 
  Settings, 
  UserCircle2,
  Sparkles,
  Highlighter
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { LuminaLogo } from './LuminaLogo';
import type { PageView } from '../types';

export const Sidebar: React.FC = () => {
  const { currentView, navigateTo, favoriteIds, savedSummaryIds, uploadedBooks } = useLibrary();

  const mainNav: { id: PageView; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'discover', label: 'Discover', icon: <Compass size={18} /> },
    { id: 'my-library', label: 'My Library', icon: <BookOpen size={18} /> },
    { id: 'favorites', label: 'Favorites', icon: <Heart size={18} />, badge: favoriteIds.length },
    { id: 'history', label: 'Reading History', icon: <History size={18} /> },
    { id: 'notes-highlights', label: 'Notes & Quotes', icon: <Highlighter size={18} /> },
  ];

  const secondaryNav: { id: PageView; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'upload', label: 'Upload Book', icon: <Upload size={18} /> },
    { id: 'ai-summary', label: 'Saved Summaries', icon: <Bookmark size={18} />, badge: savedSummaryIds.length },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-[#E8DACD] bg-[#FAF0E6] h-screen sticky top-0 px-5 py-6 select-none shrink-0 z-20">
      {/* Brand Logo */}
      <div 
        onClick={() => navigateTo('home')}
        className="mb-8 cursor-pointer px-1 group transition-transform hover:scale-102"
      >
        <LuminaLogo size="md" showText={true} />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-6 overflow-y-auto pr-1">
        <div>
          <span className="text-[10px] font-semibold text-[#8C7B73] tracking-widest uppercase px-2 mb-2 block">
            Library
          </span>
          <ul className="space-y-1">
            {mainNav.map((item) => {
              const isActive = currentView === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-smooth ${
                      isActive 
                        ? 'bg-[#F7E7CE] text-[#2C2421] font-semibold shadow-xs' 
                        : 'text-[#5E504A] hover:bg-[#FAEBD7] hover:text-[#2C2421]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-[#8C7355]' : 'text-[#8C7B73]'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                        isActive ? 'bg-[#CDB891] text-[#2C2421]' : 'bg-[#FAEBD7] text-[#8C7B73]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Secondary Navigation */}
        <div>
          <span className="text-[10px] font-semibold text-[#8C7B73] tracking-widest uppercase px-2 mb-2 block">
            Personal Space
          </span>
          <ul className="space-y-1">
            {secondaryNav.map((item) => {
              const isActive = currentView === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-smooth ${
                      isActive 
                        ? 'bg-[#F7E7CE] text-[#2C2421] font-semibold shadow-xs' 
                        : 'text-[#5E504A] hover:bg-[#FAEBD7] hover:text-[#2C2421]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-[#8C7355]' : 'text-[#8C7B73]'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.label === 'Uploaded Books' && uploadedBooks.length > 0 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FAEBD7] text-[#8C7B73] font-semibold">
                        {uploadedBooks.length}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Editorial Quote Card */}
      <div className="my-4 p-3.5 rounded-xl bg-[#F7E7CE]/60 border border-[#CDB891]/30">
        <div className="flex items-center gap-1.5 text-xs text-[#8C7355] font-medium mb-1">
          <Sparkles size={13} />
          <span>Daily Reflection</span>
        </div>
        <p className="text-[12px] font-serif italic text-[#5E504A] leading-relaxed">
          "A room without books is like a body without a soul."
        </p>
      </div>

      {/* Bottom Profile & Settings */}
      <div className="pt-4 border-t border-[#E8DACD] space-y-1">
        <button
          onClick={() => navigateTo('settings')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-smooth ${
            currentView === 'settings' 
              ? 'bg-[#F7E7CE] text-[#2C2421] font-semibold' 
              : 'text-[#5E504A] hover:bg-[#FAEBD7] hover:text-[#2C2421]'
          }`}
        >
          <Settings size={18} className="text-[#8C7B73]" />
          <span>Settings</span>
        </button>

        <div className="flex items-center gap-3 px-3 py-2 mt-2 rounded-xl bg-[#FAEBD7]/70 text-[#2C2421]">
          <UserCircle2 size={32} className="text-[#8C7355]" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#2C2421] truncate">Eleanor Vance</p>
            <p className="text-[10px] text-[#8C7B73] truncate">Avid Reader</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
