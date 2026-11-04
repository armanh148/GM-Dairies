import React from 'react';
import { ShieldCheck, Droplet, Sparkles, Truck, Star, Award, Heart } from 'lucide-react';

export default function TrustTicker() {
  const items = [
    { icon: Droplet, text: '0% Added Water Guarantee (Lactometer Tested)' },
    { icon: ShieldCheck, text: 'Zero Hormones & No Synthetic Oxytocin' },
    { icon: Sparkles, text: 'Thick Golden Malai Layer Guaranteed' },
    { icon: Truck, text: '6:00 AM Morning Doorstep Delivery in Karachi' },
    { icon: Award, text: 'Bilona Churned Danedar Desi Ghee' },
    { icon: Star, text: '4.8 ★ Rated by Karachi Breakfast Tables' },
    { icon: Heart, text: 'Direct from Gulshan Hub Near Moti Mahal' },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0B2B1E] via-[#165B3D] to-[#0B2B1E] text-white py-3 border-y border-white/10 overflow-hidden relative shadow-md">
      {/* Subtle edge fades */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#0B2B1E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#0B2B1E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
        {/* Render items twice for infinite seamless loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 shrink-0 px-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <Icon className="w-4 h-4 text-[#FDE047] shrink-0 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-gray-100 group-hover:text-white transition-colors">{item.text}</span>
              <span className="text-white/30 ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

