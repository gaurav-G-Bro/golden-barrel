const IMAGE = {
  hero: 'images/img1.avif',
  brewery: 'images/img2.avif',
  taproom: 'images/img3.avif',
  barrels: 'images/img4.avif',
  patio: 'images/img5.avif',
  food: 'images/img6.avif',
  cheers: 'images/img7.avif',
  hops: 'images/img8.avif',
  flight: 'images/img9.avif',
  event: 'images/img10.avif',
  contact: 'images/img11.avif',
  pilsner: 'images/img12.avif',
  ipa: 'images/img13.avif',
  stout: 'images/img14.avif',
  wheat: 'images/img15.avif',
  reserve: 'images/img16.avif',
  sour: 'images/img17.avif',
  amber: 'images/img18.avif',
  cider: 'images/img19.avif'
};

const PRODUCTS = [
  {
    id: 'golden-pilsner', name: 'Golden Pilsner', type: 'lager', mood: 'crisp', price: 249, pack: '500ml Pint', abv: 4.8, ibu: 18,
    badge: 'Best Seller', image: IMAGE.pilsner, available: true, popularity: 96,
    tags: ['crisp', 'refreshing', 'light'],
    desc: 'A clean golden lager with floral hops, soft malt sweetness, and a sparkling dry finish.',
    food: 'Pairs with fries, grilled chicken, fish and chips.'
  },
  {
    id: 'hazy-horizon-ipa', name: 'Hazy Horizon IPA', type: 'ipa', mood: 'hoppy', price: 329, pack: '500ml Pint', abv: 6.9, ibu: 46,
    badge: 'House Favorite', image: IMAGE.ipa, available: true, popularity: 92,
    tags: ['hoppy', 'citrus', 'bold'],
    desc: 'Juicy tropical hops, pillowy body, mango aroma, and a balanced bitter snap.',
    food: 'Pairs with spicy wings, nachos, burgers.'
  },
  {
    id: 'oatmeal-stout', name: 'Oatmeal Stout', type: 'stout', mood: 'roasty', price: 299, pack: '500ml Pint', abv: 5.4, ibu: 28,
    badge: 'Smooth', image: IMAGE.stout, available: true, popularity: 84,
    tags: ['roasty', 'smooth', 'coffee'],
    desc: 'Silky dark stout with oats, cocoa nib notes, espresso aroma, and creamy body.',
    food: 'Pairs with chocolate desserts, steak, smoked dishes.'
  },
  {
    id: 'citrus-wheat', name: 'Citrus Wheat', type: 'wheat', mood: 'fruity', price: 279, pack: '500ml Pint', abv: 4.8, ibu: 12,
    badge: 'Fresh', image: IMAGE.wheat, available: true, popularity: 87,
    tags: ['fruity', 'light', 'smooth'],
    desc: 'Cloudy wheat ale finished with orange peel, coriander, and a bright citrus nose.',
    food: 'Pairs with salads, tacos, seafood.'
  },
  {
    id: 'barrel-reserve', name: 'Barrel Reserve', type: 'reserve', mood: 'bold', price: 499, pack: '330ml Goblet', abv: 10.2, ibu: 32,
    badge: 'Limited', image: IMAGE.reserve, available: true, popularity: 90,
    tags: ['bold', 'malty', 'limited'],
    desc: 'Slow-aged strong ale with caramel, oak, dried fruit, and a warming finish.',
    food: 'Pairs with roasted lamb, cheese boards, caramel desserts.'
  },
  {
    id: 'ruby-sour', name: 'Ruby Sour Ale', type: 'sour', mood: 'fruity', price: 349, pack: '400ml Tulip', abv: 5.1, ibu: 8,
    badge: 'Seasonal', image: IMAGE.sour, available: true, popularity: 79,
    tags: ['fruity', 'tart', 'seasonal'],
    desc: 'A bright berry-forward sour with a tart snap, subtle vanilla, and sparkling acidity.',
    food: 'Pairs with cheesecake, charcuterie, spicy starters.'
  },
  {
    id: 'amber-lantern-ale', name: 'Amber Lantern Ale', type: 'ale', mood: 'malty', price: 289, pack: '500ml Pint', abv: 5.8, ibu: 26,
    badge: 'Malty', image: IMAGE.amber, available: true, popularity: 81,
    tags: ['malty', 'balanced', 'caramel'],
    desc: 'Toasted caramel malt, restrained hops, medium body, and a rounded pub-style finish.',
    food: 'Pairs with pizzas, pies, roast vegetables.'
  },
  {
    id: 'orchard-cider', name: 'Orchard Cider', type: 'cider', mood: 'crisp', price: 259, pack: '400ml Glass', abv: 4.5, ibu: 0,
    badge: 'Gluten Free', image: IMAGE.cider, available: true, popularity: 76,
    tags: ['crisp', 'fruity', 'gluten-free'],
    desc: 'Fresh apple cider with bright acidity, gentle sweetness, and clean champagne-like bubbles.',
    food: 'Pairs with cheese, salads, pork dishes.'
  },
  {
    id: 'brewers-flight', name: 'Brewer’s Flight', type: 'flight', mood: 'tasting', price: 699, pack: '5 x 120ml', abv: 0, ibu: 0,
    badge: 'Experience', image: IMAGE.flight, available: true, popularity: 94,
    tags: ['tasting', 'shared', 'premium'],
    desc: 'Five curated tasters selected by the brewer with pairing notes and tasting card.',
    food: 'Pairs with the snack board.'
  },
  {
    id: 'pub-snack-board', name: 'Pub Snack Board', type: 'food', mood: 'shared', price: 549, pack: 'Serves 2', abv: 0, ibu: 0,
    badge: 'Food Pairing', image: IMAGE.food, available: true, popularity: 85,
    tags: ['shared', 'food', 'pairing'],
    desc: 'Artisan fries, spiced nuts, dips, breads, and seasonal bites for the table.',
    food: 'Best with pilsner, wheat, and amber ale.'
  },
  {
    id: 'private-event-deposit', name: 'Private Event Deposit', type: 'event', mood: 'premium', price: 5000, pack: 'Demo Booking', abv: 0, ibu: 0,
    badge: 'Events', image: IMAGE.event, available: true, popularity: 72,
    tags: ['events', 'booking', 'private'],
    desc: 'Demo deposit item for private parties, tastings, birthdays, and team celebrations.',
    food: 'Final menu and package are customized.'
  },
  {
    id: 'golden-gift-card', name: 'Golden Gift Card', type: 'gift', mood: 'gift', price: 1000, pack: 'Digital Demo', abv: 0, ibu: 0,
    badge: 'Gift', image: IMAGE.cheers, available: true, popularity: 70,
    tags: ['gift', 'digital', 'demo'],
    desc: 'A premium digital gift card concept for this demo website checkout flow.',
    food: 'Redeemable in demo only.'
  }
];

const INR = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const CART_KEY = 'golden-barrel-premium-cart';
const PROMO_KEY = 'golden-barrel-premium-promo';
let cart = readCart();
let promoCode = localStorage.getItem(PROMO_KEY) || '';

function readCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}
function productById(id) { return PRODUCTS.find(item => item.id === id); }
function money(value) { return INR.format(Math.max(0, Math.round(value || 0))); }
function clampQty(qty) { return Math.max(1, Math.min(99, Number(qty) || 1)); }
function escapeHtml(str = '') {
  return String(str).replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
}
function cartLineCount() { return cart.reduce((sum, item) => sum + item.qty, 0); }
function calcTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = productById(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const discountRate = promoCode.toUpperCase() === 'GOLDEN10' ? .10 : promoCode.toUpperCase() === 'FIRSTPINT' ? .15 : 0;
  const discount = subtotal * discountRate;
  const service = subtotal > 0 ? Math.max(25, subtotal * .05) : 0;
  const gst = (subtotal - discount + service) * .18;
  const total = subtotal - discount + service + gst;
  return { subtotal, discount, service, gst, total, discountRate };
}
function addToCart(id, qty = 1) {
  const product = productById(id);
  if (!product) return;
  const found = cart.find(item => item.id === id);
  if (found) found.qty = clampQty(found.qty + qty);
  else cart.push({ id, qty: clampQty(qty) });
  saveCart();
  openCart();
  toast('Added to cart', `${product.name} was added to your demo order.`);
}
function updateQty(id, qty) {
  cart = cart.map(item => item.id === id ? { ...item, qty: clampQty(qty) } : item);
  saveCart();
}
function removeFromCart(id) {
  const product = productById(id);
  cart = cart.filter(item => item.id !== id);
  saveCart();
  toast('Removed', `${product ? product.name : 'Item'} was removed from the cart.`);
}
function clearCart() {
  cart = [];
  saveCart();
  toast('Cart cleared', 'Your demo cart is empty now.');
}

function productCard(product) {
  return `
    <article class="product-card" data-animate>
      <div class="product-card-media">
        <span class="product-badge">${escapeHtml(product.badge)}</span>
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
      </div>
      <div class="product-card-body">
        <h4>${escapeHtml(product.name)}</h4>
        <div class="product-meta">
          <span class="chip">${escapeHtml(product.pack)}</span>
          ${product.abv ? `<span class="chip">${product.abv}% ABV</span>` : ''}
          ${product.ibu ? `<span class="chip">${product.ibu} IBU</span>` : ''}
        </div>
        <p>${escapeHtml(product.desc)}</p>
        <div class="product-bottom">
          <div class="price">${money(product.price)}<small>${escapeHtml(product.type)} · demo item</small></div>
          <div class="product-actions">
            <button class="btn btn-outline btn-small" data-quick-view="${product.id}">View</button>
            <button class="btn btn-primary btn-small" data-add-product="${product.id}">Add</button>
          </div>
        </div>
      </div>
    </article>`;
}

function productMini(product) {
  return `
    <article class="product-mini" data-animate>
      <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
      <h4>${escapeHtml(product.name)}</h4>
      <p>${product.abv ? `${product.abv}% ABV · ` : ''}${money(product.price)}</p>
      <button class="btn btn-outline btn-small" data-add-product="${product.id}">Add to cart</button>
    </article>`;
}

function renderFeaturedProducts() {
  const target = document.querySelector('[data-featured-products]');
  if (!target) return;
  const featured = ['golden-pilsner', 'hazy-horizon-ipa', 'oatmeal-stout', 'citrus-wheat', 'barrel-reserve']
    .map(productById).filter(Boolean);
  target.innerHTML = featured.map(productMini).join('');
  revealNow(target);
}

function renderProductGrid() {
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;
  const search = (document.querySelector('#searchInput')?.value || '').trim().toLowerCase();
  const type = document.querySelector('#styleFilter')?.value || 'all';
  const mood = document.querySelector('#moodFilter')?.value || 'all';
  const maxPrice = Number(document.querySelector('#maxPrice')?.value || 999999);
  const minAbv = Number(document.querySelector('#minAbv')?.value || 0);
  const maxAbv = Number(document.querySelector('#maxAbv')?.value || 99);
  const onlyAvailable = Boolean(document.querySelector('#onlyAvailable')?.checked);
  const sort = document.querySelector('#sortBy')?.value || 'popular';

  let list = PRODUCTS.filter(product => product.type !== 'event');
  list = list.filter(product => {
    const text = `${product.name} ${product.type} ${product.mood} ${product.desc} ${product.tags.join(' ')}`.toLowerCase();
    const matchesSearch = !search || text.includes(search);
    const matchesType = type === 'all' || product.type === type;
    const matchesMood = mood === 'all' || product.tags.includes(mood) || product.mood === mood;
    const matchesPrice = product.price <= maxPrice;
    const matchesAbv = product.abv >= minAbv && product.abv <= maxAbv;
    const matchesAvailable = !onlyAvailable || product.available;
    return matchesSearch && matchesType && matchesMood && matchesPrice && matchesAbv && matchesAvailable;
  });

  list.sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    if (sort === 'abv-high') return b.abv - a.abv;
    if (sort === 'name') return a.name.localeCompare(b.name);
    return b.popularity - a.popularity;
  });

  const count = document.querySelector('[data-results-count]');
  if (count) count.textContent = `${list.length} product${list.length === 1 ? '' : 's'} found`;

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <h3>No matching pours found</h3>
        <p>Try clearing a filter or searching for another flavor profile.</p>
        <button class="btn btn-primary" data-reset-filters>Clear filters</button>
      </div>`;
    return;
  }
  grid.innerHTML = list.map(productCard).join('');
  revealNow(grid);
}

function resetFilters() {
  ['#searchInput', '#styleFilter', '#moodFilter', '#sortBy'].forEach(selector => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (selector === '#styleFilter' || selector === '#moodFilter') el.value = 'all';
    else if (selector === '#sortBy') el.value = 'popular';
    else el.value = '';
  });
  const maxPrice = document.querySelector('#maxPrice'); if (maxPrice) maxPrice.value = 5000;
  const minAbv = document.querySelector('#minAbv'); if (minAbv) minAbv.value = 0;
  const maxAbv = document.querySelector('#maxAbv'); if (maxAbv) maxAbv.value = 12;
  const onlyAvailable = document.querySelector('#onlyAvailable'); if (onlyAvailable) onlyAvailable.checked = true;
  renderProductGrid();
}

function updateCartUI() {
  document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = cartLineCount(); });
  const list = document.querySelector('[data-cart-items]');
  if (list) {
    if (!cart.length) {
      list.innerHTML = '<div class="empty-state"><h3>Your cart is empty</h3><p>Add beers, flights, or event demos to test the checkout flow.</p></div>';
    } else {
      list.innerHTML = cart.map(item => {
        const product = productById(item.id);
        if (!product) return '';
        return `
          <div class="cart-item">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
            <div>
              <h4>${escapeHtml(product.name)}</h4>
              <p>${money(product.price)} · ${escapeHtml(product.pack)}</p>
              <div class="qty-control" aria-label="Quantity selector">
                <button type="button" data-qty-dec="${product.id}">−</button>
                <span>${item.qty}</span>
                <button type="button" data-qty-inc="${product.id}">+</button>
              </div>
            </div>
            <button class="remove-btn" data-remove-item="${product.id}" aria-label="Remove ${escapeHtml(product.name)}">Remove</button>
          </div>`;
      }).join('');
    }
  }

  const totals = calcTotals();
  document.querySelectorAll('[data-subtotal]').forEach(el => el.textContent = money(totals.subtotal));
  document.querySelectorAll('[data-discount]').forEach(el => el.textContent = `− ${money(totals.discount)}`);
  document.querySelectorAll('[data-service]').forEach(el => el.textContent = money(totals.service));
  document.querySelectorAll('[data-gst]').forEach(el => el.textContent = money(totals.gst));
  document.querySelectorAll('[data-total]').forEach(el => el.textContent = money(totals.total));
  document.querySelectorAll('[data-promo-input]').forEach(el => { if (document.activeElement !== el) el.value = promoCode; });
  document.querySelectorAll('[data-promo-message]').forEach(el => {
    el.textContent = totals.discountRate ? `${Math.round(totals.discountRate * 100)}% demo discount applied.` : 'Use GOLDEN10 or FIRSTPINT for demo discount.';
  });
  const checkoutButtons = document.querySelectorAll('[data-checkout]');
  checkoutButtons.forEach(btn => { btn.disabled = cart.length === 0; });
  renderCartPage();
}

function renderCartPage() {
  const pageList = document.querySelector('[data-cart-page-items]');
  if (!pageList) return;
  if (!cart.length) {
    pageList.innerHTML = '<div class="empty-state"><h3>No items yet</h3><p>Browse the beers page and add products to calculate totals.</p><a class="btn btn-primary" href="beers.html">Browse products</a></div>';
    return;
  }
  pageList.innerHTML = cart.map(item => {
    const product = productById(item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
        <div>
          <h4>${escapeHtml(product.name)}</h4>
          <p>${money(product.price)} x ${item.qty} = <strong>${money(product.price * item.qty)}</strong></p>
          <div class="qty-control" aria-label="Quantity selector">
            <button type="button" data-qty-dec="${product.id}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty-inc="${product.id}">+</button>
          </div>
        </div>
        <button class="remove-btn" data-remove-item="${product.id}">Remove</button>
      </div>`;
  }).join('');
}

function openCart() {
  document.querySelector('[data-cart-drawer]')?.classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeCart() {
  document.querySelector('[data-cart-drawer]')?.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

function openProductModal(id) {
  const product = productById(id);
  const modal = document.querySelector('[data-product-modal]');
  const body = document.querySelector('[data-product-modal-body]');
  if (!product || !modal || !body) return;
  body.innerHTML = `
    <div class="modal-product">
      <div class="modal-product-image"><img src="${product.image}" alt="${escapeHtml(product.name)}"></div>
      <div class="modal-product-copy">
        <span class="eyebrow">${escapeHtml(product.badge)}</span>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.desc)}</p>
        <div class="product-meta">
          <span class="chip">${escapeHtml(product.pack)}</span>
          ${product.abv ? `<span class="chip">${product.abv}% ABV</span>` : ''}
          ${product.ibu ? `<span class="chip">${product.ibu} IBU</span>` : ''}
          ${product.tags.map(tag => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p><strong>Suggested pairing:</strong> ${escapeHtml(product.food)}</p>
        <div class="product-bottom">
          <div class="price">${money(product.price)}<small>Demo menu price</small></div>
          <button class="btn btn-primary" data-add-product="${product.id}">Add to cart</button>
        </div>
      </div>
    </div>`;
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeModal(modal) {
  modal?.classList.remove('open');
  const anyOpen = document.querySelector('.cart-drawer.open, .modal.open, .lightbox.open');
  if (!anyOpen) document.body.classList.remove('no-scroll');
}
function showDemoModal(title, text) {
  const modal = document.querySelector('[data-demo-modal]');
  if (!modal) {
    alert(`${title}\n\n${text}`);
    return;
  }
  modal.querySelector('[data-demo-title]').textContent = title;
  modal.querySelector('[data-demo-text]').textContent = text;
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}
function checkoutDemo() {
  if (!cart.length) return;
  const total = calcTotals().total;
  showDemoModal(
    'Demo order only',
    `Your demo total is ${money(total)}. This website does not process real orders, alcohol delivery, reservations, or payments. It is for client presentation and UI demonstration only.`
  );
}

function toast(title, message) {
  const wrap = document.querySelector('[data-toast-wrap]');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    setTimeout(() => el.remove(), 220);
  }, 3300);
}

function setupGallery() {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;
  document.addEventListener('click', event => {
    const btn = event.target.closest('[data-lightbox-src]');
    if (!btn) return;
    const img = lightbox.querySelector('[data-lightbox-img]');
    const caption = lightbox.querySelector('[data-lightbox-caption]');
    img.src = btn.dataset.lightboxSrc;
    img.alt = btn.dataset.lightboxCaption || 'Gallery image';
    caption.textContent = btn.dataset.lightboxCaption || '';
    lightbox.classList.add('open');
    document.body.classList.add('no-scroll');
  });
}

function setupForms() {
  document.querySelectorAll('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = 'Submitted for demo only — no real booking/order will be sent.';
      toast('Demo form submitted', 'This is only a front-end demo. No request was sent.');
      form.reset();
    });
  });

  document.querySelectorAll('[data-newsletter-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      toast('Newsletter demo', 'Thanks! This newsletter signup is demo-only.');
      form.reset();
    });
  });
}

function setupAccordions() {
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-accordion-trigger]');
    if (!trigger) return;
    const item = trigger.closest('.accordion-item');
    item?.classList.toggle('open');
  });
}

function setupReviewSlider() {
  const slider = document.querySelector('[data-review-slider]');
  if (!slider) return;

  const track = slider.querySelector('[data-review-track]');
  const cards = Array.from(track?.querySelectorAll('.review-card') || []);
  const prev = slider.querySelector('[data-review-prev]');
  const next = slider.querySelector('[data-review-next]');
  if (!track || !cards.length || !prev || !next) return;

  let index = 0;
  cards.forEach(card => card.classList.add('visible'));

  const cardsPerView = () => {
    if (window.matchMedia('(max-width: 760px)').matches) return 1;
    if (window.matchMedia('(max-width: 1060px)').matches) return 2;
    return 3;
  };

  const update = () => {
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const maxIndex = Math.max(0, cards.length - cardsPerView());

    index = Math.max(0, Math.min(index, maxIndex));
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;

    prev.disabled = index === 0;
    next.disabled = index >= maxIndex;
    prev.setAttribute('aria-disabled', String(prev.disabled));
    next.setAttribute('aria-disabled', String(next.disabled));
  };

  prev.addEventListener('click', () => {
    index -= 1;
    update();
  });

  next.addEventListener('click', () => {
    index += 1;
    update();
  });

  window.addEventListener('resize', update);
  update();
}

function revealNow(root = document) {
  root.querySelectorAll('[data-animate]').forEach((el, index) => {
    setTimeout(() => el.classList.add('visible'), index * 40);
  });
}
function setupReveal() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  elements.forEach(el => observer.observe(el));
}

function applyPageImages() {
  document.querySelectorAll('[data-bg-image]').forEach(el => {
    const key = el.dataset.bgImage;
    if (IMAGE[key]) el.style.setProperty('--page-image', `url('${IMAGE[key]}')`);
  });
  const hero = document.querySelector('[data-hero-bg]');
  if (hero) hero.style.setProperty('--hero-image', `url('${IMAGE.hero}')`);
  document.querySelectorAll('[data-img-key]').forEach(img => {
    const key = img.dataset.imgKey;
    if (IMAGE[key]) img.src = IMAGE[key];
  });
  document.querySelectorAll('[data-lightbox-key]').forEach(btn => {
    const key = btn.dataset.lightboxKey;
    if (IMAGE[key]) btn.dataset.lightboxSrc = IMAGE[key];
  });
}

function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

function setupGlobalClicks() {
  document.addEventListener('click', event => {
    const menuBtn = event.target.closest('[data-menu-toggle]');
    if (menuBtn) {
      document.querySelector('[data-nav-links]')?.classList.toggle('open');
      return;
    }
    const cartOpen = event.target.closest('[data-cart-open]');
    if (cartOpen) { event.preventDefault(); openCart(); return; }
    const cartClose = event.target.closest('[data-cart-close]');
    if (cartClose) { event.preventDefault(); closeCart(); return; }
    const add = event.target.closest('[data-add-product]');
    if (add) { event.preventDefault(); addToCart(add.dataset.addProduct); return; }
    const quick = event.target.closest('[data-quick-view]');
    if (quick) { event.preventDefault(); openProductModal(quick.dataset.quickView); return; }
    const inc = event.target.closest('[data-qty-inc]');
    if (inc) {
      const item = cart.find(i => i.id === inc.dataset.qtyInc);
      if (item) updateQty(item.id, item.qty + 1);
      return;
    }
    const dec = event.target.closest('[data-qty-dec]');
    if (dec) {
      const item = cart.find(i => i.id === dec.dataset.qtyDec);
      if (item && item.qty > 1) updateQty(item.id, item.qty - 1);
      else if (item) removeFromCart(item.id);
      return;
    }
    const rem = event.target.closest('[data-remove-item]');
    if (rem) { removeFromCart(rem.dataset.removeItem); return; }
    const reset = event.target.closest('[data-reset-filters]');
    if (reset) { event.preventDefault(); resetFilters(); return; }
    const checkout = event.target.closest('[data-checkout]');
    if (checkout) { event.preventDefault(); checkoutDemo(); return; }
    const clear = event.target.closest('[data-clear-cart]');
    if (clear) { event.preventDefault(); clearCart(); return; }
    const demoAction = event.target.closest('[data-demo-action]');
    if (demoAction) {
      event.preventDefault();
      showDemoModal('Demo purpose only', demoAction.dataset.demoAction || 'This action is only a front-end demo.');
      return;
    }
    const modalClose = event.target.closest('[data-modal-close]');
    if (modalClose) { closeModal(modalClose.closest('.modal, .lightbox')); return; }
    const modalBackdrop = event.target.matches('.modal-backdrop, .lightbox-backdrop');
    if (modalBackdrop) { closeModal(event.target.closest('.modal, .lightbox')); return; }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeCart();
      document.querySelectorAll('.modal.open, .lightbox.open').forEach(closeModal);
    }
  });
}

function setupFilters() {
  const controls = document.querySelectorAll('#searchInput, #styleFilter, #moodFilter, #maxPrice, #minAbv, #maxAbv, #sortBy, #onlyAvailable');
  controls.forEach(control => control.addEventListener('input', renderProductGrid));
  controls.forEach(control => control.addEventListener('change', renderProductGrid));
}

function setupPromo() {
  document.addEventListener('click', event => {
    const btn = event.target.closest('[data-apply-promo]');
    if (!btn) return;
    const scope = btn.closest('.cart-summary, .cart-page-card') || document;
    const input = scope.querySelector('[data-promo-input]') || document.querySelector('[data-promo-input]');
    promoCode = (input?.value || '').trim().toUpperCase();
    if (promoCode && !['GOLDEN10', 'FIRSTPINT'].includes(promoCode)) {
      toast('Invalid demo code', 'Try GOLDEN10 or FIRSTPINT.');
      promoCode = '';
    } else if (promoCode) {
      toast('Promo applied', `${promoCode} discount is active.`);
    }
    localStorage.setItem(PROMO_KEY, promoCode);
    updateCartUI();
  });
}

function init() {
  applyPageImages();
  setActiveNav();
  setupGlobalClicks();
  setupPromo();
  setupFilters();
  setupGallery();
  setupForms();
  setupAccordions();
  setupReviewSlider();
  renderFeaturedProducts();
  renderProductGrid();
  updateCartUI();
  setupReveal();
}

document.addEventListener('DOMContentLoaded', init);
