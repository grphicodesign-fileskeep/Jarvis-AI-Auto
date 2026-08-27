/**
 * GRAPHICO — Master Application Controller
 * Handles SPA Transitions, GSAP Choreography, Spotlight Cursor, and Interactive UI Elements
 */

document.addEventListener('DOMContentLoaded', () => {
  initSPARouter();
  initCursorSpotlight();
  initMarqueeTicker();
  initFAQAccordion();
  initTeamSlider();
  initProposalForm();
  initNavbarScroll();
});

/* ==========================================================================
   1. SPA ROUTER & SEAMLESS GSAP TRANSITIONS
   ========================================================================== */
function initSPARouter() {
  const navLinks = document.querySelectorAll('[data-route]');
  const pageViews = document.querySelectorAll('.page-view');
  let currentRoute = 'home';
  let isTransitioning = false;

  function switchPage(targetRoute) {
    if (targetRoute === currentRoute || isTransitioning) return;
    const currentView = document.getElementById(`page-${currentRoute}`);
    const targetView = document.getElementById(`page-${targetRoute}`);
    if (!targetView) return;

    isTransitioning = true;

    // Update Nav Active State
    navLinks.forEach(link => {
      if (link.getAttribute('data-route') === targetRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Outgoing Animation: Slide Down & Fade Out
    const outgoingElements = currentView.querySelectorAll('.liquid-glass, .section-header-block, .hero-stage > *');
    
    if (outgoingElements.length > 0 && window.gsap) {
      gsap.to(outgoingElements, {
        y: 40,
        opacity: 0,
        duration: 0.35,
        stagger: 0.03,
        ease: 'power2.in',
        onComplete: () => {
          currentView.classList.remove('active');
          targetView.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'instant' });

          // Incoming Animation: Stagger In
          const incomingElements = targetView.querySelectorAll('.liquid-glass, .section-header-block, .hero-stage > *');
          gsap.fromTo(incomingElements, 
            { y: 35, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.55, 
              stagger: 0.05, 
              ease: 'power3.out',
              onComplete: () => {
                currentRoute = targetRoute;
                isTransitioning = false;
              }
            }
          );
        }
      });
    } else {
      currentView.classList.remove('active');
      targetView.classList.add('active');
      currentRoute = targetRoute;
      isTransitioning = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update URL hash
    history.pushState(null, '', `#${targetRoute}`);
  }

  // Click Listener for Data-Routes
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-route');
      switchPage(target);
    });
  });

  // Handle Initial Hash on Load
  const initialHash = window.location.hash.replace('#', '');
  if (['home', 'pricing', 'portfolio', 'about'].includes(initialHash)) {
    switchPage(initialHash);
  } else {
    // Initial Stagger on Home Page
    const homeView = document.getElementById('page-home');
    if (homeView && window.gsap) {
      const homeElements = homeView.querySelectorAll('.liquid-glass, .hero-stage > *');
      gsap.fromTo(homeElements, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: 'power3.out' }
      );
    }
  }

  // Popstate Listener
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    switchPage(hash);
  });
}

/* ==========================================================================
   2. CURSOR SPOTLIGHT TRACKER ON GLASS CONTAINERS
   ========================================================================== */
function initCursorSpotlight() {
  const spotlightCards = document.querySelectorAll('.liquid-glass-spotlight');

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3. INFINITE CLIENT PARTNER MARQUEE TICKER
   ========================================================================== */
function initMarqueeTicker() {
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (!marqueeTrack) return;

  // Duplicate children for infinite continuous scroll
  const clone = marqueeTrack.innerHTML;
  marqueeTrack.innerHTML += clone;

  let pos = 0;
  const speed = 0.85;

  function ticker() {
    pos -= speed;
    if (pos <= -marqueeTrack.scrollWidth / 2) {
      pos = 0;
    }
    marqueeTrack.style.transform = `translate3d(${pos}px, 0, 0)`;
    requestAnimationFrame(ticker);
  }

  requestAnimationFrame(ticker);
}

/* ==========================================================================
   4. INTERACTIVE FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqBars = document.querySelectorAll('.faq-glass-bar');

  faqBars.forEach(bar => {
    const questionBtn = bar.querySelector('.faq-question-btn');
    questionBtn.addEventListener('click', () => {
      const isExpanded = bar.classList.contains('expanded');
      
      // Collapse others for clean focus
      faqBars.forEach(otherBar => {
        if (otherBar !== bar) otherBar.classList.remove('expanded');
      });

      if (isExpanded) {
        bar.classList.remove('expanded');
      } else {
        bar.classList.add('expanded');
      }
    });
  });
}

/* ==========================================================================
   5. TEAM HORIZONTAL DRAG & SCROLL SLIDER
   ========================================================================== */
function initTeamSlider() {
  const slider = document.getElementById('teamScrollTrack');
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
}

/* ==========================================================================
   6. PROPOSAL FORM INTERACTIVE SUBMISSION
   ========================================================================== */
function initProposalForm() {
  const form = document.getElementById('graphicoProposalForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Proposal Request Dispatched!';
      submitBtn.style.background = '#34D399';
      submitBtn.style.color = '#000000';
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '#FFFFFF';
        submitBtn.style.color = '#000000';
        submitBtn.disabled = false;
      }, 4000);
    }, 1200);
  });
}

/* ==========================================================================
   7. NAVBAR SCROLL GLASS INTENSITY
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
