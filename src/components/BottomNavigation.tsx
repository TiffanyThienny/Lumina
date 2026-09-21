import React from 'react';
import { Home, Compass, BookOpen, Heart, Settings } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import type { PageView } from '../types';

export const BottomNavigation: React.FC = () => {
  const { currentView, navigateTo } = useLibrary();

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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FAF0E6]/95 backdrop-blur-md border-t border-[#E8DACD] z-40 px-3 py-2 flex items-center justify-around shadow-lg">
      {items.map((item) => {
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-smooth ${
              isActive ? 'text-[#8C7355] font-semibold' : 'text-[#8C7B73]'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
