const menuToggle = document.querySelector('.header-btn');
const menu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open');
});
