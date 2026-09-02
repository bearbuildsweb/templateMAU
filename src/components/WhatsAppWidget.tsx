import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface WhatsAppWidgetProps {
  customMessage?: string;
  isHidden?: boolean;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ customMessage, isHidden = false }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHidden) {
    return null;
  }

  const defaultMsg = customMessage || "Hi Liyana, I'd love to enquire about booking a makeup appointment.";
  
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(defaultMsg)}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Open in new window safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    e.preventDefault();
  };

  return (
    <div
      id="persistent-whatsapp-widget"
      className={`fixed bottom-6 z-40 flex items-center group transition-all duration-500 ease-in-out ${
        hasScrolled
          ? 'right-6 left-auto md:right-8 md:left-auto'
          : 'right-6 left-auto md:left-8 md:right-auto'
      }`}
    >
      {/* Main Luxury WhatsApp Action Pill */}
      <a
        href={whatsappUrl}
        onClick={handleClick}
        id="whatsapp-direct-link"
        className="relative flex items-center bg-[#171615] text-[#FAF8F5] hover:bg-[#2E2A27] transition-all duration-300 shadow-[0_10px_30px_rgba(23,22,21,0.18)] active:scale-95 border border-[#443E38] px-4 py-3 sm:px-5 sm:py-3.5"
        aria-label="Chat with Liyana on WhatsApp"
      >
        {/* Subtle Online Pulse Dot */}
        <span className="relative flex h-2 w-2 mr-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
        </span>

        <MessageCircle className="w-4 h-4 mr-2 text-[#FAF8F5]" />

        {/* Label shown on desktop, hidden on tiny mobile to stay compact */}
        <span className="text-xs uppercase tracking-[0.2em] font-medium hidden sm:inline whitespace-nowrap">
          Chat with Liyana
        </span>
        <span className="text-xs uppercase tracking-[0.18em] font-medium sm:hidden">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

