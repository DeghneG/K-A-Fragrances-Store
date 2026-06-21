/* ============================================
   K&A FRAGRANCES â€” PRODUCT DATA
   Each product has multiple size variants
   ============================================ */

const KA_PRODUCTS = [
  // â”€â”€ K&A SIGNATURE BLEND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 0,
    brand: "K&A Fragrances",
    name: "Topaz Flame",
    category: "signature",
    badge: "signature",
    badgeLabel: "K&A Exclusive",
    isSignature: true,
    notes: { top: "Bergamot, Cardamom, Pink Pepper", heart: "Caramel, Lavender, Cinnamon", base: "Vanilla, Amber Woods" },
    description: "Our signature creation â€” a bold fusion of Middle Eastern opulence and modern elegance. Topaz Flame opens with a bright burst of bergamot, cardamom, and pink pepper, deepens into a sweet, aromatic heart of caramel, lavender, and cinnamon, then settles into a warm, addictive base of vanilla and amber woods. Crafted in-house, this is the scent that defines K&A.",
    rating: 5.0,
    reviews: 136,
    inStock: true,
    image: "assets/images/Topaz.webp",
    tags: ["oud", "saffron", "amber", "rose", "vanilla", "oriental", "signature"],
    variants: [
      { size: "50ml", type: "full",   price: 50 }
    ]
  },

  // â”€â”€ MIDDLE EASTERN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 1,
    brand: "Rasasi",
    name: "Dhan Al Oudh Safwa",
    category: "middle-eastern",
    badge: "middle-eastern",
    badgeLabel: "Middle Eastern",
    notes: { top: "Oud, Saffron", heart: "Rose, Amber", base: "Musk, Sandalwood" },
    description: "A rich and opulent oud fragrance with a heart of velvety rose and warm amber.",
    rating: 4.9,
    reviews: 42,
    inStock: true,
    image: "assets/images/middle_eastern.png",
    tags: ["oud", "rose", "amber", "saffron", "oriental"],
    variants: [
      { size: "2ml",  type: "decant", price: 99 },
      { size: "5ml",  type: "decant", price: 199 },
      { size: "10ml", type: "decant", price: 349 },
      { size: "75ml", type: "full",   price: 1899 }
    ]
  },
  {
    id: 2,
    brand: "Emporio Armani",
    name: "Stronger With You Intensely",
    category: "designer",
    badge: "hot",
    badgeLabel: "Best Seller",
    notes: { top: "Cinnamon, Vanilla, Amber", heart: "Rose, Vetiver", base: "Musks, Sandalwood" },
    description: "An intense and smoky black oud composition layered with Bulgarian rose and earthy vetiver.",
    rating: 4.8,
    reviews: 67,
    inStock: true,
    image: "assets/images/SWYI.jpg",
    tags: ["oud", "smoky", "rose", "saffron", "oriental"],
    variants: [
      { size: "2ml",  type: "decant", price: 4 },
      { size: "5ml",  type: "decant", price: 10 },
      { size: "10ml", type: "decant", price: 20 },
      { size: "30ml", type: "full",   price: 55 }
    ]
  },
  {
    id: 3,
    brand: "Sospiro",
    name: "Vibrato",
    category: "niche",
    badge: "new",
    badgeLabel: "New",
    notes: { top: "Grapefruit, Ginger, Bergamot", heart: "Amber, Rose", base: "Oud, Musks" },
    description: "A golden amber treasure with citrus brightness giving way to warm, resinous oud.",
    rating: 4.7,
    reviews: 28,
    inStock: true,
    image: "assets/images/vibrato.webp",
    tags: ["amber", "oud", "rose", "bergamot", "oriental"],
    variants: [
      { size: "2ml",  type: "decant", price: 12 },
      { size: "5ml",  type: "decant", price: 28 },
      { size: "10ml", type: "decant", price: 65 },
      { size: "30ml", type: "full",   price: 190 }
    ]
  },

  // â”€â”€ DESIGNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 4,
    brand: "Louis Vuitton",
    name: "Imagination",
    category: "designer",
    badge: "hot",
    badgeLabel: "Best Seller",
    notes: { top: "Citron, Bergamot, Orange", heart: "Lavender, Sichuan Pepper", base: "Ambroxan, Cedar, Labdanum" },
    description: "A powerful, magnetic fragrance with raw and noble materials. A modern classic.",
    rating: 4.9,
    reviews: 120,
    inStock: true,
    image: "assets/images/Imagination lv.jpg",
    tags: ["fresh", "aromatic", "ambroxan", "woody", "designer"],
    variants: [
      { size: "2ml",  type: "decant", price: 15 },
      { size: "5ml",  type: "decant", price: 36 },
      { size: "10ml", type: "decant", price: 72 },
      { size: "30ml", type: "full",   price: 210 }
    ]
  },
  {
    id: 5,
    brand: "Chanel",
    name: "Bleu de Chanel EDP",
    category: "designer",
    badge: null,
    notes: { top: "Grapefruit, Bergamot, Lemon", heart: "Labdanum, Iso E Super", base: "Incense, Vetiver, Cedar" },
    description: "A woody, aromatic fragrance for a man who defies convention. Sensual and sophisticated.",
    rating: 4.8,
    reviews: 95,
    inStock: true,
    image: "assets/images/designer.png",
    tags: ["woody", "aromatic", "citrus", "fresh", "designer"],
    variants: [
      { size: "2ml",  type: "decant", price: 149 },
      { size: "5ml",  type: "decant", price: 299 },
      { size: "10ml", type: "decant", price: 549 },
      { size: "100ml", type: "full",  price: 4200 }
    ]
  },
  {
    id: 6,
    brand: "Bujairami",
    name: "Hectic",
    category: "designer",
    badge: "new",
    badgeLabel: "New",
    notes: { top: "Citron, Bergamot, Orange", heart: "Coffee, Jasmine", base: "White Musk, Vanilla, Cedarwood" },
    description: "An addictive feminine gourmand. Rockstar energy of coffee and white floral over vanilla musk.",
    rating: 4.7,
    reviews: 58,
    inStock: true,
    image: "assets/images/hectic-02.webp",
    tags: ["gourmand", "coffee", "vanilla", "floral", "designer"],
    variants: [
      { size: "2ml",  type: "decant", price: 6 },
      { size: "5ml",  type: "decant", price: 14 },
      { size: "10ml", type: "decant", price: 20 }
    ]
  },
  {
    id: 7,
    brand: "Versace",
    name: "Eros EDT",
    category: "designer",
    badge: null,
    notes: { top: "Mint, Green Apple, Lemon", heart: "Tonka Bean, Geranium, Ambroxan", base: "Virginia Cedar, Vetiver" },
    description: "A bold and vibrant fragrance inspired by the Greek god of love. Fresh and sensual.",
    rating: 4.6,
    reviews: 73,
    inStock: true,
    image: "assets/images/designer.png",
    tags: ["fresh", "aromatic", "mint", "tonka", "designer"],
    variants: [
      { size: "2ml",  type: "decant", price: 89 },
      { size: "5ml",  type: "decant", price: 175 },
      { size: "10ml", type: "decant", price: 315 },
      { size: "100ml", type: "full",  price: 2400 }
    ]
  },

  // â”€â”€ NICHE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 8,
    brand: "Maison Margiela",
    name: "By the Fireplace",
    category: "niche",
    badge: "niche",
    badgeLabel: "Niche",
    notes: { top: "Orange Blossom, Cloves, Chestnut", heart: "Guaiacwood, Cashmeran", base: "Vanilla, Musk" },
    description: "Memories of winter by the fireplace â€” smoky, warm and cozy. A seasonal masterpiece.",
    rating: 4.9,
    reviews: 44,
    inStock: true,
    image: "assets/images/niche.png",
    tags: ["woody", "smoky", "vanilla", "warm", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 199 },
      { size: "5ml",  type: "decant", price: 349 },
      { size: "10ml", type: "decant", price: 629 },
      { size: "100ml", type: "full",  price: 5200 }
    ]
  },
  {
    id: 9,
    brand: "Byredo",
    name: "Bal d'Afrique",
    category: "niche",
    badge: "niche",
    badgeLabel: "Niche",
    notes: { top: "Bergamot, African Marigold", heart: "Violet, Neroli, Rose", base: "Vetiver, Musk, Cedarwood" },
    description: "Inspired by an African cultural movement in 1920s Paris. A sunny, optimistic journey.",
    rating: 4.8,
    reviews: 31,
    inStock: false,
    image: "assets/images/niche.png",
    tags: ["floral", "citrus", "violet", "musk", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 249 },
      { size: "5ml",  type: "decant", price: 450 },
      { size: "10ml", type: "decant", price: 820 },
      { size: "100ml", type: "full",  price: 6800 }
    ]
  },
  {
    id: 10,
    brand: "Giardini Di Toscana",
    name: "Bianco Latte",
    category: "niche",
    badge: "new",
    badgeLabel: "New",
    notes: { top: "Caramel, Honey, Vanilla", heart: "Oak, Tonka Bean", base: "Vanilla, Sandalwood" },
    description: "Named for the whisky that evaporates during aging. An intoxicating cognac and warm spice blend.",
    rating: 5.0,
    reviews: 19,
    inStock: true,
    image: "assets/images/bianco.jpg",
    tags: ["gourmand", "vanilla", "woody", "spicy", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 8 },
      { size: "5ml",  type: "decant", price: 20 },
      { size: "10ml", type: "decant", price: 40 },
      { size: "30ml", type: "full",   price: 110 }
    ]
  },
  {
    id: 11,
    brand: "Mykonos",
    name: "Dreamscape",
    category: "niche",
    badge: "hot",
    badgeLabel: "Best Seller",
    notes: { top: "Mango, Lemon, Rhubarb", heart: "Rose, Jasmine, Birch", base: "Musk, Oakmoss, Ambergris" },
    description: "The legendary king of fragrances. Iconic, timeless, and unmatched in versatility.",
    rating: 5.0,
    reviews: 88,
    inStock: true,
    image: "assets/images/dreamscape.jpg",
    tags: ["fresh", "fruity", "woody", "musk", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 199 },
      { size: "5ml",  type: "decant", price: 399 },
      { size: "10ml", type: "decant", price: 749 },
      { size: "100ml", type: "full",  price: 12500 }
    ]
  },
  {
    id: 12,
    brand: "Tom Ford",
    name: "Tobacco Vanille",
    category: "niche",
    badge: null,
    notes: { top: "Tobacco Leaf, Spice", heart: "Vanilla, Cacao, Tonka Bean", base: "Dry Fruit, Wood Sap" },
    description: "The richest private blend. Decadent tobacco enriched with vanilla and spice.",
    rating: 4.9,
    reviews: 62,
    inStock: true,
    image: "assets/images/niche.png",
    tags: ["oriental", "vanilla", "tobacco", "spicy", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 219 },
      { size: "5ml",  type: "decant", price: 459 },
      { size: "10ml", type: "decant", price: 849 },
      { size: "50ml", type: "full",   price: 9800 }
    ]
  },
  {
    id: 13,
    brand: "Parfums de Marly",
    name: "Layton",
    category: "niche",
    badge: null,
    notes: { top: "Apple, Cardamom, Bergamot", heart: "Jasmine, Geranium, Violet", base: "Sandalwood, Vanilla, Musk" },
    description: "A celebrated crowd-pleaser. Fresh apple opening evolving into creamy, smooth vanilla musk.",
    rating: 4.8,
    reviews: 54,
    inStock: true,
    image: "assets/images/niche.png",
    tags: ["fresh", "apple", "vanilla", "floral", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 169 },
      { size: "5ml",  type: "decant", price: 349 },
      { size: "10ml", type: "decant", price: 649 },
      { size: "125ml", type: "full",  price: 8200 }
    ]
  }
];

const KA_CATEGORIES = [
  {
    id: "middle-eastern",
    name: "Middle Eastern",
    description: "Rich Ouds, Amber & Oriental Treasures",
    image: "assets/images/middle eastern banner.webp",
    icon: "ðŸ•Œ",
    count: KA_PRODUCTS.filter(p => p.category === "middle-eastern").length
  },
  {
    id: "designer",
    name: "Designer",
    description: "Iconic Houses & Global Signatures",
    image: "assets/images/desugner.jpeg",
    icon: "ðŸ‘‘",
    count: KA_PRODUCTS.filter(p => p.category === "designer").length
  },
  {
    id: "niche",
    name: "Niche",
    description: "Artisan & Rare Collectibles",
    image: "assets/images/niche.png",
    icon: "ðŸŒ¿",
    count: KA_PRODUCTS.filter(p => p.category === "niche").length
  },
  {
    id: "summer",
    name: "Summer Samples",
    description: "Fresh & Aquatic Scents",
    image: "assets/images/summer bundle.jpg",
    icon: "â˜€ï¸",
    count: KA_PRODUCTS.filter(p => p.category === "summer").length
  },
  {
    id: "winter",
    name: "Winter Samples",
    description: "Warm & Cozy Fragrances",
    image: "assets/images/winter bundle.jpg",
    icon: "â„ï¸",
    count: KA_PRODUCTS.filter(p => p.category === "winter").length
  },
  {
    id: "bundles",
    name: "Bundles",
    description: "Curated Sets & Collections",
    image: "assets/images/bundles.jpg",
    icon: "ðŸŽ",
    count: KA_PRODUCTS.filter(p => p.category === "bundles").length
  },
  {
    id: "all",
    name: "All Seasons",
    description: "Versatile Year-Round Signatures",
    image: "assets/images/all bundle.jpg",
    icon: "â™¾ï¸",
    count: KA_PRODUCTS.filter(p => p.category === "all").length
  }
];
