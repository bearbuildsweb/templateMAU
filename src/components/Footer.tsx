import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultMsg = encodeURIComponent("Hi Liyana, I'd love to enquire about booking a makeup appointment.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${defaultMsg}`;

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

          {/* Social & Contact Icons (5 cols) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-start items-center md:items-end w-full pt-1 md:pt-2 text-center md:text-right">
            {/* FIND LIYANA heading above icons */}
            <span
              id="footer-find-liyana"
              className="text-[10px] uppercase tracking-[0.3em] text-[#8C8275] font-medium mb-3.5 block"
            >
              FIND LIYANA
            </span>

            {/* Horizontal list of CTA icons */}
            <div
              id="footer-icons-list"
              className="flex items-center gap-6 text-[#C9BFB1]"
              aria-label="Social and contact links"
            >
              <a
                id="footer-cta-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9BFB1] hover:text-[#FAF8F5] transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                id="footer-cta-email"
                href="mailto:bearbuildsweb@gmail.com"
                className="text-[#C9BFB1] hover:text-[#FAF8F5] transition-colors p-1"
                aria-label="Email bearbuildsweb@gmail.com"
              >
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                id="footer-cta-chat"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9BFB1] hover:text-[#FAF8F5] transition-colors p-1"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5 stroke-[1.5]" />
              </a>
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
