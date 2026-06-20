/* ============================================
   K&A FRAGRANCES — MAIN SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar Scroll + Scroll-to-top ── */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* ── Mobile Menu ── */
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.contains('mobile-open');
    if (isOpen) {
      navLinks?.classList.remove('mobile-open');
      document.body.style.overflow = '';
    } else {
      navLinks?.classList.add('mobile-open');
      document.body.style.overflow = 'hidden';
    }
  });
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      document.body.style.overflow = '';
    });
  });

  /* ── Theme Persistence ── */
  const savedTheme = localStorage.getItem('ka-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  /* ── Search Modal ── */
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');

  document.querySelectorAll('[data-open-search]').forEach(btn => {
    btn.addEventListener('click', () => {
      searchModal?.classList.add('open');
      searchInput?.focus();
    });
  });
  document.querySelectorAll('[data-close-search]').forEach(btn => {
    btn.addEventListener('click', closeSearch);
  });
  searchModal?.addEventListener('click', e => {
    if (e.target === searchModal) closeSearch();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchModal?.classList.add('open');
      searchInput?.focus();
    }
  });

  function closeSearch() { searchModal?.classList.remove('open'); }

  /* ── Live Search ── */
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    const resultsEl = document.getElementById('search-results');
    if (!resultsEl) return;
    if (!q) { resultsEl.innerHTML = ''; return; }

    const matches = KA_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q)) ||
      p.category.includes(q)
    ).slice(0, 6);

    resultsEl.innerHTML = matches.length
      ? matches.map(p => `
          <a href="shop.html?product=${p.id}" class="search-result-item">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='assets/images/decants.png'">
            <div>
              <div class="search-result-brand">${p.brand}</div>
              <div class="search-result-name">${p.name}</div>
              <div class="search-result-price">From ${formatPrice(p.variants[0].price)} — ${formatPrice(p.variants[p.variants.length-1].price)}</div>
            </div>
          </a>`).join('')
      : `<div class="search-no-results">No fragrances found for "<strong>${q}</strong>"</div>`;
  });

  /* ── Cart Sidebar ── */
  document.querySelectorAll('[data-open-cart]').forEach(btn => {
    btn.addEventListener('click', openCart);
  });
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);

  /* ── Active Nav Link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  /* ── Initialize Cart UI ── */
  if (typeof Cart !== 'undefined') Cart.updateUI();

  /* ── Fade-in on scroll ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

/* ── Utility: Format Currency ── */
function formatPrice(p) {
  return 'A$' + Number(p).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/* ── Observe new fade-in elements ── */
function observeFadeIns(container) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  (container || document).querySelectorAll('.fade-in:not(.visible)').forEach(el => io.observe(el));
}

/* ── Vial fill level from size string ── */
function vialFill(size) {
  const ml = parseFloat(size);
  if (isNaN(ml)) return '8%';
  if (ml <= 2)   return '8%';
  if (ml <= 5)   return '18%';
  if (ml <= 10)  return '32%';
  if (ml <= 30)  return '55%';
  if (ml <= 50)  return '72%';
  if (ml <= 75)  return '84%';
  if (ml <= 90)  return '90%';
  if (ml <= 100) return '94%';
  return '100%';
}

/* ── Build a Product Card with Vial Selector ── */
function buildProductCard(product) {
  const badge = product.badge && product.badgeLabel
    ? `<span class="product-card-badge badge-${product.badge}">${product.badgeLabel}</span>` : '';
  const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));

  const vials = product.variants.map((v, i) => `
    <button class="vial-option ${i === 0 ? 'active' : ''}"
            data-idx="${i}"
            onclick="selectVariant(${product.id}, ${i}, this)"
            title="${v.size} — A$${Number(v.price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}">
      <div class="vial-tube">
        <div class="vial-cap"></div>
        <div class="vial-liquid" style="--fill:${vialFill(v.size)}"></div>
      </div>
      <span class="vial-size">${v.size}</span>
      <span class="vial-price">A$${v.price >= 1000 ? (v.price/1000).toFixed(1)+'k' : v.price}</span>
    </button>`).join('');

  return `
    <div class="product-card fade-in" data-id="${product.id}" data-category="${product.category}" id="card-${product.id}">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='assets/images/decants.png'">
        ${badge}
        ${!product.inStock ? `<div class="product-card-soldout">Sold Out</div>` : ''}
        <div class="product-card-overlay">
          <button class="btn btn-amber" style="flex:1;justify-content:center;"
                  onclick="addSelectedVariant(${product.id})"
                  ${!product.inStock ? 'disabled' : ''}>
            ${product.inStock ? '<i class="fas fa-shopping-bag"></i> Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${product.brand}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-notes"><span style="color:var(--text-dim);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;">Top</span> · ${product.notes.top}</div>
        <div class="product-card-stars">
          <span class="stars-val">${stars}</span>
          <span class="stars-count">(${product.reviews})</span>
        </div>
        <div class="vial-selector" data-product-id="${product.id}">${vials}</div>
        <div class="product-card-footer">
          <div>
            <div class="product-card-price" id="price-${product.id}">${formatPrice(product.variants[0].price)}</div>
            <div class="product-card-size-label" id="size-label-${product.id}">${product.variants[0].size} ${product.variants[0].type === 'decant' ? 'Decant' : 'Bottle'}</div>
          </div>
          ${product.inStock
            ? `<button class="product-card-add" onclick="addSelectedVariant(${product.id})" title="Add to cart"><i class="fas fa-plus"></i></button>`
            : `<span style="font-size:0.6rem;color:#E8735A;letter-spacing:0.1em;font-family:var(--font-mono)">SOLD OUT</span>`}
        </div>
      </div>
    </div>`;
}

/* ── Track selected variant per product ── */
const selectedVariants = {};

function selectVariant(productId, variantIndex, btnEl) {
  selectedVariants[productId] = variantIndex;
  const product = KA_PRODUCTS.find(p => p.id === productId);
  const variant = product.variants[variantIndex];

  const priceEl = document.getElementById(`price-${productId}`);
  const labelEl = document.getElementById(`size-label-${productId}`);
  if (priceEl) priceEl.textContent = formatPrice(variant.price);
  if (labelEl) labelEl.textContent = `${variant.size} ${variant.type === 'decant' ? 'Decant' : 'Bottle'}`;

  btnEl.closest('.vial-selector').querySelectorAll('.vial-option').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
}

function addSelectedVariant(productId) {
  const product = KA_PRODUCTS.find(p => p.id === productId);
  if (!product || !product.inStock) return;
  Cart.add(product, selectedVariants[productId] ?? 0);
}
