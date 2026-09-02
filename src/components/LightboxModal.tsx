import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, SITE_CONFIG } from '../data/content';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === item.id);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    onNavigate(PORTFOLIO_ITEMS[nextIndex]);
  };
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    onNavigate(PORTFOLIO_ITEMS[prevIndex]);
  };

  const handleWhatsAppEnquiry = () => {
    const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

    const message =
      `Hello Liyana,\n\n` +
      `I would like to enquire about this look from your portfolio:\n\n` +
      `*Look:* ${item.title} (${item.category})\n` +
      `*Details:* ${item.subtitle}\n` +
      `*Technique:* ${item.technique}\n\n` +
      `Could you please share your package details and availability? Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#171615]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#E0D7C9] shadow-2xl flex flex-col lg:flex-row text-[#171615]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-[#FAF8F5]/90 border border-[#E0D7C9] flex items-center justify-center text-[#171615] hover:bg-[#171615] hover:text-[#FAF8F5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Image Section */}
        <div className="lg:w-1/2 relative bg-[#171615] flex items-center justify-center overflow-hidden min-h-[360px] lg:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover object-center filter contrast-[1.02]"
          />

          {/* Nav buttons over image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAF8F5]/80 backdrop-blur-sm border border-[#E0D7C9] flex items-center justify-center text-[#171615] hover:bg-[#FAF8F5] transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAF8F5]/80 backdrop-blur-sm border border-[#E0D7C9] flex items-center justify-center text-[#171615] hover:bg-[#FAF8F5] transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-3 bg-[#171615]/75 text-[#FAF8F5] text-[9px] uppercase tracking-widest px-2.5 py-0.5">
            0{currentIndex + 1} / 0{PORTFOLIO_ITEMS.length}
          </div>
        </div>

        {/* Right Editorial Look Breakdown */}
        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-5">
          <div className="space-y-4 pr-10 sm:pr-12 lg:pr-10">
            
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.2em] text-[#8C8275] border-b border-[#E8E2D8] pb-2 leading-normal">
              <span className="shrink-0 font-medium text-[#736B5F]">{item.category}</span>
              <span className="text-right truncate">{item.client} &bull; {item.year}</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#171615] font-light leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#8C8275] mt-0.5 font-light">
                {item.subtitle}
              </p>
            </div>

            <p className="font-sans text-xs text-[#57524E] leading-relaxed font-light">
              {item.description}
            </p>

            {/* Technique */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8275] font-medium block">
                Technique
              </span>
              <p className="font-sans text-xs text-[#171615]">
                {item.technique}
              </p>
            </div>

            {/* Key Products In Kit */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8275] font-medium block">
                Products
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.keyProducts.map((prod, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E0D7C9] text-[10px] text-[#4A4643]"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Book Action via WhatsApp */}
          <div className="pt-4 border-t border-[#E8E2D8]">
            <button
              onClick={handleWhatsAppEnquiry}
              className="w-full py-3.5 bg-[#171615] text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#34302C] transition-colors flex items-center justify-center space-x-2.5 shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 text-[#D9CFC1] group-hover:scale-110 transition-transform" />
              <span>Enquire About This Look</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

