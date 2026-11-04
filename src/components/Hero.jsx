import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Truck, MessageCircle, Droplet, Clock, Award } from 'lucide-react';

export default function Hero({ onOpenSubscription, onExploreProducts }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3EFE6] via-[#FAF8F5] to-[#FAF8F5] pt-10 pb-16 lg:pt-16 lg:pb-22 border-b border-[#EAE3D6]/60">
      {/* Ambient glowing gradient meshes */}
      <div className="absolute top-0 right-1/4 -mt-20 w-[550px] h-[550px] rounded-full bg-[#D8F3DC]/60 blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 left-0 -ml-24 w-[450px] h-[450px] rounded-full bg-[#FEF08A]/30 blur-3xl pointer-events-none animate-pulse duration-1000" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Modern Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Pill with glowing indicator */}
            <div className="scroll-slide-up inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-[#165B3D]/15 px-4 py-2 rounded-full shadow-xs hover:border-[#165B3D]/40 transition-all duration-300">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-xs font-extrabold text-[#0E3524] tracking-wide uppercase">
                Online Orders Live • Next Morning 6:00 AM Dispatch
              </span>
            </div>

            {/* Editorial Headline with Scroll Reveal */}
            <h1 className="scroll-slide-up delay-100 font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[3.8rem] font-black text-[#0E3524] leading-[1.08] tracking-tight">
              100% Pure Organic Milk & Desi Ghee,{' '}
              <span className="relative inline-block text-[#165B3D]">
                <span className="relative z-10 italic font-medium">Fresh to Your Doorstep.</span>
                <span className="absolute bottom-1.5 left-0 w-full h-3.5 bg-[#BBF7D0]/60 -z-0 rounded-sm" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="scroll-slide-up delay-150 text-sm sm:text-base lg:text-lg text-[#3E5247] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Zero water dilution. Zero milk powder. Freshly milked buffalo and cow milk, bilona churned aromatic Desi Ghee, and thick sweet dahi delivered chilled below 4°C right to your home in Karachi before breakfast.
            </p>

            {/* Value Highlights Pill Grid with Card Lift Hover */}
            <div className="scroll-slide-up delay-200 grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-left">
              {[
                { icon: Droplet, title: '0% Added Water', desc: 'Tested Daily' },
                { icon: ShieldCheck, title: 'No Hormones', desc: 'Oxytocin Free' },
                { icon: Clock, title: 'Chilled < 4°C', desc: 'Fresh Sealed' },
                { icon: Sparkles, title: 'Danedar Ghee', desc: 'Bilona Churned' },
                { icon: Truck, title: '6:00 AM Drops', desc: 'Before Breakfast' },
                { icon: Award, title: 'Moti Mahal Depot', desc: 'Gulshan Block 2' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-center gap-2.5 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-[#E8E2D5] hover:border-[#165B3D]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] text-[#165B3D] group-hover:bg-[#165B3D] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0E3524] truncate group-hover:text-[#165B3D] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#52796F] truncate">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* High-Converting CTAs with Button Shimmer Effect */}
            <div className="scroll-slide-up delay-250 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenSubscription}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0E3524] to-[#1B4332] hover:from-[#165B3D] hover:to-[#0E3524] text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-[#0E3524]/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-[#FDE047] animate-spin duration-3000" />
                <span>Start Daily Milk Subscription</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2ECE1] text-[#0E3524] border-2 border-[#0E3524]/15 hover:border-[#0E3524] px-6 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Browse Store Catalog
              </button>

              <a
                href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20want%20to%20order%20milk%20and%20desi%20ghee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="scroll-slide-up delay-300 pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 border-t border-[#E8E2D5]">
              <div className="flex items-center gap-2.5">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current hover:scale-125 transition-transform cursor-pointer" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-[#0E3524]">4.8 / 5.0 Rating</span>
                  <span className="text-gray-500 font-medium"> (41+ Google/IG Reviews)</span>
                </div>
              </div>

              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="text-xs text-[#2D3A30]">
                <strong className="text-[#0E3524] font-bold">5,000+ Liters</strong> Delivered Monthly
              </div>

              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="text-xs text-[#2D3A30] flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-[#165B3D]" />
                <span>Gulshan, Johar, PECHS, Clifton & DHA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card Showcase with Motion Effects */}
          <div className="lg:col-span-5 relative scroll-slide-left delay-150">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Feature Product Card with Interactive Hover Elevation */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(14,53,36,0.18)] border border-[#E9E4D8] relative z-10 transition-all duration-500 hover:shadow-[0_35px_80px_-15px_rgba(14,53,36,0.25)] hover:-translate-y-1.5">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
                    alt="GM Dairies Pure Chilled Organic Milk Bottle"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute top-3 left-3 bg-[#0E3524] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1 backdrop-blur-xs">
                    <Sparkles className="w-3 h-3 text-[#FDE047]" /> Farm To Bottle
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FDE047] to-[#F59E0B] text-[#0E3524] text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                    6.8% Natural Butterfat
                  </div>

                  {/* Bottom glass highlight */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl text-xs flex items-center justify-between shadow-lg border border-white/60">
                    <div>
                      <div className="font-bold text-[#0E3524] text-sm">GM 100% Pure Buffalo Milk</div>
                      <div className="text-[11px] text-[#52796F]">Chilled & Sealed • Thick Malai Guarantee</div>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-[#165B3D] text-lg">Rs. 270</span>
                      <span className="text-[10px] text-gray-500 font-normal">/Litre</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Items Preview with Hover Lift */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-[#EADFCB] flex items-center gap-3 hover:border-[#165B3D]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 cursor-pointer">
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

                  <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-[#EADFCB] flex items-center gap-3 hover:border-[#165B3D]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=200&q=80"
                      alt="Thick Dahi"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#0E3524] leading-tight">Thick Sweet Dahi</h4>
                      <p className="text-[10px] text-gray-500">No Gelatin</p>
                      <span className="text-xs font-bold text-[#165B3D]">Rs. 340/kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Seal Badge (Smooth floating motion) */}
              <div className="animate-float absolute -top-3.5 -right-3.5 bg-gradient-to-r from-[#0E3524] to-[#165B3D] text-white py-2.5 px-4 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 z-20">
                <ShieldCheck className="w-4 h-4 text-[#FDE047]" />
                <span className="text-[11px] font-black uppercase tracking-wider">100% Lab Tested Purity</span>
              </div>

              {/* Floating Instagram Social Pill (Smooth float reverse motion) */}
              <div className="animate-float-reverse hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E0D8C8] z-20 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E3524]">"Online delivery available?"</div>
                  <div className="text-[10px] text-[#165B3D] font-bold">Yes! Direct WhatsApp 0310 3510076</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
