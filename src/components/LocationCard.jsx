import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

export default function LocationCard() {
  return (
    <section id="location" className="py-16 bg-[#FAF7F2]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="bg-white rounded-3xl border border-[#E5DEC9] shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Store Information */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#E8F5E9] px-3 py-1 rounded-full">
                  Flagship Store & Distribution Depot
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B4332] mt-3">
                  Visit GM Dairies in Gulshan-e-Iqbal
                </h2>
                <p className="text-sm text-[#52796F] mt-2">
                  Prefer to taste before buying? Walk into our store near Moti Mahal! Check the aroma of fresh churned Desi Ghee, watch our hygienic milk bottling, or pick up thick sweet dahi for lunch.
                </p>
              </div>

              {/* Info Badges */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#2D6A4F] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#1B4332] font-bold">Physical Address:</strong>
                    <span className="text-[#4F6358]">
                      Near Moti Mahal, Block 2, Gulshan-e-Iqbal, Karachi, Pakistan
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#2D6A4F] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#1B4332] font-bold">Direct Phone & WhatsApp Hotline:</strong>
                    <a
                      href="tel:+923103510076"
                      className="text-[#2D6A4F] font-bold hover:underline"
                    >
                      +92 310 3510076
                    </a>
                    <span className="text-gray-500 text-xs block">Active Pakistani 0310 Mobile • Immediate Response</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#2D6A4F] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#1B4332] font-bold">Operating Timings:</strong>
                    <span className="text-[#4F6358]">
                      Open 7 Days a Week: 6:00 AM – 11:00 PM
                    </span>
                    <span className="text-xs text-[#2D6A4F] font-semibold block">Morning Fresh Farm Stock Arrives Daily at 5:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Moti+Mahal+Gulshan-e-Iqbal+Block+2+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Get Google Maps Directions
                </a>
                <a
                  href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20am%20near%20Moti%20Mahal%20and%20want%20to%20visit%20your%20shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Interactive Karachi Map Preview Graphic */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-white/10 rounded-full blur-xl" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD166] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Central Karachi Dairy Hub</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">
                  Fast Morning Dispatches from Gulshan-e-Iqbal
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Located strategically at Block 2 near Moti Mahal, allowing our refrigerated delivery bikes & vans to reach Johar, Rashid Minhas, Shahrah-e-Faisal, Clifton, and North Nazimabad within 25 minutes.
                </p>

                {/* Nearby landmarks list */}
                <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 space-y-2 text-xs border border-white/15">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>Nearby Landmarks:</span>
                    <span className="text-[10px] text-[#A3E635]">Block 2 Depot</span>
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
                <span>Free Parking Available</span>
                <span className="text-[#80ED99] font-bold">Open Daily till 11 PM</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

