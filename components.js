/* ============================================
   Philately & Stamp Collecting Store
   Components & Utilities
   ============================================ */

// ---- Font Awesome Icons ----
const ICONS = {
  sun: '<i class="fa-solid fa-sun"></i>',
  moon: '<i class="fa-solid fa-moon"></i>',
  globe: '<i class="fa-solid fa-globe"></i>',
  menu: '<i class="fa-solid fa-bars"></i>',
  x: '<i class="fa-solid fa-xmark"></i>',
  chevronDown: '<i class="fa-solid fa-chevron-down"></i>',
  stamp: '<i class="fa-solid fa-stamp"></i>',
  facebook: '<i class="fa-brands fa-facebook-f"></i>',
  twitter: '<i class="fa-brands fa-x-twitter"></i>',
  instagram: '<i class="fa-brands fa-instagram"></i>',
  youtube: '<i class="fa-brands fa-youtube"></i>',
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

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

  const navHTML = `
    <header class="header" id="mainHeader">
      <div class="header-inner">
        <a href="index.html" class="logo" aria-label="PhilaVault Home">
          <div class="logo-icon"><i class="fa-solid fa-stamp"></i></div>
          <span>PhilaVault</span>
        </a>

        <nav class="nav-links" id="desktopNav">
          ${navLinks.map(link => `
            <a href="${link.href}" class="${link.pages.includes(currentPage) ? 'active' : ''}">${link.label}</a>
          `).join('')}
        </nav>

        <div class="header-actions">
          <button class="icon-btn theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme" id="themeToggle" title="Toggle Theme">
            <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
          </button>
          <button class="icon-btn" onclick="toggleRTL()" aria-label="Toggle RTL" id="rtlToggle" title="Toggle Direction">
            <span class="dir-label" style="font-size:0.6875rem;font-weight:600;">${isRTL ? 'RTL' : 'LTR'}</span>
          </button>
          <a href="signup.html" class="btn btn-primary btn-sm" style="display:inline-flex">Sign Up</a>
          <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu(event)" aria-label="Toggle menu">
            <span class="mobile-menu-icon">${ICONS.menu}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Backdrop -->
    <div class="mobile-backdrop" id="mobileBackdrop" onclick="toggleMobileMenu(event)"></div>

    <!-- Mobile Menu Drawer -->
    <div class="mobile-nav" id="mobileNav">
      ${navLinks.map(link => `
        <a href="${link.href}" class="mob-link ${link.pages.includes(currentPage) ? 'active' : ''}">${link.label}</a>
      `).join('')}
      <div class="mobile-actions">
        <a href="signup.html" class="btn btn-primary w-full">Sign Up</a>
      </div>
      <div class="mob-toggles">
        <button onclick="toggleRTL()" class="icon-btn" title="Toggle Direction">
          <span class="dir-label" style="font-size:0.6875rem;font-weight:600;">${isRTL ? 'RTL' : 'LTR'}</span>
        </button>
        <button onclick="toggleTheme()" class="icon-btn theme-toggle" title="Toggle Theme" aria-label="Toggle dark mode">
          <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
        </button>
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
          <!-- Column 1: Brand & Socials -->
          <div class="footer-brand">
            <a href="index.html" class="logo" style="margin-bottom:12px;display:inline-flex;" aria-label="PhilaVault Home">
              <div class="logo-icon"><i class="fa-solid fa-stamp"></i></div>
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

          <!-- Column 2: Quick Links -->
          <div class="footer-col">
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="home2.html">Home 2 — Premium</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="appraisal.html">Appraisal Services</a></li>
              <li><a href="sell.html">Sell Your Collection</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <!-- Column 3: Resources -->
          <div class="footer-col">
            <h4 class="footer-col-title">Resources</h4>
            <ul class="footer-links">
              <li><a href="coming-soon.html">Stamp Catalog</a></li>
              <li><a href="coming-soon.html">Collector's Blog</a></li>
              <li><a href="coming-soon.html">Grading Guide</a></li>
              <li><a href="coming-soon.html">Stamp Glossary</a></li>
              <li><a href="coming-soon.html">Community Forum</a></li>
              <li><a href="login.html">Sign In</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </ul>
          </div>

          <!-- Column 4: Newsletter Card -->
          <div class="footer-col footer-col-newsletter">
            <div class="footer-newsletter-card">
              <h4 class="footer-newsletter-title">Stay Updated</h4>
              <p class="footer-newsletter-desc">Get rare stamp arrivals, auction schedules, appraisal invites & exclusive offers.</p>
              <form onsubmit="event.preventDefault(); alert('Subscribed successfully! Thank you for subscribing to PhilaVault.'); this.reset();" class="footer-newsletter-form">
                <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                <button type="submit" class="footer-newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <p class="footer-copyright">&copy; ${new Date().getFullYear()} PhilaVault. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="coming-soon.html">Privacy Policy</a>
            <a href="coming-soon.html">Terms of Service</a>
            <a href="coming-soon.html">Cookie Policy</a>
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
    const wrap = btn.querySelector('.theme-icon-wrap');
    if (wrap) {
      wrap.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    } else {
      btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    }
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
function updateRTLLabels() {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  document.querySelectorAll('.dir-label').forEach(el => {
    el.textContent = isRTL ? 'RTL' : 'LTR';
  });
}

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
  updateRTLLabels();
}

function initRTL() {
  const saved = localStorage.getItem('pv_dir');
  if (saved === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  }
  updateRTLLabels();
}

// ---- Mobile Menu ----
function toggleMobileMenu(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
  const nav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  const iconEl = btn ? btn.querySelector('.mobile-menu-icon') : null;
  if (!nav) return;

  const isOpen = nav.classList.contains('active') || nav.classList.contains('open');
  if (isOpen) {
    nav.classList.remove('active', 'open');
    if (backdrop) backdrop.classList.remove('open');
    if (btn) btn.classList.remove('active');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
    document.body.style.overflow = '';
  } else {
    nav.classList.add('active', 'open');
    if (backdrop) backdrop.classList.add('open');
    if (btn) btn.classList.add('active');
    if (iconEl) iconEl.innerHTML = ICONS.x;
    document.body.style.overflow = 'hidden';
  }
}

// Close mobile menu on outside click or navigation link click
document.addEventListener('click', (e) => {
  const nav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileBackdrop');
  const btn = document.getElementById('mobileMenuBtn');
  if (!nav || (!nav.classList.contains('active') && !nav.classList.contains('open'))) return;

  if (btn && (btn === e.target || btn.contains(e.target))) return;
  if (nav.contains(e.target) && !e.target.closest('a')) return;

  nav.classList.remove('active', 'open');
  if (backdrop) backdrop.classList.remove('open');
  if (btn) btn.classList.remove('active');
  const iconEl = btn ? btn.querySelector('.mobile-menu-icon') : null;
  if (iconEl) iconEl.innerHTML = ICONS.menu;
  document.body.style.overflow = '';
});

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
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
  } else {
    input.type = 'password';
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  }
}

function togglePasswordVisibility(inputId, btn) {
  togglePassword(inputId);
}

// Aliases for compatibility
window.toggleDir = toggleRTL;
window.initAuthPage = function() {
  initTheme();
  initRTL();
};

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

// ---- Hero Slider (Home 2) ----
function initHeroSlider() {
  const track = document.getElementById('hero-slides-track');
  if (!track) return;

  const slides = track.querySelectorAll('.hero-split-slide');
  const dots = document.querySelectorAll('.hero-home2-dot');
  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const interval = 5500;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;

    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === current);
    });

    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === current);
    });
  }

  function next() {
    goToSlide(current + 1);
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(next, interval);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      goToSlide(idx);
      startTimer();
    });
  });

  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopTimer);
    heroSection.addEventListener('mouseleave', startTimer);
  }

  startTimer();
}

// ---- Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();

  // Only inject nav/footer on pages that need them
  const body = document.body;
  const isAuthPage = body.classList.contains('auth-page-body') || body.classList.contains('auth-page');
  const isErrorPage = body.classList.contains('error-page-body') || body.classList.contains('error-page');
  const isComingSoon = body.classList.contains('coming-soon-body') || body.classList.contains('coming-soon-page');
  const isFullscreenPage = body.classList.contains('fullscreen-page');

  if (!isAuthPage && !isErrorPage && !isComingSoon && !isFullscreenPage) {
    injectNav();
    injectFooter();
  }

  initScrollEffect();
  initScrollAnimations();
  initFAQ();
  initCounters();
  initCountdown();
  initProductFilters();
  initHeroSlider();
});