function dropmenu() {
  const nav = document.querySelector('#mymenu');
  nav.classList.add('show');
  nav.classList.remove('menu');
  const mob_header = document.querySelector('#mobheader');
  mob_header.classList.toggle('close');
}

function closemenu() {
  const nav = document.querySelector('#mymenu');
  nav.classList.remove('show');
  nav.classList.add('menu');
  const mob_header = document.querySelector('#mobheader');
  mob_header.classList.remove('close');
  mob_header.classList.add('mobile-header');
}

dropmenu();
closemenu();
