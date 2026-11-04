import React from 'react';
import { INSTAGRAM_COMMENTS } from '../data/karachiAreas';
import { Heart, MessageCircle, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';

export default function InstagramStoryBanner({ onOpenSubscription }) {
  return (
    <section className="py-16 bg-white border-y border-[#ECE7DC] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="scroll-slide-up flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E0D7C6] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0E3524] mb-2.5 shadow-2xs hover:scale-105 transition-transform">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FD1D1D] to-[#E1306C] animate-pulse" />
              <span>Direct From Our Instagram & Facebook Community</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#0E3524]">
              You Asked: <span className="italic text-[#E1306C]">"Online Available?"</span> We Delivered!
            </h2>
            <p className="text-xs sm:text-sm text-[#52796F] max-w-2xl mt-1.5">
              Hundreds of daily comments on Instagram asking for home delivery. We built our morning doorstep distribution network across Karachi so you never run out of pure milk.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.instagram.com/p/CzlUK3otT05/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#0E3524] border border-[#D5CDC0] px-4 py-2.5 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#E1306C]" />
              View Original Instagram Post
            </a>
            <button
              onClick={onOpenSubscription}
              className="btn-shimmer inline-flex items-center gap-1.5 text-xs font-bold bg-[#1B4332] hover:bg-[#0E3524] text-white px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
              Start Subscription
            </button>
          </div>
        </div>

        {/* 4 Cards strictly in 1 Row with Staggered Scroll Animation */}
        <div className="grid-4-row">
          {INSTAGRAM_COMMENTS.map((item, idx) => {
            const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-300'];
            return (
              <div
                key={idx}
                className={`scroll-slide-up ${delays[idx]} group bg-gradient-to-b from-[#FAF8F5] to-white rounded-3xl p-5 border border-[#E9E3D5] hover:border-[#2D6A4F]/60 transition-all duration-400 ease-out hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between h-full relative cursor-default`}
              >
                {/* Customer Comment */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#F56040] group-hover:rotate-6 transition-transform duration-300">
                        <img
                          src={item.avatar}
                          alt={item.handle}
                          className="w-8 h-8 rounded-full object-cover border-2 border-white shrink-0"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#0E3524] truncate group-hover:text-[#2D6A4F] transition-colors">
                          {item.handle}
                        </div>
                        <div className="text-[10px] text-gray-500 truncate">{item.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-100 shadow-2xs group-hover:scale-105 transition-transform">
                      <Heart className="w-3.5 h-3.5 fill-[#E1306C] text-[#E1306C] group-hover:scale-125 transition-transform duration-300" />
                      <span className="font-bold text-[11px] text-[#0E3524]">{item.likes}</span>
                    </div>
                  </div>

                  <div className="text-[11px] sm:text-xs font-medium text-[#2C3E35] bg-white p-3 rounded-2xl border border-[#ECE5D8] leading-relaxed shadow-2xs group-hover:border-[#2D6A4F]/30 transition-colors">
                    "{item.comment}"
                  </div>

                  {/* GM Dairies Official Verified Reply */}
                  <div className="pl-3 border-l-2 border-[#2D6A4F] space-y-1 bg-[#E8F5E9]/30 p-2.5 rounded-r-xl group-hover:bg-[#E8F5E9]/50 transition-colors">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0E3524]">
                      <span>GM Dairies</span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F] fill-[#D8F3DC]" />
                      <span className="text-[9px] bg-[#D8F3DC] text-[#1B4332] px-1.5 py-0.2 rounded font-extrabold">Verified Reply</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#354F42] leading-relaxed">
                      {item.reply}
                    </p>
                  </div>
                </div>

                {/* Quick Action Footer */}
                <div className="pt-3.5 mt-3 border-t border-[#ECE5D8]/80 flex items-center justify-between text-[11px]">
                  <span className="text-[#52796F] font-semibold text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Morning Delivery
                  </span>
                  <a
                    href={`https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20saw%20the%20comment%20on%20Instagram%20and%20want%20to%20order`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2D6A4F] hover:text-[#0E3524] flex items-center gap-1 text-[11px] hover:underline hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" /> Reply on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
