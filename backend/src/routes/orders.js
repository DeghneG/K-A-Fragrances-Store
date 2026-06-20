const express = require('express');
const router = express.Router();

// In-memory store until a DB is wired up
const orders = [];
let nextId = 1;

// POST /api/orders — place an order
router.post('/', (req, res) => {
  const { name, phone, address, items, notes } = req.body;

  if (!name || !phone || !items || !items.length) {
    return res.status(400).json({ error: 'name, phone, and items are required' });
  }

  const total = items.reduce((sum, i) => sum + (i.price * i.qty), 0);

  const order = {
    id: nextId++,
    name,
    phone,
    address: address || '',
    notes: notes || '',
    items,
    total,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  orders.push(order);

  // Build WhatsApp message the seller will receive
  const itemLines = items.map(i => `• ${i.name} (${i.size}) x${i.qty} — ₱${(i.price * i.qty).toLocaleString()}`).join('\n');
  const waText = encodeURIComponent(
    `New Order #${order.id}\nFrom: ${name} | ${phone}\n\n${itemLines}\n\nTotal: ₱${total.toLocaleString()}\n\nAddress: ${address || 'Not provided'}\nNotes: ${notes || 'None'}`
  );

  res.status(201).json({
    order,
    whatsappUrl: `https://wa.me/639XXXXXXXXX?text=${waText}`,
  });
});

// GET /api/orders — list all (admin use)
router.get('/', (req, res) => {
  res.json({ count: orders.length, orders });
});

module.exports = router;
