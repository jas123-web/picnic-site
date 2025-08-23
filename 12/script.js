// Smooth scroll and small interactivity
(function() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const body = document.body;

  navToggle.addEventListener('click', () => {
    body.classList.toggle('mobile-open');
  });

  // Close mobile menu on link click
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      body.classList.remove('mobile-open');
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you shortly.");
    form.reset();
  });

  // Current year
  document.getElementById('year').textContent = new Date().getFullYear();
})();