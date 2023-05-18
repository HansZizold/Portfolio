// HAMBURGUER PART

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

// THIS PART IS FOR INSERTING THE PROJECTS HTML CODE INSIDE THE JS FILE

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
  <img src="images/budget.png" alt="placeholder" class="img2">
  <div class="third-container-2">
    <h3 id="multi">Budget App</h3>
    <p id="app-description-1">The <strong>Budget Application</strong> is a mobile web-based tool designed to facilitate easy management of personal finances. The application provides a comprehensive list of transactions organized by category, enabling users to track their spending habits and identify areas of improvement</p>
    <ul class="langs">
      <li><button type="button" class="langbuttons">Rails</button></li>
      <li><button type="button" class="langbuttons">Ruby</button></li>
      <li><button type="button" class="langbuttons">Tailwind</button></li>
      <li><button type="button" class="langbuttons">HTML5</button></li>
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
    <h3 class="profesional">Blog App</h3>
    <p class="app-description-2">Blog App allows for efficient management of blog posts, comments, and likes, empowering users to interact and engage with content seamlessly. With its user-friendly interface and intuitive design, Blog App makes it easy</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">Rails</button></li>
      <li><button type="button" class="langbuttons2">Ruby</button></li>
      <li><button type="button" class="langbuttons2">CSS3</button></li>
      <li><button type="button" class="langbuttons2">HTML5</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow1()">See Project</button>
  </div>
  <div class="fourth-container">
    <h3 class="profesional">Hyrule Compendium</h3>
    <p class="app-description-2">Hyrule Compendium is a comprehensive web application that showcases a vast array of elements from the 'Breath of the Wild' Zelda game. With an intuitive user interface, Hyrule Compendium allows you easily browse and discover</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">React</button></li>
      <li><button type="button" class="langbuttons2">Redux</button></li>
      <li><button type="button" class="langbuttons2">CSS3</button></li>
      <li><button type="button" class="langbuttons2">HTML5</button></li>
    </ul>
    <button type="button" class="project2" onclick="popupwindow2()">See Project</button>
  </div>
  <div class="fourth-container">
    <h3 class="profesional">Space Travelers Hub</h3>
    <p class="app-description-2">Welcome to Space Travelers Hub, a comprehensive web application that allows you to explore a variety of rockets and missions. Our platform offers users the ability to reserve and join exciting missions, enabling them to discover ...</p>
    <ul class="langs2">
      <li><button type="button" class="langbuttons2">React</button></li>
      <li><button type="button" class="langbuttons2">Redux</button></li>
      <li><button type="button" class="langbuttons2">CSS3</button></li>
      <li><button type="button" class="langbuttons2">HTML5</button></li>
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

// MODAL POPUP WINDOW

// seven structures declaration to store the main attributes of each project
// attributes: title, technologies, image, description, demo, live
const projects = [
  {
    title: 'Budget App',
    tech: ['Rails', 'Ruby', 'Tailwind'],
    image: './images/budget.png',
    desc: 'The <strong>Budget Application</strong> is a mobile web-based tool designed to facilitate easy management of personal finances. The application provides a comprehensive list of transactions organized by category, enabling users to track their spending habits and identify areas of improvement. Developed using the Ruby on Rails framework, both for the front-end and back-end, and styled with the Tailwind framework, the Budget Application delivers a seamless user experience while maintaining a sleek and professional design.',
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects1 = [
  {
    title: 'Blog App',
    tech: ['Rails', 'Ruby', 'CSS3'],
    image: './images/blog.png',
    desc: "Blog App is fully functional website. The application allows for efficient management of blog posts, comments, and likes, empowering users to interact and engage with content seamlessly. With its user-friendly interface and intuitive design, Blog App makes it easy to create and publish new posts, moderate comments, and monitor engagement. Whether you're a blogger looking to expand your reach or a business seeking to enhance your content marketing strategy, Blog App is an ideal solution that can help you achieve your goals",
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects2 = [
  {
    title: 'Hyrule Compendium',
    tech: ['React', 'Redux', 'CSS3'],
    image: './images/hyrule.png',
    desc: "Hyrule Compendium is a comprehensive web application that showcases a vast array of elements from the popular 'Breath of the Wild' Zelda game. With an intuitive user interface, Hyrule Compendium allows you to easily browse and discover your favorite characters, weapons, items, and locations within the game. Whether you're a seasoned Zelda fan or a new player exploring the world of Hyrule for the first time, Hyrule Compendium provides a wealth of information and resources to enhance your gaming experience",
    demo: 'See Live',
    src: 'See Source',
  },
];
const projects3 = [
  {
    title: 'Space Traveler Hub',
    tech: ['React', 'Redux', 'CSS3'],
    image: './images/rocket.png',
    desc: 'Welcome to Space Travelers Hub, a comprehensive web application that allows you to explore a variety of rockets and missions. Our platform offers users the ability to reserve and join exciting missions, enabling them to discover the wonders of space travel like never before. With a user-friendly interface and cutting-edge features, Space Travelers Hub is the ultimate destination for those looking to embark on an adventure beyond our planet.',
    demo: 'See Live',
    src: 'See Source',
  },
];

// select the position where class 'works' is located and store in sectionWorks variable
const sectionWorks = document.querySelector('.works');

// variables of div type that will contain the popup window
const popwindow = document.createElement('div');
const popwindow1 = document.createElement('div');
const popwindow2 = document.createElement('div');
const popwindow3 = document.createElement('div');

// popup variables that will contain the popup window html code
// note that the structures variables are being used
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
        <a href="https://small-wave-7734.fly.dev/" target="_blank">
          <button type="button" class="popup-live">${projects[0].demo}</button>
        </a>
        <a href="https://github.com/HansZizold/budget_app" target="_blank">
          <button type="button" class="popup-source">${projects[0].src}</button>
        </a>
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
        <a href="https://cold-brook-8415.fly.dev/" target="_blank">
          <button type="button" class="popup-live">${projects1[0].demo}</button>
        </a>
        <a href="https://github.com/HansZizold/blogapp" target="_blank">
          <button type="button" class="popup-source">${projects1[0].src}</button>
        </a>
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
        <a href="https://hyrule-compendium-hpz.netlify.app/" target="_blank">
          <button type="button" class="popup-live">${projects1[0].demo}</button>
        </a>
        <a href="https://github.com/HansZizold/Hyrule_Compendium" target="_blank">
          <button type="button" class="popup-source">${projects1[0].src}</button>
        </a>
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
        <a href="https://space-travelers-hd.netlify.app/" target="_blank">
          <button type="button" class="popup-live">${projects1[0].demo}</button>
        </a>
        <a href="https://github.com/HansZizold/Space-Travelers-Hub" target="_blank">
          <button type="button" class="popup-source">${projects1[0].src}</button>
        </a>
      </div>
    </div>
  </div>
<div>`;

// content of popup variables are inserted in the divs
// popwindow variables we created.
popwindow.innerHTML = popup;
popwindow1.innerHTML = popup1;
popwindow2.innerHTML = popup2;
popwindow3.innerHTML = popup3;

// popwindows div are appended at the beginning of the works section
// represented by the sectionWorks variable
sectionWorks.prepend(popwindow);
sectionWorks.prepend(popwindow1);
sectionWorks.prepend(popwindow2);
sectionWorks.prepend(popwindow3);

// class 'close1' is added to popwindows div in order to hide it
// popwindows html will show with a button click
popwindow.classList.add('close1');
popwindow1.classList.add('close1');
popwindow2.classList.add('close1');
popwindow3.classList.add('close1');

// This functions are called when the user clicks the 'see project'
// buttons of each project. Class 'close1' is removed so its content
// is shown and class 'popup-container' is added to format the popup window
function popupwindow() {
  popwindow.classList.remove('close1');
  popwindow.classList.add('popup-container');
}
function popupwindow1() {
  popwindow1.classList.remove('close1');
  popwindow1.classList.add('popup-container');
}
function popupwindow2() {
  popwindow2.classList.remove('close1');
  popwindow2.classList.add('popup-container');
}
function popupwindow3() {
  popwindow3.classList.remove('close1');
  popwindow3.classList.add('popup-container');
}

// This functions are called when the user press the x button in the
// popup window. It removes the 'popup container' class and adds the 'close1'
// class to the popup window in order to hide it
function popupclose() {
  popwindow.classList.remove('popup-container');
  popwindow.classList.add('close1');
}
function popupclose1() {
  popwindow1.classList.remove('popup-container');
  popwindow1.classList.add('close1');
}
function popupclose2() {
  popwindow2.classList.remove('popup-container');
  popwindow2.classList.add('close1');
}
function popupclose3() {
  popwindow3.classList.remove('popup-container');
  popwindow3.classList.add('close1');
}

// Just for the linters
popupwindow();
popupclose();
popupwindow1();
popupclose1();
popupwindow2();
popupclose2();
popupwindow3();
popupclose3();

// LOCAL STORAGE PART

// Form IDs and submit button are mapped into variables
const formName = document.querySelector('#name1');
const formEmail = document.querySelector('#mail');
const formText = document.querySelector('#msg');
const formButton = document.querySelector('#touch');

// This function activates when the submit button is clicked
// It will send the data to local storage
formButton.addEventListener('click', () => {
  // Create an object to store the values of the form
  const contactDataDeposit = {
    formName: formName.value,
    formEmail: formEmail.value,
    formText: formText.value,
  };
  // deposit the data of 'contactData' to local storage (formData key)
  // converting it to JSON format
  localStorage.setItem('formData', JSON.stringify(contactDataDeposit));
});

// This function activates when wabe page loads
// It will load the local storage data into the form
window.addEventListener('load', () => {
  // recover the data of local storage with 'formData' key and
  // parse JSON format to JS format
  const contactDataRecover = JSON.parse(localStorage.getItem('formData'));
  // load the data into the form values
  formName.value = contactDataRecover.formName;
  formEmail.value = contactDataRecover.formEmail;
  formText.value = contactDataRecover.formText;
});

// FORM EMAIL VALIDATION

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const textError = document.getElementById('text-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  const name = document.getElementById('name1').value;

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]* {1}[A-Za-z]*/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById('mail').value;

  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if (!email.match(/^[a-z._\-[0-9]*[@][a-z]*\.[a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalid';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateText() {
  const text = document.getElementById('msg').value;
  // const required = 500;
  // const left = required - text.length;

  if (text.length === 0) {
    textError.innerHTML = 'Comments required';
    return false;
  }

  textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName || !validateEmail || !validateText()) {
    submitError.innerHTML = 'Please fix errors to submit';
    setTimeout(() => { submitError.innerHTML = ''; }, 3000);
    return false;
  }
  return true;
}

validateForm();
