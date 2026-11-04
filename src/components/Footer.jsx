import React from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenSubscription }) {
  return (
    <footer className="bg-[#112D22] text-[#E8F5E9] pt-16 pb-12 border-t border-[#1B4332]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md">
                GM
              </div>
              <div>
                <span className="font-serif font-black text-2xl tracking-tight text-white">
                  GM DAIRIES
                </span>
                <p className="text-[11px] text-[#80ED99] font-bold tracking-wider uppercase">
                  Karachi Organic Farm Fresh
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
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+923103510076"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#2D6A4F] text-white flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FFD166] uppercase tracking-wider">
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
                  className="hover:text-[#A3E635] text-left transition-colors font-bold text-[#80ED99]"
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
            <h4 className="font-serif font-bold text-sm text-[#FFD166] uppercase tracking-wider">
              Store & Distribution Hub
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#80ED99] shrink-0 mt-0.5" />
                <span>Near Moti Mahal, Block 2, Gulshan-e-Iqbal, Karachi, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#80ED99] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+923103510076" className="font-bold text-white hover:underline">
                    +92 310 3510076
                  </a>
                  <span className="block text-[11px] text-gray-400">Direct Calls & WhatsApp Active</span>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 mt-3 text-[11px] space-y-1">
                <div className="text-[#FFD166] font-bold">⏰ Open 7 Days: 6:00 AM – 11:00 PM</div>
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
            <span className="flex items-center gap-1 text-[#80ED99]">
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

