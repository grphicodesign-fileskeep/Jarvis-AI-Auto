/**
 * Dental Template 2 - Interactive Engine
 * Handles Theme Toggling (DentaCure / Dentiva), Animated Counters, Booking Modal,
 * Doctor Details Modal, Testimonial Carousel, and Mobile Navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initActiveNav();
  initTheme();
  initCounters();
  initBookingModal();
  initDoctorModals();
  initDiscountModal();
  initMobileNav();
  initCarousels();
  initFAQAccordion();
  initBeforeAfterSlider();
});

// ==========================================
// 0. ACTIVE NAVIGATION LINK DETECTOR
// ==========================================
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize href
    const pageName = href.split('#')[0].split('/').pop();
    
    if (pageName === currentPath || (currentPath === '' && pageName === 'index.html')) {
      if (link.classList.contains('nav-link')) {
        link.classList.add('text-neutral-900', 'font-bold', 'border-b-2', 'border-[#5F8239]', 'pb-1');
        link.classList.remove('text-neutral-600');
      } else if (link.classList.contains('mobile-nav-link')) {
        link.classList.add('text-[#5F8239]', 'font-bold');
      }
    }
  });
}

// ==========================================
// 1. THEME TOGGLE (DentaCure Green vs Tooth D' Care Teal)
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeLabel = document.getElementById('theme-current-label');
  const logoIcon = document.getElementById('navbar-logo-icon');
  const brandName = document.getElementById('navbar-brand-name');
  const brandSubtitle = document.getElementById('navbar-brand-sub');
  const footerBrand = document.getElementById('footer-brand-name');
  const footerSubtitle = document.getElementById('footer-brand-sub');
  const heroBadge = document.getElementById('hero-date-badge');
  const footerLocation = document.getElementById('footer-location-text');
  const footerPhone = document.getElementById('footer-phone-text');
  const footerEmail = document.getElementById('footer-email-text');

  const savedTheme = localStorage.getItem('dc2_theme') || 'dentacure';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dentacure';
      const next = current === 'dentacure' ? 'dentiva' : 'dentacure';
      applyTheme(next);
      localStorage.setItem('dc2_theme', next);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dentiva') {
      if (themeLabel) themeLabel.textContent = '🍃 Tooth D\' Care Teal';
      if (brandName) brandName.innerHTML = 'Tooth D\' Care';
      if (brandSubtitle) brandSubtitle.textContent = 'ADVANCED DENTAL CARE';
      if (footerBrand) footerBrand.innerHTML = 'Tooth D\' Care';
      if (footerSubtitle) footerSubtitle.textContent = 'ADVANCED DENTAL CARE';
      if (heroBadge) heroBadge.textContent = '🌿 Grand Plaza Bldg, Sevilla, San Fernando • Mon-Sat 9AM-5:30PM | Sun 1-5PM';
      if (footerLocation) footerLocation.textContent = 'Grand Plaza Building, Sevilla, San Fernando City, La Union';
      if (footerPhone) footerPhone.textContent = '(0976) 485 7648 / 072 6108 681';
      if (footerEmail) footerEmail.textContent = 'care@toothdcare.com';
      if (logoIcon) {
        logoIcon.innerHTML = `
          <svg class="w-8 h-8 theme-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2 7.5.5 2.5 1.5 4.5 4 4.5s3.5-2 4-4.5c.5-2.5 2-4.5 2-7.5 0-3.5-2.5-6-6-6z"/>
            <path d="M9 8.5c1 1 5 1 6 0"/>
          </svg>
        `;
      }
    } else {
      if (themeLabel) themeLabel.textContent = '🌿 DentaCure Green';
      if (brandName) brandName.innerHTML = '<span class="theme-accent font-extrabold">Denta</span>Cure';
      if (brandSubtitle) brandSubtitle.textContent = 'DENTAL CLINIC • LA UNION';
      if (footerBrand) footerBrand.innerHTML = '<span class="theme-accent font-extrabold">Denta</span>Cure';
      if (footerSubtitle) footerSubtitle.textContent = 'DENTAL CLINIC • LA UNION';
      if (heroBadge) heroBadge.textContent = '🌿 Grand Plaza Bldg, Sevilla, San Fernando • Mon-Sat 9AM-5:30PM | Sun 1-5PM';
      if (footerLocation) footerLocation.textContent = '2nd Floor, Unit 1, Grand Plaza Building, Brgy. Sevilla, San Fernando City, La Union, 2500';
      if (footerPhone) footerPhone.textContent = '(0976) 485 7648 / 072 6108 681';
      if (footerEmail) footerEmail.textContent = 'toothdcarelu@gmail.com';
      if (logoIcon) {
        logoIcon.innerHTML = `
          <img src="assets/dentacure_logo.svg" alt="DentaCure Dental Clinic" class="h-10 w-auto object-contain" />
        `;
      }
    }
  }
}

// ==========================================
// 2. ANIMATED NUMBER COUNTER
// ==========================================
function initCounters() {
  const statElements = document.querySelectorAll('.stat-number');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.getAttribute('data-target') || el.innerText, 10);
        animateCounter(el, targetVal);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const duration = 1600;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.innerText = target;
        clearInterval(timer);
      } else {
        el.innerText = Math.floor(current);
      }
    }, stepTime);
  }
}

// ==========================================
// 3. BOOKING MODAL
// ==========================================
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const openButtons = document.querySelectorAll('[data-action="open-booking"]');
  const closeButton = document.getElementById('close-booking-modal');
  const backdrop = document.getElementById('booking-modal-backdrop');
  const form = document.getElementById('appointment-form');
  const successState = document.getElementById('booking-success-state');
  const refCodeSpan = document.getElementById('booking-ref-code');

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (form) form.classList.remove('hidden');
      if (successState) successState.classList.add('hidden');
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeButton) closeButton.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Time slot active pill selection
  const timePills = document.querySelectorAll('.time-slot-btn');
  const hiddenTimeInput = document.getElementById('selected-time-slot');

  timePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timePills.forEach(p => p.classList.remove('theme-accent-bg', 'text-white'));
      pill.classList.add('theme-accent-bg', 'text-white');
      if (hiddenTimeInput) hiddenTimeInput.value = pill.getAttribute('data-time') || pill.innerText;
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const randomCode = 'DC2-' + Math.floor(1000 + Math.random() * 9000);
      if (refCodeSpan) refCodeSpan.textContent = randomCode;

      form.classList.add('hidden');
      if (successState) successState.classList.remove('hidden');
    });
  }
}

// ==========================================
// 4. DOCTOR BIO MODALS (Real DentaCure Clinicians)
// ==========================================
const doctorData = {
  micah: {
    name: 'Dr. Micah Redilla',
    role: 'Lead Dental Surgeon & General Practitioner',
    credentials: 'DMD • General Dentistry, Endodontics & Oral Surgery',
    bio: 'Dr. Micah Redilla leads dental healthcare at DentaCure with an unwavering commitment to pain-free treatments, tooth-preserving restorative dentistry, gentle extractions, and compassionate patient care.',
    image: 'assets/dentist_micah_redilla.png'
  },
  pauline: {
    name: 'Dr. Pauline Trinidad',
    role: 'Cosmetic Dentist & Smile Architect',
    credentials: 'DMD, CODAC The Smile Architect • Aesthetic Makeovers & Veneers',
    bio: 'Specializing in transformative aesthetic dentistry, Dr. Pauline Trinidad masterfully crafts radiant smiles with composite and porcelain veneers, laser teeth whitening, and cosmetic smile alignment.',
    image: 'assets/dentist_pauline_trinidad.png'
  },
  clinic_team: {
    name: 'DentaCure Surgical & Clinical Team',
    role: 'Certified Dental Assistants & Hygienists',
    credentials: 'Hospital-Grade Autoclave Sterilization & Chairside Care',
    bio: 'Our caring and attentive clinical nursing team ensures patient safety, rigorous multi-stage instrument sterilization, and a gentle, welcoming environment for every appointment.',
    image: 'assets/dentacure_clinic_interior.jpg'
  },
  pediatric: {
    name: 'Pediatric & Preventive Care Unit',
    role: 'Child-Friendly Fear-Free Dentistry',
    credentials: 'Specialized in Pediatric Comfort & Dinosaur Dino Shades',
    bio: 'Dedicated to helping children build positive dental habits for life! Our playful approach with dinosaur sunglasses, gentle chairside explanations, and zero-fear numbing keeps kids laughing and relaxed.',
    image: 'assets/dentacure_patient_kids_glasses.jpg'
  }
};

function initDoctorModals() {
  const modal = document.getElementById('doctor-modal');
  const closeBtn = document.getElementById('close-doctor-modal');
  const backdrop = document.getElementById('doctor-modal-backdrop');
  const cards = document.querySelectorAll('[data-doctor-id]');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-doctor-id');
      const doc = doctorData[id];
      if (doc) {
        const imgEl = document.getElementById('doc-modal-img');
        const nameEl = document.getElementById('doc-modal-name');
        const roleEl = document.getElementById('doc-modal-role');
        const credEl = document.getElementById('doc-modal-credentials');
        const bioEl = document.getElementById('doc-modal-bio');

        if (imgEl) imgEl.src = doc.image;
        if (nameEl) nameEl.textContent = doc.name;
        if (roleEl) roleEl.textContent = doc.role;
        if (credEl) credEl.textContent = doc.credentials;
        if (bioEl) bioEl.textContent = doc.bio;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
}

// ==========================================
// 4.5 INTERACTIVE BEFORE & AFTER SLIDER
// ==========================================
function initBeforeAfterSlider() {
  const sliderContainers = document.querySelectorAll('.ba-slider-container');

  sliderContainers.forEach(container => {
    const handle = container.querySelector('.ba-slider-handle');
    const afterImage = container.querySelector('.ba-after-layer');
    if (!handle || !afterImage) return;

    let isDragging = false;

    function setSliderPosition(x) {
      const rect = container.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      if (pos < 0.05) pos = 0.05;
      if (pos > 0.95) pos = 0.95;

      const percentage = pos * 100;
      handle.style.left = `${percentage}%`;
      afterImage.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
    }

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch support for mobile devices
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}

// ==========================================
// 5. DISCOUNT PLAN MODAL
// ==========================================
function initDiscountModal() {
  const modal = document.getElementById('discount-modal');
  const openBtns = document.querySelectorAll('[data-action="open-discount"]');
  const closeBtn = document.getElementById('close-discount-modal');
  const backdrop = document.getElementById('discount-modal-backdrop');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
}

// ==========================================
// 6. MOBILE NAVIGATION DRAWER
// ==========================================
function initMobileNav() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

// ==========================================
// 7. CAROUSEL CONTROLS
// ==========================================
function initCarousels() {
  // Testimonials Carousel scroll
  const testContainer = document.getElementById('testimonials-track');
  const testPrev = document.getElementById('test-prev-btn');
  const testNext = document.getElementById('test-next-btn');

  if (testContainer && testPrev && testNext) {
    testPrev.addEventListener('click', () => {
      testContainer.scrollBy({ left: -360, behavior: 'smooth' });
    });
    testNext.addEventListener('click', () => {
      testContainer.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // Doctor grid horizontal scroll on mobile
  const docContainer = document.getElementById('doctors-track');
  const docPrev = document.getElementById('doc-prev-btn');
  const docNext = document.getElementById('doc-next-btn');

  if (docContainer && docPrev && docNext) {
    docPrev.addEventListener('click', () => {
      docContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    docNext.addEventListener('click', () => {
      docContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
}

// ==========================================
// 8. FAQ ACCORDION LOGIC
// ==========================================
function initFAQAccordion() {
  const toggleButtons = document.querySelectorAll('.faq-toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.faq-item-card');
      const panel = card.querySelector('.faq-answer-panel');
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other panels in the container
      document.querySelectorAll('.faq-item-card').forEach(otherCard => {
        if (otherCard !== card) {
          const otherBtn = otherCard.querySelector('.faq-toggle-btn');
          const otherPanel = otherCard.querySelector('.faq-answer-panel');
          const otherIcon = otherCard.querySelector('.faq-icon');
          if (otherBtn && otherPanel) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherPanel.style.maxHeight = '0px';
            if (otherIcon) {
              otherIcon.textContent = '+';
              otherIcon.style.transform = 'rotate(0deg)';
              otherIcon.classList.remove('bg-neutral-900', 'text-white');
              otherIcon.classList.add('bg-neutral-100', 'text-neutral-600');
            }
          }
        }
      });

      // Toggle current panel
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0px';
        if (icon) {
          icon.textContent = '+';
          icon.style.transform = 'rotate(0deg)';
          icon.classList.remove('bg-neutral-900', 'text-white');
          icon.classList.add('bg-neutral-100', 'text-neutral-600');
        }
      } else {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = (panel.scrollHeight + 30) + 'px';
        if (icon) {
          icon.textContent = '−';
          icon.style.transform = 'rotate(180deg)';
          icon.classList.remove('bg-neutral-100', 'text-neutral-600');
          icon.classList.add('bg-neutral-900', 'text-white');
        }
      }
    });
  });
}

