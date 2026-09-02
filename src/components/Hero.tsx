import React from 'react';
import { Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface HeroProps {
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left / Editorial Minimal Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8">
            
            <div className="space-y-1">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-light text-[#171615] leading-[1.02] tracking-tight">
                Beauty, <br />
                <span className="italic font-normal">Refined.</span>
              </h1>
            </div>

            <div className="w-fit max-w-md md:max-lg:w-full md:max-lg:max-w-none space-y-6">
              <p className="font-sans text-base sm:text-lg text-[#57524E] max-w-md font-light leading-relaxed">
                Elevated makeup for life’s defining moments.
              </p>

              {/* CTA Group - aligned to moments on mobile/desktop, aligned to header CTA on tablet */}
              <div className="flex justify-end w-full">
                <button
                  id="hero-secondary-portfolio-btn"
                  onClick={onExplorePortfolio}
                  className="group inline-flex items-center justify-center px-8 py-4 border border-[#171615] text-[#171615] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#171615] hover:text-[#FAF8F5] transition-all duration-300"
                >
                  <span>See the work &rarr;</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right / Hero Portrait Integrated Minimal Composition */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]">
              
              {/* Subtle echoing sculptural back frame */}
              <div 
                className="absolute -inset-3 sm:-inset-4 border border-[#D9CFC1] pointer-events-none select-none z-0 rounded-tl-[160px] sm:rounded-tl-[200px] rounded-tr-[32px] rounded-br-[140px] sm:rounded-br-[180px] rounded-bl-[24px] transition-transform duration-700"
              />

              {/* Secondary delicate geometric offset accent */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-[#D9CFC1]/70 pointer-events-none select-none z-0 hidden sm:block"
              />

              {/* Main Image Sculptural Container */}
              <div 
                className="relative z-10 overflow-hidden bg-[#EDE6DC] shadow-sm rounded-tl-[150px] sm:rounded-tl-[190px] rounded-tr-[28px] rounded-br-[130px] sm:rounded-br-[170px] rounded-bl-[20px]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}hero-image-FINAL.png`}
                  alt="Beauty by Liyana signature bridal and editorial makeup look"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1400&auto=format&fit=crop';
                  }}
                  className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-center filter contrast-[1.02] transition-transform duration-1000 ease-out hover:scale-[1.03]"
                />
              </div>

              {/* Minimal floating Instagram badge */}
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute -bottom-3 right-6 z-20 bg-[#FAF8F5]/95 backdrop-blur-sm border border-[#D9CFC1] hover:border-[#171615] px-4 py-2 flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#171615] transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#171615] transition-transform duration-300 group-hover:scale-110" />
                <span>Instagram</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

