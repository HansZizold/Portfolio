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
const sectionWorks = document.querySelector('.works');
const popwindow = document.createElement('div');
const popup = `
<div class="popup-header">
    <h3 class="multi2">${projects[0].title}</h3>
    <button class="closebutton">&times;</button>
</div>
<ul class="popup-langs">
    <li class="popupli">${projects[0].tech[0]}</li>
    <li class="popupli">${projects[0].tech[1]}</li>
    <li class="popupli">${projects[0].tech[2]}</li>
</ul>
<div class="popup-body">
    <img src="${projects[0].image}" alt="Snapshoot Portfolio">
    <p>${projects[0].desc}</p>
</div>
<div class="popup-buttons">
    <button type="button" class="popup-live">${projects[0].demo}</button>
    <button type="button" class="popup-source">${projects[0].src}</button>
</div>
`
// popup window class to show content: popup-container
popwindow.innerHTML = popup;
popwindow.classList.add('close');
document.body.prepend(popwindow);
// sectionWorks.prepend(popwindow);
// sectionWorks.appendChild(popwindow);


function popupwindow() {
  popwindow.id = 'popup-container';
  // const thirdc = document.querySelector('#third-container');
  // thirdc.classList.remove('third-container');
  // thirdc.classList.add('close');
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('main-container');
  mainc.classList.add('close');
  popwindow.classList.remove('close');
  popwindow.classList.add('popup-container');
  // $('#popup-container').focus();
}







  // function popupwindow() {
  //   let project_popup = {
  //     pname: '',
  //     pdescription: '',
  //     pimage: '',
  //     ptechno: '',
  //     plive: '',
  //     psource: '' 
  //   };

  // select the ul menu element
  // const project = document.querySelector('#project');

  // let pdiv = document.createElement('div');
  // pdiv.id = 'popupid';
  // pdiv.className = 'popupcl'
  // pdiv.innerHTML = '<p>Multi Post Stories</p>';
  // document.body.appendChild(pdiv);

  // let pul = document.createElement('ul');
  // pul.id = 'pulid'
  // pdiv.appendChild(pul);

  // let pli = document.createElement('li');
  // pli.textContent = 'html';
  // pulid.appendChild(pli);

  // let pli = document.createElement('li');
  // pli.textContent = 'Bootstrap';
  // pulid.appendChild(pli);

  // let pli = document.createElement('li');
  // pli.textContent = 'Ruby on rails';
  // pulid.appendChild(pli);
  


