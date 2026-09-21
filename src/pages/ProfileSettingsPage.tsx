import React from 'react';
import { UserCircle2, Type, Sun, Moon, Coffee, Volume2 } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const ProfileSettingsPage: React.FC = () => {
  const { readerSettings, updateReaderSettings, audioState, setAudioSpeed } = useLibrary();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 space-y-10 animate-fade-in">
      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Preferences</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421]">
          Profile & Settings
        </h1>
        <p className="text-xs sm:text-sm text-[#5E504A]">
          Customize your reading sanctuary, typography defaults, and audio playback.
        </p>
      </div>

      {/* User Profile Card */}
      <div className="p-6 rounded-3xl bg-[#FAF0E6] border border-[#E8DACD] flex items-center gap-5">
        <UserCircle2 size={56} className="text-[#8C7355] shrink-0" />
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
            Eleanor Vance
          </h3>
          <p className="text-xs text-[#8C7B73]">
            Member of Lumina Peaceful Reading Club • 12 Books Completed
          </p>
          <span className="inline-block text-[10px] font-semibold text-[#8C7355] bg-[#F7E7CE] px-2.5 py-0.5 rounded-full border border-[#CDB891]/40">
            Avid Reader & Thinker
          </span>
        </div>
      </div>

      {/* Reading Preferences */}
      <div className="space-y-6 bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD]">
        <div className="flex items-center gap-2 border-b border-[#E8DACD] pb-3">
          <Type size={18} className="text-[#8C7355]" />
          <h3 className="font-serif text-lg font-semibold text-[#2C2421]">
            Reading Room Defaults
          </h3>
        </div>

        {/* Default Theme */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-[#8C7B73] uppercase tracking-wider block">
            Default Theme
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => updateReaderSettings({ theme: 'light' })}
              className={`p-3 rounded-2xl text-xs font-medium flex items-center justify-center gap-2 border transition-smooth cursor-pointer ${
                readerSettings.theme === 'light' ? 'bg-[#FFF8E7] border-[#8C7355] text-[#2C2421] font-semibold shadow-xs' : 'bg-[#FAF0E6] border-[#E8DACD] text-[#5E504A]'
              }`}
            >
              <Sun size={16} />
              <span>Cosmic Light</span>
            </button>
            <button
              onClick={() => updateReaderSettings({ theme: 'warm' })}
              className={`p-3 rounded-2xl text-xs font-medium flex items-center justify-center gap-2 border transition-smooth cursor-pointer ${
                readerSettings.theme === 'warm' ? 'bg-[#FAF0E6] border-[#8C7355] text-[#342823] font-semibold shadow-xs' : 'bg-[#FAF0E6] border-[#E8DACD] text-[#5E504A]'
              }`}
            >
              <Coffee size={16} />
              <span>Linen Warm</span>
            </button>
            <button
              onClick={() => updateReaderSettings({ theme: 'dark' })}
              className={`p-3 rounded-2xl text-xs font-medium flex items-center justify-center gap-2 border transition-smooth cursor-pointer ${
                readerSettings.theme === 'dark' ? 'bg-[#1C1816] border-[#CDB891] text-[#E5DCD3] font-semibold shadow-xs' : 'bg-[#FAF0E6] border-[#E8DACD] text-[#5E504A]'
              }`}
            >
              <Moon size={16} />
              <span>Warm Night</span>
            </button>
          </div>
        </div>

        {/* Default Font Family */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-[#8C7B73] uppercase tracking-wider block">
            Serif Typography
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['Literata', 'Lora', 'Merriweather', 'Source Serif 4'] as const).map((font) => (
              <button
                key={font}
                onClick={() => updateReaderSettings({ fontFamily: font })}
                className={`p-3 rounded-2xl text-xs border transition-smooth text-center cursor-pointer ${
                  readerSettings.fontFamily === font ? 'bg-[#F7E7CE] border-[#8C7355] font-semibold text-[#2C2421]' : 'bg-[#FAF0E6] border-[#E8DACD] text-[#5E504A]'
                }`}
              >
                {font}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Preferences */}
      <div className="space-y-6 bg-[#FAF0E6] p-6 sm:p-8 rounded-3xl border border-[#E8DACD]">
        <div className="flex items-center gap-2 border-b border-[#E8DACD] pb-3">
          <Volume2 size={18} className="text-[#8C7355]" />
          <h3 className="font-serif text-lg font-semibold text-[#2C2421]">
            Audio Narrator Settings
          </h3>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-semibold text-[#8C7B73] uppercase tracking-wider block">
            Default Playback Speed
          </label>
          <div className="flex items-center gap-2">
            {([0.75, 1, 1.25, 1.5, 2] as const).map((speed) => (
              <button
                key={speed}
                onClick={() => setAudioSpeed(speed)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-smooth cursor-pointer ${
                  audioState.speed === speed ? 'bg-[#8C7355] text-[#FFF8E7]' : 'bg-[#FFF8E7] text-[#5E504A] border border-[#E8DACD]'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Footer Info */}
      <div className="text-center space-y-1 pt-6 text-xs text-[#8C7B73] border-t border-[#E8DACD]">
        <p className="font-serif italic font-semibold text-[#2C2421]">Lumina Library v2.4</p>
        <p>Your Peaceful AI Reading Companion • Built for calm, focus & wisdom.</p>
      </div>
    </div>
  );
};
