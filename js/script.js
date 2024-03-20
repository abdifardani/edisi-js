const hamburger = document.querySelector('#klik');
const nav = document.querySelector('#nav-list');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  nav.classList.toggle('skrol');
});
