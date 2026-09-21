import React from 'react';
import { Play, Pause, Volume2, Maximize2 } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const MiniAudioPlayer: React.FC = () => {
  const { audioState, toggleAudioPlayPause, openAudioModal, currentView } = useLibrary();

  // Show player only if a track is loaded
  if (!audioState.trackTitle) {
    return null;
  }

  // Position nicely above mobile bottom bar when on mobile
  const bottomOffset = currentView === 'reader' ? 'bottom-4' : 'bottom-16 md:bottom-5';

  return (
    <div className={`fixed ${bottomOffset} left-4 right-4 md:left-auto md:right-6 md:w-96 bg-[#2C2421] text-[#FAF0E6] p-3 rounded-2xl shadow-xl z-30 flex items-center justify-between gap-3 border border-[#4A3E3D] animate-fade-in`}>
      {/* Cover / Track Info */}
      <div 
        onClick={openAudioModal}
        className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer group"
      >
        <div 
          className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center font-serif font-bold text-xs shadow-inner"
          style={{ background: audioState.coverBg || 'linear-gradient(135deg, #8C7355 0%, #4A3E3D 100%)' }}
        >
          <Volume2 size={18} className="text-[#FAF0E6]/90" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-semibold text-[#FAF0E6] truncate group-hover:text-[#F7E7CE] transition-smooth">
            {audioState.trackTitle}
          </h4>
          <p className="text-[11px] text-[#CDB891] truncate">
            {audioState.bookTitle}
          </p>
        </div>
      </div>

      {/* Play Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleAudioPlayPause}
          className="w-9 h-9 rounded-full bg-[#CDB891] text-[#2C2421] flex items-center justify-center hover:bg-[#F7E7CE] transition-smooth cursor-pointer"
          aria-label={audioState.isPlaying ? 'Pause' : 'Play'}
        >
          {audioState.isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>

        <button
          onClick={openAudioModal}
          className="p-2 text-[#CDB891] hover:text-[#FAF0E6] transition-smooth cursor-pointer"
          title="Expand Player"
        >
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
};
