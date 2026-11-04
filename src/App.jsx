import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustTicker from './components/TrustTicker';
import InstagramStoryBanner from './components/InstagramStoryBanner';
import SubscriptionPlanner from './components/SubscriptionPlanner';
import ProductCatalog from './components/ProductCatalog';
import PurityGuarantee from './components/PurityGuarantee';
import KarachiDeliveryChecker from './components/KarachiDeliveryChecker';
import TestimonialsSection from './components/TestimonialsSection';
import LocationCard from './components/LocationCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  // Activate IntersectionObserver for fluid scroll reveals
  useScrollAnimation();

  const [cartItems, setCartItems] = useState([
    // Starter preview item
    {
      id: 'pure-buffalo-milk',
      name: 'GM 100% Pure Buffalo Milk',
      price: 270,
      unit: '1 Litre Pouch / Chilled Bottle',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
      quantity: 2
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQuantity } : i))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSubscription = () => {
    const el = document.getElementById('subscription');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E2721] selection:bg-[#2D6A4F] selection:text-white w-full overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSubscription={scrollToSubscription}
      />

      <main className="flex-1">
        {/* Hero Section with motion graphics */}
        <Hero
          onOpenSubscription={scrollToSubscription}
          onExploreProducts={scrollToProducts}
        />

        {/* Continuous Flowing Trust Ticker Marquee */}
        <TrustTicker />

        {/* Instagram Comments "Online Available?" Pitch Banner */}
        <InstagramStoryBanner onOpenSubscription={scrollToSubscription} />

        {/* Interactive Milk Subscription Planner */}
        <SubscriptionPlanner />

        {/* Product Catalog & Store */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onOpenSubscription={scrollToSubscription}
        />

        {/* Purity Guarantee */}
        <PurityGuarantee />

        {/* Karachi Delivery Coverage & Schedule */}
        <KarachiDeliveryChecker />

        {/* Customer Reviews & 4.8 Rating */}
        <TestimonialsSection />

        {/* Physical Store in Gulshan Near Moti Mahal */}
        <LocationCard />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer onOpenSubscription={scrollToSubscription} />

      {/* Floating Pakistani WhatsApp Hotspot button with Ping Indicator */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/923103510076?text=Assalam-o-Alaikum%20GM%20Dairies,%20I%20am%20visiting%20your%20website%20and%20want%20to%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
          title="Direct WhatsApp Chat: 0310 3510076"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-black tracking-wide pr-1">
            Order on WhatsApp (0310 3510076)
          </span>
        </a>
      </div>
    </div>
  );
}
