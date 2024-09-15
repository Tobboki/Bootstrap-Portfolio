/* Scroll Section active link */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;
  
  sections.forEach(currentSection => {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 180;
    const sectionId = currentSection.getAttribute('id');
    const sectionClass = document.querySelector('.nav-list a[href*="' + sectionId + '"]');
    
    // Ensure sectionClass exists before trying to add/remove the class
    if (sectionClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active-nav-link');
      } else {
        sectionClass.classList.remove('active-nav-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);
/* Scroll Section active link End */

/* Scroll Reveal Animations */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

/* home section */
sr.reveal(`.home-text`);
sr.reveal(`.home-img`, {
  origin: 'bottom',
  delay: 700
});

/* About section */
sr.reveal(`.about-text`, {
  origin: 'right',
});
sr.reveal(`.about-img`, {
  origin: 'left',
  delay: 700
});

/* service Section */
sr.reveal(`.service-card`, {
  interval: 200
});

/* service Section */
sr.reveal(`.service-card`, {
  interval: 200
});

/* work Section */
sr.reveal(`.work-card`, {
  interval: 200
});

/* Testimonials Section */
sr.reveal(`.testimonial-carousel`, {
  origin: 'bottom'
});

/* Contact Section */
sr.reveal(`.contact-name-input`, {
  origin: 'left',
  delay: 400
});

sr.reveal(`.contact-email-input`, {
  origin: 'left',
  delay: 700
});

sr.reveal(`.contact-massage-input`, {
  origin: 'left',
  delay: 1000
});

sr.reveal(`.contact-submit-button`, {
  origin: 'bottom',
  delay: 1100
});

/* Footer Section */
sr.reveal(`.footer`);

/* Scroll Reveal Animations End */

/* Scroll Up */
const scrollUp = () => {
  const scrollUpArrow = document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUpArrow.classList.add('show-scroll-up')
  : scrollUpArrow.classList.remove('show-scroll-up');
};

window.addEventListener('scroll', scrollUp);
/* Scroll Up End*/