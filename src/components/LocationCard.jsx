import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

export default function LocationCard() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        <div className="scroll-slide-up bg-gradient-to-br from-[#FAF8F5] to-white rounded-3xl border border-[#E5DEC9] shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Store Information */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2D6A4F] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full shadow-2xs hover:scale-105 transition-transform inline-block">
                  Flagship Store & Distribution Depot
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#0E3524] mt-3.5">
                  Visit GM Dairies in Gulshan-e-Iqbal
                </h2>
                <p className="text-sm text-[#52796F] mt-2 leading-relaxed">
                  Prefer to taste before buying? Walk into our store near Moti Mahal! Check the aroma of fresh churned Desi Ghee, watch our hygienic milk bottling, or pick up thick sweet dahi for lunch.
                </p>
              </div>

              {/* Info Badges with Hover Micro-interactions */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="group flex items-start gap-3.5 cursor-default">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F5E9] text-[#2D6A4F] group-hover:bg-[#1B4332] group-hover:text-white group-hover:rotate-6 transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <strong className="block text-[#0E3524] font-bold group-hover:text-[#2D6A4F] transition-colors">Physical Address:</strong>
                    <span className="text-[#4F6358]">
                      Near Moti Mahal, Block 2, Gulshan-e-Iqbal, Karachi, Pakistan
                    </span>
                  </div>
                </div>

                <div className="group flex items-start gap-3.5 cursor-default">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F5E9] text-[#2D6A4F] group-hover:bg-[#1B4332] group-hover:text-white group-hover:rotate-6 transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <strong className="block text-[#0E3524] font-bold group-hover:text-[#2D6A4F] transition-colors">Direct Phone & WhatsApp Hotline:</strong>
                    <a
                      href="tel:+923103510076"
                      className="text-[#2D6A4F] font-bold hover:underline"
                    >
                      +92 310 3510076
                    </a>
                    <span className="text-gray-500 text-xs block">Active Pakistani 0310 Mobile • Immediate Response</span>
                  </div>
                </div>

                <div className="group flex items-start gap-3.5 cursor-default">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F5E9] text-[#2D6A4F] group-hover:bg-[#1B4332] group-hover:text-white group-hover:rotate-6 transition-all duration-300 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <strong className="block text-[#0E3524] font-bold group-hover:text-[#2D6A4F] transition-colors">Operating Timings:</strong>
                    <span className="text-[#4F6358]">
                      Open 7 Days a Week: 6:00 AM – 11:00 PM
                    </span>
                    <span className="text-xs text-[#2D6A4F] font-semibold block">Morning Fresh Farm Stock Arrives Daily at 5:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Shimmer & Hover Lift */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Moti+Mahal+Gulshan-e-Iqbal+Block+2+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#0E3524] text-white px-5 py-3 rounded-2xl font-bold text-xs shadow-md shadow-[#1B4332]/25 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <Navigation className="w-4 h-4" />
                  Get Google Maps Directions
                </a>
                <a
                  href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20am%20near%20Moti%20Mahal%20and%20want%20to%20visit%20your%20shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-2xl font-bold text-xs shadow-md shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Interactive Karachi Map Preview Graphic */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2B1E] via-[#1B4332] to-[#0E3524] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#FDE047] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Central Karachi Dairy Hub</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Fast Morning Dispatches from Gulshan-e-Iqbal
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Located strategically at Block 2 near Moti Mahal, allowing our refrigerated delivery bikes & vans to reach Johar, Rashid Minhas, Shahrah-e-Faisal, Clifton, and North Nazimabad within 25 minutes.
                </p>

                {/* Nearby landmarks list */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 space-y-2 text-xs border border-white/15">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>Nearby Landmarks:</span>
                    <span className="text-[10px] text-[#86EFAC] font-bold">Block 2 Depot</span>
                  </div>
                  <ul className="space-y-1 text-gray-300 text-[11px]">
                    <li>• Walking distance from Moti Mahal intersection</li>
                    <li>• 3 mins from Disco Bakery & Continental Bakery</li>
                    <li>• 5 mins from University Road & Expo Centre</li>
                    <li>• 7 mins from Gulshan Chowrangi</li>
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/20 text-xs text-gray-300 flex items-center justify-between">
                <span>Free Customer Parking</span>
                <span className="text-[#86EFAC] font-bold">Open Daily till 11 PM</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
