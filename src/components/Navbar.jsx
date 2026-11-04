import React, { useState } from 'react';
import { ShoppingBag, Phone, MapPin, Calendar, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSubscription }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 border-b border-black/[0.06] transition-all">
      {/* Top Ambient Announcement Strip */}
      <div className="bg-gradient-to-r from-[#0E3524] via-[#1B4332] to-[#0E3524] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-[#4ADE80] animate-ping" />
            <span className="inline-flex items-center justify-center bg-white/15 text-[#86EFAC] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Doorstep Morning Drops
            </span>
            <span className="text-gray-200">
              🥛 100% Pure Organic Milk & Desi Ghee Across Karachi
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#86EFAC]" /> Near Moti Mahal, Block 2, Gulshan-e-Iqbal
            </span>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#FDE047] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" /> Call / WhatsApp: 0310 3510076
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="max-w-[1600px] mx-auto w-full px-3 sm:px-6 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0B2B1E] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-lg shadow-[#1B4332]/20 border border-white/20 group-hover:scale-105 transition-all">
            GM
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-[#0E3524]">
                GM DAIRIES
              </span>
              <span className="bg-[#E8F5E9] text-[#1B4332] text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#1B4332]/15">
                KARACHI
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#52796F] font-semibold tracking-wider uppercase">
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8F5E9] to-[#D8F3DC] hover:from-[#D8F3DC] hover:to-[#C7E9C0] text-[#0E3524] border border-[#2D6A4F]/25 px-3.5 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Daily Milk Plan</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View Cart"
            className="relative flex items-center gap-2 bg-[#1B4332] hover:bg-[#0E3524] text-white px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-[#1B4332]/20 hover:shadow-lg transition-all active:scale-95"
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
            className="lg:hidden p-2 text-[#1B4332] hover:bg-[#F0EAE0] rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#E6E0D5] px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-100"
          >
            🥛 Our Farm Products
          </a>
          <a
            href="#subscription"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#2D6A4F] border-b border-gray-100"
          >
            📅 Daily Milk Subscription (Save 5%)
          </a>
          <a
            href="#purity"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-100"
          >
            🛡️ 100% Purity Guarantee (0% Water)
          </a>
          <a
            href="#delivery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-100"
          >
            🚚 Karachi Delivery Schedule
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332] border-b border-gray-100"
          >
            ⭐ Customer Reviews (4.8 ★ / 41)
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-[#1B4332]"
          >
            📍 Gulshan Store (Near Moti Mahal)
          </a>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubscription();
              }}
              className="w-full bg-[#1B4332] text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FDE047]" />
              Start Daily Morning Milk Subscription
            </button>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" /> WhatsApp Order (0310 3510076)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
