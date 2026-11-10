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
    { href: 'about.html', label: 'About Us', pages: ['about.html'] },
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
          <a href="signup.html" class="btn btn-primary btn-sm header-signup-btn">Sign Up</a>
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
              <li><a href="about.html">About Us</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="appraisal.html">Appraisal Services</a></li>
              <li><a href="sell.html">Sell Collection</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <!-- Column 3: Resources -->
          <div class="footer-col">
            <h4 class="footer-col-title">Resources</h4>
            <ul class="footer-links">
              <li><a href="coming-soon.html">Dashboard</a></li>
              <li><a href="coming-soon.html">Coming Soon</a></li>
              <li><a href="404.html">404 Page</a></li>
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

// ---- Thematic Philatelic Ambient Particles ----
function initPhilatelicParticles() {
  const canvas = document.getElementById('heroPhilatelyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let width = 0, height = 0;
  let particles = [];
  let animId = null;

  function resize() {
    const parent = canvas.parentElement || canvas.closest('.hero-slider-section');
    if (!parent) return;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * (width || 800);
      this.y = Math.random() * (height || 500);
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = -(Math.random() * 0.4 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.opacity = Math.random() * 0.45 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulse = Math.random() * Math.PI;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.pulse += this.pulseSpeed;
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
        this.y = height + 5;
      }
    }
    draw() {
      const currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = isDark()
        ? `rgba(226, 188, 90, ${currentOpacity})`
        : `rgba(184, 134, 11, ${currentOpacity * 0.85})`;
      ctx.fill();
    }
  }

  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(32, Math.floor((width || 800) / 35));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animId = requestAnimationFrame(animate);
  }

  animate();
}

// ---- Home 2 Thematic Philatelic Background Animation & Effects (Home 2 Only) ----
function initHome2PhilatelyAnimation() {
  var canvas = document.getElementById('home2-philately-canvas');
  var heroSection = document.getElementById('hero-section');
  var spotlight = document.getElementById('heroHome2Spotlight');

  if (!canvas || !heroSection || !heroSection.classList.contains('hero-home2')) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    if (spotlight) spotlight.style.display = 'none';
    return;
  }

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  var W = 0, H = 0, dpr = 1;
  var orbs = [];
  var bursts = [];
  var animId = null;
  var isVisible = true;
  var t = 0;

  var tmx = -9999, tmy = -9999, mx = -9999, my = -9999, mIn = false;

  function makeOrb() {
    var size = 3 + Math.random() * 22;
    var isLarge = size > 14;
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.2,
      r: size,
      baseR: size,
      baseAlpha: isLarge ? (0.04 + Math.random() * 0.06) : (0.08 + Math.random() * 0.18),
      alpha: 0,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.018,
      // Color type: 0=gold, 1=claret, 2=warm-white
      hue: Math.random() < 0.5 ? 0 : (Math.random() < 0.6 ? 1 : 2)
    };
  }

  function resize() {
    var rect = heroSection.getBoundingClientRect();
    W = Math.max(rect.width, 320);
    H = Math.max(rect.height, 400);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    seedOrbs();
  }

  function seedOrbs() {
    orbs = [];
    var count = W < 768 ? 18 : 36;
    for (var i = 0; i < count; i++) {
      orbs.push(makeOrb());
    }
  }

  // Events
  heroSection.addEventListener('mousemove', function(e) {
    var rect = heroSection.getBoundingClientRect();
    tmx = e.clientX - rect.left;
    tmy = e.clientY - rect.top;
    mIn = true;
  });
  heroSection.addEventListener('mouseleave', function() { mIn = false; });

  heroSection.addEventListener('click', function(e) {
    var rect = heroSection.getBoundingClientRect();
    var bx = e.clientX - rect.left;
    var by = e.clientY - rect.top;
    var count = 12 + Math.floor(Math.random() * 8);
    for (var i = 0; i < count; i++) {
      var angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      var speed = 1.5 + Math.random() * 3;
      bursts.push({
        x: bx, y: by,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 1.0 + Math.random() * 1.8,
        alpha: 0.6 + Math.random() * 0.3,
        life: 1.0
      });
    }
  });

  function getColor(hue, alpha, dk) {
    if (hue === 0) {
      return dk
        ? 'rgba(226,188,90,' + alpha + ')'
        : 'rgba(184,134,11,' + alpha + ')';
    } else if (hue === 1) {
      return dk
        ? 'rgba(180,60,60,' + alpha + ')'
        : 'rgba(139,26,26,' + alpha + ')';
    } else {
      return dk
        ? 'rgba(220,210,180,' + alpha + ')'
        : 'rgba(160,140,100,' + alpha + ')';
    }
  }

  function render() {
    if (!isVisible) return;
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    var dk = isDark();
    t += 0.01;

    // Spotlight
    if (spotlight) {
      if (mIn) {
        mx += (tmx - mx) * 0.08;
        my += (tmy - my) * 0.08;
        spotlight.style.left = mx + 'px';
        spotlight.style.top = my + 'px';
        spotlight.style.opacity = '1';
      } else {
        spotlight.style.opacity = '0';
      }
    }

    // ==== 1. ARCHIVAL SILK THREADS between nearby orbs ====
    var threadDist = W < 768 ? 100 : 140;
    for (var i = 0; i < orbs.length; i++) {
      for (var j = i + 1; j < orbs.length; j++) {
        var dx = orbs[i].x - orbs[j].x;
        var dy = orbs[i].y - orbs[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < threadDist) {
          var lineAlpha = (1 - dist / threadDist) * (dk ? 0.08 : 0.05);
          // Brighten threads near cursor
          if (mIn) {
            var midX = (orbs[i].x + orbs[j].x) / 2;
            var midY = (orbs[i].y + orbs[j].y) / 2;
            var mDist = Math.sqrt((midX - mx) * (midX - mx) + (midY - my) * (midY - my));
            if (mDist < 150) {
              lineAlpha += (1 - mDist / 150) * (dk ? 0.12 : 0.08);
            }
          }
          ctx.beginPath();
          ctx.moveTo(orbs[i].x, orbs[i].y);
          ctx.lineTo(orbs[j].x, orbs[j].y);
          ctx.strokeStyle = dk
            ? 'rgba(226,188,90,' + lineAlpha + ')'
            : 'rgba(184,134,11,' + lineAlpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // ==== 2. LUMINOUS BOKEH ORBS ====
    for (var oi = 0; oi < orbs.length; oi++) {
      var o = orbs[oi];
      o.pulsePhase += o.pulseSpeed;
      o.x += o.vx;
      o.y += o.vy;

      // Wrap boundaries softly
      if (o.x < -40) o.x = W + 30;
      if (o.x > W + 40) o.x = -30;
      if (o.y < -40) o.y = H + 30;
      if (o.y > H + 40) o.y = -30;

      // Pulsing alpha
      var pulse = 0.6 + 0.4 * Math.sin(o.pulsePhase);
      o.alpha = o.baseAlpha * pulse;
      o.r = o.baseR;

      // Cursor illumination: orbs near cursor glow brighter and grow
      if (mIn) {
        var odx = o.x - mx;
        var ody = o.y - my;
        var oDist = Math.sqrt(odx * odx + ody * ody);
        if (oDist < 180) {
          var prox = 1 - oDist / 180;
          o.alpha = Math.min(0.6, o.alpha + prox * (dk ? 0.35 : 0.25));
          o.r = o.baseR * (1 + prox * 0.3);
          // Gentle push
          if (oDist > 1) {
            o.x += (odx / oDist) * prox * 0.8;
            o.y += (ody / oDist) * prox * 0.8;
          }
        }
      }

      // Draw orb with soft radial gradient
      var grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      var col = getColor(o.hue, o.alpha, dk);
      var colCenter = getColor(o.hue, o.alpha * 1.5, dk);
      grad.addColorStop(0, colCenter);
      grad.addColorStop(0.5, col);
      grad.addColorStop(1, getColor(o.hue, 0, dk));

      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Outer soft halo for larger orbs
      if (o.baseR > 12) {
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = getColor(o.hue, o.alpha * 0.15, dk);
        ctx.fill();
      }
    }

    // ==== 3. CLICK BURST PARTICLES ====
    for (var bi = bursts.length - 1; bi >= 0; bi--) {
      var b = bursts[bi];
      b.x += b.vx;
      b.y += b.vy;
      b.vx *= 0.96;
      b.vy *= 0.96;
      b.life -= 0.02;
      b.alpha = b.life * 0.7;

      if (b.life <= 0) { bursts.splice(bi, 1); continue; }

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r * b.life, 0, Math.PI * 2);
      ctx.fillStyle = dk
        ? 'rgba(226,188,90,' + b.alpha + ')'
        : 'rgba(184,134,11,' + (b.alpha * 0.8) + ')';
      ctx.fill();
    }

    ctx.restore();
    animId = requestAnimationFrame(render);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) animId = requestAnimationFrame(render);
        else if (!isVisible && animId) { cancelAnimationFrame(animId); animId = null; }
      });
    }, { threshold: 0.1 });
    observer.observe(heroSection);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  animId = requestAnimationFrame(render);
}

// ---- Hero Slider (Home 1 & Home 2) ----
function initHeroSlider() {
  // 1. Home 1 Slider (Split 3-Slide with Dual-Image Gallery)
  const home1Section = document.getElementById('heroSliderSection') || document.querySelector('.hero-slider-section');
  if (home1Section) {
    const slides = home1Section.querySelectorAll('.hero-slide');
    const dots = home1Section.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');

    if (slides.length > 0) {
      let current = 0;
      let timer = null;
      const interval = 5000;

      function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
        dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
      }

      function next() {
        goToSlide(current + 1);
      }

      function prev() {
        goToSlide(current - 1);
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

      if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
          e.preventDefault();
          prev();
          startTimer();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
          e.preventDefault();
          next();
          startTimer();
        });
      }

      home1Section.addEventListener('mouseenter', stopTimer);
      home1Section.addEventListener('mouseleave', startTimer);

      startTimer();
    }
  }

  // 2. Home 2 Split Showcase Slider
  const track = document.getElementById('hero-slides-track');
  if (track) {
    const slides = track.querySelectorAll('.hero-split-slide');
    const dots = document.querySelectorAll('.hero-home2-dot');
    if (slides.length) {
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
  }
}

// ---- Appraisal Calculator & Certificate Anatomy ----
function initAppraisalCalculator() {
  const calcContainer = document.getElementById('appraisalCalculatorSection');
  if (!calcContainer) return;

  const feeDisplay = document.getElementById('calcFeeDisplay');
  const turnaroundDisplay = document.getElementById('calcTurnaroundDisplay');

  function calculate() {
    const activeScope = calcContainer.querySelector('#calcScopeGroup .calc-opt-btn.active');
    const activeEra = calcContainer.querySelector('#calcEraGroup .calc-opt-btn.active');

    const base = activeScope ? parseFloat(activeScope.getAttribute('data-base') || 25) : 25;
    const days = activeScope ? (activeScope.getAttribute('data-days') || '2 - 3 Business Days') : '2 - 3 Business Days';
    const mult = activeEra ? parseFloat(activeEra.getAttribute('data-mult') || 1) : 1;

    const total = Math.round(base * mult);
    if (feeDisplay) feeDisplay.textContent = total;
    if (turnaroundDisplay) turnaroundDisplay.textContent = days;
  }

  calcContainer.querySelectorAll('.calc-btn-group').forEach(group => {
    group.querySelectorAll('.calc-opt-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        group.querySelectorAll('.calc-opt-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        calculate();
      });
    });
  });

  calculate();
}

function initCertAnatomy() {
  const certSection = document.getElementById('certificateAnatomySection');
  if (!certSection) return;

  const pins = certSection.querySelectorAll('.cert-hotspot-pin');
  const items = certSection.querySelectorAll('.cert-feature-item');

  function setActive(targetId) {
    pins.forEach(pin => {
      if (pin.getAttribute('data-target') === targetId) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });

    items.forEach(item => {
      if (item.id === targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  pins.forEach(pin => {
    pin.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-target');
      if (target) setActive(target);
    });
  });

  items.forEach(item => {
    item.addEventListener('click', function() {
      setActive(this.id);
    });
  });
}

// ---- Contact Form Query Pre-fill ----
function initContactInquiry() {
  const params = new URLSearchParams(window.location.search);
  const inquiry = params.get('inquiry');
  if (!inquiry) return;

  const subjectSelect = document.getElementById('contactSubject');
  const messageArea = document.getElementById('contactMessage');

  if (subjectSelect) {
    subjectSelect.value = 'purchase';
  }
  if (messageArea) {
    messageArea.value = `Hello PhilaVault Team, I would like to inquire about acquiring "${inquiry}". Please provide provenance details, condition reports, and acquisition terms.`;
  }
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
  initPhilatelicParticles();
  initHome2PhilatelyAnimation();
  initAppraisalCalculator();
  initCertAnatomy();
  initContactInquiry();
});