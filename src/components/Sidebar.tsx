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
  Highlighter
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { LuminaLogo } from './LuminaLogo';
import type { PageView } from '../types';

export const Sidebar: React.FC = () => {
  const { currentView, navigateTo, favoriteIds, savedSummaryIds, appTheme } = useLibrary();
  const isDark = appTheme === 'dark';

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

  /* ── Active colours (used as inline styles to bypass CSS-layer cascade issue) ── */
  const activeBg   = isDark ? '#CDB891' : '#2C2421';
  const activeText = isDark ? '#1A1714' : '#FFF8E7';
  const activeIcon = isDark ? '#3A2E20' : '#CDB891';

  const renderNavItem = (item: (typeof mainNav)[0]) => {
    const isActive = currentView === item.id;

    return (
      <li key={item.id}>
        <button
          onClick={() => navigateTo(item.id)}
          /* inline style guarantees the bg colour renders regardless of CSS-layer cascade */
          style={isActive ? { backgroundColor: activeBg, color: activeText } : undefined}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
            isActive
              ? 'font-semibold shadow-md'
              : isDark
                ? 'text-[#C4AD99] hover:bg-[#2D2823] hover:text-[#EDE0D4]'
                : 'text-[#5E504A] hover:bg-[#F7E7CE] hover:text-[#2C2421]'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Icon colour: always visible — accent gold on dark bg, or muted on inactive */}
            <span style={isActive ? { color: activeIcon } : undefined}
              className={!isActive ? (isDark ? 'text-[#CDB891]' : 'text-[#8C7355]') : ''}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>

          {item.badge !== undefined && item.badge > 0 && (
            <span
              style={isActive ? { backgroundColor: isDark ? 'rgba(26,23,20,0.25)' : 'rgba(255,255,255,0.25)', color: activeText } : undefined}
              className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                !isActive
                  ? isDark
                    ? 'bg-[#3A3028] text-[#CDB891]'
                    : 'bg-[#F7E7CE] text-[#8C7355]'
                  : ''
              }`}
            >
              {item.badge}
            </span>
          )}
        </button>
      </li>
    );
  };

  const labelClass = `text-[10px] font-semibold tracking-widest uppercase px-2 mb-2 block ${
    isDark ? 'text-[#6A5C54]' : 'text-[#8C7B73]'
  }`;

  const isSettingsActive = currentView === 'settings';

  return (
    <aside className={`hidden md:flex flex-col w-64 border-r h-screen sticky top-0 px-4 py-4 select-none shrink-0 z-20 transition-colors duration-300 justify-between ${
      isDark
        ? 'bg-[#1E1B18] border-[#332D28]'
        : 'bg-[#FAF0E6] border-[#E8DACD]'
    }`}>
      {/* Brand Logo */}
      <div 
        onClick={() => navigateTo('home')}
        className="mb-3 cursor-pointer px-1 group transition-transform hover:scale-102 shrink-0"
      >
        <LuminaLogo size="md" showText={true} />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2.5 overflow-hidden flex flex-col justify-start">
        <div>
          <span className={labelClass}>Library</span>
          <ul className="space-y-0.5">
            {mainNav.map(renderNavItem)}
          </ul>
        </div>

        {/* Secondary Navigation */}
        <div>
          <span className={labelClass}>Personal Space</span>
          <ul className="space-y-0.5">
            {secondaryNav.map(renderNavItem)}
          </ul>
        </div>
      </nav>

      {/* Bottom Fixed Footer Section */}
      <div className="shrink-0 space-y-2 pt-2 border-t border-transparent">
        {/* Editorial Quote Card */}
        <div className={`p-2.5 rounded-xl border ${
          isDark 
            ? 'bg-[#2D2822] border-[#4A3E35]/60' 
            : 'bg-[#F7E7CE] border-[#CDB891]/60'
        }`}>
          <span className="text-[9px] font-semibold text-[#CDB891] uppercase tracking-wider block mb-0.5">
            Daily Reflection
          </span>
          <p className={`text-[11px] font-serif italic leading-snug ${
            isDark ? 'text-[#C4AD99]' : 'text-[#2C2421]'
          }`}>
            "A room without books is like a body without a soul."
          </p>
        </div>

        {/* BINUS University Logo Badge */}
        <div className={`px-2 py-1 flex items-center gap-2 border-t ${
          isDark ? 'border-[#332D28]/60' : 'border-[#E8DACD]/60'
        }`}>
          <img src="/binus.png" alt="Binus University" className="h-6 object-contain rounded-md" />
          <span className={`text-[10px] font-semibold leading-tight ${
            isDark ? 'text-[#6A5C54]' : 'text-[#8C7B73]'
          }`}>
            BINUS University
          </span>
        </div>

        {/* Bottom Profile & Settings */}
        <div className={`pt-1.5 border-t space-y-1 ${isDark ? 'border-[#332D28]' : 'border-[#E8DACD]'}`}>
          <button
            onClick={() => navigateTo('settings')}
            style={isSettingsActive ? { backgroundColor: activeBg, color: activeText } : undefined}
            className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
              isSettingsActive
                ? 'font-semibold shadow-md'
                : isDark
                  ? 'text-[#C4AD99] hover:bg-[#2D2823] hover:text-[#EDE0D4]'
                  : 'text-[#5E504A] hover:bg-[#F7E7CE] hover:text-[#2C2421]'
            }`}
          >
            <span style={isSettingsActive ? { color: activeIcon } : undefined}
              className={!isSettingsActive ? (isDark ? 'text-[#CDB891]' : 'text-[#8C7355]') : ''}>
              <Settings size={16} />
            </span>
            <span>Settings</span>
          </button>

          <div className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl border ${
            isDark
              ? 'bg-[#2A2420] border-[#332D28] text-[#EDE0D4]'
              : 'bg-[#FAEBD7]/70 border-transparent text-[#2C2421]'
          }`}>
            <UserCircle2 size={26} className="text-[#CDB891] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-semibold truncate ${isDark ? 'text-[#EDE0D4]' : 'text-[#2C2421]'}`}>
                Eleanor Vance
              </p>
              <p className={`text-[10px] truncate ${isDark ? 'text-[#6A5C54]' : 'text-[#8C7B73]'}`}>
                Avid Reader
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
