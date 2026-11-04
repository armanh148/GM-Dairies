import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Truck, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenSubscription, onExploreProducts }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3EFE6] via-[#FAF7F2] to-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D8F3DC]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#FFE8D6]/40 blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pitch & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Online Available Pill */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-[#2D6A4F]/30 px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                Karachi Online Store & Morning Delivery Active
              </span>
            </div>

            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1B4332] leading-tight tracking-tight">
              100% Pure Organic Milk & Desi Ghee, <br className="hidden sm:inline" />
              <span className="text-[#2D6A4F] underline decoration-[#D8F3DC] decoration-wavy decoration-2">
                Delivered to Your Doorstep.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#40534C] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              No milk powder, no chemical thickeners, zero added water. Own-packaged fresh buffalo milk, churned golden Desi Ghee, and thick sweet dahi from our Gulshan-e-Iqbal hub straight to your morning breakfast table.
            </p>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-2 text-left">
              <div className="flex items-center gap-2 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-[#E8E2D5]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D6A4F] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#1B4332]">0% Added Water</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-[#E8E2D5]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D6A4F] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#1B4332]">No Hormones/Oxytocin</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-[#E8E2D5]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D6A4F] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#1B4332]">Chilled &lt; 4°C Sealed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-[#E8E2D5]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D6A4F] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#1B4332]">Danedar Desi Ghee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-[#E8E2D5]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D6A4F] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#1B4332]">6:00 AM Drop</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-[#E8E2D5]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D6A4F] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#1B4332]">Moti Mahal Depot</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenSubscription}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-[#FFD166]" />
                Start Daily Milk Subscription
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#1B4332] border-2 border-[#1B4332]/20 hover:border-[#1B4332] px-6 py-3.5 rounded-xl font-bold text-base transition-colors"
              >
                Browse Dairy Store
              </button>

              <a
                href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20saw%20your%20website%20and%20want%20to%20order%20milk%20and%20desi%20ghee."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-xl font-bold text-base shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-[#E8E2D5]/80">
              <div className="flex items-center gap-2">
                <div className="flex text-[#F4A261]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-[#1B4332]">4.8 / 5.0</span>
                  <span className="text-[#6C757D]"> (41+ Google & IG Reviews)</span>
                </div>
              </div>

              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="text-xs text-[#2D3A30]">
                <strong className="text-[#1B4332] font-bold">5,000+ Liters</strong> Delivered Monthly
              </div>

              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="text-xs text-[#2D3A30] flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span className="font-semibold">Gulshan, Johar, PECHS, Clifton & DHA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Product Card */}
              <div className="bg-white rounded-3xl p-5 shadow-2xl border border-[#E9E4D8] relative z-10 transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
                    alt="GM Dairies Pure Chilled Organic Milk Bottle"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B4332] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Farm To Bottle
                  </div>
                  <div className="absolute top-3 right-3 bg-[#FFD166] text-[#1B4332] text-xs font-black px-2.5 py-1 rounded-full shadow-sm">
                    6.8% Natural Fat
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl text-xs flex items-center justify-between shadow-md">
                    <div>
                      <div className="font-bold text-[#1B4332]">GM 100% Pure Buffalo Milk</div>
                      <div className="text-[11px] text-[#52796F]">Chilled & Sealed • Thick Malai Guarantee</div>
                    </div>
                    <span className="font-extrabold text-[#2D6A4F] text-sm">Rs. 270<span className="text-[10px] font-normal text-gray-500">/L</span></span>
                  </div>
                </div>

                {/* Secondary items preview */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EADFCB] flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=200&q=80"
                      alt="Desi Ghee"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1B4332] leading-tight">Desi Ghee</h4>
                      <p className="text-[10px] text-[#6C757D]">Danedar Makhan Se</p>
                      <span className="text-xs font-bold text-[#E76F51]">Rs. 2,950/kg</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EADFCB] flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=200&q=80"
                      alt="Thick Dahi"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1B4332] leading-tight">Thick Sweet Dahi</h4>
                      <p className="text-[10px] text-[#6C757D]">No Starch / Gelatin</p>
                      <span className="text-xs font-bold text-[#2D6A4F]">Rs. 340/kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Instagram Proof Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#E0D8C8] z-20 items-center gap-3 max-w-xs animate-float">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#F56040] flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#1B4332]">"Online delivery available?"</div>
                  <div className="text-[10px] text-[#2D6A4F] font-semibold">Yes! Order now on WhatsApp</div>
                </div>
              </div>

              {/* Quality Guarantee Seal */}
              <div className="absolute -top-4 -right-4 bg-[#1B4332] text-white p-3 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FFD166]" />
                <span className="text-xs font-bold">100% Lab Tested Purity</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

