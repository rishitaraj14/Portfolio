// Simple form submission simulation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // In a real app, you’d send data to a server here.
  formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
  form.reset();

  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});
