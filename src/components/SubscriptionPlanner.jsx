import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, Check, Sparkles, MessageCircle, ShieldCheck, HeartHandshake, PhoneCall, ChevronRight, ChevronDown, MapPin } from 'lucide-react';
import { KARACHI_AREAS } from '../data/karachiAreas';

const TIME_SLOTS = [
  { value: '5:30 AM – 6:30 AM', label: 'Early Morning (5:30 AM – 6:30 AM)' },
  { value: '6:30 AM – 7:30 AM', label: 'Standard Breakfast (6:30 AM – 7:30 AM)' },
  { value: '7:30 AM – 8:30 AM', label: 'Morning Rush (7:30 AM – 8:30 AM)' },
];

export default function SubscriptionPlanner() {
  const [milkType, setMilkType] = useState('buffalo'); // 'buffalo' | 'cow'
  const [quantity, setQuantity] = useState(2); // liters per delivery
  const [frequency, setFrequency] = useState('daily'); // 'daily' | 'alternate' | 'weekdays'
  const [timeSlot, setTimeSlot] = useState('6:30 AM – 7:30 AM');
  const [area, setArea] = useState('Gulshan-e-Iqbal (Block 1 - 20)');
  const [isSlotOpen, setIsSlotOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [houseAddress, setHouseAddress] = useState('');

  const slotDropdownRef = useRef(null);
  const areaDropdownRef = useRef(null);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (slotDropdownRef.current && !slotDropdownRef.current.contains(e.target)) {
        setIsSlotOpen(false);
      }
      if (areaDropdownRef.current && !areaDropdownRef.current.contains(e.target)) {
        setIsAreaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculations
  const pricePerLiter = milkType === 'buffalo' ? 270 : 280;
  
  // Deliveries per month
  let deliveriesPerMonth = 30;
  if (frequency === 'alternate') deliveriesPerMonth = 15;
  if (frequency === 'weekdays') deliveriesPerMonth = 22;

  const totalMonthlyLiters = quantity * deliveriesPerMonth;
  const regularTotal = totalMonthlyLiters * pricePerLiter;
  const discountPercent = 5; // 5% discount for monthly subscribers
  const monthlySavings = Math.round((regularTotal * discountPercent) / 100);
  const finalMonthlyTotal = regularTotal - monthlySavings;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const milkName = milkType === 'buffalo' ? '100% Pure Buffalo Milk (Full Cream)' : 'Farm Fresh Cow Milk';
    const frequencyLabel = 
      frequency === 'daily' ? 'Every Day (7 days/week)' :
      frequency === 'alternate' ? 'Alternate Days (15 days/month)' : 'Weekdays Only (Mon-Fri)';

    const text = `🥛 *GM DAIRIES - NEW MILK SUBSCRIPTION REQUEST* 🥛%0A` +
      `--------------------------------------%0A` +
      `👤 *Name:* ${customerName || 'Valued Customer'}%0A` +
      `📞 *Phone:* ${customerPhone || 'Not provided'}%0A` +
      `📍 *Area:* ${area}%0A` +
      `🏠 *Address:* ${houseAddress || 'Will share location on WhatsApp'}%0A` +
      `--------------------------------------%0A` +
      `📦 *Milk Type:* ${milkName}%0A` +
      `⚖️ *Daily Quantity:* ${quantity} Litre(s) per delivery%0A` +
      `🔄 *Frequency:* ${frequencyLabel}%0A` +
      `⏰ *Delivery Slot:* ${timeSlot}%0A` +
      `📊 *Est. Monthly Volume:* ${totalMonthlyLiters} Litres%0A` +
      `💰 *Estimated Monthly Bill:* Rs. ${finalMonthlyTotal.toLocaleString()} (Includes 5% Subscription Discount)%0A` +
      `--------------------------------------%0A` +
      `Please confirm my morning slot from Gulshan Moti Mahal hub. JazakAllah!`;

    window.open(`https://wa.me/923103510076?text=${text}`, '_blank');
  };

  return (
    <section id="subscription" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#BBF7D0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="scroll-slide-up text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#0E3524] border border-[#2D6A4F]/20 px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-2xs hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
            <span>Smart Morning Milk Planner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E3524]">
            Fresh Morning Milk, Delivered Automatically
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#40534C] max-w-2xl mx-auto">
            Choose your milk variety, daily liters, and morning time slot. Guaranteed chilled doorstep delivery before breakfast. Pause or edit anytime with 1 WhatsApp message.
          </p>
        </div>

        {/* Interactive Subscription App Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="scroll-slide-up delay-100 lg:col-span-7 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E3DAC8] shadow-xl hover:shadow-2xl transition-shadow duration-300 space-y-6">
            
            {/* Step 1: Milk Type Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#0E3524]">
                  Step 1: Select Milk Variety
                </label>
                <span className="text-[11px] text-[#52796F] font-semibold">100% Raw Farm Pure</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setMilkType('buffalo')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all relative ${
                    milkType === 'buffalo'
                      ? 'border-[#2D6A4F] bg-gradient-to-br from-[#E8F5E9] to-white shadow-md ring-2 ring-[#2D6A4F]/20'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif font-black text-sm sm:text-base text-[#0E3524]">
                      Pure Buffalo Milk
                    </span>
                    <span className="text-xs font-black text-[#2D6A4F] bg-white px-2 py-0.5 rounded-full border border-[#2D6A4F]/20 shadow-2xs">
                      Rs. 270/L
                    </span>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    6.8% Full Cream Fat • Thick clotted malai layer for rich Karachi chai & parathas
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setMilkType('cow')}
                  className={`p-4 rounded-2xl border-2 text-left transition-all relative ${
                    milkType === 'cow'
                      ? 'border-[#2D6A4F] bg-gradient-to-br from-[#E8F5E9] to-white shadow-md ring-2 ring-[#2D6A4F]/20'
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif font-black text-sm sm:text-base text-[#0E3524]">
                      Farm Fresh Cow Milk
                    </span>
                    <span className="text-xs font-black text-[#2D6A4F] bg-white px-2 py-0.5 rounded-full border border-[#2D6A4F]/20 shadow-2xs">
                      Rs. 280/L
                    </span>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    4.2% Golden Fat • Light, natural sweetness, gentle on digestion for toddlers & elders
                  </p>
                </button>
              </div>
            </div>

            {/* Step 2: Daily Quantity */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#0E3524]">
                  Step 2: Liters Per Morning
                </label>
                <span className="text-xs font-bold text-[#2D6A4F] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                  {quantity} Liter{quantity > 1 ? 's' : ''} per drop
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuantity(num)}
                    className={`py-3 rounded-2xl font-black text-sm border-2 transition-all ${
                      quantity === num
                        ? 'border-[#2D6A4F] bg-[#1B4332] text-white shadow-md shadow-[#1B4332]/25 scale-[1.02]'
                        : 'border-[#E3DAC8] bg-[#FAF8F5] text-[#0E3524] hover:bg-white'
                    }`}
                  >
                    {num} Litre{num > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#6C757D] mt-1.5">
                *2 Litres daily is most popular for families of 4–5 members in Karachi.
              </p>
            </div>

            {/* Step 3: Delivery Frequency - Strictly 3 in One Row */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0E3524] mb-2.5">
                Step 3: Delivery Frequency
              </label>
              <div className="grid-3-row">
                {[
                  { id: 'daily', label: 'Everyday', sub: '7 Days a Week' },
                  { id: 'alternate', label: 'Alternate Days', sub: '15 Days / Mo' },
                  { id: 'weekdays', label: 'Weekdays Only', sub: 'Mon – Fri' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrequency(item.id)}
                    className={`py-2.5 px-2 rounded-2xl border-2 text-center transition-all ${
                      frequency === item.id
                        ? 'border-[#2D6A4F] bg-[#E8F5E9] text-[#0E3524] shadow-xs'
                        : 'border-[#E3DAC8] bg-[#FAF8F5] text-[#52796F] hover:bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm truncate">{item.label}</div>
                    <div className="text-[10px] text-gray-500 truncate">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Time Slot & Area - Luxury Custom Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Custom Morning Delivery Slot Dropdown */}
              <div className="relative" ref={slotDropdownRef}>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0E3524] mb-1.5">
                  Morning Delivery Slot
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsSlotOpen((prev) => !prev);
                    setIsAreaOpen(false);
                  }}
                  className={`w-full flex items-center justify-between bg-[#FAF8F5] border rounded-2xl px-3.5 py-3 text-xs font-semibold text-[#0E3524] transition-all ${
                    isSlotOpen
                      ? 'border-[#2D6A4F] bg-white ring-2 ring-[#2D6A4F]/20 shadow-xs'
                      : 'border-[#D5CDC0] hover:bg-white hover:border-[#2D6A4F]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Clock className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                    <span className="truncate">{timeSlot}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2D6A4F] transition-transform duration-200 shrink-0 ml-2 ${
                      isSlotOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Custom Popover Menu */}
                {isSlotOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 bg-white/98 backdrop-blur-md rounded-2xl border border-[#D5CDC0] shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-2.5 py-1.5">
                      Select Morning Slot
                    </div>
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = timeSlot === slot.value;
                      return (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => {
                            setTimeSlot(slot.value);
                            setIsSlotOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                            isSelected
                              ? 'bg-[#1B4332] text-white font-bold shadow-xs'
                              : 'text-[#0E3524] hover:bg-[#E8F5E9]'
                          }`}
                        >
                          <span>{slot.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#FDE047] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Custom Karachi Delivery Area Dropdown (No native OS select) */}
              <div className="relative" ref={areaDropdownRef}>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0E3524] mb-1.5">
                  Karachi Delivery Area
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setIsAreaOpen((prev) => !prev);
                    setIsSlotOpen(false);
                  }}
                  className={`w-full flex items-center justify-between bg-[#FAF8F5] border rounded-2xl px-3.5 py-3 text-xs font-semibold text-[#0E3524] transition-all ${
                    isAreaOpen
                      ? 'border-[#2D6A4F] bg-white ring-2 ring-[#2D6A4F]/20 shadow-xs'
                      : 'border-[#D5CDC0] hover:bg-white hover:border-[#2D6A4F]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                    <span className="truncate">{area}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2D6A4F] transition-transform duration-200 shrink-0 ml-2 ${
                      isAreaOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Custom Popover Menu with Scrollbar */}
                {isAreaOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 bg-white/98 backdrop-blur-md rounded-2xl border border-[#D5CDC0] shadow-2xl p-1.5 z-50 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-2.5 py-1.5 sticky top-0 bg-white/95 backdrop-blur-xs z-10 border-b border-gray-100 mb-1">
                      Available Karachi Zones (From Moti Mahal Depot)
                    </div>
                    {KARACHI_AREAS.map((kArea, idx) => {
                      const isSelected = area === kArea.name;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setArea(kArea.name);
                            setIsAreaOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                            isSelected
                              ? 'bg-[#1B4332] text-white font-bold shadow-xs'
                              : 'text-[#0E3524] hover:bg-[#E8F5E9]'
                          }`}
                        >
                          <span className="truncate">{kArea.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#FDE047] shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* Address inputs */}
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E5DEC9] space-y-3">
              <span className="text-xs font-extrabold text-[#0E3524] block">Your Karachi Delivery Details</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name (e.g. Tariq Mehmood)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-white border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#0E3524] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile (e.g. 0310 1234567)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-white border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#0E3524] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                />
              </div>
              <input
                type="text"
                placeholder="House / Flat / Street address (e.g. Flat B-4, Near Disco Bakery, Gulshan)"
                value={houseAddress}
                onChange={(e) => setHouseAddress(e.target.value)}
                className="w-full bg-white border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#0E3524] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              />
            </div>

          </div>

          {/* Summary Column (Right) */}
          <div className="scroll-slide-up delay-200 lg:col-span-5 space-y-5 lg:sticky lg:top-24">
            
            {/* Live Pricing Breakdown Card */}
            <div className="bg-gradient-to-br from-[#0B2B1E] via-[#1B4332] to-[#0E3524] text-white p-7 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 hover:shadow-[0_25px_60px_-15px_rgba(14,53,36,0.35)] transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#4ADE80]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#86EFAC]">
                    Monthly Subscription Estimate
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">Your Breakfast Plan</h3>
                </div>
                <div className="bg-[#2D6A4F] text-[#FDE047] text-xs font-black px-3 py-1 rounded-full border border-white/20 animate-pulse">
                  Save 5%
                </div>
              </div>

              <div className="py-4 space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Milk Variety:</span>
                  <span className="font-semibold text-white">
                    {milkType === 'buffalo' ? 'Pure Buffalo Milk' : 'Fresh Cow Milk'}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Per Delivery Volume:</span>
                  <span className="font-semibold text-white">{quantity} Litres</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Monthly Deliveries:</span>
                  <span className="font-semibold text-white">{deliveriesPerMonth} mornings</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Monthly Volume:</span>
                  <span className="font-bold text-[#FDE047]">{totalMonthlyLiters} Litres</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Regular Total:</span>
                  <span className="line-through">Rs. {regularTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#86EFAC] font-bold">
                  <span>Subscriber Discount (5%):</span>
                  <span>- Rs. {monthlySavings.toLocaleString()}</span>
                </div>
              </div>

              {/* Total Monthly Bill */}
              <div className="pt-4 border-t border-white/20 flex items-end justify-between">
                <div>
                  <div className="text-[11px] text-gray-300">Estimated Monthly Total</div>
                  <div className="text-3xl font-black text-white">
                    Rs. {finalMonthlyTotal.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-[11px] text-gray-300">
                  <span>Approx. Rs. {Math.round(finalMonthlyTotal / deliveriesPerMonth)}/drop</span>
                </div>
              </div>

              {/* Action Button: Book via WhatsApp with Button Shimmer & Motion */}
              <button
                onClick={handleWhatsAppBooking}
                className="btn-shimmer mt-6 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Activate Plan on WhatsApp (0310 3510076)
              </button>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-gray-300">
                  🔒 Zero contract. Pause, adjust, or cancel anytime with 1 WhatsApp message.
                </span>
              </div>
            </div>

            {/* Subscriber Perks */}
            <div className="bg-white p-5 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0E3524]">
                GM Dairies Subscriber Guarantees:
              </h4>
              <ul className="space-y-2 text-xs text-[#2D3A30]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span><strong>Priority Morning Dispatch:</strong> Direct from Moti Mahal depot before Karachi traffic starts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span><strong>100% Water Free:</strong> Thick clotted cream (malai) for authentic chai.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span><strong>Cold Sealed Packaging:</strong> Arrives below 4°C in tamper-evident food-grade bottles.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
