import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const ScrollToTop: React.FC = () => {
  const { currentView } = useLibrary();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible || currentView === 'reader') return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-40 p-3 rounded-full bg-[#2C2421] text-[#FFF8E7] shadow-xl hover:bg-[#4A3E3D] hover:scale-110 transition-all duration-300 border border-[#CDB891]/40 cursor-pointer animate-fade-in"
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
};
