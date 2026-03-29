// ===================================================
// Navigation Mobile Menu Toggle
// ===================================================
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const mobileLinks = document.querySelectorAll('.mobile__links a');
const burgerButton = document.querySelector('.burguer');

/**
 * Toggle mobile menu visibility
 */
const toggleMobileMenu = () => {
  mobileNavbar.classList.toggle('active');
};

/**
 * Close mobile menu when a link is clicked
 */
const closeMobileMenuOnLinkClick = () => {
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavbar.classList.remove('active');
    });
  });
};

/**
 * Add shadow to navbar on scroll
 */
const handleNavbarScroll = () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
};

// ===================================================
// Event Listeners
// ===================================================
burgerButton.addEventListener('click', toggleMobileMenu);
window.addEventListener('scroll', handleNavbarScroll);
document.addEventListener('DOMContentLoaded', closeMobileMenuOnLinkClick);
