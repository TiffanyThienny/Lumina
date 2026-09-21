import React from 'react';
import { X, Play, Pause, SkipBack, SkipForward, Volume2, Gauge } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const AudioPlayerModal: React.FC = () => {
  const { audioState, closeAudioModal, toggleAudioPlayPause, setAudioSpeed } = useLibrary();

  if (!audioState.isModalOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const speedOptions: (0.75 | 1 | 1.25 | 1.5 | 2)[] = [0.75, 1, 1.25, 1.5, 2];

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1816]/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-[#2C2421] border border-[#4A3E3D] rounded-3xl p-6 sm:p-8 text-[#FAF0E6] shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={closeAudioModal}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8C7B73] hover:text-[#FAF0E6] hover:bg-[#3A322D] transition-smooth cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header Tag */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#CDB891] bg-[#3A322D] px-3 py-1 rounded-full border border-[#4A3E3D]">
            Audio Experience
          </span>
        </div>

        {/* Large Album Cover Art */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-2xl shadow-2xl mb-6 flex flex-col items-center justify-center p-6 text-center border border-[#4A3E3D]"
          style={{ background: audioState.coverBg || 'linear-gradient(135deg, #8C7355 0%, #4A3E3D 100%)' }}
        >
          <Volume2 size={40} className="text-[#FAF0E6]/80 mb-3" />
          <p className="font-serif font-bold text-lg text-[#FAF0E6] line-clamp-2">
            {audioState.bookTitle}
          </p>
        </div>

        {/* Track Metadata */}
        <div className="text-center mb-6">
          <h3 className="font-serif text-xl font-semibold text-[#FAF0E6] mb-1">
            {audioState.trackTitle}
          </h3>
          <p className="text-xs text-[#CDB891]">
            Lumina Audio Narrator
          </p>
        </div>

        {/* Scrubber Bar */}
        <div className="space-y-2 mb-6">
          <div className="w-full h-1.5 bg-[#3A322D] rounded-full overflow-hidden relative cursor-pointer">
            <div 
              className="h-full bg-[#CDB891] rounded-full transition-all duration-300"
              style={{ width: `${(audioState.currentTime / audioState.duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-[#8C7B73] font-mono">
            <span>{formatTime(audioState.currentTime)}</span>
            <span>{formatTime(audioState.duration)}</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button className="text-[#8C7B73] hover:text-[#FAF0E6] transition-smooth cursor-pointer">
            <SkipBack size={24} />
          </button>

          <button
            onClick={toggleAudioPlayPause}
            className="w-16 h-16 rounded-full bg-[#CDB891] text-[#2C2421] flex items-center justify-center hover:bg-[#F7E7CE] transition-smooth shadow-lg cursor-pointer"
          >
            {audioState.isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
          </button>

          <button className="text-[#8C7B73] hover:text-[#FAF0E6] transition-smooth cursor-pointer">
            <SkipForward size={24} />
          </button>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center justify-between border-t border-[#3A322D] pt-5">
          <div className="flex items-center gap-2 text-xs text-[#8C7B73]">
            <Gauge size={15} />
            <span>Speed</span>
          </div>
          <div className="flex items-center gap-1.5">
            {speedOptions.map((s) => (
              <button
                key={s}
                onClick={() => setAudioSpeed(s)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-smooth ${
                  audioState.speed === s 
                    ? 'bg-[#CDB891] text-[#2C2421] font-semibold' 
                    : 'bg-[#3A322D] text-[#8C7B73] hover:text-[#FAF0E6]'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
