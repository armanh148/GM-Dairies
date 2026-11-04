import React from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, Heart, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenSubscription }) {
  return (
    <footer className="bg-gradient-to-b from-[#091F15] via-[#0E2F21] to-[#06150E] text-[#E8F5E9] pt-16 pb-12 border-t border-[#1B4332]/40 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Newsletter / Instant WhatsApp Inquiry Callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#FDE047] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Karachi's #1 Pure Organic Dairy</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Ready to Upgrade Your Morning Breakfast Chai?
            </h3>
            <p className="text-xs text-gray-300">
              Order your first 100% pure organic milk delivery or monthly subscription today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSubscription}
              className="bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] hover:from-[#1B4332] hover:to-[#0E3524] text-white px-6 py-3.5 rounded-2xl font-bold text-xs shadow-lg shadow-[#1B4332]/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Subscription Plan
            </button>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-lg shadow-[#2D6A4F]/25 border border-white/20">
                GM
              </div>
              <div>
                <span className="font-serif font-black text-2xl tracking-tight text-white">
                  GM DAIRIES
                </span>
                <p className="text-[11px] text-[#86EFAC] font-black tracking-wider uppercase">
                  Karachi Organic Dairy Hub
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
              GM Dairies is Karachi's trusted destination for 100% pure, unadulterated organic milk, bilona churned Desi Ghee, traditional makhan, and fresh sweet dahi. Packaged under strict hygiene and delivered cold to your home every morning.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/p/CzlUK3otT05/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+923103510076"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#2D6A4F] text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FDE047] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Pure Organic Buffalo Milk
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Shudh Desi Ghee (Danedar)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Fresh White Butter (Makhan)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Thick Sweet Dahi
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSubscription}
                  className="hover:text-[#FDE047] text-left transition-colors font-bold text-[#86EFAC]"
                >
                  Daily Milk Morning Subscription →
                </button>
              </li>
              <li>
                <a href="#delivery" className="hover:text-white transition-colors">
                  Karachi Delivery Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hub */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FDE047] uppercase tracking-wider">
              Store & Distribution Hub
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <span>Near Moti Mahal, Block 2, Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+923103510076" className="font-bold text-white hover:underline">
                    +92 310 3510076
                  </a>
                  <span className="block text-[11px] text-gray-400">Direct Calls & WhatsApp Active</span>
                </div>
              </div>
              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 mt-3 text-[11px] space-y-1">
                <div className="text-[#FDE047] font-bold">⏰ Open 7 Days: 6:00 AM – 11:00 PM</div>
                <div className="text-gray-300">Daily Morning Deliveries: 5:30 AM – 8:30 AM</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} GM Dairies Karachi. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-[#86EFAC]">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Pure Lab Tested
            </span>
            <span>•</span>
            <span>4.8 ★ Rated Organic Dairy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
