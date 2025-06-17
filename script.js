// Example: Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close dropdown when any link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save user preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load user preference on reload
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
// Newsletter form submission
const form = document.getElementById('newsletter-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value;
  alert(`Thank you for subscribing, ${email}!`);
  form.reset();
});
