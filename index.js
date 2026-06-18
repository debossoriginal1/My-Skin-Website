// Products Database
const products = [
  {
    id: 1,
    name: "Radiance Jelly Cleanser",
    subtitle: "Purify & Refine",
    price: 120.00,
    image: "assets/product_cleanser.png",
    tag: "Step 01",
    desc: "Gentle amino-acid gel infused with diamond dust and local Moringa extract that lightly polishes dullness while conserving skin lipids. Respects the skin microbiome.",
    ingredients: "Water, Sodium Cocoyl Glycinate, Glycerin, Diamond Powder, Moringa Oleifera Leaf Extract, Aloe Barbadensis Leaf Extract, Allantoin, Citric Acid, Phenoxyethanol.",
    usage: "Apply a small amount to damp skin. Massage in circular motions for 60 seconds, paying attention to areas of texture. Rinse thoroughly with lukewarm water."
  },
  {
    id: 2,
    name: "Diamond Peptide Serum",
    subtitle: "Stimulate & Brighten",
    price: 280.00,
    image: "assets/product_serum.png",
    tag: "Step 02",
    desc: "Our gold-standard elixir. Conjugated peptide chains suspended in high-grade Shea-derived ceramides and hyaluronic acid for instant cellular replenishment. Sourced and processed locally in Ghana.",
    ingredients: "Hyaluronic Acid (Multi-Weight), Acetyl Sh-Pentapeptide-35 (Diamond Peptide Complex), Butyrospermum Parkii (Shea) Butter Extract, Niacinamide (5%), Panthenol, Centella Asiatica.",
    usage: "Press 3-4 drops gently into clean, damp face and neck morning and night. Allow to fully absorb for 60 seconds before applying moisturizer."
  },
  {
    id: 3,
    name: "Hydro-Glow Moisturizer",
    subtitle: "Lock & Illuminate",
    price: 180.00,
    image: "assets/product_moisturizer.png",
    tag: "Step 03",
    desc: "A luxurious velvet cream made with raw Northern Ghanaian Shea Butter and Cocoa Husk extract that seals in peptides and reinforces the skin barrier.",
    ingredients: "Butyrospermum Parkii (Shea Butter), Squalane, Ceramide NP, Ceramide AP, Diamond Powder, Theobroma Cacao (Cocoa) Husk Extract, Tocopherol (Vitamin E), Phytosphingosine.",
    usage: "Warm a pea-sized amount between fingertips. Press into skin in upward sweeping motions. Use morning and night as the final step of your ritual."
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

// Checkout success modal
const checkoutModal = document.getElementById('checkout-modal');
const checkoutClose = document.getElementById('checkout-close');
const checkoutSuccessCloseBtn = document.getElementById('checkout-success-close-btn');

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
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
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
  
  // Check if all 3 products are in cart to apply the bundle discount
  const hasCleanser = cart.some(item => item.product.id === 1);
  const hasSerum = cart.some(item => item.product.id === 2);
  const hasMoisturizer = cart.some(item => item.product.id === 3);
  
  let discountVal = 0;
  if (hasCleanser && hasSerum && hasMoisturizer) {
    // 15% discount on the entire cart subtotal
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

// Catalog Add to Cart button listeners
document.addEventListener('click', (e) => {
  const addToCartBtn = e.target.closest('.add-to-cart-btn');
  if (addToCartBtn) {
    const id = addToCartBtn.getAttribute('data-id');
    addToCart(id);
  }
});

// Checkout Action
checkoutBtn.addEventListener('click', () => {
  closeCart();
  cart = [];
  updateCartUI();
  checkoutModal.classList.add('active');
});

checkoutClose.addEventListener('click', () => checkoutModal.classList.remove('active'));
checkoutSuccessCloseBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) checkoutModal.classList.remove('active');
});


/* --- Quick View Modal --- */
function openQuickview(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;
  
  quickviewModalBody.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-img-col">
        <img src="${product.image}" alt="${product.name}" class="quickview-img">
      </div>
      <div class="quickview-info-col">
        <span class="quickview-tag">${product.tag}</span>
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
  
  // Tab change handler inside modal
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
  
  // Add to cart from quick view
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
  
  if (skinType === 'dry' || concern === 'dehydration' || env === 'cold-dry') {
    routineName = "Deep Moisture Glow Ritual";
    routineDesc = "A moisture-capturing formulation sequence focused on locking barrier lipids and pulling hydration layers into tight skin cells.";
    highlightText = "Highly effective during the dry Harmattan season to restore rich barrier cocooning.";
  } else if (skinType === 'oily' || concern === 'dullness' || env === 'urban') {
    routineName = "Diamond Pore-Refine Ritual";
    routineDesc = "A targeted polishing routine engineered to sweep away micro-impurities, sweat, and sebum oxidation, revealing clear light reflection.";
    highlightText = "Calibrated for oily skin in humid urban environments like Accra.";
  } else if (skinType === 'sensitive' || concern === 'redness') {
    routineName = "Calming Glow Ritual";
    routineDesc = "A highly soothing, anti-inflammatory sequence designed to calm cell irritation and build resilience in compromised skin barriers.";
    highlightText = "Dermatologist-validated recommendation for sensitive skin.";
  }

  // Calculate discounted price
  const originalSubtotal = products.reduce((acc, p) => acc + p.price, 0);
  const discountedTotal = originalSubtotal * 0.85; // 15% discount
  
  quizResultNode.innerHTML = `
    <span class="section-tag">Recommended for You</span>
    <h3 class="quiz-result-title">${routineName}</h3>
    <div class="quiz-result-skin-type">Target Profile: ${skinType} / ${concern} / ${env}</div>
    <p style="margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      ${routineDesc} <br><strong style="color: var(--gold); display: inline-block; margin-top: 10px;">${highlightText}</strong>
    </p>
    
    <div class="quiz-recs">
      ${products.map(p => `
        <div class="rec-item">
          <img src="${p.image}" alt="${p.name}" class="rec-img">
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

  // Attach event handlers inside quiz results screen
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
    products.forEach(p => {
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

// Next/Prev Buttons
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
    <p style="margin-bottom: 2rem;">Spend 15 minutes with a Diamond Glow specialist. Receive custom routine adjustments and recommendations.</p>
    
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
      <button class="btn btn-primary" id="booking-success-close-btn" style="width: 100%;">Return to Diamond Glow</button>
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
      Thank you for subscribing. The Diamond Glow newsletter will now be delivered to <strong>${email}</strong>.
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

// Initialize cart UI state
updateCartUI();
updateQuizUI();
