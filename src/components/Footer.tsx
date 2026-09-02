import React from 'react';
import { Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="editorial-footer" className="bg-[#171615] text-[#FAF8F5] pt-20 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Colophon Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#292524] items-stretch">
          
          {/* Brand & Editorial Manifesto (7 cols) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between h-full items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
            {/* Quote (On mobile: order-1 so it sits above 'by liyana'; on desktop: order-2 so it sits below) */}
            <p className="order-1 md:order-2 font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal italic max-w-lg leading-relaxed pt-0 md:pt-10">
              “Elevated makeup for life’s defining moments.”
            </p>

            {/* Logo Wordmark (On mobile: order-2 so it sits below quote; on desktop: order-1 so it sits top) */}
            <div className="order-2 md:order-1 flex justify-center md:justify-start w-full">
              <Logo
                variant="light"
                size="lg"
                sublineText="JHB • SOUTH AFRICA"
                className="items-center md:items-start text-center md:text-left"
              />
            </div>
          </div>

          {/* Social & Find Liyana (5 cols) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between h-full items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
            {/* Instagram Section */}
            <div className="pt-0 md:pt-1.5 flex justify-center md:justify-start w-full">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start space-x-2 text-xs uppercase tracking-[0.2em] text-[#FAF8F5] hover:text-[#D6CEC3] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C9BFB1]" />
                <span className="font-medium">Instagram: {SITE_CONFIG.instagram}</span>
              </a>
            </div>

            {/* Find Liyana Section */}
            <div className="space-y-3 pt-0 md:pt-10 flex flex-col items-center md:items-start text-center md:text-left w-full">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C8275] font-medium block">
                FIND LIYANA
              </span>
              
              <div className="space-y-2 text-xs text-[#D6CEC3] font-light">
                <p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-[#FAF8F5] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FAF8F5] transition-colors"
                  >
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col items-center justify-center text-center text-[11px] text-[#736B62] font-light">
          <p className="uppercase tracking-[0.16em]">
            &copy; 2026 BEAUTY BY LIYANA
          </p>
        </div>

      </div>
    </footer>
  );
};
