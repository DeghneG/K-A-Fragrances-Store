/* ============================================
   K&A FRAGRANCES — CART LOGIC
   ============================================ */

const Cart = (() => {
  const STORAGE_KEY = 'ka_fragrances_cart';

  let items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateUI();
    dispatchEvent(new Event('cart:updated'));
  }

  function add(product, variantIndex) {
    const variant = product.variants[variantIndex];
    const key = `${product.id}_${variant.size}`;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({
        key,
        id: product.id,
        brand: product.brand,
        name: product.name,
        price: variant.price,
        size: variant.size,
        type: variant.type,
        image: product.image,
        qty: 1
      });
    }
    save();
    showToast(`${product.name} (${variant.size}) added to cart ✓`);
  }

  function remove(key) {
    items = items.filter(i => i.key !== key);
    save();
  }

  function updateQty(key, delta) {
    const item = items.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(0, item.qty + delta);
    if (item.qty === 0) remove(key);
    else save();
  }

  function clear() {
    items = [];
    save();
  }

  function getItems() { return [...items]; }

  function getTotal() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function getCount() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  function updateUI() {
    // Update badge
    const badges = document.querySelectorAll('.cart-badge');
    const count = getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });

    // Update sidebar
    renderCartSidebar();
  }

  function renderCartSidebar() {
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartEmptyEl = document.getElementById('cart-empty');
    const cartContentEl = document.getElementById('cart-content');
    if (!cartItemsEl) return;

    if (items.length === 0) {
      if (cartEmptyEl) cartEmptyEl.style.display = 'flex';
      if (cartContentEl) cartContentEl.style.display = 'none';
      return;
    }
    if (cartEmptyEl) cartEmptyEl.style.display = 'none';
    if (cartContentEl) cartContentEl.style.display = 'flex';

    cartItemsEl.innerHTML = items.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='assets/images/decants.png'">
        <div class="cart-item-info">
          <div class="cart-item-brand">${item.brand}</div>
          <div class="cart-item-name">${item.name}</div>
          <div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.25rem;">
            <span style="font-size:0.62rem;padding:0.15rem 0.5rem;border-radius:100px;background:${item.type === 'decant' ? 'rgba(136,136,136,0.2);color:#888' : 'rgba(255,255,255,0.12);color:var(--gold)'};letter-spacing:0.08em;text-transform:uppercase;">${item.size} ${item.type === 'decant' ? 'Decant' : 'Bottle'}</span>
          </div>
          <div class="cart-item-price">A$${Number(item.price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="Cart.updateQty('${item.key}', -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="Cart.updateQty('${item.key}', 1)">+</button>
          </div>
        </div>
        <button class="cart-remove" onclick="Cart.remove('${item.key}')" title="Remove">×</button>
      </div>
    `).join('');

    if (cartTotalEl) cartTotalEl.textContent = 'A$' + getTotal().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return { add, remove, updateQty, clear, getItems, getTotal, getCount, updateUI };
})();

/* ── Toast Notification ── */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('ka-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ka-toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">✓</span><span class="toast-text"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-text').textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── Cart Sidebar Toggle ── */
function openCart() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  Cart.updateUI();
}
function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.body.style.overflow = '';
}
