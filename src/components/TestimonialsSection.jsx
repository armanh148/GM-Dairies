import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/karachiAreas';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);
  const sliderRef = useRef(null);

  // Auto-loop highlight rotation every 3.5 seconds
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 3500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  // Smooth scroll slider to active card on mobile when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const card = slider.children[currentIndex];
      if (card && slider.scrollWidth > slider.clientWidth) {
        const scrollLeft = card.offsetLeft - (slider.clientWidth - card.clientWidth) / 2;
        slider.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-white border-b border-[#ECE7DC] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        {/* Rating Overview Header */}
        <div className="scroll-slide-up flex flex-col lg:flex-row items-center justify-between mb-8 sm:mb-10 gap-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8E2D5] hover:shadow-md transition-shadow">
          <div className="text-center lg:text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#E8F5E9] px-3 py-1 rounded-full">
              4.8 ★ Verified Karachi Reviews
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#1B4332] mt-2">
              Loved by Karachi Breakfast Tables
            </h2>
            <p className="text-xs sm:text-sm text-[#52796F]">
              From Gulshan to Clifton, families trust GM Dairies for authentic thick malai, pure butterfat, and dependable morning doorstep delivery.
            </p>
          </div>

          {/* 4.8 Rating Box with hover scale */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0 bg-white p-4 rounded-2xl border border-[#E5DEC9] shadow-xs hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="text-center border-r border-gray-200 pr-4 sm:pr-5">
              <div className="text-3xl sm:text-4xl font-black text-[#1B4332]">4.8</div>
              <div className="flex text-[#F4A261] mt-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-[10px] text-gray-500 font-bold mt-1">41+ Reviews</div>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-14 text-[10px] text-gray-500 font-medium">5 Stars</span>
                <div className="w-20 sm:w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2D6A4F] h-full w-[92%]" />
                </div>
                <span className="text-[10px] font-bold text-gray-600">92%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-[10px] text-gray-500 font-medium">4 Stars</span>
                <div className="w-20 sm:w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2D6A4F] h-full w-[8%]" />
                </div>
                <span className="text-[10px] font-bold text-gray-600">8%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 text-[10px] text-gray-500 font-medium">3 Stars</span>
                <div className="w-20 sm:w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-gray-300 h-full w-[0%]" />
                </div>
                <span className="text-[10px] font-bold text-gray-600">0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS CONTAINER WITH RESPONSIVE MOBILE SLIDER + DESKTOP GRID */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Header Controls for Loop */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span>Review {currentIndex + 1} of {TESTIMONIALS.length}</span>
              <span className="text-[11px] text-gray-400 font-normal">
                {isPaused ? '(Paused on hover)' : '(Auto-looping active)'}
              </span>
            </div>

            {/* Slider arrows with hover effects */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#D5CDC0] hover:bg-[#E8F5E9] hover:border-[#2D6A4F] text-[#1B4332] flex items-center justify-center shadow-xs hover:shadow-md transition-all active:scale-90"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-90"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* MOBILE SLIDER (Horizontal Snap) / DESKTOP GRID (4 in 1 Row) */}
          <div
            ref={sliderRef}
            className="flex md:grid md:grid-cols-4 gap-3.5 sm:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
          >
            {TESTIMONIALS.map((review, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`shrink-0 w-[88%] xs:w-[82%] sm:w-[65%] md:w-auto snap-center cursor-pointer rounded-2xl sm:rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between h-full relative ${
                    isActive
                      ? 'bg-[#FAF7F2] border-[#2D6A4F] shadow-xl ring-2 ring-[#2D6A4F]/30 md:-translate-y-1.5'
                      : 'bg-white border-[#EAE3D6] opacity-90 hover:opacity-100 hover:border-[#2D6A4F]/40 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex text-[#F4A261]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current hover:scale-125 transition-transform" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border truncate transition-colors ${
                        isActive
                          ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                          : 'bg-[#E8F5E9] text-[#2D6A4F] border-[#2D6A4F]/20'
                      }`}>
                        {review.date}
                      </span>
                    </div>

                    <div className="relative pt-1">
                      <Quote className="w-6 h-6 text-[#2D6A4F]/20 absolute -top-2 -left-1 pointer-events-none" />
                      <p className="text-xs sm:text-sm text-[#2D3A30] leading-relaxed italic relative z-10 pl-2">
                        "{review.text}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#EAE3D6] flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#165B3D] to-[#0E3524] text-[#FDE047] text-[11px] font-black flex items-center justify-center shrink-0 shadow-2xs">
                        {review.name.split(' ').slice(0, 2).map((n) => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-[#0E3524] flex items-center gap-1 truncate">
                          <span>{review.name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#165B3D] shrink-0" />
                        </div>
                        <div className="text-[10px] text-[#52796F] truncate">
                          {review.area}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#165B3D] shrink-0 animate-ping" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator Loop Dots (Clickable to jump to any review) */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-2.5 bg-[#2D6A4F]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe helper hint */}
          <div className="text-center md:hidden mt-2 text-[11px] text-[#52796F] font-medium">
            👈 Swipe horizontally or use arrows to read customer stories 👉
          </div>

        </div>

      </div>
    </section>
  );
}
