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
    <section id="purity" className="py-16 sm:py-20 bg-white border-y border-[#ECE7DC] relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#0E3524] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
            <span>The GM Purity Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E3524] tracking-tight">
            Why Karachi Families Trust GM Dairies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#52796F]">
            In a city flooded with loose powdered milk and adulterated dairy, GM Dairies brings pure, farm-fresh integrity back to your breakfast.
          </p>
        </div>

        {/* 4 Cards strictly in 1 Row on laptop/desktop using .grid-4-row */}
        <div className="grid-4-row">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-b from-[#FAF8F5] to-white p-5 sm:p-6 rounded-3xl border border-[#E8E2D5] hover:border-[#2D6A4F]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#2D6A4F] group-hover:bg-[#1B4332] group-hover:text-white transition-colors flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#0E3524] mb-2 leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#52796F] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E8E2D5]/80 flex items-center gap-1.5 text-[11px] font-bold text-[#2D6A4F]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Lab-Verified Batch Check</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* At-Home Test Guarantee Box */}
        <div className="mt-12 bg-gradient-to-r from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E2D9C8] flex flex-col md:flex-row items-center gap-6 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0E3524] text-white flex items-center justify-center shrink-0 text-3xl font-serif shadow-md">
            🥛
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0E3524]">
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
