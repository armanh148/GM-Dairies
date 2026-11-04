import React from 'react';
import { ShieldCheck, Droplet, ThermometerSnowflake, Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function PurityGuarantee() {
  const points = [
    {
      icon: Droplet,
      title: '0% Added Water Guarantee',
      desc: 'Each batch is tested with calibrated lactometers. We never dilute our milk with water or ice, delivering the authentic thick texture you expect.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hormones or Oxytocin',
      desc: 'Our dairy cattle roam naturally and eat organic green fodder. Strictly 100% free from synthetic milk-stimulating hormone injections.'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Instant Chilling Under 4°C',
      desc: 'Milked in sterile conditions and instantly chilled within 15 minutes to preserve nutrients, prevent bacterial multiplication, and lock in freshness.'
    },
    {
      icon: Award,
      title: 'Own-Packaged & Sealed',
      desc: 'No open containers or exposed bike drums. Every liter is packaged in tamper-evident food-grade bottles/pouches at our hygienic Gulshan depot.'
    }
  ];

  return (
    <section id="purity" className="py-14 sm:py-20 bg-white border-y border-[#ECE7DC] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <div className="scroll-slide-up text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#0E3524] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-2xs hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
            <span>The GM Purity Standard</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E3524] tracking-tight">
            Why Karachi Families Trust GM Dairies
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#52796F]">
            In a city flooded with loose powdered milk and adulterated dairy, GM Dairies brings pure, farm-fresh integrity back to your breakfast.
          </p>
        </div>

        {/* Strictly 2 in 1 Row (grid-cols-2) across Mobile, Tablet, and Desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const delays = ['delay-75', 'delay-150', 'delay-200', 'delay-300'];
            return (
              <div
                key={idx}
                className={`scroll-slide-up ${delays[idx]} group bg-gradient-to-b from-[#FAF8F5] to-white p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E8E2D5] hover:border-[#2D6A4F]/60 transition-all duration-400 ease-out hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between h-full relative cursor-default`}
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E8F5E9] text-[#2D6A4F] group-hover:bg-[#1B4332] group-hover:text-white group-hover:rotate-6 transition-all duration-300 flex items-center justify-center mb-2.5 sm:mb-4 shadow-xs">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif font-bold text-xs sm:text-base lg:text-lg text-[#0E3524] mb-1 sm:mb-2 leading-snug group-hover:text-[#2D6A4F] transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-[13px] text-[#52796F] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-[#E8E2D5]/80 flex items-center gap-1.5 text-[9px] sm:text-[11px] font-bold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">Lab-Verified Batch Check</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* At-Home Test Guarantee Box with Gentle Float */}
        <div className="scroll-slide-up delay-200 mt-8 sm:mt-12 bg-gradient-to-r from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E2D9C8] flex flex-col md:flex-row items-center gap-4 sm:gap-6 shadow-xs hover:shadow-lg transition-all duration-300">
          <div className="animate-float w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0E3524] text-white flex items-center justify-center shrink-0 text-2xl sm:text-3xl font-serif shadow-md">
            🥛
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-base sm:text-xl font-bold text-[#0E3524]">
              We Welcome Your Own At-Home Purity Test!
            </h4>
            <p className="text-xs sm:text-sm text-[#52796F] leading-relaxed">
              Boil our milk and observe the thick golden cream (malai) layer. You can also test with your own household lactometer. If you find any water added or adulteration, we will refund your entire month's subscription with zero questions asked!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
