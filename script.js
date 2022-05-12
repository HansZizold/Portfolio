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

// create a variable containing the second container html code
const secondcontainer = `
<div class="second-container">
  <h2 id="recent">My Recent Works</h2>
  <div class="box"></div>
</div>`;
// select the position where class 'works' is located.
// Second container html code is gonna be inserted inside this location
const works = document.querySelector('.works');
// create a div and assign to 'secondcontainerdiv variable
const secondcontainerdiv = document.createElement('div');
// load the secondcontainer html content inside the div variable
// we just created (secondcontainerdiv)
secondcontainerdiv.innerHTML = secondcontainer;
// insert the html code stored in the secondcontainerdiv variable
// inside the section works represented with the variable works
works.appendChild(secondcontainerdiv);

// create a variable containing the third container html code
const thirdcontainer = `
<div class="third-container" id="third-container">
  <img src="images/placeholder.png" alt="placeholder" class="img2">
  <div class="third-container-2">
    <h3 id="multi">Multi-Post Sories</h3>
    <p id="par2">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
    <ul class="langs">
        <li><button type="button" class="langbuttons">css</button></li>
        <li><button type="button" class="langbuttons">html</button></li>
        <li><button type="button" class="langbuttons">bootstrap</button></li>
        <li><button type="button" class="langbuttons">Ruby</button></li>
    </ul>
    <button type="button" class="project" onclick="popupwindow()">See Project</button>
  </div>
</div>`;
// create a div and assign to 'thirdcontainerdiv variable
const thirdcontainerdiv = document.createElement('div');
// load the thirdcontainer html content inside the div
// variable we just created (thirdcontainerdiv)
thirdcontainerdiv.innerHTML = thirdcontainer;
// insert the html code stored in the thirdcontainerdiv variable
// inside the section works represented with the variable works
works.appendChild(thirdcontainerdiv);

// create a variable containing the fourth 1 container html code
const fourthcontainer1 = `
<div class="fourth-1">
  <div class="fourth-container">
    <h3 class="profesional">Profesional Art Printing Data</h3>
    <p class="par3">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">html</button></li>
      <li><button type="button" class="langbuttons2">bootstrap</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow1()">See Project</button>
  </div>
  <div class="fourth-container">
    <h3 class="profesional">Profesional Art Printing Data</h3>
    <p class="par3">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">html</button></li>
      <li><button type="button" class="langbuttons2">bootstrap</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow2()">See Project</button>
  </div>
  <div class="fourth-container">
    <h3 class="profesional">Profesional Art Printing Data</h3>
    <p class="par3">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">html</button></li>
      <li><button type="button" class="langbuttons2">bootstrap</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow3()">See Project</button>
  </div>
</div>`;
// create a div and assign to 'fourthcontainer1div variable
const fourthcontainer1div = document.createElement('div');
// load the fourthcontainer1 html content inside the div variable
// we just created (fourthcontainer1div)
fourthcontainer1div.innerHTML = fourthcontainer1;
// insert the html code stored in the fourthontainer1div variable
// inside the section works represented with the variable works
works.appendChild(fourthcontainer1div);

// create a variable containing the fourth 2 container html code
const fourthcontainer2 = `
<div class="fourth-2">
  <div class="fourth-container">
    <h3 class="profesional">Profesional Art Printing Data</h3>
    <p class="par3">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">html</button></li>
      <li><button type="button" class="langbuttons2">bootstrap</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow4()">See Project</button>
  </div>
  <div class="fourth-container">
    <h3 class="profesional">Profesional Art Printing Data</h3>
    <p class="par3">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">html</button></li>
      <li><button type="button" class="langbuttons2">bootstrap</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow5()">See Project</button>
  </div>
  <div class="fourth-container">
    <h3 class="profesional">Profesional Art Printing Data</h3>
    <p class="par3">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">html</button></li>
      <li><button type="button" class="langbuttons2">bootstrap</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow6()">See Project</button>
  </div>
</div>`;
// create a div and assign to 'fourthcontainer2div variable
const fourthcontainer2div = document.createElement('div');
// load the fourthcontainer2 html content inside the div variable
// we just created (fourthcontainer2div)
fourthcontainer2div.innerHTML = fourthcontainer2;
// insert the html code stored in the fourthcontainer1div variable
// inside the section works represented with the variable works
works.appendChild(fourthcontainer2div);

const projects = [
  {
    title: 'Multi Post Stories',
    tech: ['html', 'Bootstrap', 'Ruby on Rails'],
    image: './images/popupimage.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects1 = [
  {
    title: 'Portfolio Mobile',
    tech: ['CSS', 'Python', 'SASS'],
    image: './images/popupimage.png',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects2 = [
  {
    title: 'Portfolio Desktop',
    tech: ['Javascript', 'Python', 'LESS'],
    image: './images/popupimage.png',
    desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects3 = [
  {
    title: 'Portfolio Hamburguer',
    tech: ['JAVA', 'C++', 'Bootstrap'],
    image: './images/popupimage.png',
    desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects4 = [
  {
    title: 'Portfolio Popup Window',
    tech: ['GITHUB', 'Linters', 'UML'],
    image: './images/popupimage.png',
    desc: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects5 = [
  {
    title: 'Portfolio Forms',
    tech: ['xml', 'React', 'Ubuntu'],
    image: './images/popupimage.png',
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects6 = [
  {
    title: 'Portfolio Reloaded',
    tech: ['Azure', 'Linux', 'GIT'],
    image: './images/popupimage.png',
    desc: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off',
    demo: 'See Live',
    src: 'See Source',
  },
];

// console.log(projects[0].desc);
const sectionWorks = document.querySelector('.works');
const popwindow = document.createElement('div');
const popwindow1 = document.createElement('div');
const popwindow2 = document.createElement('div');
const popwindow3 = document.createElement('div');
const popwindow4 = document.createElement('div');
const popwindow5 = document.createElement('div');
const popwindow6 = document.createElement('div');

const popup = `
<div class="popup-main">
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
  </div>
<div>`;

const popup1 = `
<div class="popup-main">
  <div class="popup-header">
    <h3 class="multi2">${projects1[0].title}</h3>
    <button onclick="popupclose1()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects1[0].tech[0]}</li>
    <li class="popupli">${projects1[0].tech[1]}</li>
    <li class="popupli">${projects1[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects1[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects1[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects1[0].demo}</button>
        <button type="button" class="popup-source">${projects1[0].src}</button>
      </div>
    </div>
  </div>
<div>`;

const popup2 = `
<div class="popup-main">
  <div class="popup-header">
    <h3 class="multi2">${projects2[0].title}</h3>
    <button onclick="popupclose2()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects2[0].tech[0]}</li>
    <li class="popupli">${projects2[0].tech[1]}</li>
    <li class="popupli">${projects2[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects2[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects2[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects2[0].demo}</button>
        <button type="button" class="popup-source">${projects2[0].src}</button>
      </div>
    </div>
  </div>
<div>`;

const popup3 = `
<div class="popup-main">
  <div class="popup-header">
    <h3 class="multi2">${projects3[0].title}</h3>
    <button onclick="popupclose3()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects3[0].tech[0]}</li>
    <li class="popupli">${projects3[0].tech[1]}</li>
    <li class="popupli">${projects3[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects3[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects3[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects3[0].demo}</button>
        <button type="button" class="popup-source">${projects3[0].src}</button>
      </div>
    </div>
  </div>
<div>`;

const popup4 = `
<div class="popup-main">
  <div class="popup-header">
    <h3 class="multi2">${projects4[0].title}</h3>
    <button onclick="popupclose4()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects4[0].tech[0]}</li>
    <li class="popupli">${projects4[0].tech[1]}</li>
    <li class="popupli">${projects4[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects4[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects4[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects4[0].demo}</button>
        <button type="button" class="popup-source">${projects4[0].src}</button>
      </div>
    </div>
  </div>
<div>`;

const popup5 = `
<div class="popup-main">
  <div class="popup-header">
    <h3 class="multi2">${projects5[0].title}</h3>
    <button onclick="popupclose5()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects5[0].tech[0]}</li>
    <li class="popupli">${projects5[0].tech[1]}</li>
    <li class="popupli">${projects5[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects5[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects5[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects5[0].demo}</button>
        <button type="button" class="popup-source">${projects5[0].src}</button>
      </div>
    </div>
  </div>
<div>`;

const popup6 = `
<div class="popup-main">
  <div class="popup-header">
    <h3 class="multi2">${projects6[0].title}</h3>
    <button onclick="popupclose6()" class="closebutton">&times;</button>
  </div>
  <ul class="popup-langs">
    <li class="popupli">${projects6[0].tech[0]}</li>
    <li class="popupli">${projects6[0].tech[1]}</li>
    <li class="popupli">${projects6[0].tech[2]}</li>
  </ul>
  <div class=popup-mainbody>
    <img src="${projects6[0].image}" alt="Snapshoot Portfolio">
    <div class="popup-body">
      <p>${projects6[0].desc}</p>
      <div class="popup-buttons">
        <button type="button" class="popup-live">${projects6[0].demo}</button>
        <button type="button" class="popup-source">${projects6[0].src}</button>
      </div>
    </div>
  </div>
<div>`;

// popup window class to show content: popup-container
popwindow.innerHTML = popup;
popwindow1.innerHTML = popup1;
popwindow2.innerHTML = popup2;
popwindow3.innerHTML = popup3;
popwindow4.innerHTML = popup4;
popwindow5.innerHTML = popup5;
popwindow6.innerHTML = popup6;

popwindow.classList.add('close1');
popwindow1.classList.add('close1');
popwindow2.classList.add('close1');
popwindow3.classList.add('close1');
popwindow4.classList.add('close1');
popwindow5.classList.add('close1');
popwindow6.classList.add('close1');

sectionWorks.prepend(popwindow);
sectionWorks.prepend(popwindow1);
sectionWorks.prepend(popwindow2);
sectionWorks.prepend(popwindow3);
sectionWorks.prepend(popwindow4);
sectionWorks.prepend(popwindow5);
sectionWorks.prepend(popwindow6);
// sectionWorks.appendChild(popwindow);

function popupwindow() {
  popwindow.id = 'popup-container';
  popwindow.classList.remove('close1');
  popwindow.classList.add('popup-container');
}
function popupwindow1() {
  popwindow1.id = 'popup-container';
  popwindow1.classList.remove('close1');
  popwindow1.classList.add('popup-container');
}
function popupwindow2() {
  popwindow2.id = 'popup-container';
  popwindow2.classList.remove('close1');
  popwindow2.classList.add('popup-container');
}
function popupwindow3() {
  popwindow3.id = 'popup-container';
  popwindow3.classList.remove('close1');
  popwindow3.classList.add('popup-container');
}
function popupwindow4() {
  popwindow4.id = 'popup-container';
  popwindow4.classList.remove('close1');
  popwindow4.classList.add('popup-container');
}
function popupwindow5() {
  popwindow5.id = 'popup-container';
  popwindow5.classList.remove('close1');
  popwindow5.classList.add('popup-container');
}
function popupwindow6() {
  popwindow6.id = 'popup-container';
  popwindow6.classList.remove('close1');
  popwindow6.classList.add('popup-container');
}

function popupclose() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow.classList.remove('popup-container');
  popwindow.classList.add('close1');
}
function popupclose1() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow1.classList.remove('popup-container');
  popwindow1.classList.add('close1');
}
function popupclose2() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow2.classList.remove('popup-container');
  popwindow2.classList.add('close1');
}
function popupclose3() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow3.classList.remove('popup-container');
  popwindow3.classList.add('close1');
}
function popupclose4() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow4.classList.remove('popup-container');
  popwindow4.classList.add('close1');
}
function popupclose5() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow5.classList.remove('popup-container');
  popwindow5.classList.add('close1');
}
function popupclose6() {
  const mainc = document.querySelector('#main-container');
  mainc.classList.remove('close1');
  mainc.classList.add('main-container');
  popwindow6.classList.remove('popup-container');
  popwindow6.classList.add('close1');
}

popupwindow();
popupclose();
popupwindow1();
popupclose1();
popupwindow2();
popupclose2();
popupwindow3();
popupclose3();
popupwindow4();
popupclose4();
popupwindow5();
popupclose5();
popupwindow6();
popupclose6();
