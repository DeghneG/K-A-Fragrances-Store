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
    if (e.key === 'Escape') { closeSearch(); closePrivacyModal(); closeShippingModal(); }
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

/* ── Privacy Policy Modal ── */
(function() {
  const modal = document.createElement('div');
  modal.id = 'privacy-modal';
  modal.className = 'privacy-modal';
  modal.innerHTML = `
    <div class="privacy-modal-card">
      <div class="privacy-modal-header">
        <div>
          <span class="label" style="display:block;margin-bottom:.35rem;">Legal</span>
          <h2 class="privacy-modal-title">Privacy Policy</h2>
        </div>
        <button class="privacy-modal-close" onclick="closePrivacyModal()" title="Close"><i class="fas fa-times"></i></button>
      </div>
      <div class="privacy-modal-body">
        <div class="pm-section">
          <p>Welcome to K&A Fragrances! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and use our services.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">01</span> Information We Collect</h3>
          <ul class="pm-list">
            <li><strong>Personal Information</strong>When you create an account or make a purchase, we collect your name, email address, phone number, and shipping address.</li>
            <li><strong>Payment Information</strong>We collect payment details, such as credit card information, to process transactions securely.</li>
            <li><strong>Usage Data</strong>We track your interactions with our website, including pages visited and items viewed, to improve your experience.</li>
            <li><strong>Cookies and Similar Technologies</strong>We use cookies to remember your preferences and provide a personalised experience.</li>
          </ul>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">02</span> How We Use Your Information</h3>
          <ul class="pm-list">
            <li><strong>To Process Transactions</strong>We use your information to process orders and payments.</li>
            <li><strong>To Communicate with You</strong>We may send you emails about your orders, promotions, and updates.</li>
            <li><strong>To Improve Our Services</strong>We analyse data to enhance our website and services.</li>
            <li><strong>To Comply with Legal Obligations</strong>We may share information if required by law or to protect our rights.</li>
          </ul>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">03</span> Sharing Your Information</h3>
          <p>We do not sell your personal information to third parties. We may share your information with trusted partners to fulfil orders, provide services, or comply with legal obligations.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">04</span> Security Measures</h3>
          <p>We take reasonable steps to protect your information from unauthorised access, use, or disclosure. Your data is encrypted and stored securely.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">05</span> Your Rights</h3>
          <p>You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">06</span> Changes to This Policy</h3>
          <p>We may update this policy from time to time. We will notify you of any significant changes by updating this page.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">07</span> Contact Us</h3>
          <p>If you have any questions about this policy or your personal information, please contact us at <a href="mailto:kafragrances.store@gmail.com" style="color:var(--amber-400);text-decoration:underline;text-underline-offset:3px;">kafragrances.store@gmail.com</a>.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <div class="pm-badge"><i class="fas fa-shield-halved"></i> Australian Compliance</div>
          <h3><span class="pm-num">08</span> Compliance with Legislation</h3>
          <p>K&A Fragrances complies with the <strong style="color:var(--text-primary)">Privacy Act 1988</strong> and the <strong style="color:var(--text-primary)">Australian Privacy Principles (APPs)</strong>. These principles outline how we handle, use, and manage personal information.</p>
        </div>
      </div>
      <div class="privacy-modal-footer">
        <span class="pm-date">Last updated: June 2026</span>
        <button class="btn btn-ghost" onclick="closePrivacyModal()" style="padding:.55rem 1.25rem;font-size:.75rem;">Close</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closePrivacyModal(); });
})();

/* ── Shipping Policy Modal ── */
(function() {
  const modal = document.createElement('div');
  modal.id = 'shipping-modal';
  modal.className = 'privacy-modal';
  modal.innerHTML = `
    <div class="privacy-modal-card">
      <div class="privacy-modal-header">
        <div>
          <span class="label" style="display:block;margin-bottom:.35rem;">Delivery</span>
          <h2 class="privacy-modal-title">Shipping Policy</h2>
        </div>
        <button class="privacy-modal-close" onclick="closeShippingModal()" title="Close"><i class="fas fa-times"></i></button>
      </div>
      <div class="privacy-modal-body">
        <div class="pm-section">
          <p>Currently, K&A Fragrances only sells and ships within <strong style="color:var(--text-primary)">Australia</strong>. We are unable to accept international orders at this time.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">01</span> Dispatch Times</h3>
          <p>All orders are shipped from K&A Fragrances within <strong style="color:var(--text-primary)">2–3 business days</strong> from date of order (Monday to Friday) via Australia Post. During peak periods (e.g. Sales, Christmas), orders may take longer to be dispatched and delivered. Please allow for additional time during these periods.</p>
          <p>Every effort will be made to contact you if any delay is expected with dispatching your order.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">02</span> Delivery Times</h3>
          <p>The delivery process depends entirely on Australia Post and the shipping destination. K&A Fragrances has no control or influence over the Australia Post delivery process and speed, and as such we cannot guarantee delivery time.</p>
          <p>If more than <strong style="color:var(--text-primary)">15 business days</strong> have passed since you placed your order and you have provided the correct shipping address, please contact us at <a href="mailto:kafragrances.store@gmail.com" style="color:var(--amber-400);text-decoration:underline;text-underline-offset:3px;">kafragrances.store@gmail.com</a> and we will investigate the delay with Australia Post on your behalf.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">03</span> Incorrect Address</h3>
          <p>Always check your order to ensure your postal address is correct. If you have provided an incorrect address, please let us know as soon as possible — <strong style="color:var(--text-primary)">before your order has been shipped</strong>. We cannot amend shipped orders.</p>
          <p>If your order is returned to us due to an incorrect address, you as the buyer will be responsible for any additional postage costs to resend the parcel. If you decide not to have the parcel resent, a <strong style="color:var(--text-primary)">restocking fee of 10%</strong> of the total order value, plus shipping costs, will apply.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">04</span> Postage &amp; Shipping Fees</h3>
          <p>Postage and shipping fees will be displayed at checkout and may be subject to change from time to time.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <h3><span class="pm-num">05</span> Order Confirmation</h3>
          <p>Immediately after successfully placing your order, you will receive a confirmation email with your order details. Once your order has been dispatched you will receive a second email advising you of this.</p>
          <p style="color:var(--amber-400);font-size:0.82rem;">Please check your Spam/Junk folder to ensure you are not missing notifications from us.</p>
        </div>
        <div class="pm-divider"></div>
        <div class="pm-section">
          <div class="pm-badge"><i class="fas fa-bolt"></i> Express Post</div>
          <h3><span class="pm-num">06</span> Australia Express Post</h3>
          <p>K&A Fragrances charges <strong style="color:var(--text-primary)">$14.95</strong> for Australia Post Express Post. Please note that certain parts of Australia do not have access to the Express Post service. It is the purchaser's responsibility to confirm their address is eligible.</p>
          <p>No refunds will be issued for choosing the Express Post option for an ineligible address, and K&A Fragrances is not responsible for any resulting delivery delays.</p>
        </div>
      </div>
      <div class="privacy-modal-footer">
        <span class="pm-date">Australia Post · Domestic Shipping Only</span>
        <button class="btn btn-ghost" onclick="closeShippingModal()" style="padding:.55rem 1.25rem;font-size:.75rem;">Close</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeShippingModal(); });
})();

function openShippingModal() {
  document.getElementById('shipping-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeShippingModal() {
  document.getElementById('shipping-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function openPrivacyModal() {
  document.getElementById('privacy-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePrivacyModal() {
  document.getElementById('privacy-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

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
  const badge = '';
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
