const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');
const modal = document.getElementById('offerModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');
const serviceCards = document.querySelectorAll('.service-card');

const offers = {
  ia: {
    title: 'Maîtrise des IA génératives de A à Z',
    price: '99 000 FCFA',
    description: 'Un programme pratique pour apprendre à utiliser l’intelligence artificielle générative dans votre activité, votre communication et votre productivité.',
    bullets: [
      'Comprendre l’usage réel des IA génératives',
      'Créer du contenu, des idées, des scripts et des supports marketing',
      'Automatiser certaines tâches répétitives',
      'Recevoir un accompagnement simple, concret et orienté résultats'
    ],
    cta: 'Je veux cette offre',
    link: 'https://wa.me/+22957318891'
  },
  ads: {
    title: 'Publicité Facebook Ads & TikTok Ads',
    price: '249 000 FCFA',
    description: 'Une offre pensée pour apprendre à publier intelligemment, créer des campagnes et faire décoller la visibilité de votre activité.',
    bullets: [
      'Comprendre la logique de la publicité sur Facebook et TikTok',
      'Créer des campagnes plus efficaces',
      'Optimiser les messages et les visuels pour mieux convertir',
      'Recevoir des recommandations concrètes pour votre niche'
    ],
    cta: 'Je veux cette offre',
    link: 'https://wa.me/+22957318891'
  },
  shop: {
    title: 'Création de boutique en ligne + pack marketing',
    price: '380 000 FCFA',
    description: 'Une offre complète pour créer une boutique en ligne plus professionnelle, plus claire et mieux pensée pour vendre.',
    bullets: [
      'Structurer votre offre et votre positionnement',
      'Créer une boutique plus attractive et cohérente',
      'Mettre en place une stratégie marketing de base',
      'Recevoir un accompagnement jusqu’à la mise en ligne'
    ],
    cta: 'Je veux cette offre',
    link: 'https://wa.me/+22957318891'
  },
  full: {
    title: 'Accompagnement full stack – Pack complet',
    price: '500 000 FCFA',
    description: 'Le pack premium pour une croissance plus rapide et plus structurée : IA, publicité, image de marque, boutique et stratégie globale.',
    bullets: [
      'Un accompagnement global et personnalisé',
      'IA, publicité, boutique et marketing dans une seule approche',
      'Des conseils concrets pour mieux vendre',
      'Un suivi plus complet pour passer à un niveau supérieur'
    ],
    cta: 'Je veux ce pack',
    link: 'https://wa.me/+22957318891'
  }
};

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

function openModal(offerKey) {
  const offer = offers[offerKey];
  if (!offer || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <h3>${offer.title}</h3>
    <p class="price">${offer.price}</p>
    <p>${offer.description}</p>
    <ul>
      ${offer.bullets.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    <a href="${offer.link}" target="_blank" rel="noopener" class="btn btn-primary">${offer.cta}</a>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

serviceCards.forEach((card) => {
  card.addEventListener('click', () => {
    openModal(card.dataset.offer);
  });
});

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
