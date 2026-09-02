import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { Logo } from './Logo';

interface NavigationProps {
  onOpenWhatsApp: () => void;
  isMobileMenuOpen?: boolean;
  onToggleMobileMenu?: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenWhatsApp,
  isMobileMenuOpen: externalMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);

  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultMsg = encodeURIComponent("Hi Liyana, I'd love to enquire about booking a makeup appointment.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${defaultMsg}`;

  const mobileMenuOpen = externalMobileMenuOpen !== undefined ? externalMobileMenuOpen : internalMobileMenuOpen;

  const setMobileMenuOpen = (open: boolean) => {
    if (onToggleMobileMenu) {
      onToggleMobileMenu(open);
    } else {
      setInternalMobileMenuOpen(open);
    }
  };

  const desktopNavLinks = [
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const drawerNavLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className="fixed top-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md py-3.5 sm:py-4 border-b border-[#E8E2D8]/80 shadow-[0_4px_20px_rgba(23,22,21,0.03)] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark & Icon */}
          <a
            href="#"
            id="brand-logo-link"
            className="group focus:outline-none"
          >
            <Logo size="md" sublineText="Joburg. SA" />
          </a>

          {/* Desktop Navigation Link & Action Area */}
          <div className="hidden md:flex items-center space-x-8">
            {desktopNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.22em] text-[#57524E] hover:text-[#171615] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#171615] hover:after:w-full after:transition-all after:duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-book-btn"
              className="relative group overflow-hidden px-5 py-2.5 bg-[#171615] text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#34302C] active:scale-[0.98] inline-flex items-center"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <span>Book Liyana</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-quick-book-btn"
              className="px-3.5 py-1.5 bg-[#171615] text-[#FAF8F5] text-[11px] uppercase tracking-[0.18em] font-medium"
            >
              Book
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171615] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-30 bg-[#FAF8F5] flex flex-col justify-between pt-28 pb-10 px-8 md:hidden animate-fade-in"
        >
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C8275] border-b border-[#E8E2D8] pb-3">
              Inside
            </p>
            <nav className="flex flex-col space-y-5">
              {drawerNavLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-3xl text-[#171615] hover:text-[#8C8275] transition-colors flex items-center justify-between"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans tracking-widest text-[#A89E90]">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E8E2D8]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-4 bg-[#171615] text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center space-x-2.5 hover:bg-[#2E2A27] transition-all duration-300 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#FAF8F5]" />
              <span>Let’s talk beauty</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
