// Scroll-triggered animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // Create intersection observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements to animate on scroll
  const animateElements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale-in');
  
  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Add stagger effect for card groups
  const cardGroups = document.querySelectorAll('.scroll-stagger-group');
  cardGroups.forEach(group => {
    const cards = group.querySelectorAll('.scroll-stagger-item');
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });
  });
});