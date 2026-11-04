// Data for GM Dairies Karachi Products
export const PRODUCTS = [
  {
    id: 'pure-buffalo-milk',
    name: 'GM 100% Pure Buffalo Milk',
    tagline: 'Own-Packaged • Full Cream • Khara Doodh',
    category: 'milk',
    price: 270,
    unit: '1 Litre Pouch / Chilled Bottle',
    fatContent: '6.8% Natural Butterfat',
    badge: 'Bestseller',
    description: 'Freshly milked from healthy, grass-fed buffaloes, instantly chilled below 4°C, and hermetically sealed. Zero added water, zero chemicals, zero milk powder. Thick malai guaranteed for your morning chai and family health.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    availableForSubscription: true,
    features: ['Daily Morning Delivery', 'Thick Malai Layer', 'Lactometer Tested Purity', 'No Hormones / Oxytocin']
  },
  {
    id: 'pure-cow-milk',
    name: 'GM Farm Fresh Cow Milk',
    tagline: 'Light, A2-Rich & Gentle on Digestion',
    category: 'milk',
    price: 280,
    unit: '1 Litre Bottle',
    fatContent: '4.2% Natural Golden Fat',
    badge: 'Family Favorite',
    description: 'Golden, nutritious, and easy to digest. Ideal for babies, elderly family members, and health enthusiasts. High natural beta-carotene with pure organic sweetness.',
    image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=800&q=80',
    availableForSubscription: true,
    features: ['Easily Digestible', 'Rich in Calcium & Vit D', 'Sealed Bottle Packaging', 'Perfect for Toddlers']
  },
  {
    id: 'desi-ghee-churned',
    name: 'GM Shudh Desi Ghee (Bilona Churned)',
    tagline: 'Traditional Makhan Se Bana • Danedar & Khushbudar',
    category: 'ghee',
    price: 2950,
    unit: '1 KG Premium Jar',
    fatContent: '99.8% Pure Milk Fat',
    badge: 'Signature Heritage',
    description: 'Slow-simmered over low flame from churned cultured butter (makhan). Aromatic, granular (danedar) texture with authentic village aroma. Free from Dalda, palm oil, or synthetic essences.',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
    availableForSubscription: false,
    options: [
      { size: '500g Jar', price: 1550 },
      { size: '1 KG Jar', price: 2950 }
    ],
    features: ['Slow Churned', 'Danedar Texture', 'Unmatched Aroma', 'No Additives or Preservatives']
  },
  {
    id: 'fresh-white-butter',
    name: 'GM Fresh White Butter (Desi Makhan)',
    tagline: 'Unsalted • Sweet Creamy Traditional Butter',
    category: 'ghee',
    price: 850,
    unit: '500 Grams Pack',
    fatContent: '82% Fresh Cultured Butter',
    badge: 'Fresh Daily',
    description: 'Traditional unsalted white makhan hand-collected fresh every morning. Melts gloriously on hot parathas, saag, or warm roti.',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80',
    availableForSubscription: true,
    features: ['100% Unsalted', 'Melt-in-mouth freshness', 'Zero artificial coloring', 'Hygienically Packed']
  },
  {
    id: 'thick-dahi-yogurt',
    name: 'GM Thick Sweet Yogurt (Meetha / Saada Dahi)',
    tagline: 'Chakki Jaisa Jamaya Hua • No Gelatin or Starch',
    category: 'yogurt',
    price: 340,
    unit: '1 KG Clay / Food-Grade Tub',
    fatContent: 'Full Cream Traditional Curd',
    badge: 'Customer Choice',
    description: 'Set naturally with live probiotic cultures. Naturally dense, velvety texture without adding cornstarch or gelatin. Perfect for breakfast bowls, raita, and lassi.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    availableForSubscription: true,
    features: ['Probiotic Rich', 'Thick Spoonable Texture', 'Fresh Culture Fermented', 'Available Saada or Meetha']
  },
  {
    id: 'fresh-paneer-khoya',
    name: 'GM Pure Malai Paneer & Khoya',
    tagline: 'Super Soft • Made from Fresh Pure Whole Milk',
    category: 'treats',
    price: 680,
    unit: '500 Grams Pack',
    fatContent: 'Pure Dairy Protein',
    badge: 'Chef Special',
    description: 'Extracted directly from boiled whole milk curdled with natural lemon/whey. Sponge soft paneer cubes that soak up curries and sweets with rich dairy flavor.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    availableForSubscription: false,
    features: ['High Protein', 'Chemical & Preservative Free', 'Ultra Soft Texture', 'Vacuum Packed']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Dairy' },
  { id: 'milk', label: 'Organic Milk' },
  { id: 'ghee', label: 'Desi Ghee & Butter' },
  { id: 'yogurt', label: 'Thick Dahi' },
  { id: 'treats', label: 'Paneer & Khoya' }
];

