import React, { useState } from 'react';
import { ShoppingBag, Phone, MapPin, Calendar, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSubscription }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6E0D5] shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#1B4332] text-[#E8F5E9] text-[11px] sm:text-xs md:text-sm py-2 px-3 sm:px-6 lg:px-12">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-center sm:text-left">
            <span className="inline-flex items-center justify-center bg-[#D8F3DC] text-[#1B4332] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
              Online Live
            </span>
            <span className="truncate">🥛 Fresh Organic Milk & Desi Ghee in Karachi</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline-flex items-center gap-1 text-[#C7E9C0]">
              <MapPin className="w-3.5 h-3.5" /> Near Moti Mahal, Block 2, Gulshan
            </span>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20inquire%20about%20pure%20milk%20and%20desi%20ghee%20home%20delivery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#FFD166] hover:underline"
            >
              <Phone className="w-3 h-3" /> Call/WhatsApp: 0310 3510076
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white flex items-center justify-center font-serif text-xl sm:text-2xl font-bold shadow-md group-hover:scale-105 transition-transform shrink-0">
            GM
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-serif font-black text-lg sm:text-2xl tracking-tight text-[#1B4332]">
                GM DAIRIES
              </span>
              <span className="bg-[#E9F5ED] text-[#2D6A4F] text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#2D6A4F]/20">
                KHI
              </span>
            </div>
            <p className="text-[9px] sm:text-[11px] text-[#52796F] font-semibold tracking-wide uppercase line-clamp-1">
              Pure Organic Milk & Ghee
            </p>
          </div>
        </a>

        {/* Desktop & Laptop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-semibold text-[#2D3A30]">
          <a href="#products" className="hover:text-[#2D6A4F] transition-colors">
            Our Products
          </a>
          <a href="#subscription" className="hover:text-[#2D6A4F] transition-colors flex items-center gap-1.5 text-[#1B4332] font-bold">
            <Calendar className="w-4 h-4 text-[#2D6A4F]" />
            Milk Subscription
            <span className="bg-[#2D6A4F] text-white text-[10px] px-1.5 py-0.2 rounded-full">Save 5%</span>
          </a>
          <a href="#purity" className="hover:text-[#2D6A4F] transition-colors">
            Purity Guarantee
          </a>
          <a href="#delivery" className="hover:text-[#2D6A4F] transition-colors">
            Karachi Routes
          </a>
          <a href="#reviews" className="hover:text-[#2D6A4F] transition-colors flex items-center gap-1">
            Reviews <span className="text-[#E76F51] font-bold">★ 4.8</span>
          </a>
          <a href="#location" className="hover:text-[#2D6A4F] transition-colors">
            Store Location
          </a>
        </div>

        {/* Actions (Subscription + Cart + Phone) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSubscription}
            className="hidden md:inline-flex items-center gap-1.5 bg-[#E8F5E9] hover:bg-[#D8F3DC] text-[#1B4332] border border-[#2D6A4F]/30 px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-102"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Daily Milk Plan</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View Cart"
            className="relative flex items-center gap-1.5 sm:gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden xs:inline sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-[#E76F51] text-white text-[10px] sm:text-xs font-extrabold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1B4332] hover:bg-[#EAE4D9] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E6E0D5] px-4 pt-2 pb-6 space-y-3">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-200/60"
          >
            🥛 Our Farm Products
          </a>
          <a
            href="#subscription"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#2D6A4F] border-b border-gray-200/60"
          >
            📅 Daily Milk Subscription (5% Off)
          </a>
          <a
            href="#purity"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-200/60"
          >
            🛡️ 100% Purity Guarantee (0% Water)
          </a>
          <a
            href="#delivery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-200/60"
          >
            🚚 Karachi Delivery Schedule
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-200/60"
          >
            ⭐ Customer Reviews (4.8 ★ / 41)
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332]"
          >
            📍 Store in Gulshan-e-Iqbal
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubscription();
              }}
              className="w-full bg-[#2D6A4F] text-white py-2.5 rounded-xl text-center font-bold text-sm shadow"
            >
              Start Daily Morning Milk Subscription
            </button>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-2.5 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> WhatsApp Order (0310 3510076)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

