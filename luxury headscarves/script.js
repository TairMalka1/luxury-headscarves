
"use strict";

const SHIPPING_COST = 35;
const CART_KEY = "tenor-cart-v2";
const COUPON_KEY = "tenor-coupon-v2";

const PRODUCTS = [
  {
    id: "1", name: "מטפחת שמנת קלאסית", price: 89,
    fabric: "פשתן", size: "לונג", style: "חלקה", color: "שמנת",
    badge: "אהובה במיוחד", salePrice: null,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=85",
    description: "מטפחת בגוון שמנת עדין שמשתלבת בקלות עם מלתחת הבסיס ויוצרת מראה נקי ואלגנטי."
  },
  {
    id: "2", name: "מטפחת טאופ אלגנטית", price: 99,
    fabric: "סאטן", size: "לונג", style: "חלקה", color: "טאופ",
    badge: "קולקציה חדשה", salePrice: null,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",
    description: "גוון טאופ רגוע ומעודן שמתאים לשילובים עם שמנת, חום ושחור."
  },
  {
    id: "3", name: "מטפחת ורוד עתיק", price: 89,
    fabric: "שיפון", size: "לונג", style: "חלקה", color: "ורוד עתיק",
    badge: "", salePrice: null,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    description: "גוון ורוד עתיק רך שמוסיף נגיעה עדינה ורומנטית ללוק."
  },
  {
    id: "4", name: "מטפחת מוקה מרובעת", price: 95,
    fabric: "פשתן", size: "70×70", style: "חלקה", color: "מוקה",
    badge: "", salePrice: null,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=85",
    description: "מטפחת מרובעת בגוון מוקה חמים, שמתאימה לקשירה על הראש, סביב הצוואר או על התיק."
  },
  {
    id: "5", name: "מטפחת פרחונית עדינה", price: 109,
    fabric: "משי", size: "70×70", style: "מעוצבת", color: "פרחוני",
    badge: "מיוחדת", salePrice: null,
    image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?auto=format&fit=crop&w=900&q=85",
    description: "מטפחת בהשראת הדפסים פרחוניים, לתוספת אופי ועניין גם ללוק בסיסי."
  },
  {
    id: "6", name: "מטפחת ערב שמפניה", price: 129,
    fabric: "סאטן", size: "לונג", style: "ערב", color: "שמפניה",
    badge: "לערב", salePrice: 109,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    description: "גוון שמפניה אלגנטי לאירועים ולרגעים שבהם רוצים להוסיף ברק עדין למראה."
  },
  {
    id: "7", name: "מטפחת חום קלאסי", price: 95,
    fabric: "שיפון", size: "לונג", style: "חלקה", color: "חום",
    badge: "", salePrice: null,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    description: "חום עמוק ועל-זמני שמתאים למראה יומיומי ולשילובי צבעים חמים."
  },
  {
    id: "8", name: "מטפחת מודפסת אלגנטית", price: 119,
    fabric: "משי", size: "לונג", style: "מעוצבת", color: "מעורב",
    badge: "", salePrice: null,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    description: "מטפחת עם אופי, שנועדה להפוך פריט בסיסי ללוק שלם."
  },
  {
    id: "9", name: "מטפחת ערב שחורה", price: 119,
    fabric: "סאטן", size: "לונג", style: "ערב", color: "שחור",
    badge: "", salePrice: 99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    description: "שחור קלאסי למראה ערב נקי, אלגנטי ורב-שימושי."
  }
];

const PAGE_INFO = {
  home: ["TENOR | מטפחות וסטיילינג", "הסטייל שלך. הנגיעה שלך.", "מטפחות שנבחרו בקפידה, גוונים מיוחדים והשראה ליצירת לוק שמרגיש בדיוק את."],
  shop: ["כל המטפחות | TENOR", "כל המטפחות", "גלי את הקולקציה ובחרי את הפריט שמשלים את הסטייל שלך."],
  plain: ["מטפחות חלקות | TENOR", "היופי שבפשטות", "מטפחות חלקות בגוונים שקל לשלב בכל יום."],
  designed: ["מטפחות מעוצבות | TENOR", "פרטים שעושים את ההבדל", "הדפסים וגוונים עם אופי למראה אישי."],
  evening: ["מטפחות ערב | TENOR", "לרגעים המיוחדים", "מטפחות לערב, לאירועים ולרגעים חגיגיים."],
  square70: ["מטפחות 70×70 | TENOR", "קטנות בפרטים, גדולות בסטייל", "גלי את המטפחות המרובעות שלנו ואת כל אפשרויות הקשירה."],
  sale: ["SALE | TENOR", "הבחירות המשתלמות", "פריטים נבחרים במחירים מיוחדים."],
  product: ["פרטי מוצר | TENOR", "פרטי המוצר", "כל הפרטים על המטפחת שבחרת."],
  cart: ["סל הקניות | TENOR", "סל הקניות שלך", "כל הבחירות שלך במקום אחד."],
  checkout: ["השלמת הזמנה | TENOR", "פרטי ההזמנה", "מלאי את פרטי ההזמנה כדי להמשיך."],
  "gift-card": ["כרטיס מתנה | TENOR", "מתנה עם טאץ׳ אישי", "כרטיס מתנה למי שאוהבת לבחור את הסטייל שלה."],
  looks: ["לוקים והשראה | TENOR", "לגלות שילובים חדשים", "רעיונות לשילוב מטפחות במראה היומיומי והחגיגי."],
  styling: ["סטיילינג | TENOR", "מצאי את הדרך שלך לקשור", "רעיונות פשוטים ליצירת מראה אישי."],
  articles: ["מאמרים וטיפים | TENOR", "היומן של TENOR", "טיפים, השראה ורעיונות לטיפוח הסטייל האישי."],
  club: ["מועדון לקוחות | TENOR", "ברוכה הבאה למועדון", "הצטרפי לעדכונים ולהטבות של TENOR."],
  contact: ["יצירת קשר | TENOR", "אנחנו כאן בשבילך", "נשמח לעזור בכל שאלה על מוצרים, הזמנות ושירות."],
  shipping: ["משלוחים והחזרות | TENOR", "משלוחים והחזרות", "מידע חשוב לפני ביצוע הזמנה."],
  about: ["אודות | TENOR", "הסיפור של TENOR", "מותג של מטפחות, סטיילינג והשראה."],
  faq: ["שאלות נפוצות | TENOR", "שאלות נפוצות", "תשובות לשאלות על האתר והשירות."],
  terms: ["תקנון | TENOR", "תקנון האתר", "מידע כללי על שימוש באתר ורכישות."],
  privacy: ["מדיניות פרטיות | TENOR", "מדיניות פרטיות", "איך יש להתייחס למידע שנמסר באתר."],
  accessibility: ["נגישות | TENOR", "הצהרת נגישות", "אנחנו שואפים להנגיש את חוויית השימוש באתר."]
};

const NAV_LINKS = [
  ["index.html", "ראשי"],
  ["shop.html", "כל המטפחות"],
  ["evening.html", "מטפחות ערב"],
  ["square70.html", "70×70"],
  ["sale.html", "SALE"],
  ["looks.html", "לוקים"],
  ["styling.html", "סטיילינג"],
  ["articles.html", "מאמרים"],
  ["club.html", "מועדון לקוחות"]
];

function money(value) {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
    maximumFractionDigits: 2
  }).format(value);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function safeRead(key, fallback) {
  try {
    const result = JSON.parse(localStorage.getItem(key));
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

function getCart() {
  const saved = safeRead(CART_KEY, []);
  if (!Array.isArray(saved)) return [];

  return saved.map(item => {
    const product = PRODUCTS.find(p => p.id === String(item.id));
    if (!product) return null;

    return {
      id: product.id,
      quantity: Math.max(1, Math.min(99, Number(item.quantity) || 1))
    };
  }).filter(Boolean);
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    showNotice("לא ניתן לשמור את הסל בדפדפן הזה.", true);
  }
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = count;
    el.hidden = count === 0;
  });
}

function addToCart(id, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === String(id));
  if (!product) return false;

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  const amount = Math.max(1, Math.min(99, Number(quantity) || 1));

  if (existing) existing.quantity = Math.min(99, existing.quantity + amount);
  else cart.push({ id: product.id, quantity: amount });

  saveCart(cart);
  return true;
}

function removeFromCart(id) {
  saveCart(getCart().filter(item => item.id !== String(id)));
  renderCart();
}

function changeQuantity(id, change) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === String(id));
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    saveCart(cart.filter(entry => entry.id !== String(id)));
  } else {
    item.quantity = Math.min(99, item.quantity);
    saveCart(cart);
  }
  renderCart();
}

function currentCoupon() {
  try { return localStorage.getItem(COUPON_KEY) || ""; }
  catch { return ""; }
}

function totals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => {
    const p = PRODUCTS.find(product => product.id === item.id);
    return sum + (p ? (p.salePrice ?? p.price) * item.quantity : 0);
  }, 0);

  const coupon = currentCoupon();
  const rates = { TENOR10: 0.10, WELCOME15: 0.15 };
  const rate = rates[coupon] || 0;
  const discount = Math.round(subtotal * rate * 100) / 100;
  const shipping = cart.length ? SHIPPING_COST : 0;

  return { subtotal, discount, shipping, total: subtotal - discount + shipping, rate };
}

function showNotice(message, error = false, target = "page-notice") {
  const el = document.getElementById(target);
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("error", error);
}

function brandHTML() {
  return `
    <a class="brand" href="index.html" aria-label="TENOR - עמוד הבית">
      <span class="brand-mark" aria-hidden="true">א</span>
      <span class="brand-copy">
        <span class="brand-name">TENOR</span>
        <span class="brand-tagline">SCARVES &amp; STYLE</span>
      </span>
    </a>`;
}

function headerHTML() {
  return `
    <div class="announcement">משלוח לכל הארץ ב־35 ₪ · גלי את קולקציית TENOR</div>
    <header class="site-header">
      ${brandHTML()}
      <button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="פתיחת תפריט">☰</button>
      <nav id="main-nav" aria-label="תפריט ראשי">
        ${NAV_LINKS.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a class="cart-link" href="cart.html">סל 🛍️ <span class="cart-count" data-cart-count hidden>0</span></a>
      </div>
    </header>`;
}

function footerHTML() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          ${brandHTML()}
          <p>מטפחות, סטיילינג והשראה לכל יום.</p>
          <p>הפרטים והזמינות באתר כפופים לעדכון החנות.</p>
        </div>
        <div>
          <h3>החנות</h3>
          <a href="shop.html">כל המטפחות</a>
          <a href="plain.html">מטפחות חלקות</a>
          <a href="designed.html">מטפחות מעוצבות</a>
          <a href="sale.html">SALE</a>
          <a href="gift-card.html">כרטיס מתנה</a>
          <a href="cart.html">סל הקניות</a>
        </div>
        <div>
          <h3>השראה</h3>
          <a href="looks.html">לוקים</a>
          <a href="styling.html">סטיילינג</a>
          <a href="articles.html">מאמרים וטיפים</a>
          <a href="club.html">מועדון לקוחות</a>
          <a href="about.html">אודות TENOR</a>
        </div>
        <div>
          <h3>שירות לקוחות</h3>
          <a href="contact.html">יצירת קשר</a>
          <a href="shipping.html">משלוחים והחזרות</a>
          <a href="faq.html">שאלות נפוצות</a>
          <a href="terms.html">תקנון האתר</a>
          <a href="privacy.html">מדיניות פרטיות</a>
          <a href="accessibility.html">נגישות</a>
        </div>
      </div>
      <div class="container footer-bottom">© TENOR — כל הזכויות שמורות</div>
    </footer>`;
}

function productCard(product) {
  const price = product.salePrice ?? product.price;
  return `
    <article class="product-card">
      <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="פרטים על ${escapeHTML(product.name)}">
        <div class="product-image-wrap">
          <img class="product-image" src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy">
          ${product.badge ? `<span class="product-badge">${escapeHTML(product.badge)}</span>` : ""}
        </div>
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${escapeHTML(product.fabric)} · ${escapeHTML(product.size)}</p>
        <h3><a href="product.html?id=${encodeURIComponent(product.id)}">${escapeHTML(product.name)}</a></h3>
        <p class="product-short">${escapeHTML(product.description)}</p>
        <p class="product-price">${product.salePrice ? `<del>${money(product.price)}</del>` : ""}<strong>${money(price)}</strong></p>
        <div class="product-actions">
          <a class="btn btn-outline btn-small" href="product.html?id=${encodeURIComponent(product.id)}">לפרטים</a>
          <button class="btn btn-small" type="button" data-add="${product.id}">הוספה לסל</button>
        </div>
      </div>
    </article>`;
}

function categoryCards() {
  const cards = [
    ["01", "מטפחות חלקות", "גוונים על-זמניים", "plain.html"],
    ["02", "מטפחות מעוצבות", "הדפסים עם אופי", "designed.html"],
    ["03", "מטפחות ערב", "לרגעים מיוחדים", "evening.html"],
    ["04", "מטפחות 70×70", "קטנות בפרטים", "square70.html"],
    ["05", "SALE", "בחירות במחירים מיוחדים", "sale.html"],
    ["06", "כרטיס מתנה", "מתנה עם טאץ׳ אישי", "gift-card.html"]
  ];
  return cards.map(([num, title, description, href]) => `
    <a class="category-card" href="${href}">
      <span class="category-number">${num}</span>
      <h3>${title}</h3><p>${description}</p>
    </a>`).join("");
}

function productSection(products, limit = products.length) {
  const shown = products.slice(0, limit);
  return shown.length
    ? `<div class="products-grid">${shown.map(productCard).join("")}</div>`
    : `<div class="empty-cart"><p>עדיין אין מוצרים להצגה בקטגוריה הזו.</p><a class="btn" href="shop.html">לכל המטפחות</a></div>`;
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">THE ART OF STYLE</p>
        <h1>הסטייל שלך.<br><em>הנגיעה שלך.</em></h1>
        <p class="hero-description">מטפחות שנבחרו בקפידה, בדים מיוחדים והשראה ליצירת לוק שמרגיש בדיוק את.</p>
        <div class="hero-actions">
          <a class="btn" href="shop.html">לגלות את הקולקציה</a>
          <a class="btn btn-outline" href="styling.html">לגלות את הסטייל שלי</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85" alt="השראה לאופנה ולסטייל" fetchpriority="high">
      </div>
    </section>
    <section class="section container">
      <div class="section-heading"><div><p class="eyebrow">THE COLLECTION</p><h2>הבחירות של TENOR</h2></div><a class="text-link" href="shop.html">לכל הקולקציה ←</a></div>
      ${productSection(PRODUCTS, 3)}
    </section>
    <section class="section container">
      <div class="section-heading"><div><p class="eyebrow">FIND YOUR STYLE</p><h2>גלי את העולם של TENOR</h2></div></div>
      <div class="category-grid">${categoryCards()}</div>
    </section>
    <section class="promo">
      <p class="eyebrow">YOUR STYLE, YOUR WAY</p>
      <h2>כל קשירה מספרת סיפור</h2>
      <p>גלי רעיונות, שילובים והשראה לדרך האישית שלך ללבוש מטפחת.</p>
      <a class="btn" href="looks.html">לגלות לוקים</a>
    </section>
    ${newsletterHTML()}`;
}

function newsletterHTML() {
  return `
    <section class="newsletter">
      <div class="container newsletter-inner">
        <div><p class="eyebrow">A LITTLE NOTE FROM TENOR</p><h2>קצת השראה לתיבת המייל שלך</h2><p>עדכונים על קולקציות, רעיונות לסטיילינג והטבות.</p></div>
        <form id="newsletter-form">
          <label class="form-field" for="newsletter-email">כתובת אימייל</label>
          <input id="newsletter-email" type="email" placeholder="כתובת האימייל שלך" autocomplete="email" required>
          <button class="btn" type="submit">אני רוצה להצטרף</button>
          <p id="newsletter-message" aria-live="polite"></p>
        </form>
      </div>
    </section>`;
}

function banner(title, description) {
  return `<section class="page-banner"><p class="eyebrow">TENOR · SCARVES &amp; STYLE</p><h1>${escapeHTML(title)}</h1><p>${escapeHTML(description)}</p></section>`;
}

function shopPage(page) {
  const filters = {
    shop: () => true,
    plain: p => p.style === "חלקה",
    designed: p => p.style === "מעוצבת",
    evening: p => p.style === "ערב",
    square70: p => p.size === "70×70",
    sale: p => Boolean(p.salePrice)
  };
  const info = PAGE_INFO[page] || PAGE_INFO.shop;
  return `${banner(info[1], info[2])}
    <section class="section container">
      <div class="shop-toolbar">
        <span id="product-result-count"></span>
        <div class="shop-filters">
          <input id="product-search" type="search" placeholder="חיפוש מטפחת..." aria-label="חיפוש מוצרים">
          <select id="product-color" aria-label="סינון לפי צבע">
            <option value="">כל הצבעים</option>
            ${[...new Set(PRODUCTS.map(p => p.color))].map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("")}
          </select>
          <select id="product-sort" aria-label="מיון מוצרים">
            <option value="default">מיון רגיל</option>
            <option value="price-asc">מחיר: מהנמוך לגבוה</option>
            <option value="price-desc">מחיר: מהגבוה לנמוך</option>
            <option value="name">שם המוצר</option>
          </select>
        </div>
      </div>
      <div id="shop-products" class="products-grid"></div>
      <p id="shop-empty" hidden>לא נמצאו מוצרים מתאימים לחיפוש שלך.</p>
      <div class="shop-shipping"><strong>משלוח לכל הארץ: 35 ₪</strong><br>מחיר המשלוח מוצג גם בסל הקניות.</div>
    </section>`;
}

function productPage() {
  const id = new URLSearchParams(location.search).get("id") || "1";
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return `${banner("המוצר לא נמצא", "ייתכן שהמוצר הוסר מהקולקציה.")}<section class="section container"><a class="btn" href="shop.html">חזרה לחנות</a></section>`;

  return `${banner("פרטי המוצר", "כל הפרטים על המטפחת שבחרת.")}
    <section class="container">
      <div class="breadcrumbs"><a href="index.html">ראשי</a> / <a href="shop.html">החנות</a> / ${escapeHTML(p.name)}</div>
      <div class="product-detail">
        <div><img class="detail-image" src="${p.image}" alt="${escapeHTML(p.name)}"></div>
        <div class="detail-info">
          <p class="eyebrow">${escapeHTML(p.style)} · TENOR</p>
          <h1>${escapeHTML(p.name)}</h1>
          <p class="detail-price">${p.salePrice ? `<del>${money(p.price)}</del> ` : ""}<strong>${money(p.salePrice ?? p.price)}</strong></p>
          <p class="detail-description">${escapeHTML(p.description)}</p>
          <div class="detail-facts">
            <div><span>בד</span><strong>${escapeHTML(p.fabric)}</strong></div>
            <div><span>מידה</span><strong>${escapeHTML(p.size)}</strong></div>
            <div><span>גוון</span><strong>${escapeHTML(p.color)}</strong></div>
          </div>
          <p class="form-label">כמות</p>
          <div class="quantity-control"><button type="button" id="quantity-minus" aria-label="הפחתת כמות">−</button><span id="detail-quantity">1</span><button type="button" id="quantity-plus" aria-label="הגדלת כמות">+</button></div>
          <button class="btn detail-add" id="detail-add" type="button">הוספה לסל הקניות</button>
          <p id="detail-message" class="status-message" aria-live="polite"></p>
          <div class="benefits">משלוח לכל הארץ: 35 ₪<br>הוספה לסל אינה מהווה השלמת רכישה.<br>התשלום עדיין אינו מחובר לאתר.</div>
        </div>
      </div>
    </section>
    <section class="section container"><div class="section-heading"><h2>אולי תאהבי גם</h2></div>${productSection(PRODUCTS.filter(item => item.id !== p.id).slice(0, 3))}</section>`;
}

function cartPage() {
  return `${banner("סל הקניות שלך", "בדקי את הבחירות שלך לפני המשך ההזמנה.")}
    <section class="container cart-layout">
      <div id="cart-items"></div>
      <div id="cart-controls" hidden>
        <div class="cart-total">
          <div class="coupon-box">
            <label for="coupon-code">קוד קופון</label>
            <div class="coupon-controls"><input id="coupon-code" placeholder="הקלידי קוד קופון" autocomplete="off"><button class="btn btn-outline" id="apply-coupon" type="button">הפעלת קופון</button></div>
            <p id="coupon-message" class="status-message" aria-live="polite"></p>
            <p class="form-note">קודי הדגמה: TENOR10 או WELCOME15. ההנחות אינן מחוברות למערכת מכירות אמיתית.</p>
          </div>
          <div id="cart-summary"></div>
          <a class="btn" id="checkout-link" href="checkout.html">המשך לפרטי ההזמנה</a>
          <p class="form-note">התשלום באתר עדיין אינו פעיל. אין להזין פרטי אשראי.</p>
        </div>
      </div>
    </section>`;
}

function checkoutPage() {
  return `${banner("פרטי ההזמנה", "השלימי את הפרטים לצורך הדגמה של תהליך ההזמנה.")}
    <section class="container form-layout">
      <div id="checkout-summary"></div>
      <form id="checkout-form">
        <h2>פרטים אישיים</h2>
        <div class="form-grid">
          <label class="form-field">שם פרטי<input name="firstName" autocomplete="given-name" required></label>
          <label class="form-field">שם משפחה<input name="lastName" autocomplete="family-name" required></label>
          <label class="form-field">אימייל<input name="email" type="email" autocomplete="email" required></label>
          <label class="form-field">טלפון<input name="phone" type="tel" autocomplete="tel" required></label>
          <label class="form-field full">רחוב ומספר בית<input name="address" autocomplete="street-address" required></label>
          <label class="form-field">עיר<input name="city" autocomplete="address-level2" required></label>
          <label class="form-field">מיקוד (לא חובה)<input name="zip" autocomplete="postal-code"></label>
          <label class="form-field full">הערות להזמנה<textarea name="notes" placeholder="הערות למשלוח (לא חובה)"></textarea></label>
        </div>
        <p class="form-note">הטופס הזה הוא הדגמה בלבד: הוא לא שולח הזמנה, לא גובה תשלום ולא שומר פרטים בשרת.</p>
        <button class="btn" type="submit">בדיקת ההזמנה</button>
        <p id="checkout-message" class="status-message" aria-live="polite"></p>
      </form>
    </section>`;
}

function giftPage() {
  return `${banner("כרטיס מתנה TENOR", "מתנה שמאפשרת לבחור בדיוק את מה שאוהבים.")}
    <section class="container form-layout">
      <div class="promo"><p class="eyebrow">A GIFT OF STYLE</p><h2>מתנה עם טאץ׳ אישי</h2><p>כרטיס המתנה בעמוד זה הוא תצוגה מקדימה בלבד. עדיין לא ניתן לרכוש או לממש אותו.</p></div>
      <form id="gift-form">
        <h2>עיצוב כרטיס מתנה לדוגמה</h2>
        <label class="form-field">סכום הכרטיס<select name="amount"><option value="100">100 ₪</option><option value="150">150 ₪</option><option value="200">200 ₪</option><option value="300">300 ₪</option></select></label>
        <label class="form-field">שם מקבלת המתנה<input name="recipient" required></label>
        <label class="form-field">הודעה אישית<textarea name="message" placeholder="כמה מילים מהלב"></textarea></label>
        <button class="btn" type="submit">תצוגה מקדימה</button>
        <div id="gift-preview" class="notice" aria-live="polite"></div>
      </form>
    </section>`;
}

function contentPage(page) {
  const info = PAGE_INFO[page] || PAGE_INFO.about;
  let body = "";

  if (page === "looks") {
    body = `<div class="article-grid">
      <article class="look-card"><h2>לוק בגווני שמנת</h2><p>שלבי שמנת, בז׳ ותכשיט עדין למראה רך.</p></article>
      <article class="look-card"><h2>טאופ וחום</h2><p>גוונים טבעיים יוצרים מראה מאוזן ועל-זמני.</p></article>
      <article class="look-card"><h2>נגיעה לערב</h2><p>מטפחת בגוון שמפניה יכולה להשלים הופעה חגיגית.</p></article>
    </div><p class="form-note">רעיונות להשראה בלבד. התמונות והמוצרים הזמינים עשויים להשתנות.</p>`;
  } else if (page === "styling") {
    body = `<h2>שלושה רעיונות להתחלה</h2><ol><li>בחרי צבע אחד מהבגדים וחזרי עליו בגוון המטפחת.</li><li>למראה נקי, שלבי מטפחת חלקה עם בגד בעל טקסטורה.</li><li>למראה בולט יותר, בחרי הדפס והפכי אותו למוקד ההופעה.</li></ol><h2>איך לשמור על המטפחת?</h2><p>בדקי תמיד את הוראות הטיפול של היצרן. סוגי בד שונים דורשים טיפול שונה.</p><a class="btn" href="shop.html">למצוא את המטפחת שלך</a>`;
  } else if (page === "articles") {
    body = `<div class="article-grid">
      <article class="article-card"><p class="eyebrow">STYLE GUIDE</p><h2>איך בוחרים צבע מטפחת?</h2><p>התחילי מהצבעים שאת כבר אוהבת ללבוש, והוסיפי גוון משלים אחד.</p></article>
      <article class="article-card"><p class="eyebrow">EVERYDAY STYLE</p><h2>מטפחת ללוק יומיומי</h2><p>מטפחת חלקה בגוון טבעי היא דרך קלה להוסיף עניין בלי להעמיס.</p></article>
      <article class="article-card"><p class="eyebrow">CARE TIPS</p><h2>טיפים לטיפול בבדים</h2><p>קראי את תווית הטיפול והימנעי משימוש בחום אם הוראות היצרן אינן מתירות זאת.</p></article>
    </div>`;
  } else if (page === "club") {
    body = `<p>הצטרפי לרשימת העדכונים שלנו כדי לקבל חדשות על קולקציות, השראה והטבות. בשלב זה הטופס מדגים את הממשק בלבד ולא שומר כתובות במערכת דיוור.</p>${newsletterHTML()}`;
  } else if (page === "contact") {
    body = `<p>יש לך שאלה לגבי מוצר או הזמנה? אפשר להכין כאן פנייה לצוות TENOR.</p>
      <form id="contact-form" class="form-grid">
        <label class="form-field">שם<input name="name" required></label>
        <label class="form-field">אימייל<input name="email" type="email" required></label>
        <label class="form-field full">נושא<input name="subject" required></label>
        <label class="form-field full">הודעה<textarea name="message" required></textarea></label>
        <div class="form-field full"><button class="btn" type="submit">הכנת הודעה</button><p id="contact-message" class="status-message" aria-live="polite"></p></div>
      </form>`;
  } else if (page === "shipping") {
    body = `<h2>משלוחים</h2><p>מחיר המשלוח המוצג כרגע באתר הוא 35 ₪. זמני האספקה ואזורי השירות דורשים אישור ועדכון מצד העסק לפני פרסום האתר.</p><h2>החזרות והחלפות</h2><p>יש להוסיף כאן את מדיניות ההחזרות וההחלפות המאושרת של העסק, כולל מועדים, תנאים ופרטי יצירת קשר. אין לראות בטקסט זה מדיניות משפטית סופית.</p>`;
  } else if (page === "about") {
    body = `<h2>הסיפור שלנו</h2><p>TENOR נוצרה מתוך אהבה לפרטים קטנים, לגוונים עשירים ולדרך שבה אביזר אחד יכול להשלים מראה שלם.</p><p>אנחנו מאמינות שסטייל אישי לא חייב להיות מורכב: לפעמים מספיק לבחור את המטפחת הנכונה.</p><p class="form-note">עדכני את הטקסט הזה בהתאם לסיפור האמיתי של העסק.</p>`;
  } else if (page === "faq") {
    body = `<h2>כמה עולה משלוח?</h2><p>מחיר המשלוח שמוגדר כרגע באתר הוא 35 ₪.</p><h2>איך מוסיפים מוצר לסל?</h2><p>נכנסים לעמוד המוצר ולוחצים על ״הוספה לסל״. הסל נשמר בדפדפן הנוכחי.</p><h2>האם אפשר לשלם באתר?</h2><p>לא כרגע. נדרש לחבר שירות תשלומים מאובטח לפני קבלת הזמנות אמיתיות.</p><h2>האם קוד הקופון אמיתי?</h2><p>הקופונים בקוד זה הם להדגמה מקומית בלבד.</p>`;
  } else if (page === "terms") {
    body = `<p><strong>טיוטה בלבד — יש להחליף בתקנון שאושר לעסק לפני השקה.</strong></p><h2>שימוש באתר</h2><p>האתר נועד להציג מוצרים ומידע. בשלב זה רכישה ותשלום אינם פעילים.</p><h2>מחירים וזמינות</h2><p>מחירי המוצרים בדוגמה הם נתוני הדגמה בלבד ואינם הצעת מכר מחייבת.</p><h2>יצירת קשר</h2><p>יש להוסיף פרטי עסק וערוץ שירות מאומתים לפני פרסום התקנון.</p>`;
  } else if (page === "privacy") {
    body = `<p><strong>טיוטה כללית בלבד — יש להתאים את המדיניות בפועל לדרך שבה העסק אוסף ומעבד מידע.</strong></p><h2>מידע שנמסר בטפסים</h2><p>הטפסים באתר זה מדגימים ממשק ואינם מחוברים כרגע למערכת שרת או דיוור.</p><h2>אחסון בדפדפן</h2><p>סל הקניות וקוד קופון להדגמה נשמרים באחסון המקומי של הדפדפן במכשיר.</p><h2>לפני השקה</h2><p>יש לפרט אילו נתונים נאספים, לאיזו מטרה, למי הם מועברים וכיצד אפשר לפנות לעסק.</p>`;
  } else if (page === "accessibility") {
    body = `<p>האתר נבנה עם כותרות סמנטיות, תוויות לשדות, תפריט לנייד ותמיכה בניווט מקלדת בממשק הבסיסי.</p><p>נדרשת בדיקת נגישות בפועל, לרבות ניגודיות, הגדלת טקסט, קוראי מסך, תמונות, טפסים ותהליך רכישה, לפני פרסום הצהרה סופית.</p><p>יש להוסיף כאן דרך פנייה לעסק בנושא נגישות לאחר שתוגדר.</p>`;
  } else {
    body = `<p>ברוכה הבאה ל־TENOR — מטפחות, סטיילינג והשראה.</p><a class="btn" href="shop.html">לגלות את הקולקציה</a>`;
  }

  return `${banner(info[1], info[2])}<section class="container content-page">${body}</section>`;
}

function renderPage() {
  const root = document.getElementById("site");
  if (!root) return;

  const page = document.body.dataset.page || "home";
  const info = PAGE_INFO[page] || PAGE_INFO.home;
  document.title = info[0];

  let content;
  if (page === "home") content = homePage();
  else if (["shop", "plain", "designed", "evening", "square70", "sale"].includes(page)) content = shopPage(page);
  else if (page === "product") content = productPage();
  else if (page === "cart") content = cartPage();
  else if (page === "checkout") content = checkoutPage();
  else if (page === "gift-card") content = giftPage();
  else content = contentPage(page);

  root.innerHTML = headerHTML() + `<main>${content}</main>` + footerHTML();
}

function renderShopProducts() {
  const grid = document.getElementById("shop-products");
  if (!grid) return;

  const page = document.body.dataset.page;
  const filterMap = {
    shop: () => true,
    plain: p => p.style === "חלקה",
    designed: p => p.style === "מעוצבת",
    evening: p => p.style === "ערב",
    square70: p => p.size === "70×70",
    sale: p => Boolean(p.salePrice)
  };

  let items = PRODUCTS.filter(filterMap[page] || (() => true));
  const search = (document.getElementById("product-search")?.value || "").trim().toLowerCase();
  const color = document.getElementById("product-color")?.value || "";
  const sort = document.getElementById("product-sort")?.value || "default";

  if (search) items = items.filter(p => `${p.name} ${p.fabric} ${p.color} ${p.description}`.toLowerCase().includes(search));
  if (color) items = items.filter(p => p.color === color);

  if (sort === "price-asc") items.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
  if (sort === "price-desc") items.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
  if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name, "he"));

  grid.innerHTML = items.map(productCard).join("");
  document.getElementById("shop-empty").hidden = items.length > 0;
  document.getElementById("product-result-count").textContent = `${items.length} מוצרים`;
}

function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const cart = getCart();
  const controls = document.getElementById("cart-controls");

  if (!cart.length) {
    controls.hidden = true;
    container.innerHTML = `<div class="empty-cart"><h2>הסל שלך מחכה למשהו יפה ♡</h2><p>עדיין לא הוספת מוצרים לסל.</p><a class="btn" href="shop.html">לצפייה בקולקציה</a></div>`;
    return;
  }

  controls.hidden = false;
  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(product => product.id === item.id);
    const price = p.salePrice ?? p.price;
    return `<div class="cart-row">
      <div>
        <div class="cart-item-name">${escapeHTML(p.name)}</div>
        <div class="cart-item-sub">${money(price)} ליחידה</div>
        <img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy" style="width:70px;height:85px;object-fit:cover;margin-top:10px">
      </div>
      <div class="cart-quantity">
        <button type="button" data-decrease="${p.id}" aria-label="הפחתת כמות">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-increase="${p.id}" aria-label="הגדלת כמות">+</button>
      </div>
      <strong>${money(price * item.quantity)}</strong>
      <button class="remove-item" type="button" data-remove="${p.id}">הסרה</button>
    </div>`;
  }).join("");

  const t = totals();
  document.getElementById("cart-summary").innerHTML = `
    <div class="cart-total-line"><span>סכום ביניים</span><strong>${money(t.subtotal)}</strong></div>
    <div class="cart-total-line"><span>הנחה${t.rate ? ` (${Math.round(t.rate * 100)}%)` : ""}</span><strong>−${money(t.discount)}</strong></div>
    <div class="cart-total-line"><span>משלוח</span><strong>${money(t.shipping)}</strong></div>
    <div class="cart-total-line cart-grand-total"><span>סה״כ</span><strong>${money(t.total)}</strong></div>`;
  const couponInput = document.getElementById("coupon-code");
  if (couponInput && currentCoupon()) couponInput.value = currentCoupon();
}

function applyCoupon() {
  const input = document.getElementById("coupon-code");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  const rates = { TENOR10: 10, WELCOME15: 15 };

  if (!rates[code]) {
    showNotice("הקופון לא מוכר. אפשר לנסות TENOR10 או WELCOME15.", true, "coupon-message");
    return;
  }

  try { localStorage.setItem(COUPON_KEY, code); } catch {}
  showNotice(`הקופון הופעל בהצלחה: ${rates[code]}% הנחה (הדגמה).`, false, "coupon-message");
  renderCart();
}

function initProductDetail() {
  const quantity = document.getElementById("detail-quantity");
  if (!quantity) return;

  let count = 1;
  document.getElementById("quantity-minus").addEventListener("click", () => {
    count = Math.max(1, count - 1);
    quantity.textContent = count;
  });
  document.getElementById("quantity-plus").addEventListener("click", () => {
    count = Math.min(99, count + 1);
    quantity.textContent = count;
  });
  document.getElementById("detail-add").addEventListener("click", () => {
    const id = new URLSearchParams(location.search).get("id") || "1";
    if (addToCart(id, count)) showNotice("המטפחת נוספה לסל שלך ♡", false, "detail-message");
    updateCartCount();
  });
}

function initCheckout() {
  const summary = document.getElementById("checkout-summary");
  if (!summary) return;

  const cart = getCart();
  if (!cart.length) {
    summary.innerHTML = `<div class="empty-cart"><p>הסל שלך ריק.</p><a class="btn" href="shop.html">חזרה לחנות</a></div>`;
    document.getElementById("checkout-form").hidden = true;
    return;
  }

  const t = totals();
  summary.innerHTML = `<div class="promo"><h2>סיכום ההזמנה</h2><p>${cart.reduce((s, i) => s + i.quantity, 0)} פריטים · סכום ביניים ${money(t.subtotal)} · משלוח ${money(t.shipping)}</p><p><strong>סה״כ להדגמה: ${money(t.total)}</strong></p></div>`;

  document.getElementById("checkout-form").addEventListener("submit", event => {
    event.preventDefault();
    showNotice("הבדיקה הושלמה בהדגמה בלבד. לא נשלחה הזמנה ולא בוצע תשלום.", false, "checkout-message");
  });
}

function initNewsletter() {
  document.getElementById("newsletter-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("newsletter-email").value.trim();
    if (!email) return;
    showNotice("תודה על ההתעניינות! ההרשמה היא הדגמה בלבד ואינה נשמרת במערכת דיוור.", false, "newsletter-message");
    event.target.reset();
  });
}

function initGiftForm() {
  document.getElementById("gift-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const amount = escapeHTML(data.get("amount"));
    const recipient = escapeHTML(data.get("recipient"));
    const message = escapeHTML(data.get("message") || "באהבה, TENOR");
    document.getElementById("gift-preview").innerHTML =
      `תצוגה מקדימה בלבד: כרטיס מתנה בסך ${amount} ₪ עבור ${recipient}. ${message}`;
  });
}

function initContact() {
  document.getElementById("contact-form")?.addEventListener("submit", event => {
    event.preventDefault();
    showNotice("הטופס מוכן להדגמה, אך אינו שולח הודעה. יש לחבר כתובת עסקית או שירות טפסים כדי לקבל פניות.", false, "contact-message");
  });
}

function initMenu() {
  const button = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  if (add) {
    if (addToCart(add.dataset.add)) {
      const previous = add.textContent;
      add.textContent = "נוסף לסל ✓";
      add.disabled = true;
      window.setTimeout(() => {
        add.textContent = previous;
        add.disabled = false;
      }, 1200);
    }
    return;
  }

  const decrease = event.target.closest("[data-decrease]");
  const increase = event.target.closest("[data-increase]");
  const remove = event.target.closest("[data-remove]");

  if (decrease) changeQuantity(decrease.dataset.decrease, -1);
  if (increase) changeQuantity(increase.dataset.increase, 1);
  if (remove) removeFromCart(remove.dataset.remove);

  if (event.target.closest("#apply-coupon")) applyCoupon();
});

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  updateCartCount();
  renderShopProducts();
  renderCart();
  initProductDetail();
  initCheckout();
  initNewsletter();
  initGiftForm();
  initContact();
  initMenu();

  ["product-search", "product-color", "product-sort"].forEach(id => {
    document.getElementById(id)?.addEventListener(
      id === "product-search" ? "input" : "change",
      renderShopProducts
    );
  });
});
