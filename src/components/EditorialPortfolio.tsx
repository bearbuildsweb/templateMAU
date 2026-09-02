import React, { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, SITE_CONFIG } from '../data/content';
import { PortfolioItem, CategoryType } from '../types';

interface EditorialPortfolioProps {
  onSelectLook: (item: PortfolioItem) => void;
}

export const EditorialPortfolio: React.FC<EditorialPortfolioProps> = ({
  onSelectLook,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');

  const categories: CategoryType[] = [
    'ALL',
    'SOFT GLAM',
    'FULL GLAM',
    'BRIDAL',
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const heroLook = filteredItems[0] || PORTFOLIO_ITEMS[0];
  const secondaryLook1 = filteredItems[1] || PORTFOLIO_ITEMS[1];
  const secondaryLook2 = filteredItems[2] || PORTFOLIO_ITEMS[2];
  const restItems = filteredItems.slice(3);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#F5F1E9] text-[#171615] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Minimal Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E0D7C9] pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C8275] block mb-2 font-medium">
              Portfolio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#171615]">
              Selected <span className="italic font-normal">Works</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs uppercase tracking-[0.2em] text-[#8C8275]">
            Soft Glam &bull; Full Glam &bull; Bridal
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.22em] font-medium whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#171615] text-[#FAF8F5] border-[#171615]'
                  : 'bg-[#FAF8F5]/80 text-[#57524E] border-[#E5DDD0] hover:border-[#171615] hover:text-[#171615]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Main Hero Column (7 Cols) */}
          {heroLook && (
            <div 
              onClick={() => onSelectLook(heroLook)}
              className="lg:col-span-7 group cursor-pointer relative bg-[#FAF8F5] border border-[#E0D7C9] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[600px] bg-[#EDE6DC]">
                <img
                  src={heroLook.image}
                  alt={heroLook.title}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 z-10 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[#171615] font-medium">
                  {heroLook.category}
                </div>

                <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#FAF8F5]/90 backdrop-blur-sm flex items-center justify-center text-[#171615] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Minimal Caption */}
              <div className="p-6 bg-[#FAF8F5] flex items-center justify-between border-t border-[#E0D7C9]">
                <div>
                  <h3 className="font-serif text-2xl text-[#171615] group-hover:text-[#8C8275] transition-colors">
                    {heroLook.title}
                  </h3>
                  <p className="text-xs text-[#8C8275] font-light mt-0.5">
                    {heroLook.subtitle}
                  </p>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#8C8275] group-hover:text-[#171615] transition-colors" />
              </div>
            </div>
          )}

          {/* Secondary Stacked Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {secondaryLook1 && (
              <div
                onClick={() => onSelectLook(secondaryLook1)}
                className="group cursor-pointer bg-[#FAF8F5] border border-[#E0D7C9] overflow-hidden flex-1 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:h-[250px] bg-[#EDE6DC]">
                  <img
                    src={secondaryLook1.image}
                    alt={secondaryLook1.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] text-[#171615]">
                    {secondaryLook1.category}
                  </div>
                </div>
                <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#E0D7C9] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#171615] group-hover:text-[#8C8275] transition-colors">
                      {secondaryLook1.title}
                    </h4>
                    <p className="text-xs text-[#8C8275]">{secondaryLook1.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8C8275] group-hover:text-[#171615] transition-colors" />
                </div>
              </div>
            )}

            {secondaryLook2 && (
              <div
                onClick={() => onSelectLook(secondaryLook2)}
                className="group cursor-pointer bg-[#FAF8F5] border border-[#E0D7C9] overflow-hidden flex-1 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:h-[250px] bg-[#EDE6DC]">
                  <img
                    src={secondaryLook2.image}
                    alt={secondaryLook2.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] text-[#171615]">
                    {secondaryLook2.category}
                  </div>
                </div>
                <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#E0D7C9] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#171615] group-hover:text-[#8C8275] transition-colors">
                      {secondaryLook2.title}
                    </h4>
                    <p className="text-xs text-[#8C8275]">{secondaryLook2.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8C8275] group-hover:text-[#171615] transition-colors" />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* 3-Item Spread */}
        {restItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectLook(item)}
                className="group cursor-pointer bg-[#FAF8F5] border border-[#E0D7C9] overflow-hidden flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-[#EAE2D5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] text-[#171615]">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 bg-[#FAF8F5] border-t border-[#E0D7C9] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl text-[#171615] group-hover:text-[#8C8275] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8C8275] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8C8275] group-hover:text-[#171615] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Minimal Banner */}
        <div className="bg-[#EDE6DC] border border-[#DCD1C2] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-serif text-2xl sm:text-3xl font-light text-[#171615] italic">
            “Enhancing your natural radiance, effortlessly.”
          </p>

          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#171615] text-[#FAF8F5] text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#34302C] transition-colors shrink-0 flex items-center space-x-2 group"
          >
            <span>Meet Liyana</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

