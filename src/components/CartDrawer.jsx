import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ShieldCheck, Truck, ChevronDown } from 'lucide-react';

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
  const [selectedArea, setSelectedArea] = useState('Gulshan-e-Iqbal');
  const [address, setAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('Morning (6:00 AM – 8:00 AM)');
  const [notes, setNotes] = useState('');

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
      `🏠 *Delivery Address:* ${address || 'Will share location pin'}%0A` +
      `⏰ *Preferred Time:* ${deliverySlot}%0A` +
      `📝 *Notes:* ${notes || 'None'}%0A` +
      `--------------------------------------%0A` +
      `🛒 *ORDER ITEMS:*%0A${itemsList}` +
      `--------------------------------------%0A` +
      `💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}%0A` +
      `🚚 *Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}%0A` +
      `💰 *Total Amount:* Rs. ${total.toLocaleString()}%0A` +
      `💳 *Payment Method:* Cash on Delivery (COD) / Raast%0A` +
      `--------------------------------------%0A` +
      `Please confirm my order from Gulshan-e-Iqbal depot. JazakAllah!`;

    window.open(`https://wa.me/923103510076?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full sm:w-screen sm:max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2D6A4F]" />
              <h2 className="font-serif font-bold text-lg text-[#1B4332]">
                Your Dairy Basket ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="text-5xl">🥛</div>
                <h3 className="font-serif font-bold text-base text-[#1B4332]">Your basket is empty</h3>
                <p className="text-xs text-[#52796F] max-w-xs mx-auto">
                  Add 100% pure organic milk, Desi Ghee, or thick dahi to experience authentic Karachi dairy.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center gap-1.5 bg-[#2D6A4F] text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  Explore Farm Products
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-2xl border border-[#EBE4D5]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#1B4332] truncate">
                          {item.name}
                        </h4>
                        <div className="text-[11px] text-[#52796F]">{item.unit}</div>
                        <div className="text-xs font-black text-[#2D6A4F] mt-0.5">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-xl border border-gray-200">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-[#1B4332] p-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#1B4332] w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-[#1B4332] p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery Information Form */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
                    Delivery Details (Karachi)
                  </h4>

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Full Name"
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

                    <div className="relative">
                      <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl pl-3.5 pr-9 py-2 text-xs text-[#1B4332] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] hover:bg-white transition-colors"
                      >
                        <option value="Gulshan-e-Iqbal (Near Moti Mahal)">Gulshan-e-Iqbal</option>
                        <option value="Gulistan-e-Johar">Gulistan-e-Johar</option>
                        <option value="Federal B Area">Federal B Area</option>
                        <option value="PECHS / Bahadurabad">PECHS / Bahadurabad</option>
                        <option value="Clifton & DHA">Clifton & DHA</option>
                        <option value="North Nazimabad">North Nazimabad</option>
                        <option value="Malir Cantt / Scheme 33">Malir Cantt / Scheme 33</option>
                        <option value="Other Karachi Area">Other Karachi Area</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#2D6A4F] absolute right-3 top-2.5 pointer-events-none" />
                    </div>

                    <input
                      type="text"
                      placeholder="Street / House / Apartment Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl px-3 py-2 text-xs text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />

                    <div className="relative">
                      <select
                        value={deliverySlot}
                        onChange={(e) => setDeliverySlot(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#D5CDC0] rounded-xl pl-3.5 pr-9 py-2 text-xs text-[#1B4332] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] hover:bg-white transition-colors"
                      >
                        <option value="Early Morning (5:30 AM – 7:00 AM)">Early Morning (5:30 AM – 7:00 AM)</option>
                        <option value="Breakfast Slot (7:00 AM – 8:30 AM)">Breakfast Slot (7:00 AM – 8:30 AM)</option>
                        <option value="Evening Slot (5:00 PM – 7:00 PM)">Evening Slot (5:00 PM – 7:00 PM)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#2D6A4F] absolute right-3 top-2.5 pointer-events-none" />
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
                  <span>Subtotal:</span>
                  <span className="font-bold text-[#1B4332]">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery to {selectedArea.split(' ')[0]}:</span>
                  <span className="font-bold text-[#2D6A4F]">
                    {deliveryFee === 0 ? 'FREE (Over Rs. 1,500)' : `Rs. ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#1B4332] pt-1 border-t border-gray-200">
                  <span>Total Amount:</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                Place Order via WhatsApp (0310 3510076)
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] text-gray-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#2D6A4F]" /> Cash on Delivery (COD)
                </span>
                <span>•</span>
                <span>Raast / Nayapay Accepted</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

