import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Truck, MessageCircle, Droplet, Clock } from 'lucide-react';

export default function Hero({ onOpenSubscription, onExploreProducts }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F0E6] via-[#FAF8F5] to-[#FAF8F5] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Ambient gradient glows */}
      <div className="absolute top-0 right-1/4 -mt-20 w-[500px] h-[500px] rounded-full bg-[#D8F3DC]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] rounded-full bg-[#FEF08A]/30 blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Modern Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-[#2D6A4F]/20 px-4 py-1.5 rounded-full shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#22C55E] animate-ping" />
              <span className="text-xs font-extrabold text-[#0E3524] tracking-wide uppercase">
                Karachi Online Dairy Live • Morning 6 AM Drop
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E3524] leading-[1.1] tracking-tight">
              100% Pure Organic Milk & Desi Ghee,{' '}
              <span className="relative inline-block text-[#1B4332]">
                <span className="relative z-10">Right to Your Doorstep.</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#BBF7D0]/60 -z-0 rounded-sm" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#374940] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Own-packaged fresh buffalo milk with guaranteed thick malai layer, bilona churned danedar Desi Ghee, and fresh dahi. Chilled below 4°C within 15 minutes of milking at our Gulshan depot.
            </p>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-left">
              {[
                { icon: Droplet, text: '0% Added Water' },
                { icon: ShieldCheck, text: 'No Hormones / Oxytocin' },
                { icon: Clock, text: 'Chilled < 4°C Sealed' },
                { icon: Sparkles, text: 'Danedar Desi Ghee' },
                { icon: Truck, text: 'Morning 6:00 AM Drop' },
                { icon: CheckCircle2, text: 'Moti Mahal Hub Depot' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/85 backdrop-blur-sm p-2.5 rounded-xl border border-[#E8E2D5] hover:border-[#2D6A4F]/40 transition-all shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#E8F5E9] text-[#2D6A4F] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#1B4332] truncate">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* High-Converting CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenSubscription}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] hover:from-[#0E3524] hover:to-[#1B4332] text-white px-7 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-[#1B4332]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-[#FDE047]" />
                <span>Start Daily Milk Subscription</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2ECE1] text-[#1B4332] border-2 border-[#1B4332]/15 hover:border-[#1B4332] px-6 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xs hover:shadow-md"
              >
                Browse Dairy Store
              </button>

              <a
                href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order%20milk%20and%20desi%20ghee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 border-t border-[#E8E2D5]">
              <div className="flex items-center gap-2.5">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-[#0E3524]">4.8 / 5.0 Rating</span>
                  <span className="text-gray-500 font-medium"> (41+ Reviews)</span>
                </div>
              </div>

              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="text-xs text-[#2D3A30]">
                <strong className="text-[#0E3524] font-bold">5,000+ Liters</strong> Delivered Monthly
              </div>

              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="text-xs text-[#2D3A30] flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Gulshan, Johar, PECHS, Clifton & DHA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Feature Product Card */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(27,67,50,0.12)] border border-[#E9E4D8] relative z-10 transition-all duration-300 hover:scale-[1.01]">
                
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
                    alt="GM Dairies Pure Chilled Organic Milk Bottle"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Modern floating badges */}
                  <div className="absolute top-3 left-3 bg-[#0E3524] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FDE047]" /> Farm To Bottle
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-[#0E3524] text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                    6.8% Butterfat
                  </div>

                  {/* Bottom glass highlight */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl text-xs flex items-center justify-between shadow-lg border border-white/40">
                    <div>
                      <div className="font-bold text-[#0E3524] text-xs sm:text-sm">GM 100% Pure Buffalo Milk</div>
                      <div className="text-[11px] text-[#52796F]">Chilled & Sealed • Thick Malai Guarantee</div>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-[#1B4332] text-base sm:text-lg">Rs. 270</span>
                      <span className="text-[10px] text-gray-500 font-normal">/Litre</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Items Preview */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-[#EADFCB] flex items-center gap-3 hover:border-[#2D6A4F]/40 transition-all">
                    <img
                      src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=200&q=80"
                      alt="Desi Ghee"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#0E3524] leading-tight">Desi Ghee</h4>
                      <p className="text-[10px] text-gray-500">Danedar Bilona</p>
                      <span className="text-xs font-bold text-[#E76F51]">Rs. 2,950/kg</span>
                    </div>
                  </div>

                  <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-[#EADFCB] flex items-center gap-3 hover:border-[#2D6A4F]/40 transition-all">
                    <img
                      src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=200&q=80"
                      alt="Thick Dahi"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#0E3524] leading-tight">Thick Sweet Dahi</h4>
                      <p className="text-[10px] text-gray-500">No Gelatin</p>
                      <span className="text-xs font-bold text-[#2D6A4F]">Rs. 340/kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Seal Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white py-2 px-3.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 z-20">
                <ShieldCheck className="w-4 h-4 text-[#FDE047]" />
                <span className="text-[11px] font-black uppercase tracking-wider">100% Lab Tested Purity</span>
              </div>

              {/* Floating Instagram Social Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E0D8C8] z-20 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E3524]">"Online available?"</div>
                  <div className="text-[10px] text-[#2D6A4F] font-bold">Yes! Direct WhatsApp 0310 3510076</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
