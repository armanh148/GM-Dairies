import React from 'react';
import { ShieldCheck, Droplet, ThermometerSnowflake, Heart, CheckCircle2, Award } from 'lucide-react';

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
    <section id="purity" className="py-16 bg-white border-y border-[#ECE7DC]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B4332] px-3.5 py-1 rounded-full text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
            <span>The GM Dairies Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B4332]">
            Why Karachi Families Trust GM Dairies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#52796F]">
            In a city flooded with loose powdered milk and adulterated dairy, GM Dairies brings pure, farm-fresh integrity back to your breakfast.
          </p>
        </div>

        {/* Purity Cards Grid: Exactly 2 in a row (grid-cols-2) */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E8E2D5] hover:border-[#2D6A4F]/40 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E8F5E9] text-[#2D6A4F] flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-lg text-[#1B4332] mb-1.5 sm:mb-2 leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-[#52796F] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-2.5 sm:pt-3 border-t border-[#E8E2D5]/80 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#2D6A4F]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Lab-Verified Check</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lactometer / Test at Home Prompt */}
        <div className="mt-12 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E2D9C8] flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#1B4332] text-white flex items-center justify-center shrink-0 text-3xl font-serif">
            🥛
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-[#1B4332]">
              We Welcome Your Own At-Home Purity Test!
            </h4>
            <p className="text-xs sm:text-sm text-[#52796F]">
              Boil our milk and observe the thick golden cream (malai) layer. You can also test with your own household lactometer. If you find any water added or adulteration, we will refund your entire month's subscription with zero questions asked!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

