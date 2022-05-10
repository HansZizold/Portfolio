function dropmenu() {
  const nav = document.querySelector('#mymenu');
  nav.classList.add('show');
  nav.classList.remove('menu');
  const mobHeader = document.querySelector('#mobheader');
  mobHeader.classList.toggle('close');
}

function closemenu() {
  const nav = document.querySelector('#mymenu');
  nav.classList.remove('show');
  nav.classList.add('menu');
  const mobHeader = document.querySelector('#mobheader');
  mobHeader.classList.remove('close');
  mobHeader.classList.add('mobile-header');
}

dropmenu();
closemenu();
