const contactForm = document.getElementById('contact-form');
const preventReload = (e) => {
  e.preventDefault();
}
contactForm.addEventListener('submit', preventReload);