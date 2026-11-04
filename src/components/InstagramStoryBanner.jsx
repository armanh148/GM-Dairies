import React from 'react';
import { INSTAGRAM_COMMENTS } from '../data/karachiAreas';
import { Heart, MessageCircle, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';

export default function InstagramStoryBanner({ onOpenSubscription }) {
  return (
    <section className="py-12 bg-white border-y border-[#ECE7DC]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#E0D7C6] px-3 py-1 rounded-full text-xs font-bold text-[#1B4332] mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <span>Direct From Our Instagram & Facebook Community</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1B4332]">
              You Asked: <span className="italic text-[#E76F51]">"Online Available?"</span> We Listened!
            </h2>
            <p className="text-sm text-[#52796F] max-w-xl mt-1">
              Karachi families love GM Dairies for our thick malai milk and aromatic Desi Ghee. Now you don't need to drive to our Gulshan store—get your daily milk delivered before 8:00 AM.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/p/CzlUK3otT05/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold bg-[#FAF7F2] hover:bg-[#F0EBE0] text-[#1B4332] border border-[#D5CDC0] px-4 py-2.5 rounded-xl transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Original Instagram Post
            </a>
            <button
              onClick={onOpenSubscription}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#1B4332] hover:bg-[#2D6A4F] text-white px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
              Start Subscription
            </button>
          </div>
        </div>

        {/* Instagram Comment Cards Grid: Exactly 2 in a row (grid-cols-1 md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INSTAGRAM_COMMENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#E9E3D5] hover:border-[#2D6A4F]/40 transition-all hover:shadow-md flex flex-col justify-between h-full"
            >
              {/* Customer Comment */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.avatar}
                      alt={item.handle}
                      className="w-9 h-9 rounded-full object-cover border border-[#2D6A4F]/30 shrink-0"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#1B4332]">{item.handle}</div>
                      <div className="text-[10px] sm:text-[11px] text-gray-500">{item.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span className="font-semibold">{item.likes}</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-medium text-[#2C3E35] bg-white p-3 rounded-xl border border-[#ECE5D8] leading-relaxed">
                  "{item.comment}"
                </div>

                {/* GM Dairies Official Verified Reply */}
                <div className="pl-3 border-l-2 border-[#2D6A4F] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B4332]">
                    <span>GM Dairies</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F] fill-[#D8F3DC]" />
                    <span className="text-[10px] bg-[#D8F3DC] text-[#1B4332] px-1.5 py-0.2 rounded font-semibold">Official Reply</span>
                  </div>
                  <p className="text-xs text-[#354F42] leading-relaxed">
                    {item.reply}
                  </p>
                </div>
              </div>

              {/* Quick Action footer */}
              <div className="pt-4 mt-3 border-t border-[#ECE5D8]/80 flex items-center justify-between text-xs">
                <span className="text-[#52796F] font-semibold text-xs">
                  ✓ Delivery available
                </span>
                <a
                  href={`https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20saw%20the%20comment%20on%20Instagram%20and%20want%20to%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2D6A4F] hover:underline flex items-center gap-1 text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Quick WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

