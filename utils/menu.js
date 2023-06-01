const burger = document.querySelector('.burger');
const desktopNavItems = document.querySelector('.desktop-nav-items');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  desktopNavItems.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((n) => n
  .addEventListener('click', () => {
    burger.classList.remove('active');
    desktopNavItems.classList.remove('active');
  }));