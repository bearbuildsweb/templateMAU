import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
  sublineText?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubline = true,
  sublineText = 'Joburg. SA',
  className = '',
}) => {
  const isLight = variant === 'light';

  // Palette tokens for quiet luxury monochrome
  const textPrimary = isLight ? '#FAF8F5' : '#171615';
  const textSecondary = isLight ? '#A89E90' : '#8C8275';

  const config = {
    sm: {
      wordmarkClass: 'text-2xl sm:text-3xl font-medium tracking-[0.02em]',
      sublineClass: 'text-[8px] tracking-[0.32em]',
    },
    md: {
      wordmarkClass: 'text-3xl sm:text-4xl lg:text-[40px] font-medium tracking-[0.02em]',
      sublineClass: 'text-[9px] sm:text-[10px] tracking-[0.34em]',
    },
    lg: {
      wordmarkClass: 'text-4xl sm:text-5xl lg:text-[52px] font-medium tracking-[0.02em]',
      sublineClass: 'text-[11px] tracking-[0.36em]',
    },
  }[size];

  return (
    <div
      className={`inline-flex flex-col justify-center select-none transition-opacity duration-300 hover:opacity-90 ${className.includes('items-') ? '' : 'items-start'} ${className}`}
    >
      {/* Refined Typographic Wordmark - Bold, bigger, script/editorial, all lowercase "by liyana" */}
      <div
        className={`leading-none flex items-center ${config.wordmarkClass}`}
        style={{
          fontFamily: '"Alex Brush", "Italianno", "Pinyon Script", "Cormorant Garamond", cursive, serif',
          color: textPrimary,
        }}
      >
        <span className="lowercase inline-block transform -rotate-[0.5deg]">
          by liyana
        </span>
      </div>

      {showSubline && (
        <span
          style={{ color: textSecondary }}
          className={`${config.sublineClass} uppercase font-light font-sans mt-1 text-center md:text-left`}
        >
          {sublineText}
        </span>
      )}
    </div>
  );
};
