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
  const canvas = document.getElementById('home2-philately-canvas');
  const heroSection = document.getElementById('hero-section');
  if (!canvas || !heroSection || !heroSection.classList.contains('hero-home2')) return;

  const spotlight = document.getElementById('heroHome2Spotlight');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    if (spotlight) spotlight.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let animId = null;
  let isVisible = true;

  // Mouse interaction state for spotlight & particle deflection
  let targetMouseX = -1000;
  let targetMouseY = -1000;
  let mouseX = -1000;
  let mouseY = -1000;
  let isMouseActive = false;

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function resize() {
    const rect = heroSection.getBoundingClientRect();
    width = Math.max(rect.width, 320);
    height = Math.max(rect.height, 400);
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = width < 768 ? 28 : 55;

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let type = 'dust';
      let size = 1.0 + Math.random() * 1.8;

      if (rand < 0.55) {
        type = 'dust';
        size = 1.0 + Math.random() * 1.8;
      } else if (rand < 0.82) {
        type = 'spark';
        size = 3.0 + Math.random() * 3.5;
      } else {
        type = 'stamp-glyph';
        size = 7.0 + Math.random() * 5.0;
      }

      const baseVy = -(0.18 + Math.random() * 0.35);

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: baseVy,
        baseVy: baseVy,
        size: size,
        type: type,
        alpha: 0.2 + Math.random() * 0.55,
        baseAlpha: 0.2 + Math.random() * 0.55,
        pulseSpeed: 0.015 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.012 + Math.random() * 0.02,
        wobbleAmp: 0.3 + Math.random() * 0.6,
        wobblePhase: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015
      });
    }
  }

  // Draw 4-point loupe glint / sparkle
  function drawSparkle(context, x, y, r, rot, alpha, dark) {
    context.save();
    context.translate(x, y);
    context.rotate(rot);
    context.fillStyle = dark
      ? `rgba(238, 205, 120, ${alpha})`
      : `rgba(184, 134, 11, ${alpha * 0.9})`;
    context.beginPath();
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      context.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      const halfAngle = angle + Math.PI / 4;
      context.lineTo(Math.cos(halfAngle) * (r * 0.22), Math.sin(halfAngle) * (r * 0.22));
    }
    context.closePath();
    context.fill();
    context.restore();
  }

  // Draw mini perforated stamp watermark glyph
  function drawStampGlyph(context, x, y, size, rot, alpha, dark) {
    context.save();
    context.translate(x, y);
    context.rotate(rot);
    const strokeStyle = dark
      ? `rgba(226, 188, 90, ${alpha * 0.6})`
      : `rgba(168, 118, 22, ${alpha * 0.5})`;
    context.strokeStyle = strokeStyle;
    context.lineWidth = 1;
    context.setLineDash([2, 2]);
    const w = size * 1.1;
    const h = size * 1.35;
    context.strokeRect(-w / 2, -h / 2, w, h);
    context.setLineDash([]);
    // Inner tiny Maltese pip
    context.fillStyle = strokeStyle;
    context.beginPath();
    context.arc(0, 0, 1.2, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  // Mouse tracking
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    targetMouseX = e.clientX - rect.left;
    targetMouseY = e.clientY - rect.top;
    isMouseActive = true;
  });

  heroSection.addEventListener('mouseleave', () => {
    isMouseActive = false;
  });

  function render() {
    if (!isVisible) return;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const dark = isDark();

    // Smooth mouse spotlight motion
    if (spotlight) {
      if (isMouseActive) {
        mouseX += (targetMouseX - mouseX) * 0.1;
        mouseY += (targetMouseY - mouseY) * 0.1;
        spotlight.style.left = mouseX + 'px';
        spotlight.style.top = mouseY + 'px';
        spotlight.style.opacity = '1';
      } else {
        spotlight.style.opacity = '0';
      }
    }

    particles.forEach(p => {
      p.wobblePhase += p.wobbleSpeed;
      p.pulsePhase += p.pulseSpeed;
      p.rotation += p.rotSpeed;

      const currentAlpha = Math.max(0.05, Math.min(0.9, p.baseAlpha * (0.65 + 0.35 * Math.sin(p.pulsePhase))));
      p.x += Math.sin(p.wobblePhase) * p.wobbleAmp;
      p.y += p.vy;

      // Mouse gentle deflection
      if (isMouseActive) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;
        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.2;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      // Recycle when offscreen
      if (p.y < -20) {
        p.y = height + 15;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 10;
      if (p.x > width + 20) p.x = -10;

      // Render based on particle type
      if (p.type === 'dust') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(226, 188, 90, ${currentAlpha})`
          : `rgba(184, 134, 11, ${currentAlpha * 0.8})`;
        ctx.fill();
      } else if (p.type === 'spark') {
        drawSparkle(ctx, p.x, p.y, p.size, p.rotation, currentAlpha, dark);
      } else if (p.type === 'stamp-glyph') {
        drawStampGlyph(ctx, p.x, p.y, p.size, p.rotation, currentAlpha, dark);
      }
    });

    ctx.restore();
    animId = requestAnimationFrame(render);
  }

  // IntersectionObserver to pause when off-screen
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) {
          animId = requestAnimationFrame(render);
        } else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
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
});