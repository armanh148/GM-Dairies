import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/karachiAreas';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-16 bg-white border-b border-[#ECE7DC] overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-12">
        
        {/* Rating Overview Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10 gap-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8E2D5]">
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

          {/* 4.8 Rating Box */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0 bg-white p-4 rounded-2xl border border-[#E5DEC9] shadow-xs">
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

        {/* 4 REVIEWS IN ONE SINGLE ROW CONTAINER */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Header Controls for Loop */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span>Live Reviews Loop (Review {currentIndex + 1} of {TESTIMONIALS.length})</span>
              <span className="text-[11px] text-gray-400 font-normal">
                {isPaused ? '(Paused on hover)' : '(Auto-looping active)'}
              </span>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-xl bg-white border border-[#D5CDC0] hover:bg-[#E8F5E9] hover:border-[#2D6A4F] text-[#1B4332] flex items-center justify-center shadow-xs transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-10 h-10 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white flex items-center justify-center shadow-sm transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ALL 4 REVIEWS IN 1 ROW (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            {TESTIMONIALS.map((review, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`cursor-pointer rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between h-full ${
                    isActive
                      ? 'bg-[#FAF7F2] border-[#2D6A4F] shadow-xl ring-2 ring-[#2D6A4F]/25 scale-[1.02]'
                      : 'bg-white border-[#EAE3D6] opacity-90 hover:opacity-100 hover:border-gray-400 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex text-[#F4A261]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border truncate ${
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
                        {review.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EAE3D6] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-[#1B4332] flex items-center gap-1">
                        <span>{review.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      </div>
                      <div className="text-[11px] text-[#52796F] mt-0.5 truncate max-w-[180px]">
                        {review.area}
                      </div>
                    </div>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F] shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator Loop Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-2.5 bg-[#2D6A4F]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
