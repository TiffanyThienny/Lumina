import React from 'react';
import { useLibrary } from '../context/LibraryContext';

interface EluneLogo {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const LuminaLogo: React.FC<EluneLogo> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const { appTheme } = useLibrary();
  const isDark = appTheme === 'dark';

  const iconSizes = { sm: 32, md: 40, lg: 56 };
  const px = iconSizes[size];

  const textSizes = {
    sm: { name: 'text-base', sub: 'text-[9px]' },
    md: { name: 'text-[18px]', sub: 'text-[10px]' },
    lg: { name: 'text-2xl', sub: 'text-xs' }
  };

  const textColor = isDark ? '#EDE0D4' : '#2C2421';
  const subColor = isDark ? '#8A7A6F' : '#8C7355';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* SVG Logo — crescent moon + open book + sparkle star, matching the Elune brand image */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Elune Logo"
      >
        <defs>
          <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CDB891" />
            <stop offset="50%" stopColor="#A68B5B" />
            <stop offset="100%" stopColor="#6B4E2E" />
          </linearGradient>
          <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E7" />
            <stop offset="100%" stopColor="#E8D5B5" />
          </linearGradient>
          <linearGradient id="bookSpine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A68B5B" />
            <stop offset="100%" stopColor="#8C7355" />
          </linearGradient>
        </defs>

        {/* Crescent Moon */}
        <path
          d="M62 12 C38 12 20 30 20 54 C20 78 38 96 62 96 C50 90 42 74 42 56 C42 34 54 18 70 14 C67.4 12.7 64.7 12 62 12Z"
          fill="url(#moonGrad)"
          opacity="0.95"
        />

        {/* Subtle orbit ring */}
        <ellipse
          cx="54"
          cy="60"
          rx="34"
          ry="10"
          stroke={isDark ? '#CDB891' : '#CDB891'}
          strokeWidth="1"
          fill="none"
          opacity="0.35"
          transform="rotate(-15 54 60)"
        />
        <circle cx="24" cy="53" r="2.5" fill="#CDB891" opacity="0.6" />

        {/* Open Book — pages left */}
        <path
          d="M52 44 C45 40 38 40 34 42 L34 72 C38 70 45 70 52 74 Z"
          fill="url(#bookGrad)"
          opacity="0.92"
        />
        {/* Open Book — pages right */}
        <path
          d="M52 44 C59 40 66 40 70 42 L70 72 C66 70 59 70 52 74 Z"
          fill="url(#bookGrad)"
          opacity="0.80"
        />
        {/* Book spine / base */}
        <path
          d="M34 72 C38 70 45 70 52 74 C59 70 66 70 70 72 L70 76 C66 74 59 74 52 78 C45 74 38 74 34 76 Z"
          fill="url(#bookSpine)"
          opacity="0.85"
        />
        {/* Book center crease */}
        <path d="M52 44 L52 74" stroke="#A68B5B" strokeWidth="1" opacity="0.5" />
        {/* Book page lines left */}
        <path d="M40 52 C44 51 48 51 52 52" stroke="#CDB891" strokeWidth="0.7" opacity="0.5" />
        <path d="M40 58 C44 57 48 57 52 58" stroke="#CDB891" strokeWidth="0.7" opacity="0.5" />
        {/* Book page lines right */}
        <path d="M64 52 C60 51 56 51 52 52" stroke="#CDB891" strokeWidth="0.7" opacity="0.5" />
        <path d="M64 58 C60 57 56 57 52 58" stroke="#CDB891" strokeWidth="0.7" opacity="0.5" />

        {/* 4-point star sparkle */}
        <path
          d="M73 22 L74.8 28 L80 22 L74.8 16 Z"
          fill="#CDB891"
          opacity="0.9"
          transform="rotate(45 77 22)"
        />
        <path
          d="M73 22 L74.8 28 L80 22 L74.8 16 Z"
          fill="#CDB891"
          opacity="0.6"
          transform="rotate(0 77 22)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif font-bold tracking-wide leading-none ${textSizes[size].name}`}
            style={{ color: textColor, letterSpacing: '0.02em' }}
          >
            Elunè
          </span>
          <span
            className={`font-serif italic tracking-widest mt-0.5 ${textSizes[size].sub}`}
            style={{ color: subColor, letterSpacing: '0.08em' }}
          >
            Where Stories Glow
          </span>
        </div>
      )}
    </div>
  );
};
