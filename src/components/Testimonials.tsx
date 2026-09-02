import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const current = TESTIMONIALS[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#FAF8F5] text-[#171615] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#8C8275] font-medium">
            <span className="w-6 h-[1px] bg-[#8C8275]"></span>
            <span>CLIENT NOTES</span>
            <span className="w-6 h-[1px] bg-[#8C8275]"></span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#171615] tracking-tight">
            “Exactly how I imagined it.”
          </h2>
          <p className="text-xs sm:text-sm text-[#8C8275] font-light max-w-md mx-auto pt-1">
            Stories from the women who trusted Liyana with their moments.
          </p>
        </div>

        {/* Editorial Quotation Stage */}
        <div className="relative bg-[#F4EFEB] border border-[#E0D7C9] p-8 sm:p-12 lg:p-16 transition-all duration-500 shadow-[0_10px_30px_rgba(23,22,21,0.03)]">
          
          {/* Subtle Decorative Quote Icon */}
          <div className="absolute top-6 left-6 lg:top-10 lg:left-10 text-[#D8CFC4] opacity-50 pointer-events-none">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 stroke-1" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 min-h-[220px]">
            
            {/* Client Portrait (if available) */}
            {current.image && (
              <div className="shrink-0 relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden border border-[#D6CEC3] bg-[#E5DDD0] shadow-sm">
                  <img
                    src={current.image}
                    alt={current.clientName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#FAF8F5] border border-[#D6CEC3] px-2 py-0.5 text-[8px] uppercase tracking-wider text-[#8C8275]">
                  Verified
                </div>
              </div>
            )}

            {/* Quote Content */}
            <div className="flex-1 flex flex-col justify-between space-y-6 text-center md:text-left">
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#171615] font-light leading-relaxed italic">
                “{current.quote}”
              </blockquote>

              <div className="pt-4 border-t border-[#E0D7C9] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <div className="font-serif text-lg sm:text-xl text-[#171615] font-normal">
                    — {current.clientName}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#8C8275] font-light">
                    {current.role} &bull; <span className="text-[#57524E]">{current.occasion}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8275] block">Look</span>
                  <span className="text-xs font-serif italic text-[#171615]">{current.lookTitle}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Understated Controls & Indicators */}
          <div className="mt-10 pt-6 border-t border-[#E0D7C9] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#171615]'
                      : 'w-2 bg-[#D4C9BC] hover:bg-[#8C8275]'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#D6CEC3] bg-[#FAF8F5] text-[#171615] flex items-center justify-center hover:bg-[#171615] hover:text-[#FAF8F5] hover:border-[#171615] transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#D6CEC3] bg-[#FAF8F5] text-[#171615] flex items-center justify-center hover:bg-[#171615] hover:text-[#FAF8F5] hover:border-[#171615] transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
