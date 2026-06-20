const express = require('express');
const router = express.Router();

// Mirrored from frontend/js/products.js — single source of truth when DB is added
const KA_PRODUCTS = [
  { id: 0,  brand: "K&A Fragrances",    name: "Topaz Flame",          category: "signature",      badge: "signature", inStock: true,  variants: [{ size:"2ml",price:149 },{ size:"5ml",price:279 },{ size:"10ml",price:499 },{ size:"50ml",price:2999 }] },
  { id: 1,  brand: "Rasasi",            name: "Dhan Al Oudh Safwa",   category: "middle-eastern", badge: null,        inStock: true,  variants: [{ size:"2ml",price:99  },{ size:"5ml",price:199 },{ size:"10ml",price:349 },{ size:"75ml",price:1899 }] },
  { id: 2,  brand: "Swiss Arabian",     name: "Shaghaf Oud Aswad",    category: "middle-eastern", badge: "hot",       inStock: true,  variants: [{ size:"2ml",price:109 },{ size:"5ml",price:219 },{ size:"10ml",price:389 },{ size:"75ml",price:2199 }] },
  { id: 3,  brand: "Al Haramain",       name: "Amber Oud Gold",       category: "middle-eastern", badge: "new",       inStock: true,  variants: [{ size:"2ml",price:79  },{ size:"5ml",price:165 },{ size:"10ml",price:299 },{ size:"60ml",price:1650 }] },
  { id: 4,  brand: "Dior",             name: "Sauvage EDP",           category: "designer",       badge: "hot",       inStock: true,  variants: [{ size:"2ml",price:129 },{ size:"5ml",price:249 },{ size:"10ml",price:449 },{ size:"100ml",price:3500}] },
  { id: 5,  brand: "Chanel",           name: "Bleu de Chanel EDP",    category: "designer",       badge: null,        inStock: true,  variants: [{ size:"2ml",price:149 },{ size:"5ml",price:299 },{ size:"10ml",price:549 },{ size:"100ml",price:4200}] },
  { id: 6,  brand: "YSL",             name: "Black Opium EDP",        category: "designer",       badge: "new",       inStock: true,  variants: [{ size:"2ml",price:119 },{ size:"5ml",price:219 },{ size:"10ml",price:399 },{ size:"90ml",price:3100 }] },
  { id: 7,  brand: "Versace",         name: "Eros EDT",               category: "designer",       badge: null,        inStock: true,  variants: [{ size:"2ml",price:89  },{ size:"5ml",price:175 },{ size:"10ml",price:315 },{ size:"100ml",price:2400}] },
  { id: 8,  brand: "Maison Margiela", name: "By the Fireplace",       category: "niche",          badge: "niche",     inStock: true,  variants: [{ size:"2ml",price:199 },{ size:"5ml",price:349 },{ size:"10ml",price:629 },{ size:"100ml",price:5200}] },
  { id: 9,  brand: "Byredo",          name: "Bal d'Afrique",          category: "niche",          badge: "niche",     inStock: false, variants: [{ size:"2ml",price:249 },{ size:"5ml",price:450 },{ size:"10ml",price:820 },{ size:"100ml",price:6800}] },
  { id: 10, brand: "Kilian",          name: "Angels' Share",          category: "niche",          badge: "new",       inStock: true,  variants: [{ size:"2ml",price:329 },{ size:"5ml",price:570 },{ size:"10ml",price:1050},{ size:"50ml",price:8500 }] },
  { id: 11, brand: "Creed",           name: "Aventus",                category: "niche",          badge: "hot",       inStock: true,  variants: [{ size:"2ml",price:199 },{ size:"5ml",price:399 },{ size:"10ml",price:749 },{ size:"100ml",price:12500}]},
  { id: 12, brand: "Tom Ford",        name: "Tobacco Vanille",        category: "niche",          badge: null,        inStock: true,  variants: [{ size:"2ml",price:219 },{ size:"5ml",price:459 },{ size:"10ml",price:849 },{ size:"50ml",price:9800 }] },
  { id: 13, brand: "Parfums de Marly",name: "Layton",                 category: "niche",          badge: null,        inStock: true,  variants: [{ size:"2ml",price:169 },{ size:"5ml",price:349 },{ size:"10ml",price:649 },{ size:"125ml",price:8200}] },
];

// GET /api/products
router.get('/', (req, res) => {
  const { category, badge, inStock } = req.query;
  let results = [...KA_PRODUCTS];
  if (category) results = results.filter(p => p.category === category);
  if (badge)    results = results.filter(p => p.badge === badge);
  if (inStock !== undefined) results = results.filter(p => p.inStock === (inStock === 'true'));
  res.json({ count: results.length, products: results });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const product = KA_PRODUCTS.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

module.exports = router;
