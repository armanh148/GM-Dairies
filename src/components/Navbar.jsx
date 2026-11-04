import React, { useState } from 'react';
import { ShoppingBag, Phone, MapPin, Calendar, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSubscription }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-black/[0.06] transition-all">
      {/* Top Ambient Announcement Strip */}
      <div className="bg-gradient-to-r from-[#0E3524] via-[#1B4332] to-[#0E3524] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-8 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Message with Live Pulsing Dot */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
            </span>
            
            {/* Tag pill (Desktop / Tablet) */}
            <span className="hidden sm:inline-flex items-center justify-center bg-white/15 text-[#86EFAC] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shrink-0">
              Morning Dispatch
            </span>
            
            {/* Desktop text */}
            <span className="hidden sm:inline text-gray-200 truncate">
              🥛 100% Pure Organic Milk & Desi Ghee Across Karachi
            </span>

            {/* Mobile compact text */}
            <span className="sm:hidden text-white font-bold text-[11px] truncate">
              🥛 Pure Milk & Desi Ghee
            </span>
          </div>

          {/* Right: Hotline & Depot info */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-gray-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#86EFAC]" /> Near Moti Mahal, Block 2, Gulshan
            </span>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-black text-[#FDE047] hover:text-white transition-colors whitespace-nowrap text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-[#FDE047] shrink-0" />
              <span className="hidden xs:inline">WhatsApp:</span> 0310 3510076
            </a>
          </div>

        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0B2B1E] text-white flex items-center justify-center font-serif text-xl sm:text-2xl font-bold shadow-lg shadow-[#1B4332]/20 border border-white/20 group-hover:scale-105 transition-all">
            GM
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-lg sm:text-2xl tracking-tight text-[#0E3524]">
                GM DAIRIES
              </span>
              <span className="bg-[#E8F5E9] text-[#1B4332] text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#1B4332]/15">
                KARACHI
              </span>
            </div>
            <p className="text-[9px] sm:text-[11px] text-[#52796F] font-semibold tracking-wider uppercase">
              Farm Fresh Organic Dairy
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold text-[#2D3A30]">
          <a
            href="#products"
            className="px-3.5 py-2 rounded-xl hover:bg-[#F2ECE1] text-[#1B4332] hover:text-[#0E3524] transition-all"
          >
            Store Products
          </a>
          <a
            href="#subscription"
            className="px-3.5 py-2 rounded-xl hover:bg-[#E8F5E9] text-[#1B4332] font-bold flex items-center gap-1.5 transition-all"
          >
            <Calendar className="w-4 h-4 text-[#2D6A4F]" />
            Milk Subscription
            <span className="bg-[#2D6A4F] text-white text-[9px] font-black px-1.5 py-0.2 rounded-full">
              5% Off
            </span>
          </a>
          <a
            href="#purity"
            className="px-3.5 py-2 rounded-xl hover:bg-[#F2ECE1] text-[#1B4332] transition-all"
          >
            Purity Standard
          </a>
          <a
            href="#delivery"
            className="px-3.5 py-2 rounded-xl hover:bg-[#F2ECE1] text-[#1B4332] transition-all"
          >
            Karachi Routes
          </a>
          <a
            href="#reviews"
            className="px-3.5 py-2 rounded-xl hover:bg-[#F2ECE1] text-[#1B4332] transition-all flex items-center gap-1"
          >
            Reviews <span className="text-[#E76F51] font-bold">★ 4.8</span>
          </a>
          <a
            href="#location"
            className="px-3.5 py-2 rounded-xl hover:bg-[#F2ECE1] text-[#1B4332] transition-all"
          >
            Gulshan Store
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSubscription}
            className="btn-shimmer hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8F5E9] to-[#D8F3DC] hover:from-[#D8F3DC] hover:to-[#C7E9C0] text-[#0E3524] border border-[#2D6A4F]/25 px-3.5 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Daily Milk Plan</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View Cart"
            className="btn-shimmer relative flex items-center gap-2 bg-[#1B4332] hover:bg-[#0E3524] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-[#1B4332]/20 hover:shadow-lg transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-[#E76F51] text-white text-[10px] sm:text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-[#0E3524] hover:bg-[#F2ECE1] rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#ECE5D8] px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 text-sm font-semibold text-[#0E3524]">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
            >
              Store Products (Desi Ghee, Butter, Dahi, Milk)
            </a>
            <a
              href="#subscription"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubscription();
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#E8F5E9] text-[#1B4332] font-bold"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#2D6A4F]" />
                Morning Milk Subscription
              </span>
              <span className="text-[10px] bg-[#2D6A4F] text-white font-extrabold px-2 py-0.5 rounded-full">
                5% Off
              </span>
            </a>
            <a
              href="#purity"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
            >
              Our Purity Guarantee (0% Water)
            </a>
            <a
              href="#delivery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
            >
              Karachi Delivery Routes & Slots
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
            >
              <span>Customer Reviews</span>
              <span className="text-xs font-bold text-[#E76F51]">★ 4.8 Rating</span>
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
            >
              Visit Gulshan Store (Near Moti Mahal)
            </a>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubscription();
              }}
              className="w-full bg-[#1B4332] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#1B4332]/20"
            >
              <Sparkles className="w-4 h-4 text-[#FDE047]" />
              Start Daily Morning Milk Subscription
            </button>

            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order%20milk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
            >
              <Phone className="w-4 h-4" /> WhatsApp Order (0310 3510076)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
