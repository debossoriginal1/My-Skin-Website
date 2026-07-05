// Products Database (15 Products with prices matching the sheet)
const products = [
  {
    id: 1,
    name: "Face Soap",
    subtitle: "Cleanse & Clarify",
    price: 90.00,
    category: "face",
    packageType: "soap",
    desc: "A gentle daily facial bar formulated with Unique Diamond Dust and botanical active ingredients to brighten and clarify the complexion.",
    ingredients: "Water, Sodium Palmate, Glycerin, Unique Diamond Powder, Coconut Oil, Aloe Barbadensis Extract, Fragrance, Vitamin E.",
    usage: "Lather soap in hands, massage gently onto damp face for 30-60 seconds. Rinse thoroughly with lukewarm water. Use morning and night."
  },
  {
    id: 2,
    name: "Face Cream",
    subtitle: "Hydrate & Illuminate",
    price: 180.00,
    category: "face",
    packageType: "jar",
    desc: "A velvety, fast-absorbing facial cream that delivers deep moisture, reinforces skin barrier lipids, and leaves a premium satin gold sheen.",
    ingredients: "Raw Northern Shea Butter, Squalane, Unique Diamond Powder, Ceramide NP, Camellia Sinensis Leaf Extract, Niacinamide.",
    usage: "Apply a pea-sized amount onto cleansed face and neck in upward sweeping motions. Best used after serums."
  },
  {
    id: 3,
    name: "Face Cleanser",
    subtitle: "Purify & Refresh",
    price: 165.00,
    category: "face",
    packageType: "pump",
    desc: "An organic gel cleanser that sweeps away dirt, oil, and micro-impurities while respecting the natural moisture barrier.",
    ingredients: "Water, Sodium Lauroyl Methyl Isethionate, Glycerin, Unique Diamond Dust, Moringa Leaf Extract, Citric Acid, Allantoin.",
    usage: "Pump 1-2 times into wet palms, lather and massage onto face. Rinse and pat dry. Use daily morning and night."
  },
  {
    id: 4,
    name: "Face Scrub",
    subtitle: "Polish & Renew",
    price: 150.00,
    category: "face",
    packageType: "jar",
    desc: "A refining exfoliating scrub with micro-polishing grains to gently remove dry cells and expose luminous skin texture.",
    ingredients: "Water, Fine Walnut Shell Powder, Unique Diamond Powder, Jojoba Esters, Glycerin, Chamomile Extract.",
    usage: "Gently massage a small amount onto damp skin in circular motions. Avoid eye area. Rinse off. Use 2-3 times per week."
  },
  {
    id: 5,
    name: "Face Serum",
    subtitle: "Rejuvenate & Brighten",
    price: 200.00,
    category: "face",
    packageType: "bottle",
    desc: "Our high-potency anti-aging serum, featuring high-concentration Unique Diamond Peptide Complex to restore skin bounce and cellular radiance.",
    ingredients: "Hyaluronic Acid, Acetyl Sh-Pentapeptide-35 (Unique Diamond Peptide), Niacinamide (5%), Panthenol, Glycyrrhiza Glabra Root Extract.",
    usage: "Press 3-4 drops gently into clean, damp face and neck. Let absorb for 60 seconds before moisturizing."
  },
  {
    id: 6,
    name: "Whitening Body Lotion",
    subtitle: "Even Tone & Deep Moisture",
    price: 250.00,
    category: "body",
    packageType: "pump",
    desc: "A powerful skin-evening body milk formulated to fade hyperpigmentation, smooth rough patches, and hydrate the skin.",
    ingredients: "Water, Northern Shea Butter, Alpha Arbutin, Unique Diamond Powder, Licorice Extract, Vitamin E, Fragrance.",
    usage: "Smooth generously all over the body daily, especially after bathing or showering. Focus on dry areas."
  },
  {
    id: 7,
    name: "Whitening Shower Gel",
    subtitle: "Cleanse & Glow",
    price: 230.00,
    category: "body",
    packageType: "pump",
    desc: "A luxurious lathering wash that clarifies, conditions, and releases a gorgeous, subtle scent, leaving skin silky and illuminated.",
    ingredients: "Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Kojic Acid, Unique Diamond Dust, Moringa Oil, Glycol Distearate.",
    usage: "Apply to wet body using a loofah or washcloth, work into a rich lather, and massage. Rinse thoroughly."
  },
  {
    id: 8,
    name: "Super Whitening Body Soap",
    subtitle: "Maximum Tone Clarification",
    price: 350.00,
    category: "body",
    packageType: "soap",
    desc: "A maximum strength soap bar engineered to actively clear stubborn spots, correct hyperpigmentation, and unify body complexion.",
    ingredients: "Water, Sodium Cocoate, Kojic Acid Dipalmitate, Unique Diamond Powder, Glutathione, Papaya Extract, Raw Honey.",
    usage: "Lather soap and apply to the body. Allow to sit on skin for 1-2 minutes before rinsing. Use once or twice daily."
  },
  {
    id: 9,
    name: "Body Scrub",
    subtitle: "Exfoliate & Smooth",
    price: 200.00,
    category: "body",
    packageType: "jar",
    desc: "A sensory body exfoliant that sweeps away dead cells, boosts micro-circulation, and primes skin to absorb lotions.",
    ingredients: "Fine Cane Sugar, Sea Salt, Unique Diamond Powder, Sweet Almond Oil, Northern Shea Butter, Vitamin E.",
    usage: "Massage in circular motions onto wet skin during your bath or shower. Rinse thoroughly. Use 2 times a week."
  },
  {
    id: 10,
    name: "Glow Oil",
    subtitle: "Nourish & Shimmer",
    price: 150.00,
    category: "body",
    packageType: "bottle",
    desc: "A luxurious lightweight body oil that absorbs instantly, sealing in hydration and leaving a soft, glistening golden sheen.",
    ingredients: "Caprylic/Capric Triglyceride, Jojoba Oil, Unique Diamond Dust, Golden Mica, Argan Oil, Fragrance.",
    usage: "Shake well to disperse micas. Massage a few drops onto damp or dry skin for an instant, healthy glow."
  },
  {
    id: 11,
    name: "Body Butter",
    subtitle: "Nourish & Cocoon",
    price: 200.00,
    category: "body",
    packageType: "jar",
    desc: "An ultra-rich, decadent body butter crafted with organic Northern Shea and Cocoa Butter to deeply nourish dry, parched skin.",
    ingredients: "Butyrospermum Parkii (Shea Butter), Theobroma Cacao (Cocoa) Butter, Unique Diamond Powder, Coconut Oil, Almond Oil.",
    usage: "Warm a scoop between palms and press into skin. Highly recommended right after showering to lock in moisture."
  },
  {
    id: 12,
    name: "Sunscreen",
    subtitle: "Protect & Shield",
    price: 400.00,
    category: "face",
    packageType: "tube",
    desc: "Broad-spectrum SPF 50 sunscreen to shield the skin from UV damage, prevent sunspots, and preserve cellular radiance.",
    ingredients: "Water, Zinc Oxide, Titanium Dioxide, Unique Diamond Powder, Moringa Extract, Green Tea Extract, Glycerin.",
    usage: "Apply generously to face and exposed skin 15 minutes before sun exposure. Reapply every 2 hours if outdoors."
  },
  {
    id: 13,
    name: "Acne Face Soap",
    subtitle: "Clear & Purify",
    price: 150.00,
    category: "face",
    packageType: "soap",
    desc: "A specialized facial soap infused with active botanical extracts to regulate sebum, clear breakouts, and heal blemishes.",
    ingredients: "Water, Sodium Cocoate, Salicylic Acid, Tea Tree Oil, Unique Diamond Powder, Sulfur, Activated Charcoal.",
    usage: "Lather and massage onto acne-prone areas. Let sit for 30 seconds, then rinse with cool water. Use twice daily."
  },
  {
    id: 14,
    name: "Knuckle Oil",
    subtitle: "Targeted Brightening",
    price: 150.00,
    category: "targeted",
    packageType: "bottle",
    desc: "A highly targeted corrective oil formulated to lighten stubborn dark knuckles, elbows, knees, and toes.",
    ingredients: "Rosehip Seed Oil, Licorice Extract, Alpha Arbutin, Unique Diamond Powder, Vitamin C, Lemon Peel Oil.",
    usage: "Apply 1-2 drops directly onto dark knuckles or affected joints twice daily. Massage gently until absorbed."
  },
  {
    id: 15,
    name: "Stretch Marks Oil",
    subtitle: "Repair & Smooth",
    price: 170.00,
    category: "targeted",
    packageType: "bottle",
    desc: "A firming treatment oil designed to fade existing stretch marks and increase skin elasticity to prevent future ones.",
    ingredients: "Gotu Kola Extract, Sweet Almond Oil, Rosehip Oil, Unique Diamond Peptide Complex, Tocopherol, Centella Asiatica.",
    usage: "Massage generously onto stretch marks or target body parts twice daily."
  }
];

// Cart State
let cart = [];

// DOM Elements
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartItemsList = document.getElementById('cart-items-list');
const cartBadgeCount = document.getElementById('cart-badge-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscountRow = document.getElementById('cart-discount-row');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Booking Modal
const bookConsultationBtn = document.getElementById('book-consultation-btn');
const consultationModal = document.getElementById('consultation-modal');
const consultationClose = document.getElementById('consultation-close');
const bookingForm = document.getElementById('booking-form');
const bookingModalBody = document.getElementById('booking-modal-body');

// Checkout form modal
const checkoutModalForm = document.getElementById('checkout-modal-form');
const checkoutModalBody = document.getElementById('checkout-modal-body');

// Quick View Modal
const quickviewModal = document.getElementById('quickview-modal');
const quickviewClose = document.getElementById('quickview-close');
const quickviewModalBody = document.getElementById('quickview-modal-body');

// Before/After Slider
const sliderWrapper = document.getElementById('slider-wrapper');
const sliderAfterContainer = document.getElementById('slider-after-container');
const sliderHandle = document.getElementById('slider-handle');

// Quiz variables
const quizContainer = document.getElementById('quiz-container');
const quizSteps = document.querySelectorAll('.quiz-step');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const quizPrevBtn = document.getElementById('quiz-prev-btn');
const quizNextBtn = document.getElementById('quiz-next-btn');
const quizResultNode = document.getElementById('quiz-result-node');

let currentQuizStep = 1;
const quizAnswers = {
  1: null, // skinType
  2: null, // skinConcern
  3: null  // environment
};

/* --- Dynamic Packaging HTML Generators --- */
function getPackageHTML(type, name) {
  const brandInitials = "UD";
  if (type === 'bottle') {
    return `
      <div class="package-wrapper">
        <div class="bottle-tip"></div>
        <div class="bottle-neck"></div>
        <div class="bottle-body">
          <div class="bottle-pipette"></div>
          <div class="bottle-liquid"></div>
          <div class="package-label">
            <div class="package-label-diamond"></div>
            <span class="package-label-logo">${brandInitials}</span>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'jar') {
    return `
      <div class="package-wrapper">
        <div class="jar-lid"></div>
        <div class="jar-body">
          <div class="package-label">
            <div class="package-label-diamond"></div>
            <span class="package-label-logo">${brandInitials}</span>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'pump') {
    return `
      <div class="package-wrapper">
        <div class="pump-head">
          <div class="pump-nozzle"></div>
        </div>
        <div class="pump-collar"></div>
        <div class="pump-body">
          <div class="pump-straw"></div>
          <div class="package-label">
            <div class="package-label-diamond"></div>
            <span class="package-label-logo">${brandInitials}</span>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'soap') {
    const isSuper = name.toLowerCase().includes('super');
    return `
      <div class="package-wrapper">
        <div class="soap-bar ${isSuper ? 'super-soap' : ''}">
          <div class="soap-band">
            <div class="package-label-diamond" style="margin-bottom:2px;"></div>
            <span class="soap-band-logo">${brandInitials}</span>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'tube') {
    return `
      <div class="package-wrapper">
        <div class="tube-crimp"></div>
        <div class="tube-body">
          <div class="tube-body-inner">
            <div class="package-label">
              <div class="package-label-diamond"></div>
              <span class="package-label-logo">${brandInitials}</span>
            </div>
          </div>
        </div>
        <div class="tube-cap"></div>
      </div>
    `;
  }
  return '';
}

function getMiniPackageHTML(type, name) {
  return `
    <div style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; transform: scale(0.6); background: linear-gradient(135deg, #fefbfc 0%, #f6ebe9 100%); border-radius: 4px; border: 1px solid var(--border-color); overflow: hidden; margin-right: 5px;">
      ${getPackageHTML(type, name)}
    </div>
  `;
}

/* --- Render Product Catalog --- */
const productGrid = document.getElementById('product-grid');
let activeFilter = 'all';

function renderCatalog() {
  productGrid.innerHTML = '';
  
  const filteredProducts = products.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });
  
  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card glass-panel';
    card.setAttribute('data-id', product.id);
    
    // Select Step prefix dynamically based on category
    let stepPrefix = "Step";
    if (product.category === 'face') stepPrefix = "Face Care";
    else if (product.category === 'body') stepPrefix = "Body Care";
    else if (product.category === 'targeted') stepPrefix = "Targeted";
    
    card.innerHTML = `
      <span class="product-badge">${stepPrefix}</span>
      <div class="product-image-container">
        ${getPackageHTML(product.packageType, product.name)}
      </div>
      <div class="product-card-details">
        <h3 class="product-card-title">${product.name}</h3>
        <span class="product-card-subtitle">${product.subtitle}</span>
        <p>${product.desc}</p>
        <div class="product-card-price-row">
          <span class="product-card-price">GH₵ ${product.price.toFixed(2)}</span>
          <div class="product-actions">
            <button class="btn-icon-only quickview-btn" data-id="${product.id}" aria-label="Quick View">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
            <button class="btn-icon-only add-to-cart-btn" data-id="${product.id}" aria-label="Add to Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Category filter click handler
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    renderCatalog();
  });
});

/* --- Cart Functionality --- */
function updateCartUI() {
  cartItemsList.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="cart-empty-msg">Your skincare bag is currently empty.</div>';
    cartBadgeCount.textContent = '0';
    cartSubtotal.textContent = 'GH₵ 0.00';
    cartDiscountRow.style.display = 'none';
    cartTotal.textContent = 'GH₵ 0.00';
    checkoutBtn.disabled = true;
    return;
  }
  
  checkoutBtn.disabled = false;
  let totalItems = 0;
  let subtotalVal = 0;
  
  cart.forEach(item => {
    totalItems += item.quantity;
    subtotalVal += item.product.price * item.quantity;
    
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      ${getMiniPackageHTML(item.product.packageType, item.product.name)}
      <div class="cart-item-info">
        <div>
          <h4 class="cart-item-title">${item.product.name}</h4>
          <span class="cart-item-price">GH₵ ${item.product.price.toFixed(2)}</span>
        </div>
        <div class="cart-item-qty-row">
          <div class="cart-item-qty">
            <button class="qty-btn dec-qty" data-id="${item.product.id}">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn inc-qty" data-id="${item.product.id}">+</button>
          </div>
          <button class="cart-item-remove" data-id="${item.product.id}">Remove</button>
        </div>
      </div>
    `;
    cartItemsList.appendChild(itemEl);
  });
  
  cartBadgeCount.textContent = totalItems;
  cartSubtotal.textContent = `GH₵ ${subtotalVal.toFixed(2)}`;
  
  // Apply a 15% discount if they buy a 3-step routine (Face Soap/Cleanser, Face Serum, Face Cream)
  const hasCleanser = cart.some(item => item.product.id === 1 || item.product.id === 3);
  const hasSerum = cart.some(item => item.product.id === 5);
  const hasCream = cart.some(item => item.product.id === 2);
  
  let discountVal = 0;
  if (hasCleanser && hasSerum && hasCream) {
    discountVal = subtotalVal * 0.15;
    cartDiscountRow.style.display = 'flex';
    cartDiscount.textContent = `-GH₵ ${discountVal.toFixed(2)}`;
  } else {
    cartDiscountRow.style.display = 'none';
  }
  
  const totalVal = subtotalVal - discountVal;
  cartTotal.textContent = `GH₵ ${totalVal.toFixed(2)}`;
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;
  
  const existingItem = cart.find(item => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ product, quantity: qty });
  }
  
  updateCartUI();
  openCart();
}

function openCart() {
  cartDrawer.classList.add('active');
  cartDrawerOverlay.classList.add('active');
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartDrawerOverlay.classList.remove('active');
}

// Cart Event Listeners
cartToggleBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartDrawerOverlay.addEventListener('click', closeCart);

cartItemsList.addEventListener('click', (e) => {
  const target = e.target;
  const productId = parseInt(target.getAttribute('data-id'));
  
  if (target.classList.contains('inc-qty')) {
    const item = cart.find(item => item.product.id === productId);
    if (item) {
      item.quantity += 1;
      updateCartUI();
    }
  } else if (target.classList.contains('dec-qty')) {
    const item = cart.find(item => item.product.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart = cart.filter(item => item.product.id !== productId);
      }
      updateCartUI();
    }
  } else if (target.classList.contains('cart-item-remove')) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
  }
});

// Add to Cart Catalog Trigger
document.addEventListener('click', (e) => {
  const addToCartBtn = e.target.closest('.add-to-cart-btn');
  if (addToCartBtn) {
    const id = addToCartBtn.getAttribute('data-id');
    addToCart(id);
  }
});

// Checkout action
checkoutBtn.addEventListener('click', () => {
  openCheckoutWizard();
});


/* --- Quick View Modal --- */
function openQuickview(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;
  
  quickviewModalBody.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-img-col">
        <div class="quickview-img-placeholder" style="padding: 2rem;">
          ${getPackageHTML(product.packageType, product.name)}
        </div>
      </div>
      <div class="quickview-info-col">
        <span class="quickview-tag">${product.tag || 'Unique Diamond Glow'}</span>
        <h2 class="quickview-title">${product.name}</h2>
        <span class="quickview-price">GH₵ ${product.price.toFixed(2)}</span>
        <p class="quickview-desc">${product.desc}</p>
        
        <div class="quickview-tabs">
          <button class="quickview-tab-btn active" data-tab="ingredients">Ingredients</button>
          <button class="quickview-tab-btn" data-tab="usage">How to Use</button>
        </div>
        
        <div class="quickview-tab-content" id="quickview-tab-content">
          ${product.ingredients}
        </div>
        
        <button class="btn btn-primary" id="quickview-add-btn" data-id="${product.id}" style="width: 100%; margin-top: auto;">Add to Bag</button>
      </div>
    </div>
  `;
  
  quickviewModal.classList.add('active');
  
  const tabs = quickviewModalBody.querySelectorAll('.quickview-tab-btn');
  const tabContent = quickviewModalBody.querySelector('#quickview-tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.getAttribute('data-tab');
      if (tabName === 'ingredients') {
        tabContent.textContent = product.ingredients;
      } else if (tabName === 'usage') {
        tabContent.textContent = product.usage;
      }
    });
  });
  
  const quickviewAddBtn = quickviewModalBody.querySelector('#quickview-add-btn');
  quickviewAddBtn.addEventListener('click', () => {
    addToCart(product.id);
    quickviewModal.classList.remove('active');
  });
}

document.addEventListener('click', (e) => {
  const quickviewBtn = e.target.closest('.quickview-btn');
  if (quickviewBtn) {
    const id = quickviewBtn.getAttribute('data-id');
    openQuickview(id);
  }
});

quickviewClose.addEventListener('click', () => quickviewModal.classList.remove('active'));
quickviewModal.addEventListener('click', (e) => {
  if (e.target === quickviewModal) quickviewModal.classList.remove('active');
});


/* --- Before / After Slider --- */
if (sliderWrapper && sliderHandle && sliderAfterContainer) {
  let isDragging = false;
  
  const getXPosition = (e) => {
    const rect = sliderWrapper.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    return x;
  };
  
  const updateSlider = (x) => {
    const rect = sliderWrapper.getBoundingClientRect();
    const percentage = (x / rect.width) * 100;
    sliderHandle.style.left = `${percentage}%`;
    sliderAfterContainer.style.width = `${percentage}%`;
  };
  
  const startDrag = (e) => {
    isDragging = true;
    e.preventDefault();
  };
  
  const stopDrag = () => {
    isDragging = false;
  };
  
  const drag = (e) => {
    if (!isDragging) return;
    const x = getXPosition(e);
    updateSlider(x);
  };
  
  sliderHandle.addEventListener('mousedown', startDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mousemove', drag);
  
  sliderHandle.addEventListener('touchstart', startDrag);
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('touchmove', drag);
  
  updateSlider(sliderWrapper.getBoundingClientRect().width / 2 || 350);
  
  window.addEventListener('resize', () => {
    const handlePos = parseFloat(sliderHandle.style.left) / 100;
    const width = sliderWrapper.getBoundingClientRect().width;
    updateSlider(handlePos * width);
  });
}


/* --- Skincare Quiz Logic --- */
function selectQuizOption(optionNode) {
  const stepContainer = optionNode.closest('.quiz-step');
  const step = parseInt(stepContainer.getAttribute('data-step'));
  const value = optionNode.getAttribute('data-value');
  
  stepContainer.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
  optionNode.classList.add('selected');
  
  quizAnswers[step] = value;
  quizNextBtn.removeAttribute('disabled');
}

document.querySelectorAll('.quiz-option').forEach(option => {
  option.addEventListener('click', () => selectQuizOption(option));
});

function updateQuizUI() {
  quizSteps.forEach(stepNode => {
    const stepIndex = parseInt(stepNode.getAttribute('data-step'));
    if (stepIndex === currentQuizStep) {
      stepNode.classList.add('active');
    } else {
      stepNode.classList.remove('active');
    }
  });
  
  const progressPercent = ((currentQuizStep - 1) / 3) * 100;
  quizProgressBar.style.width = `${progressPercent}%`;
  
  if (currentQuizStep === 1) {
    quizPrevBtn.style.visibility = 'hidden';
  } else {
    quizPrevBtn.style.visibility = 'visible';
  }
  
  if (currentQuizStep === 4) {
    document.getElementById('quiz-nav').style.display = 'none';
    renderQuizResults();
  } else {
    document.getElementById('quiz-nav').style.display = 'flex';
    if (quizAnswers[currentQuizStep]) {
      quizNextBtn.removeAttribute('disabled');
    } else {
      quizNextBtn.setAttribute('disabled', 'true');
    }
    
    if (currentQuizStep === 3) {
      quizNextBtn.textContent = "See Routine";
    } else {
      quizNextBtn.textContent = "Next Step";
    }
  }
}

function renderQuizResults() {
  const skinType = quizAnswers[1];
  const concern = quizAnswers[2];
  const env = quizAnswers[3];
  
  let routineName = "Luminous Skin Ritual";
  let routineDesc = "A comprehensive 3-step cellular repair system designed to refresh, feed, and shield skin cells.";
  let highlightText = "Perfect for balanced and combination skin types.";
  
  // Select products for recommendation
  let cleanserItem = products.find(p => p.id === 3); // Face Cleanser
  let serumItem = products.find(p => p.id === 5); // Face Serum
  let creamItem = products.find(p => p.id === 2); // Face Cream
  
  if (skinType === 'dry' || concern === 'dehydration' || env === 'cold-dry') {
    routineName = "Deep Moisture Glow Ritual";
    routineDesc = "A moisture-capturing formulation sequence focused on locking barrier lipids and pulling hydration layers into tight skin cells.";
    highlightText = "Highly effective during the dry Harmattan season to restore rich barrier cocooning.";
    // Use Face Soap (90) + Serum (200) + Cream (180)
    cleanserItem = products.find(p => p.id === 1);
  } else if (skinType === 'oily' || concern === 'dullness' || env === 'urban') {
    routineName = "Diamond Pore-Refine Ritual";
    routineDesc = "A targeted polishing routine engineered to sweep away micro-impurities, sweat, and sebum oxidation, revealing clear light reflection.";
    highlightText = "Calibrated for oily skin in humid urban environments like Accra.";
    // Use Face Cleanser (165) + Serum (200) + Cream (180)
    cleanserItem = products.find(p => p.id === 3);
  } else if (skinType === 'sensitive' || concern === 'redness') {
    routineName = "Calming Glow Ritual";
    routineDesc = "A highly soothing, anti-inflammatory sequence designed to calm cell irritation and build resilience in compromised skin barriers.";
    highlightText = "Dermatologist-validated recommendation for sensitive skin.";
    // Use Soap (90) + Serum (200) + Cream (180)
    cleanserItem = products.find(p => p.id === 1);
  }

  const recList = [cleanserItem, serumItem, creamItem];
  const originalSubtotal = recList.reduce((acc, p) => acc + p.price, 0);
  const discountedTotal = originalSubtotal * 0.85; // 15% discount
  
  quizResultNode.innerHTML = `
    <span class="section-tag">Recommended for You</span>
    <h3 class="quiz-result-title">${routineName}</h3>
    <div class="quiz-result-skin-type">Target Profile: ${skinType} / ${concern} / ${env}</div>
    <p style="margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      ${routineDesc} <br><strong style="color: var(--gold); display: inline-block; margin-top: 10px;">${highlightText}</strong>
    </p>
    
    <div class="quiz-recs">
      ${recList.map(p => `
        <div class="rec-item">
          <div class="rec-img-placeholder">
            ${getPackageHTML(p.packageType, p.name)}
          </div>
          <div class="rec-details">
            <h4>${p.name}</h4>
            <p style="font-size: 0.85rem;">${p.subtitle} &bull; GH₵ ${p.price.toFixed(2)}</p>
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="quiz-bundle-box">
      <h4 style="font-family: var(--font-sans); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.15em;">The Routine Bundle (3 Steps)</h4>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">Unlock 15% bundle savings when purchasing the complete sequence.</p>
      <div class="bundle-price-row">
        <span class="bundle-original-price">GH₵ ${originalSubtotal.toFixed(2)}</span>
        <span class="bundle-discount-price">GH₵ ${discountedTotal.toFixed(2)}</span>
      </div>
    </div>
    
    <div style="display: flex; gap: 15px; justify-content: center;">
      <button class="btn btn-secondary" id="quiz-reset-btn">Retake Quiz</button>
      <button class="btn btn-primary" id="quiz-buy-bundle-btn">Add Routine to Bag</button>
    </div>
  `;

  document.getElementById('quiz-reset-btn').addEventListener('click', () => {
    currentQuizStep = 1;
    quizAnswers[1] = null;
    quizAnswers[2] = null;
    quizAnswers[3] = null;
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById('quiz-nav').style.display = 'flex';
    updateQuizUI();
  });

  document.getElementById('quiz-buy-bundle-btn').addEventListener('click', () => {
    recList.forEach(p => {
      const existing = cart.find(item => item.product.id === p.id);
      if (!existing) {
        cart.push({ product: p, quantity: 1 });
      }
    });
    updateCartUI();
    openCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Quiz Next/Prev Buttons
quizNextBtn.addEventListener('click', () => {
  if (currentQuizStep < 4 && quizAnswers[currentQuizStep]) {
    currentQuizStep += 1;
    updateQuizUI();
  }
});

quizPrevBtn.addEventListener('click', () => {
  if (currentQuizStep > 1) {
    currentQuizStep -= 1;
    updateQuizUI();
  }
});


/* --- Booking Modal Handling --- */
bookConsultationBtn.addEventListener('click', () => {
  consultationModal.classList.add('active');
});

consultationClose.addEventListener('click', () => {
  consultationModal.classList.remove('active');
  resetBookingForm();
});

consultationModal.addEventListener('click', (e) => {
  if (e.target === consultationModal) {
    consultationModal.classList.remove('active');
    resetBookingForm();
  }
});

function resetBookingForm() {
  bookingForm.reset();
  bookingModalBody.innerHTML = `
    <span class="section-tag">Expert Analysis</span>
    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Book Virtual Skin Consultation</h2>
    <p style="margin-bottom: 2rem;">Spend 15 minutes with a Unique Diamond Glow Cosmetics specialist. Receive custom routine adjustments and recommendations.</p>
    
    <form class="booking-form" id="booking-form">
      <div class="form-group">
        <label for="booking-name">Full Name</label>
        <input type="text" id="booking-name" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="booking-email">Email Address</label>
        <input type="email" id="booking-email" class="form-input" required>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label for="booking-date">Select Date</label>
          <input type="date" id="booking-date" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="booking-time">Select Time</label>
          <select id="booking-time" class="form-input" required>
            <option value="">Choose time...</option>
            <option value="09:00">09:00 AM GMT</option>
            <option value="11:00">11:00 AM GMT</option>
            <option value="14:00">02:00 PM GMT</option>
            <option value="16:00">04:00 PM GMT</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="booking-concerns">Briefly describe your skin goals</label>
        <textarea id="booking-concerns" class="form-input" placeholder="e.g. skin brightness, dry texture..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">Schedule Appointment</button>
    </form>
  `;
  
  const newForm = document.getElementById('booking-form');
  newForm.addEventListener('submit', handleBookingSubmit);
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('booking-name').value;
  const date = document.getElementById('booking-date').value;
  const time = document.getElementById('booking-time').value;
  
  bookingModalBody.innerHTML = `
    <div class="booking-success-msg">
      <div class="booking-success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 30px; height: 30px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h2 style="margin-bottom: 0.5rem;">Consultation Confirmed</h2>
      <p style="color: var(--gold); letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 1.5rem;">Ritual Consultation Scheduled</p>
      <p style="margin-bottom: 2rem; max-width: 450px; margin-left: auto; margin-right: auto;">
        Thank you, <strong>${name}</strong>. Your virtual skin analysis is scheduled for <strong>${date}</strong> at <strong>${time} GMT</strong>. An email calendar invite and video link has been sent to you.
      </p>
      <button class="btn btn-primary" id="booking-success-close-btn" style="width: 100%;">Return to Shop</button>
    </div>
  `;
  
  document.getElementById('booking-success-close-btn').addEventListener('click', () => {
    consultationModal.classList.remove('active');
    resetBookingForm();
  });
}

bookingForm.addEventListener('submit', handleBookingSubmit);


/* --- General Interactions --- */

// Sticky Header & Active Nav link on scroll
const header = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  let currentSec = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.clientHeight;
    if (window.scrollY >= (sectionTop - 120)) {
      currentSec = sec.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSec) {
      link.classList.add('active');
    }
  });
});

// Newsletter subscription handling
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('.newsletter-input');
  const email = input.value;
  
  const parent = newsletterForm.parentElement;
  parent.innerHTML = `
    <h4>Join the Ritual</h4>
    <p style="color: var(--gold); font-weight: 500; margin-top: 1rem; animation: fadeIn 0.5s ease;">
      Thank you for subscribing. The Unique Diamond Glow newsletter will now be delivered to <strong>${email}</strong>.
    </p>
  `;
});


/* --- Intersection Observer Scroll Reveal Animation --- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// Initial catalog rendering and UI triggers
renderCatalog();
updateCartUI();
updateQuizUI();

/* --- Interactive MoMo Checkout Wizard --- */

function openCheckoutWizard() {
  closeCart();
  if (cart.length === 0) {
    alert("Your shopping bag is empty. Add some products before checking out!");
    return;
  }
  renderCheckoutStep1();
  checkoutModalForm.classList.add('active');
}

function closeCheckoutWizard() {
  checkoutModalForm.classList.remove('active');
}

// Close on clicking overlay
checkoutModalForm.addEventListener('click', (e) => {
  if (e.target === checkoutModalForm) closeCheckoutWizard();
});

function calculateCartTotals() {
  let subtotalVal = 0;
  cart.forEach(item => {
    subtotalVal += item.product.price * item.quantity;
  });
  
  // Apply a 15% discount if they buy a 3-step routine (Face Soap/Cleanser, Face Serum, Face Cream)
  const hasCleanser = cart.some(item => item.product.id === 1 || item.product.id === 3);
  const hasSerum = cart.some(item => item.product.id === 5);
  const hasCream = cart.some(item => item.product.id === 2);
  
  let discountVal = 0;
  if (hasCleanser && hasSerum && hasCream) {
    discountVal = subtotalVal * 0.15;
  }
  
  return {
    subtotal: subtotalVal,
    discount: discountVal,
    total: subtotalVal - discountVal
  };
}

function renderCheckoutStep1() {
  const totals = calculateCartTotals();
  
  checkoutModalBody.innerHTML = `
    <button class="modal-close" id="checkout-form-close" aria-label="Close Modal">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
    <span class="section-tag">Secure Checkout</span>
    <h2 style="font-size: 1.8rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">MoMo Payment & Delivery</h2>
    <p style="margin-bottom: 1.2rem; font-size: 0.9rem;">Complete your payment of <strong>GH₵ ${totals.total.toFixed(2)}</strong> via Mobile Money to submit your order.</p>
    
    <div class="momo-instruction-box" style="margin-bottom: 1.2rem; font-size: 0.85rem; line-height: 1.5;">
      <p style="margin-bottom: 5px;">1. Send MoMo to <strong>0552121473</strong> (Unique Diamond Glow Cosmetics).</p>
      <p style="margin-bottom: 5px;">2. Copy the <strong>Transaction ID</strong> from the MoMo receipt.</p>
      <p style="margin-bottom: 0;">3. Enter your delivery coordinates and reference ID below.</p>
    </div>
    
    <form class="booking-form" id="checkout-details-form" style="display: flex; flex-direction: column; gap: 0.8rem;">
      <div class="form-group" style="margin-bottom: 0;">
        <label for="checkout-name" style="font-size: 0.8rem; margin-bottom: 3px;">Full Name</label>
        <input type="text" id="checkout-name" class="form-input" required style="padding: 0.6rem;">
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label for="checkout-phone" style="font-size: 0.8rem; margin-bottom: 3px;">Phone Number (Calling & WhatsApp)</label>
        <input type="tel" id="checkout-phone" class="form-input" required style="padding: 0.6rem;">
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label for="checkout-address" style="font-size: 0.8rem; margin-bottom: 3px;">Delivery Location / Address (Region, City, landmark)</label>
        <textarea id="checkout-address" class="form-input" required placeholder="e.g. Greater Accra, East Legon, near Shell Station" style="padding: 0.6rem; height: 55px; resize: none;"></textarea>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <label for="checkout-txid" style="font-size: 0.8rem; margin-bottom: 3px;">MoMo Transaction ID / Reference</label>
        <input type="text" id="checkout-txid" class="form-input" placeholder="Enter Transaction Ref Code" required style="padding: 0.6rem;">
      </div>
      
      <div style="display: flex; gap: 15px; margin-top: 1rem;">
        <button type="button" class="btn btn-secondary" id="checkout-cancel-btn" style="flex: 1; padding: 0.6rem;">Cancel</button>
        <button type="submit" class="btn btn-primary" style="flex: 1.5; padding: 0.6rem;">Confirm Order</button>
      </div>
    </form>
  `;
  
  // Attach Close Event Listeners
  document.getElementById('checkout-form-close').addEventListener('click', closeCheckoutWizard);
  document.getElementById('checkout-cancel-btn').addEventListener('click', closeCheckoutWizard);
  
  // Form submission handler
  const form = document.getElementById('checkout-details-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('checkout-name').value;
    const phone = document.getElementById('checkout-phone').value;
    const address = document.getElementById('checkout-address').value;
    const txid = document.getElementById('checkout-txid').value;
    
    renderCheckoutStep2(name, phone, address, txid, totals);
  });
}

function renderCheckoutStep2(name, phone, address, txid, totals) {
  // Generate WhatsApp message body
  let orderDetailsText = `Hello Unique Diamond Glow Cosmetics!\nI have placed an order for:\n`;
  cart.forEach(item => {
    orderDetailsText += `- ${item.quantity}x ${item.product.name} (GH₵ ${(item.product.price * item.quantity).toFixed(2)})\n`;
  });
  if (totals.discount > 0) {
    orderDetailsText += `Bundle Discount Applied: -GH₵ ${totals.discount.toFixed(2)}\n`;
  }
  orderDetailsText += `\nTotal Paid: GH₵ ${totals.total.toFixed(2)}\n`;
  orderDetailsText += `\nCustomer Details:\n- Name: ${name}\n- Phone: ${phone}\n- Address: ${address}\n- MoMo Trans ID: ${txid}`;
  
  const encodedText = encodeURIComponent(orderDetailsText);
  const whatsappUrl = `https://wa.me/233208874146?text=${encodedText}`;
  
  // Compile simulated email logs
  const today = new Date();
  const timeStr = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  const simulatedLogs = [
    `[${timeStr}] Connecting to smtp.gmail.com...`,
    `[${timeStr}] TLS Handshake complete. Authenticating...`,
    `[${timeStr}] Sending email to: boatengsamuel448@gmail.com...`,
    `[${timeStr}] Subject: New Order Alert - ${name} (MoMo Ref: ${txid})`,
    `[${timeStr}] [SUCCESS] Order parameters sent successfully to boatengsamuel448@gmail.com!`
  ].join("\n");
  
  checkoutModalBody.innerHTML = `
    <div class="booking-success-msg" style="text-align: center; padding: 1rem 0;">
      <div class="booking-success-icon" style="margin: 0 auto 1rem auto; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background: rgba(140, 232, 164, 0.1); color: #25d366;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 32px; height: 32px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Order Placed!</h2>
      <p style="color: var(--gold); letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 1rem; font-weight:600;">Payment Verification Initiated</p>
      
      <p style="font-size: 0.9rem; line-height:1.4; margin-bottom: 1.2rem; color: var(--text-secondary);">
        Thank you, <strong>${name}</strong>. Your order is pending verification of Transaction ID: <strong>${txid}</strong>. A delivery reminder has been configured.
      </p>
      
      <!-- Simulated Email Logs Box -->
      <div class="simulated-log-box" id="email-log-box" style="margin-bottom: 1.2rem;">
        ${simulatedLogs}
      </div>
      
      <!-- Action Buttons -->
      <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 1rem;">
        <a href="${whatsappUrl}" target="_blank" class="btn btn-primary" style="display: flex; align-items: center; justify-content: center; width: 100%; gap: 10px; background: #25d366; border-color:#25d366; color:#fff; text-decoration:none;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328.002 11.94.002c3.205.001 6.216 1.248 8.48 3.515 2.265 2.266 3.509 5.279 3.508 8.483-.003 6.618-5.328 11.94-11.94 11.94-1.999-.001-3.962-.503-5.717-1.458L0 24zm6.59-4.846c1.6.95 2.766 1.498 4.797 1.499 5.437.002 9.877-4.437 9.88-9.878.003-2.636-1.02-5.113-2.884-6.978C16.575 1.943 14.1 1.916 11.945 1.916c-5.437 0-9.877 4.439-9.88 9.88-.001 2.036.549 3.21 1.49 4.81l-.986 3.6 3.693-.97z"/>
          </svg>
          Send Order to WhatsApp
        </a>
        <button class="btn btn-secondary" id="download-reminder-btn" style="display: flex; align-items: center; justify-content: center; width: 100%; gap: 10px;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          Download Calendar Reminder
        </button>
        <button class="btn btn-secondary" id="checkout-finish-btn" style="width: 100%; margin-top: 0.5rem;">Continue Shopping</button>
      </div>
    </div>
  `;
  
  // Attach Calendar Reminder Download
  document.getElementById('download-reminder-btn').addEventListener('click', () => {
    downloadICS(txid, totals.total);
  });
  
  // Attach Finish Button (clears cart, closes wizard)
  document.getElementById('checkout-finish-btn').addEventListener('click', () => {
    closeCheckoutWizard();
    cart = [];
    updateCartUI();
  });
}

function downloadICS(txid, total) {
  const today = new Date();
  const eventDate = new Date();
  eventDate.setDate(today.getDate() + 2); // 2 days in future
  
  const year = eventDate.getFullYear();
  const month = String(eventDate.getMonth() + 1).padStart(2, '0');
  const day = String(eventDate.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Unique Diamond Glow Cosmetics//Ghana",
    "BEGIN:VEVENT",
    `UID:delivery-reminder-${Date.now()}@uniquediamondglow.com`,
    `DTSTAMP:${dateStr}T120000Z`,
    `DTSTART:${dateStr}T120000Z`,
    `DTEND:${dateStr}T130000Z`,
    "SUMMARY:Unique Diamond Glow Cosmetics Delivery Reminder",
    `DESCRIPTION:Your skincare order is scheduled for delivery today. Total Paid: GH₵ ${total.toFixed(2)}. MoMo Reference ID: ${txid}.`,
    "LOCATION:Ghana",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Your Unique Diamond Glow Cosmetics delivery is arriving today!",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Unique_Diamond_Glow_Delivery_Reminder.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

