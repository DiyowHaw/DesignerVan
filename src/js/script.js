// toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};
