// ========== GSAP SETUP & INITIALIZATION ==========
gsap.registerPlugin(ScrollTrigger);

// ========== SMOOTH SCROLL ANIMATION ==========
const smoothScroll = () => {
  gsap.utils.toArray('[data-animate]').forEach(element => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
};

// ========== HERO SECTION STAGGER ANIMATION ==========
const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.from('.hero-tag', {
    duration: 0.6,
    opacity: 0,
    y: 30,
    ease: 'power2.out'
  })
  .from('.hero-title', {
    duration: 0.8,
    opacity: 0,
    y: 40,
    ease: 'power2.out'
  }, '-=0.3')
  .from('.hero-subtitle', {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'power2.out'
  }, '-=0.4')
  .from('.hero-badges', {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'power2.out'
  }, '-=0.4')
  .from('.hero-ctas .cta-button', {
    duration: 0.6,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: 'power2.out'
  }, '-=0.4');
};

// ========== ABOUT SECTION ANIMATION ==========
const aboutAnimation = () => {
  const aboutContent = document.querySelector('.about-content');

  if (aboutContent) {
    gsap.to(aboutContent, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 50%',
        toggleActions: 'play none none none'
      }
    });
  }
};

// ========== TREATMENT CARDS HOVER & ANIMATION ==========
const treatmentCardsAnimation = () => {
  const cards = document.querySelectorAll('.treatment-card');

  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        boxShadow: '0 12px 30px rgba(107, 26, 58, 0.15)',
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
        duration: 0.3
      });
    });
  });
};

// ========== STATS COUNTER ANIMATION ==========
const statsAnimation = () => {
  const stats = document.querySelectorAll('.stat-number');

  stats.forEach(stat => {
    const finalValue = stat.textContent;
    const numericValue = parseFloat(finalValue);

    gsap.from(stat, {
      textContent: 0,
      duration: 2,
      snap: { textContent: 1 },
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      onUpdate: function() {
        if (finalValue.includes('k')) {
          stat.textContent = (this.progress() * numericValue).toFixed(1) + 'k';
        } else if (finalValue.includes('%')) {
          stat.textContent = Math.round(this.progress() * numericValue) + '%';
        } else {
          stat.textContent = Math.round(this.progress() * numericValue);
        }
      },
      onComplete: () => {
        stat.textContent = finalValue;
      }
    });
  });
};

// ========== TESTIMONIALS ANIMATION ==========
const testimonialsAnimation = () => {
  const testimonials = document.querySelectorAll('.testimonial-card');

  testimonials.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
};

// ========== SMOOTH NAVIGATION SCROLL ==========
const navLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#' || href === '#home') {
        return;
      }

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
};

// ========== BUTTON INTERACTIONS ==========
const buttonInteractions = () => {
  const buttons = document.querySelectorAll('.cta-button');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('click', () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1
      });
    });
  });
};

// ========== PARALLAX EFFECT ==========
const parallaxEffect = () => {
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    gsap.to('.hero-background', {
      y: (index, target) => -window.innerHeight * 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false
      }
    });
  }
};

// ========== HEADER SCROLL EFFECT ==========
const headerScrollEffect = () => {
  const header = document.querySelector('.header');
  let lastScrollY = 0;

  const updateHeader = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      header.style.borderBottomColor = 'rgba(107, 26, 58, 0.15)';
      header.style.backdropFilter = 'blur(12px)';
    } else {
      header.style.borderBottomColor = 'rgba(107, 26, 58, 0.1)';
      header.style.backdropFilter = 'blur(8px)';
    }

    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
};

// ========== BEFORE & AFTER SLIDER ==========
const beforeAfterSlider = () => {
  const sliders = document.querySelectorAll('.before-after-slider');

  sliders.forEach(slider => {
    const beforeImage = slider.querySelector('.before-image');
    const afterImage = slider.querySelector('.after-image');
    const handle = slider.querySelector('.slider-handle');

    if (!beforeImage || !afterImage || !handle) return;

    const updateSlider = (e) => {
      const rect = slider.getBoundingClientRect();
      let x = e.clientX - rect.left;

      if (e.type.includes('touch')) {
        x = e.touches[0].clientX - rect.left;
      }

      x = Math.max(0, Math.min(x, rect.width));
      const percentage = (x / rect.width) * 100;

      afterImage.style.width = percentage + '%';
      handle.style.left = percentage + '%';
    };

    slider.addEventListener('mousemove', updateSlider);
    slider.addEventListener('touchmove', updateSlider, { passive: true });

    // Click anywhere on the slider to move the handle
    slider.addEventListener('click', updateSlider);
  });
};

// ========== LAZY LOAD VIDEOS ==========
const lazyLoadVideos = () => {
  const videos = document.querySelectorAll('video[data-src]');

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const src = video.getAttribute('data-src');

        if (src) {
          video.src = src;
          video.load();
          observer.unobserve(video);
        }
      }
    });
  });

  videos.forEach(video => videoObserver.observe(video));
};

// ========== INITIALIZE INTERSECTION OBSERVER FOR ANIMATIONS ==========
const initializeAnimationTargets = () => {
  const elements = document.querySelectorAll('section');

  elements.forEach(element => {
    if (!element.classList.contains('hero')) {
      const children = element.querySelectorAll('h2, p, .treatment-card, .testimonial-card, .stat');
      children.forEach(child => {
        if (!child.hasAttribute('data-animate')) {
          child.setAttribute('data-animate', '');
        }
      });
    }
  });
};

// ========== ACCESSIBILITY: REDUCE MOTION ==========
const respectReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0.5);
  }
};

// ========== MAIN INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initializeAnimationTargets();
  respectReducedMotion();

  heroAnimation();
  aboutAnimation();
  treatmentCardsAnimation();
  statsAnimation();
  testimonialsAnimation();
  smoothScroll();

  navLinks();
  buttonInteractions();
  parallaxEffect();
  headerScrollEffect();
  beforeAfterSlider();
  lazyLoadVideos();

  // Refresh ScrollTrigger after all content is loaded
  ScrollTrigger.refresh();
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

// ========== UTILITY: ADD DATA-ANIMATE TO ELEMENTS ==========
// This automatically animates elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-animate]').forEach(el => {
    animationObserver.observe(el);
  });
});