import React, { useState, useRef } from 'react';
import { KARACHI_AREAS } from '../data/karachiAreas';
import { Truck, MapPin, Clock, Search, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function KarachiDeliveryChecker() {
  const [searchTerm, setSearchTerm] = useState('');
  const sliderRef = useRef(null);

  const filteredAreas = KARACHI_AREAS.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <section id="delivery" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        {/* Header with Search and Navigation Controls */}
        <div className="scroll-slide-up flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#E8F5E9] text-[#0E3524] px-4 py-1.5 rounded-full text-xs font-bold mb-2.5 shadow-2xs hover:scale-105 transition-transform">
              <Truck className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Morning Delivery Network</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#0E3524]">
              Karachi Delivery Coverage & Timings
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#52796F] max-w-xl">
              Insulated morning dispatch direct from Moti Mahal hub. Slide across our Karachi delivery zones or search your area.
            </p>
          </div>

          {/* Right Action: Search Bar & Slider Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search area (e.g. Gulshan, DHA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-[#D5CDC0] rounded-2xl pl-9 pr-3 py-2.5 text-xs text-[#0E3524] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] hover:border-[#2D6A4F]/50 transition-colors"
              />
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-end gap-2 shrink-0">
              <button
                onClick={() => handleScroll('left')}
                aria-label="Previous areas"
                className="w-10 h-10 rounded-2xl bg-white border border-[#D5CDC0] hover:border-[#2D6A4F] hover:bg-[#E8F5E9] text-[#0E3524] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-90"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Next areas"
                className="w-10 h-10 rounded-2xl bg-[#1B4332] hover:bg-[#0E3524] text-white flex items-center justify-center shadow-md shadow-[#1B4332]/25 hover:shadow-lg transition-all active:scale-90"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 in a row Horizontal Interactive Slider */}
        <div className="scroll-slide-up delay-100 relative">
          <div
            ref={sliderRef}
            className="flex gap-3.5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredAreas.map((area, idx) => (
              <div
                key={idx}
                className="slider-5-col snap-start bg-white p-5 rounded-3xl border border-[#E8E2D5] hover:border-[#2D6A4F]/60 transition-all duration-400 ease-out hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Area Title & Status */}
                  <div className="flex items-start justify-between gap-1.5 mb-2.5">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <h4 className="text-xs font-bold text-[#0E3524] leading-snug line-clamp-2">
                        {area.name}
                      </h4>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block text-[9px] font-extrabold bg-[#E8F5E9] text-[#2D6A4F] px-2.5 py-0.5 rounded-full border border-[#2D6A4F]/20">
                      {area.status}
                    </span>
                  </div>

                  {/* Schedule Details */}
                  <div className="space-y-1.5 text-xs text-[#52796F]">
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">Slot: <strong className="text-[#0E3524]">{area.timeSlot}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                      <span className="truncate">Delivery: <strong className="text-[#2D6A4F]">{area.fee}</strong></span>
                    </div>
                    <div className="text-[10px] text-gray-500 pl-5">
                      Min: {area.minOrder}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-gray-400 font-medium">Daily Drop</span>
                  <a
                    href={`https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20morning%20milk%20delivery%20in%20${encodeURIComponent(area.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#2D6A4F] hover:text-[#0E3524] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" /> Book Area
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Slider bottom hint */}
          <div className="flex items-center justify-between mt-2.5 text-xs text-gray-400">
            <span className="text-[11px] text-[#52796F] font-medium">
              💡 Swipe or use arrows to view all {filteredAreas.length} Karachi delivery zones (5 per row on desktop)
            </span>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0E3524]">
              <span>Coverage: 100% Guaranteed Morning Fresh</span>
            </div>
          </div>
        </div>

        {/* Empty search state */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-10 bg-white rounded-3xl border border-dashed border-[#D5CDC0] mt-4">
            <p className="text-sm font-bold text-[#0E3524]">No delivery zone found matching "{searchTerm}"</p>
            <p className="text-xs text-[#52796F] mt-1">
              Don't worry! We add new Karachi routes weekly. Send your location pin to arrange a morning drop.
            </p>
            <a
              href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20is%20delivery%20available%20in%20my%20area?"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Inquire on WhatsApp (0310 3510076)
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
