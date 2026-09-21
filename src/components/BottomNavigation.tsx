import React from 'react';
import { Home, Compass, BookOpen, Heart, Settings } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import type { PageView } from '../types';

export const BottomNavigation: React.FC = () => {
  const { currentView, navigateTo, appTheme } = useLibrary();
  const isDark = appTheme === 'dark';

  // Hide bottom nav inside full reader for pure distraction-free experience
  if (currentView === 'reader') {
    return null;
  }

  const items: { id: PageView; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'discover', label: 'Discover', icon: <Compass size={20} /> },
    { id: 'my-library', label: 'Library', icon: <BookOpen size={20} /> },
    { id: 'favorites', label: 'Favorites', icon: <Heart size={20} /> },
    { id: 'settings', label: 'Profile', icon: <Settings size={20} /> },
  ];

  return (
    <nav className={`md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-md border-t z-40 px-2 py-2 flex items-center justify-around shadow-lg transition-colors duration-300 ${
      isDark
        ? 'bg-[#1E1B18]/97 border-[#332D28]'
        : 'bg-[#FAF0E6]/95 border-[#E8DACD]'
    }`}>
      {items.map((item) => {
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-2xl transition-smooth cursor-pointer min-w-[56px] ${
              isActive
                ? isDark
                  ? 'bg-[#2D2823] text-[#CDB891]'
                  : 'bg-[#F7E7CE] text-[#8C7355]'
                : isDark
                  ? 'text-[#6A5C54] hover:text-[#C4AD99]'
                  : 'text-[#8C7B73] hover:text-[#5E504A]'
            }`}
          >
            {item.icon}
            <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
              {item.label}
            </span>
            {/* Active dot indicator */}
            {isActive && (
              <span className={`w-1 h-1 rounded-full ${
                isDark ? 'bg-[#CDB891]' : 'bg-[#8C7355]'
              }`} />
            )}
          </button>
        );
      })}
    </nav>
  );
};
