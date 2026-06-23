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
    description: `<p>Topaz Flame is a bold and captivating fragrance that embodies warmth, confidence, and modern elegance. Designed for those who appreciate rich sweetness balanced with refined spice.</p><p style="margin-top:0.8rem">The fragrance opens with an energetic blend of sparkling bergamot, spicy cardamom, and pink pepper, delivering a vibrant yet smooth introduction. As it develops, creamy caramel unfolds at the heart, wrapped in aromatic lavender and warm cinnamon, adding depth and sensuality. The sweetness is rich and inviting without becoming overpowering, while the subtle spice keeps the composition sophisticated and dynamic.</p><p style="margin-top:0.8rem">As the fragrance settles, smooth vanilla and rich amber woods create a warm, long-lasting trail.</p><p style="margin-top: 1.5rem; color: var(--amber-400); font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Characteristics</p><ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; font-size: 0.95rem; line-height: 1.6;"><li style="margin-bottom:0.4rem"><strong style="color:var(--text-primary)">Projection and Longevity:</strong> Topaz Flame offers excellent projection and long-lasting performance, lingering for approximately 8–10 hours.</li><li style="margin-bottom:0.4rem"><strong style="color:var(--text-primary)">Versatility:</strong> Ideal for fall, winter, and cooler evenings, making it perfect for daily winter use, dates, dinners, nights out, and special occasions.</li><li><strong style="color:var(--text-primary)">Overall Vibe:</strong> Warm, spicy, sweet, and seductive with a smooth amber-vanilla finish.</li></ul>`,
    rating: 5.0,
    reviews: 136,
    inStock: true,
    image: "assets/images/kafrag.jpg",
    tags: ["oud", "saffron", "amber", "rose", "vanilla", "oriental", "signature", "winter-samples", "all-season"],
    variants: [
      { size: "50ml", type: "full",   price: 50 }
    ]
  },

  // â”€â”€ MIDDLE EASTERN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 11,
    brand: "Mykonos",
    name: "Dreamscape",
    category: "middle-eastern",
    badge: "hot",
    badgeLabel: "Best Seller",
    notes: { top: "Mango, Lemon, Rhubarb", heart: "Rose, Jasmine, Birch", base: "Musk, Oakmoss, Ambergris" },
    description: "The legendary king of fragrances. Iconic, timeless, and unmatched in versatility.",
    rating: 5.0,
    reviews: 88,
    inStock: true,
    image: "assets/images/dreamscape.jpg",
    tags: ["fresh", "fruity", "woody", "musk", "middle-eastern"],
    variants: [
      { size: "2ml",  type: "decant", price: 7 },
      { size: "5ml",  type: "decant", price: 16 },
      { size: "10ml", type: "decant", price: 30 }
    ]
  },
  {
    id: 6,
    brand: "Bujairami",
    name: "Hectic",
    category: "middle-eastern",
    badge: "new",
    badgeLabel: "New",
    notes: { top: "Citron, Bergamot, Orange", heart: "Coffee, Jasmine", base: "White Musk, Vanilla, Cedarwood" },
    description: "An addictive feminine gourmand. Rockstar energy of coffee and white floral over vanilla musk.",
    rating: 4.7,
    reviews: 58,
    inStock: true,
    image: "assets/images/hectic-02.webp",
    tags: ["gourmand", "coffee", "vanilla", "floral", "middle-eastern"],
    variants: [
      { size: "2ml",  type: "decant", price: 6 },
      { size: "5ml",  type: "decant", price: 14 },
      { size: "10ml", type: "decant", price: 20 }
    ]
  },
  {
    id: 1,
    brand: "Rasasi",
    name: "N/A",
    category: "middle-eastern",
    badge: "middle-eastern",
    badgeLabel: "Middle Eastern",
    notes: { top: "N/A", heart: "Rose, Amber", base: "Musk, Sandalwood" },
    description: "A rich and opulent oud fragrance with a heart of velvety rose and warm amber.",
    rating: 4.9,
    reviews: 42,
    inStock: true,
    image: "assets/images/no-picture.png",
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
    tags: ["oud", "smoky", "rose", "saffron", "oriental", "winter-samples"],
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
    tags: ["amber", "oud", "rose", "bergamot", "oriental", "all-season"],
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
    name: "N/A",
    category: "designer",
    badge: null,
    notes: { top: "N/A", heart: "Labdanum, Iso E Super", base: "Incense, Vetiver, Cedar" },
    description: "A woody, aromatic fragrance for a man who defies convention. Sensual and sophisticated.",
    rating: 4.8,
    reviews: 95,
    inStock: true,
    image: "assets/images/no-picture.png",
    tags: ["woody", "aromatic", "citrus", "fresh", "designer"],
    variants: [
      { size: "2ml",  type: "decant", price: 149 },
      { size: "5ml",  type: "decant", price: 299 },
      { size: "10ml", type: "decant", price: 549 },
      { size: "100ml", type: "full",  price: 4200 }
    ]
  },

  {
    id: 7,
    brand: "Versace",
    name: "N/A",
    category: "designer",
    badge: null,
    notes: { top: "N/A", heart: "Tonka Bean, Geranium, Ambroxan", base: "Virginia Cedar, Vetiver" },
    description: "A bold and vibrant fragrance inspired by the Greek god of love. Fresh and sensual.",
    rating: 4.6,
    reviews: 73,
    inStock: true,
    image: "assets/images/no-picture.png",
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
    name: "N/A",
    category: "niche",
    badge: "niche",
    badgeLabel: "Niche",
    notes: { top: "N/A", heart: "Guaiacwood, Cashmeran", base: "Vanilla, Musk" },
    description: "Memories of winter by the fireplace â€” smoky, warm and cozy. A seasonal masterpiece.",
    rating: 4.9,
    reviews: 44,
    inStock: true,
    image: "assets/images/no-picture.png",
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
    name: "N/A",
    category: "niche",
    badge: "niche",
    badgeLabel: "Niche",
    notes: { top: "N/A", heart: "Violet, Neroli, Rose", base: "Vetiver, Musk, Cedarwood" },
    description: "Inspired by an African cultural movement in 1920s Paris. A sunny, optimistic journey.",
    rating: 4.8,
    reviews: 31,
    inStock: false,
    image: "assets/images/no-picture.png",
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
    id: 13,
    brand: "Parfums de Marly",
    name: "N/A",
    category: "niche",
    badge: null,
    notes: { top: "N/A", heart: "Jasmine, Geranium, Violet", base: "Sandalwood, Vanilla, Musk" },
    description: "A celebrated crowd-pleaser. Fresh apple opening evolving into creamy, smooth vanilla musk.",
    rating: 4.8,
    reviews: 54,
    inStock: true,
    image: "assets/images/no-picture.png",
    tags: ["fresh", "apple", "vanilla", "floral", "niche"],
    variants: [
      { size: "2ml",  type: "decant", price: 169 },
      { size: "5ml",  type: "decant", price: 349 },
      { size: "10ml", type: "decant", price: 649 },
      { size: "125ml", type: "full",  price: 8200 }
    ]
  },
  // ── SUMMER SAMPLES ─────────────────────────────────────────
  {
    id: 101,
    brand: "City Rhythm",
    name: "City Rhythm Miami",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "Coconut, Lime, Saffron", heart: "N/A", base: "N/A" },
    description: "Experience the ultimate summer vibe with a fresh decant.",
    rating: 5.0,
    reviews: 12,
    inStock: true,
    image: "assets/images/city.jpg",
    tags: ["fresh", "summer"],
    variants: [
      { size: "2ml", type: "decant", price: 12 },
      { size: "5ml", type: "decant", price: 25 },
      { size: "10ml", type: "decant", price: 50 },
      { size: "30ml", type: "full", price: 140 }
    ]
  },
  {
    id: 102,
    brand: "Stephane Humbert Lucas",
    name: "Pink Boa",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "Blackcurrant, Rosemary, Blackberry, Bergamot", heart: "N/A", base: "N/A" },
    description: "A vibrant and exotic summer fragrance.",
    rating: 4.8,
    reviews: 8,
    inStock: true,
    image: "assets/images/pink.jpg",
    tags: ["fresh", "summer", "fruity"],
    variants: [
      { size: "2ml", type: "decant", price: 18 },
      { size: "5ml", type: "decant", price: 40 }
    ]
  },
  {
    id: 103,
    brand: "Stephane Humbert Lucas",
    name: "God of Fire",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "Mango, Lemon, Ginger, Red Berries", heart: "N/A", base: "N/A" },
    description: "An intense, legendary summer scent.",
    rating: 5.0,
    reviews: 34,
    inStock: true,
    image: "assets/images/gof.jpg",
    tags: ["fresh", "summer", "fruity"],
    variants: [
      { size: "2ml", type: "decant", price: 18 },
      { size: "5ml", type: "decant", price: 40 }
    ]
  },

  // ── WINTER SAMPLES ─────────────────────────────────────────
  {
    id: 105,
    brand: "Maison Francis Kurkdjian",
    name: "Grand Soir",
    category: "winter-samples",
    badge: "winter-samples",
    badgeLabel: "Winter Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "A warm and majestic winter fragrance.",
    rating: 4.9,
    reviews: 42,
    inStock: true,
    image: "assets/images/no-picture.png",
    tags: ["winter-samples", "amber", "vanilla"],
    variants: [
      { size: "2ml", type: "decant", price: 15 },
      { size: "5ml", type: "decant", price: 29 },
      { size: "10ml", type: "decant", price: 49 }
    ]
  },
  {
    id: 106,
    brand: "Xerjoff",
    name: "La Capitale",
    category: "winter-samples",
    badge: "winter-samples",
    badgeLabel: "Winter Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "A rich and indulgent scent for the cold months.",
    rating: 4.8,
    reviews: 18,
    inStock: true,
    image: "assets/images/no-picture.png",
    tags: ["winter-samples", "sweet", "fruity"],
    variants: [
      { size: "2ml", type: "decant", price: 15 },
      { size: "5ml", type: "decant", price: 29 },
      { size: "10ml", type: "decant", price: 49 }
    ]
  },
  {
    id: 107,
    brand: "Argos",
    name: "Triumph of Bacchus",
    category: "winter-samples",
    badge: "winter-samples",
    badgeLabel: "Winter Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "An intoxicating and spicy masterpiece.",
    rating: 5.0,
    reviews: 24,
    inStock: true,
    image: "assets/images/no-picture.png",
    tags: ["winter-samples", "spicy", "boozy"],
    variants: [
      { size: "2ml", type: "decant", price: 15 },
      { size: "5ml", type: "decant", price: 29 },
      { size: "10ml", type: "decant", price: 49 }
    ]
  },
  {
    id: 108,
    brand: "",
    name: "Wave Child",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["summer-samples"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 109,
    brand: "",
    name: "Le Beau Flower Edition Jean",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["summer-samples"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 110,
    brand: "",
    name: "Summer Hammer",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["summer-samples"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 111,
    brand: "",
    name: "Greenwich Village",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["summer-samples"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 112,
    brand: "",
    name: "Pacific Rock Moss",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["summer-samples"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 113,
    brand: "",
    name: "Ysl Y Le Parfum",
    category: "summer-samples",
    badge: "summer-samples",
    badgeLabel: "Summer Samples",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["summer-samples"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  // ── ALL SEASONS placeholders ──────────────────────────────

  {
    id: 116,
    brand: "",
    name: "Ingenious ginger",
    category: "all-season",
    badge: "all-season",
    badgeLabel: "All Season",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["all-season"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 117,
    brand: "",
    name: "YSL Myself",
    category: "all-season",
    badge: "all-season",
    badgeLabel: "All Season",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["all-season"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 118,
    brand: "",
    name: "Wulong Cha X",
    category: "all-season",
    badge: "all-season",
    badgeLabel: "All Season",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["all-season"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
  },
  {
    id: 119,
    brand: "",
    name: "Rouge Trafalgar",
    category: "all-season",
    badge: "all-season",
    badgeLabel: "All Season",
    notes: { top: "N/A", heart: "N/A", base: "N/A" },
    description: "",
    rating: 0,
    reviews: 0,
    inStock: false,
    image: "assets/images/no-picture.png",
    tags: ["all-season"],
    variants: [{ size: "TBA", type: "decant", price: 0 }]
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
    count: KA_PRODUCTS.filter(p => p.category === "summer-samples").length
  },
  {
    id: "winter",
    name: "Winter Samples",
    description: "Warm & Cozy Fragrances",
    image: "assets/images/winter bundle.jpg",
    icon: "â„ï¸",
    count: KA_PRODUCTS.filter(p => p.category === "winter-samples").length
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
    count: KA_PRODUCTS.filter(p => p.category === "all-season").length
  }
];
