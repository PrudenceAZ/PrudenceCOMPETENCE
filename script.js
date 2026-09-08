const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* WhatsApp buttons: build the wa.me link from data-wa text on click */
document.querySelectorAll('[data-wa]').forEach((btn) => {
  const message = btn.getAttribute('data-wa');
  btn.href = `https://wa.me/33775454614?text=${encodeURIComponent(message)}`;
});

/* Scroll reveal: sections and cards fade/rise into view once */
const revealTargets = document.querySelectorAll(
  '.section-head, .offer-card, .compare-card, .proof-card, .booking-card, .timeline-step, .social-item, .student-card, .timeline-note, .hero-content, .hero-stats, .hero-photo-col'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

/* Count-up animation for hero stats */
const countEls = document.querySelectorAll('[data-count-to]');
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.countTo, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
countEls.forEach((el) => countObserver.observe(el));

/* Interactive bio timeline: clicking or scrolling to a step swaps the photo and caption */
const timelineSteps = document.querySelectorAll('.timeline-step');
const parcoursCaption = document.getElementById('parcoursCaption');
const parcoursImg = document.getElementById('parcoursImg');

function setActiveStep(step) {
  timelineSteps.forEach((s) => s.classList.remove('is-active'));
  step.classList.add('is-active');
  if (parcoursCaption) {
    parcoursCaption.textContent = step.dataset.caption;
  }
  if (parcoursImg && step.dataset.image && parcoursImg.src.indexOf(step.dataset.image) === -1) {
    parcoursImg.style.opacity = '0';
    setTimeout(() => {
      parcoursImg.src = step.dataset.image;
      parcoursImg.style.opacity = '1';
    }, 150);
  }
}

timelineSteps.forEach((step) => {
  step.addEventListener('click', () => setActiveStep(step));
});

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveStep(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);
timelineSteps.forEach((step) => timelineObserver.observe(step));

/* Subtle tilt effect on the bio photo, following the cursor */
const parcoursPhoto = document.getElementById('parcoursPhoto');
if (parcoursPhoto && window.matchMedia('(pointer: fine)').matches) {
  parcoursPhoto.addEventListener('mousemove', (e) => {
    const rect = parcoursPhoto.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    parcoursPhoto.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });

  parcoursPhoto.addEventListener('mouseleave', () => {
    parcoursPhoto.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
  });
}

/* Ambient background: subtle stars and a slow particle rain. */
const starsContainer = document.querySelector('.ambient-stars');
const rainContainer = document.querySelector('.ambient-rain');

if (starsContainer) {
  for (let i = 0; i < 65; i += 1) {
    const star = document.createElement('span');
    const size = 1 + Math.random() * 2;

    star.className = 'ambient-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 8}s`;
    star.style.animationDuration = `${5 + Math.random() * 8}s`;
    starsContainer.appendChild(star);
  }
}

if (rainContainer) {
  const particleCount = window.innerWidth < 768 ? 50 : 100;

  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement('span');
    const size = Math.random() < 0.7 ? 1.2 : 1.2 + Math.random() * 1.6;

    particle.className = `ambient-particle${i % 8 === 0 ? ' gold' : ''}`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${7 + Math.random() * 10}s`;
    particle.style.animationDelay = `${-Math.random() * 15}s`;
    particle.style.setProperty('--drift', `${Math.random() * 70 - 35}px`);
    rainContainer.appendChild(particle);
  }
}
