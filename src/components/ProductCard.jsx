import React, { useState } from 'react';
import { Plus, Check, MessageCircle, Sparkles, Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onOpenSubscription }) {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[product.options.length - 1] : null
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentPrice = selectedOption ? selectedOption.price : product.price;
  const currentUnit = selectedOption ? selectedOption.size : product.unit;

  const handleAdd = () => {
    onAddToCart({
      id: selectedOption ? `${product.id}-${selectedOption.size}` : product.id,
      name: selectedOption ? `${product.name} (${selectedOption.size})` : product.name,
      price: currentPrice,
      unit: currentUnit,
      image: product.image,
      category: product.category,
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleWhatsAppDirect = () => {
    const itemName = selectedOption ? `${product.name} (${selectedOption.size})` : product.name;
    const text = `Assalam-o-Alaikum GM Dairies, I want to order: ${itemName} (Rs. ${currentPrice}). Please share delivery timing for my area in Karachi.`;
    window.open(`https://wa.me/923103510076?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D5] hover:border-[#2D6A4F]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-[#1B4332] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              {product.badge}
            </div>
          )}

          {/* Fat Content Tag */}
          <div className="absolute top-3 right-3 bg-white/95 text-[#2D6A4F] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#2D6A4F]/20 shadow-xs">
            {product.fatContent}
          </div>

          {/* Subscription Available Pill */}
          {product.availableForSubscription && (
            <div className="absolute bottom-3 left-3 bg-[#E8F5E9]/95 text-[#1B4332] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs border border-[#2D6A4F]/20">
              <Sparkles className="w-3 h-3 text-[#2D6A4F]" /> Available on Subscription
            </div>
          )}
        </div>

        {/* Content Info */}
        <div className="p-3.5 sm:p-4 space-y-1.5">
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors leading-snug truncate">
              {product.name}
            </h3>
            <p className="text-[10px] sm:text-[11px] font-semibold text-[#8C7A5B] tracking-wide mt-0.5 truncate">
              {product.tagline}
            </p>
          </div>

          <p className="text-[11px] sm:text-xs text-[#52796F] line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Options (for Ghee 500g vs 1kg) */}
          {product.options && (
            <div className="pt-0.5 flex flex-wrap gap-1">
              {product.options.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedOption(opt)}
                  className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md border transition-all ${
                    selectedOption?.size === opt.size
                      ? 'border-[#2D6A4F] bg-[#E8F5E9] text-[#1B4332]'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {opt.size} • Rs. {opt.price}
                </button>
              ))}
            </div>
          )}

          {/* Feature Bullets */}
          <div className="pt-1 flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="text-[8px] sm:text-[9px] font-medium bg-[#FAF7F2] text-[#3F4E4F] px-1.5 py-0.5 rounded-md border border-[#E9E3D5] truncate max-w-full"
              >
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Action Bar */}
      <div className="p-3 sm:p-4 pt-0">
        <div className="pt-2 border-t border-[#EAE3D6] flex items-center justify-between gap-1">
          <div className="min-w-0">
            <div className="text-[8px] sm:text-[9px] text-gray-500 font-medium truncate">{currentUnit}</div>
            <div className="font-black text-sm sm:text-base text-[#1B4332]">
              Rs. {currentPrice.toLocaleString()}
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleWhatsAppDirect}
              title="Order on WhatsApp"
              className="p-1.5 rounded-xl bg-[#E8F5E9] hover:bg-[#D8F3DC] text-[#25D366] border border-[#2D6A4F]/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </button>

            <button
              onClick={handleAdd}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-bold transition-all active:scale-95 shadow-sm ${
                addedAnimation
                  ? 'bg-[#2D6A4F] text-white'
                  : 'bg-[#1B4332] hover:bg-[#2D6A4F] text-white'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3 h-3" /> <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3" /> 
                  <span className="hidden sm:inline">Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

