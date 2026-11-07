/* ============================================
   Philately & Stamp Collecting Store
   Components & Utilities
   ============================================ */

// ---- SVG Icons (Lucide-style) ----
const ICONS = {
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  stamp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21h14"/><path d="M9 21v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M12 15V7"/><path d="M8 3h8a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2z"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
};

// ---- Current page detection ----
function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

// ---- Navigation Injection ----
function injectNav() {
  const currentPage = getCurrentPage();
  const navLinks = [
    { href: 'index.html', label: 'Home', pages: ['index.html', ''] },
    { href: 'home2.html', label: 'Home 2', pages: ['home2.html'] },
    { href: 'products.html', label: 'Products', pages: ['products.html'] },
    { href: 'appraisal.html', label: 'Appraisal', pages: ['appraisal.html'] },
    { href: 'sell.html', label: 'Sell Collection', pages: ['sell.html'] },
    { href: 'pricing.html', label: 'Pricing', pages: ['pricing.html'] },
    { href: 'contact.html', label: 'Contact', pages: ['contact.html'] },
  ];

  const navHTML = `
    <header class="header" id="mainHeader">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <div class="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="1"/>
              <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/>
              <rect x="7" y="7" width="10" height="10" rx="0.5"/>
              <circle cx="12" cy="12" r="2.5"/>
            </svg>
          </div>
          <span>PhilaVault</span>
        </a>

        <nav class="nav-links" id="desktopNav">
          ${navLinks.map(link => `
            <a href="${link.href}" class="${link.pages.includes(currentPage) ? 'active' : ''}">${link.label}</a>
          `).join('')}
        </nav>

        <div class="header-actions">
          <button class="icon-btn" onclick="toggleTheme()" aria-label="Toggle theme" id="themeToggle">
            ${ICONS.moon}
          </button>
          <button class="icon-btn" onclick="toggleRTL()" aria-label="Toggle RTL" id="rtlToggle">
            ${ICONS.globe}
          </button>
          <a href="login.html" class="btn btn-secondary" style="display:inline-flex">Sign In</a>
          <a href="signup.html" class="btn btn-primary" style="display:inline-flex">Sign Up</a>
          <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu()" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-nav" id="mobileNav">
      ${navLinks.map(link => `
        <a href="${link.href}" class="${link.pages.includes(currentPage) ? 'active' : ''}">${link.label}</a>
      `).join('')}
      <div class="mobile-actions">
        <a href="login.html" class="btn btn-secondary">Sign In</a>
        <a href="signup.html" class="btn btn-primary">Sign Up</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// ---- Footer Injection ----
function injectFooter() {
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo" style="margin-bottom:8px;">
              <div class="logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="1"/>
                  <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/>
                  <rect x="7" y="7" width="10" height="10" rx="0.5"/>
                  <circle cx="12" cy="12" r="2.5"/>
                </svg>
              </div>
              <span>PhilaVault</span>
            </a>
            <p>Your trusted destination for rare stamps, expert appraisals, and philatelic treasures from around the globe. Preserving postal history since 1987.</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">${ICONS.facebook}</a>
              <a href="#" aria-label="Twitter">${ICONS.twitter}</a>
              <a href="#" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="appraisal.html">Appraisal Services</a></li>
              <li><a href="sell.html">Sell Your Collection</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="coming-soon.html">Stamp Catalog</a></li>
              <li><a href="coming-soon.html">Collector's Blog</a></li>
              <li><a href="coming-soon.html">Grading Guide</a></li>
              <li><a href="coming-soon.html">Stamp Glossary</a></li>
              <li><a href="coming-soon.html">Community Forum</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>128 Heritage Lane</li>
              <li>London, WC2H 9JQ, UK</li>
              <li style="margin-top:12px;"><a href="tel:+442071234567">+44 20 7123 4567</a></li>
              <li><a href="mailto:hello@philavault.com">hello@philavault.com</a></li>
              <li style="margin-top:12px;">Mon–Sat: 9am – 6pm</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} PhilaVault. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="coming-soon.html">Privacy Policy</a>
            <a href="coming-soon.html">Terms of Service</a>
            <a href="coming-soon.html">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ---- Theme Toggle ----
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('pv_theme', 'light');
    updateThemeIcon(false);
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('pv_theme', 'dark');
    updateThemeIcon(true);
  }
}

function updateThemeIcon(isDark) {
  const toggleBtns = document.querySelectorAll('#themeToggle, .theme-toggle');
  toggleBtns.forEach(btn => {
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  });
}

function initTheme() {
  const saved = localStorage.getItem('pv_theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon(true);
  }
}

// ---- RTL Toggle ----
function toggleRTL() {
  const html = document.documentElement;
  const isRTL = html.getAttribute('dir') === 'rtl';

  if (isRTL) {
    html.setAttribute('dir', 'ltr');
    localStorage.setItem('pv_dir', 'ltr');
  } else {
    html.setAttribute('dir', 'rtl');
    localStorage.setItem('pv_dir', 'rtl');
  }
}

function initRTL() {
  const saved = localStorage.getItem('pv_dir');
  if (saved === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  }
}

// ---- Mobile Menu ----
function toggleMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mobileNav');
  btn.classList.toggle('active');
  nav.classList.toggle('active');
}

// ---- Header Scroll Effect ----
function initScrollEffect() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ---- FAQ Accordion ----
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        // Toggle clicked
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// ---- Counter Animation ----
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ---- Countdown Timer (for Coming Soon) ----
function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // Set target date 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ---- Password Visibility Toggle ----
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const btn = input.parentElement.querySelector('.password-toggle');
  
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
  } else {
    input.type = 'password';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  }
}

// ---- Product Filter Tabs ----
function initProductFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const products = document.querySelectorAll('.product-card');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      products.forEach(product => {
        if (filter === 'all' || product.getAttribute('data-category') === filter) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
}

// ---- Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();

  // Only inject nav/footer on pages that need them
  const body = document.body;
  const isAuthPage = body.classList.contains('auth-page-body');
  const isErrorPage = body.classList.contains('error-page-body');
  const isComingSoon = body.classList.contains('coming-soon-body');

  if (!isAuthPage && !isErrorPage && !isComingSoon) {
    injectNav();
    injectFooter();
  }

  initScrollEffect();
  initScrollAnimations();
  initFAQ();
  initCounters();
  initCountdown();
  initProductFilters();
});
