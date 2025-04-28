// Fade-in on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 80;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Sticky navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 60) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Show order card on Shop Now click
const shopNowBtn = document.getElementById('shopNowBtn');
const orderCard = document.getElementById('orderCard');
const orderCloseBtn = document.getElementById('orderCloseBtn');

if (shopNowBtn && orderCard && orderCloseBtn) {
  shopNowBtn.addEventListener('click', function(e) {
    e.preventDefault();
    orderCard.style.display = 'flex';
  });
  orderCloseBtn.addEventListener('click', function() {
    orderCard.style.display = 'none';
  });
  // Optional: Close on background click
  orderCard.addEventListener('click', function(e) {
    if (e.target === orderCard) {
      orderCard.style.display = 'none';
    }
  });
}
