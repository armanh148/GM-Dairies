import React, { useState, useRef, useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ShieldCheck, Truck, ChevronDown, Check, MapPin, Clock } from 'lucide-react';

const KARACHI_ZONES = [
  'Gulshan-e-Iqbal (Near Moti Mahal)',
  'Gulistan-e-Johar',
  'Federal B Area',
  'PECHS / Bahadurabad',
  'Clifton & DHA',
  'North Nazimabad',
  'Malir Cantt / Scheme 33',
  'Other Karachi Area'
];

const DELIVERY_SLOTS = [
  'Early Morning (5:30 AM – 7:00 AM)',
  'Breakfast Slot (7:00 AM – 8:30 AM)',
  'Evening Slot (5:00 PM – 7:00 PM)'
];

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState('Gulshan-e-Iqbal (Near Moti Mahal)');
  const [address, setAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('Early Morning (5:30 AM – 7:00 AM)');
  const [notes, setNotes] = useState('');
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [isSlotOpen, setIsSlotOpen] = useState(false);

  const areaRef = useRef(null);
  const slotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (areaRef.current && !areaRef.current.contains(e.target)) {
        setIsAreaOpen(false);
      }
      if (slotRef.current && !slotRef.current.contains(e.target)) {
        setIsSlotOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 1500 || subtotal === 0 ? 0 : 150;
  const total = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    let itemsList = '';
    cartItems.forEach((item, index) => {
      itemsList += `${index + 1}. *${item.name}* x ${item.quantity} (${item.unit}) = Rs. ${(item.price * item.quantity).toLocaleString()}%0A`;
    });

    const msg = 
      `🥛 *NEW ORDER - GM DAIRIES KARACHI* 🥛%0A` +
      `--------------------------------------%0A` +
      `👤 *Customer Name:* ${customerName || 'Valued Customer'}%0A` +
      `📞 *Phone / WhatsApp:* ${customerPhone || 'Not provided'}%0A` +
      `📍 *Area:* ${selectedArea}%0A` +
      `🏠 *Delivery Address:* ${address || 'Will pin location on WhatsApp'}%0A` +
      `⏰ *Delivery Timing:* ${deliverySlot}%0A` +
      (notes ? `📝 *Notes:* ${notes}%0A` : '') +
      `--------------------------------------%0A` +
      `🛒 *ORDER ITEMS:*%0A` +
      itemsList +
      `--------------------------------------%0A` +
      `📦 Subtotal: Rs. ${subtotal.toLocaleString()}%0A` +
      `🚚 Delivery: ${deliveryFee === 0 ? 'FREE (Orders over Rs. 1,500)' : 'Rs. ' + deliveryFee}%0A` +
      `💰 *Total Amount:* Rs. ${total.toLocaleString()}%0A` +
      `--------------------------------------%0A` +
      `Please confirm order dispatch from Gulshan hub. Thank you!`;

    window.open(`https://wa.me/923103510076?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2D6A4F]" />
              <h2 className="font-serif font-bold text-lg text-[#1B4332]">Your Dairy Bag</h2>
              <span className="bg-[#E8F5E9] text-[#2D6A4F] text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-[#FAF7F2] rounded-full flex items-center justify-center mx-auto text-[#2D6A4F]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1B4332]">Your bag is empty</h3>
                <p className="text-xs text-[#52796F] max-w-xs mx-auto">
                  Add fresh farm milk, slow-churned Desi Ghee, or thick dahi to start your order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold text-[#2D6A4F] hover:underline"
                >
                  Browse Store Items →
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-gray-500 pb-2 border-b border-gray-100">
                  <span>Selected Products</span>
                  <button 
                    onClick={onClearCart}
                    className="text-[#E76F51] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex gap-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#EAE3D6] items-center justify-between"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-[#1B4332] truncate">{item.name}</h4>
                        <div className="text-[11px] text-[#52796F]">{item.unit}</div>
                        <div className="text-xs font-black text-[#2D6A4F] mt-0.5">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-2 py-1 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-gray-500 hover:text-[#1B4332]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-gray-500 hover:text-[#1B4332]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Free Delivery Bar */}
                <div className="bg-[#E8F5E9] p-3 rounded-2xl border border-[#2D6A4F]/20 text-xs">
                  {subtotal >= 1500 ? (
                    <div className="flex items-center gap-2 text-[#2D6A4F] font-bold">
                      <Truck className="w-4 h-4 shrink-0" />
                      <span>🎉 Congratulations! You unlocked FREE morning delivery in Karachi.</span>
                    </div>
                  ) : (
                    <div className="text-[#2D6A4F]">
                      <div className="flex justify-between font-semibold mb-1">
                        <span>Add Rs. {(1500 - subtotal).toLocaleString()} more for FREE delivery</span>
                        <span>{Math.round((subtotal / 1500) * 100)}%</span>
                      </div>
                      <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#2D6A4F] h-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (subtotal / 1500) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Karachi Delivery Details Form */}
                <div className="pt-2 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B4332]">
                    <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Karachi Morning Delivery Info</span>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Full Name (e.g., Bilal Ahmed)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />

                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile Number (e.g. 0310 3510076)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />

                    {/* Custom Area Dropdown */}
                    <div className="relative" ref={areaRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAreaOpen((prev) => !prev);
                          setIsSlotOpen(false);
                        }}
                        className={`w-full flex items-center justify-between bg-[#FAF7F2] border rounded-xl px-3 py-2 text-xs font-semibold text-[#1B4332] transition-all ${
                          isAreaOpen
                            ? 'border-[#2D6A4F] bg-white ring-2 ring-[#2D6A4F]/20'
                            : 'border-[#D5CDC0] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                          <span className="truncate">{selectedArea}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#2D6A4F] transition-transform duration-200 shrink-0 ${isAreaOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isAreaOpen && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-2xl border border-[#D5CDC0] shadow-xl p-1 z-50 max-h-48 overflow-y-auto">
                          {KARACHI_ZONES.map((zone, idx) => {
                            const isSelected = selectedArea === zone;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                  setSelectedArea(zone);
                                  setIsAreaOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                                  isSelected
                                    ? 'bg-[#1B4332] text-white font-bold'
                                    : 'text-[#1B4332] hover:bg-[#FAF7F2]'
                                }`}
                              >
                                <span className="truncate">{zone}</span>
                                {isSelected && <Check className="w-3 h-3 text-[#FDE047] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Street / House / Apartment Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />

                    {/* Custom Delivery Slot Dropdown */}
                    <div className="relative" ref={slotRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSlotOpen((prev) => !prev);
                          setIsAreaOpen(false);
                        }}
                        className={`w-full flex items-center justify-between bg-[#FAF7F2] border rounded-xl px-3 py-2 text-xs font-semibold text-[#1B4332] transition-all ${
                          isSlotOpen
                            ? 'border-[#2D6A4F] bg-white ring-2 ring-[#2D6A4F]/20'
                            : 'border-[#D5CDC0] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Clock className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                          <span className="truncate">{deliverySlot}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-[#2D6A4F] transition-transform duration-200 shrink-0 ${isSlotOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isSlotOpen && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-2xl border border-[#D5CDC0] shadow-xl p-1 z-50">
                          {DELIVERY_SLOTS.map((slot, idx) => {
                            const isSelected = deliverySlot === slot;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                  setDeliverySlot(slot);
                                  setIsSlotOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                                  isSelected
                                    ? 'bg-[#1B4332] text-white font-bold'
                                    : 'text-[#1B4332] hover:bg-[#FAF7F2]'
                                }`}
                              >
                                <span className="truncate">{slot}</span>
                                {isSelected && <Check className="w-3 h-3 text-[#FDE047] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Special note (e.g., Leave with watchman / bring change)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-[#FAF7F2] space-y-3">
              <div className="space-y-1.5 text-xs text-[#52796F]">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-bold text-[#1B4332]">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Karachi Morning Delivery</span>
                  <span className="font-bold text-[#1B4332]">
                    {deliveryFee === 0 ? (
                      <span className="text-[#2D6A4F] font-black">FREE</span>
                    ) : (
                      `Rs. ${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-[#1B4332] pt-2 border-t border-gray-200">
                  <span>Total Payable:</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Order via WhatsApp CTA */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Send Order on WhatsApp (0310 3510076)
              </button>

              <div className="text-[10px] text-center text-gray-500">
                Cash on delivery or Bank Transfer • Delivered fresh before breakfast
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
