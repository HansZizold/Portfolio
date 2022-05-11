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

const projects = [
  { title: 'Multi Post Stories',
    tech: ['html', 'Bootstrap', 'Ruby on Rails'],
    image: './images/popupimage.png',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: 'See Live',
    src: 'See Source'
  }
]
// console.log(projects[0].desc);
const mainContainer = document.querySelector('.main-container');
const sectionWorks = document.querySelector('.works');
const popwindow = document.createElement('div');
const popup = `
  <div class="popup-header">
    <h3 class="multi2">${projects[0].title}</h3>
    <button onclick="popupclose()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects[0].tech[0]}</li>
    <li class="popupli">${projects[0].tech[1]}</li>
    <li class="popupli">${projects[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects[0].demo}</button>
        <button type="button" class="popup-source">${projects[0].src}</button>
      </div>
    </div>
  </div>`
// popup window class to show content: popup-container
popwindow.innerHTML = popup;
popwindow.classList.add('close');

// document.body.prepend(popwindow);

sectionWorks.prepend(popwindow);

// sectionWorks.appendChild(popwindow);


function popupwindow() {
  popwindow.id = 'popup-container';

  // const thirdc = document.querySelector('#third-container');
  // thirdc.classList.remove('third-container');
  // thirdc.classList.add('close');

  // const mainc = document.querySelector('#main-container');
  // mainc.classList.remove('main-container');
  // mainc.classList.add('close');

  popwindow.classList.remove('close');
  popwindow.classList.add('popup-container');

  // mainContainer.classList.add('popup-opacity');
}

function popupclose() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close');
  mainc.classList.add('main-container');

  popwindow.classList.remove('popup-container');
  popwindow.classList.add('close');

  // mainContainer.classList.remove('popup-opacity');
}





