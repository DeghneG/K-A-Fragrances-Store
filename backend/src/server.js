const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve the frontend static files
const frontendPath = path.join(__dirname, '..', '..', 'frontend');
app.use(express.static(frontendPath));

// API Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/orders',   require('./routes/orders'));

// Health check
app.get('/api', (req, res) => {
  res.json({ message: 'K&A Fragrances API', status: 'running', version: '1.0.0' });
});

// Catch-all: serve index.html for any non-API route (SPA-friendly)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\nK&A Fragrances running at http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api\n`);
});
