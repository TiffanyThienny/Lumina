import React from 'react';

interface LuminaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const LuminaLogo: React.FC<LuminaLogoProps> = ({ 
  size = 'md', 
  showText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Lumina Logo Icon / Image */}
      <div className={`${iconSizes[size]} rounded-xl overflow-hidden shrink-0 flex items-center justify-center`}>
        <img 
          src="/logo.png" 
          alt="Lumina Logo" 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold text-[#2C2421] tracking-wider uppercase leading-none">
            LUMINA
          </span>
          <span className="text-[10px] font-serif italic text-[#8C7355] tracking-tight mt-0.5">
            A Quiet Place to Read
          </span>
        </div>
      )}
    </div>
  );
};
