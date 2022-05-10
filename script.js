function dropmenu() {
  const mn = document.querySelector('#mymenu');
  mn.classList.add('show');
  mn.classList.remove('menu');
  const mh = document.querySelector('#mobheader');
  mh.classList.toggle('close');
}

function closemenu() {
  const mn = document.querySelector('#mymenu');
  mn.classList.remove('show');
  mn.classList.add('menu');
  const mh = document.querySelector('#mobheader');
  mh.classList.remove('close');
  mh.classList.add('mobile-header');
}

dropmenu();
closemenu();
