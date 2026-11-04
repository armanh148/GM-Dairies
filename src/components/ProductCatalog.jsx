import React, { useState, useRef, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles, MessageCircle, Phone, ChevronLeft, ChevronRight, Search, ArrowUpDown, X, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export default function ProductCatalog({ onAddToCart, onOpenSubscription }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [subscriptionOnly, setSubscriptionOnly] = useState(false);
  const sliderRef = useRef(null);
  const sortDropdownRef = useRef(null);

  // Close custom sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      const matchCat = selectedCategory === 'all' || product.category === selectedCategory;
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchSub = !subscriptionOnly || product.availableForSubscription;

      return matchCat && matchSearch && matchSub;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, subscriptionOnly]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setSubscriptionOnly(false);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#0E3524] px-4 py-1.5 rounded-full text-xs font-bold mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Own-Packaged • Farm Chilled</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#0E3524]">
              Our Pure Organic Dairy Products
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#52796F] max-w-xl">
              100% pure organic dairy, tested daily with lactometer for zero added water. Hygienically packed at our Gulshan depot.
            </p>
          </div>

          {/* Slider Prev/Next Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous products"
              className="w-10 h-10 rounded-2xl bg-white border border-[#D5CDC0] hover:border-[#2D6A4F] hover:bg-[#E8F5E9] text-[#0E3524] flex items-center justify-center shadow-xs transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next products"
              className="w-10 h-10 rounded-2xl bg-[#1B4332] hover:bg-[#0E3524] text-white flex items-center justify-center shadow-md shadow-[#1B4332]/25 transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Filter Bar */}
        <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#E8E2D5] shadow-xs mb-6 space-y-3.5 relative z-20">
          
          {/* Top Row: Category Filter Pills */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#1B4332] text-white shadow-md shadow-[#1B4332]/20 scale-[1.02]'
                        : 'bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#3E5247] border border-[#E5DEC9]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                        isSelected
                          ? 'bg-white/25 text-white'
                          : 'bg-[#EAE4D6] text-[#2D6A4F]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Search, Subscription Check & Sort Filter */}
          <div className="pt-2 border-t border-[#F0EAE0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
            
            {/* Search filter input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search milk, desi ghee, butter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#D5CDC0] rounded-xl pl-8 pr-7 py-2 text-xs text-[#0E3524] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter: Subscription Only & Custom Sort Dropdown */}
            <div className="flex items-center gap-2.5 self-end sm:self-auto flex-wrap">
              
              {/* Modern Subscription Toggle Button */}
              <button
                type="button"
                onClick={() => setSubscriptionOnly((prev) => !prev)}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-bold transition-all border ${
                  subscriptionOnly
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm'
                    : 'bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#3E5247] border-[#D5CDC0]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    subscriptionOnly ? 'bg-[#4ADE80] animate-pulse' : 'bg-gray-300'
                  }`}
                />
                <span>Daily Subscription Only</span>
              </button>

              {/* Custom Luxury Sort Dropdown (Replacing ugly native OS select) */}
              <div className="relative" ref={sortDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsSortOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-bold transition-all border ${
                    isSortOpen
                      ? 'bg-[#E8F5E9] text-[#0E3524] border-[#2D6A4F] shadow-sm ring-2 ring-[#2D6A4F]/20'
                      : 'bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#0E3524] border-[#D5CDC0]'
                  }`}
                >
                  <ArrowUpDown className="w-3 h-3 text-[#2D6A4F]" />
                  <span>{SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || 'Featured'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                      isSortOpen ? 'rotate-180 text-[#2D6A4F]' : ''
                    }`}
                  />
                </button>

                {/* Custom Popover Menu */}
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white/98 backdrop-blur-md rounded-2xl border border-[#D5CDC0] shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-2.5 py-1.5">
                      Sort Products
                    </div>
                    {SORT_OPTIONS.map((option) => {
                      const isSelected = sortBy === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-left transition-colors ${
                            isSelected
                              ? 'bg-[#1B4332] text-white font-bold shadow-xs'
                              : 'text-[#0E3524] hover:bg-[#FAF8F5]'
                          }`}
                        >
                          <span>{option.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#FDE047]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Reset filter button if any active */}
              {(selectedCategory !== 'all' || searchQuery || subscriptionOnly || sortBy !== 'featured') && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E76F51] hover:underline"
                >
                  <X className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

          </div>

          {/* Active Filter summary pill */}
          <div className="flex items-center justify-between text-[11px] text-[#52796F] pt-1">
            <span>
              Showing <strong className="text-[#0E3524]">{filteredProducts.length}</strong> of {PRODUCTS.length} dairy products
            </span>
            {selectedCategory !== 'all' && (
              <span className="text-[#2D6A4F] font-semibold">
                Category: {CATEGORIES.find(c => c.id === selectedCategory)?.label}
              </span>
            )}
          </div>
        </div>

        {/* 5 In A Row Horizontal Interactive Slider */}
        <div className="relative">
          {filteredProducts.length > 0 ? (
            <div
              ref={sliderRef}
              className="flex gap-3.5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="slider-5-col snap-start h-auto flex flex-col"
                >
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onOpenSubscription={onOpenSubscription}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-[#D5CDC0]">
              <div className="text-4xl mb-2">🔍</div>
              <h4 className="font-serif font-bold text-base text-[#0E3524]">No matching products found</h4>
              <p className="text-xs text-[#52796F] mt-1">
                Try changing your search query or reset the filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-3 inline-flex items-center gap-1.5 bg-[#2D6A4F] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Slider helper hint */}
          {filteredProducts.length > 0 && (
            <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
              <span className="text-[11px] text-[#52796F] font-medium">
                💡 Slide horizontally or use arrows to view items (5 products per row on desktop)
              </span>
              <span className="text-[11px] font-semibold text-[#0E3524]">
                100% Pure Organic Guarantee
              </span>
            </div>
          )}
        </div>

        {/* Custom Wholesale / Bulk Family Orders Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0E3524] via-[#1B4332] to-[#2D6A4F] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#FDE047] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Bulk Orders & Special Events</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">
              Need 10L+ Daily or Pure Desi Ghee in Bulk for Mithai / Events?
            </h3>
            <p className="text-xs text-gray-200 max-w-xl">
              We supply pure unadulterated milk and khoya to trusted homes, bakeries, and restaurants in Karachi at wholesale pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20discuss%20bulk%20milk%20or%20desi%20ghee%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to GM Manager on WhatsApp
            </a>
            <a
              href="tel:+923103510076"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" /> Call 0310 3510076
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
