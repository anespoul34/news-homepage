let nav = document.getElementById('navigation');
let openBtn = document.getElementById('open-menu-btn');
let closeBtn = document.getElementById('close-menu-btn');

openBtn.addEventListener('click', () => {
  nav.classList.remove('close');
  nav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
  nav.classList.add('close');
});