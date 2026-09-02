import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { EditorialPortfolio } from './components/EditorialPortfolio';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LightboxModal } from './components/LightboxModal';
import { PortfolioItem } from './types';
import { SITE_CONFIG } from './data/content';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLook, setSelectedLook] = useState<PortfolioItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const defaultMsg = encodeURIComponent("Hi Liyana, I'd love to enquire about booking a makeup appointment.");
    window.open(`https://wa.me/${cleanPhone}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#171615] font-sans selection:bg-[#E8E1D5] selection:text-[#171615] flex flex-col">
      {/* Bespoke Editorial Pre-loader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Top Luxury Navigation */}
      <Navigation
        onOpenWhatsApp={handleOpenWhatsApp}
        isMobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={setMobileMenuOpen}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Section 01: Bespoke Hero */}
        <Hero
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Section 02: High-End Editorial Portfolio */}
        <EditorialPortfolio
          onSelectLook={(item) => setSelectedLook(item)}
        />

        {/* Section 03: Testimonials ("Exactly how I imagined it.") */}
        <Testimonials />
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />

      {/* Persistent WhatsApp Booking Widget (hidden when mobile drawer menu is active) */}
      <WhatsAppWidget isHidden={mobileMenuOpen} />

      {/* Interactive Look Lightbox Modal */}
      <LightboxModal
        item={selectedLook}
        onClose={() => setSelectedLook(null)}
        onNavigate={(item) => setSelectedLook(item)}
      />
    </div>
  );
}
