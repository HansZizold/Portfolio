import { projects } from "./projects.js";

// HAMBURGUER PART

document.querySelector(".boton").addEventListener("click", dropmenu);
function dropmenu() {
  const nav = document.querySelector("#mymenu");
  nav.classList.add("show");
  nav.classList.remove("menu");
  const mobHeader = document.querySelector("#mobheader");
  mobHeader.classList.toggle("close");
}

document.querySelectorAll(".common").forEach(function (element) {
  element.addEventListener("click", closemenu);
});
function closemenu() {
  const nav = document.querySelector("#mymenu");
  nav.classList.remove("show");
  nav.classList.add("menu");
  const mobHeader = document.querySelector("#mobheader");
  mobHeader.classList.remove("close");
  mobHeader.classList.add("mobile-header");
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
const works = document.querySelector(".works");
// create a div and assign to 'secondcontainerdiv variable
const secondcontainerdiv = document.createElement("div");
// load the secondcontainer html content inside the div variable
// we just created (secondcontainerdiv)
secondcontainerdiv.innerHTML = secondcontainer;
// insert the html code stored in the secondcontainerdiv variable
// inside the section works represented with the variable works
works.appendChild(secondcontainerdiv);

// First project
// create a variable containing the third container html code
const thirdcontainer = `
<div class="third-container" id="third-container">
  <img src="${projects[0].image}" alt="${projects[0].title}" class="img2">
  <div class="third-container-2">
    <h3 id="multi">${projects[0].title}</h3>
    <p id="app-description-1">${projects[0].desc_short}</p>
    <ul class="langs">
      ${projects[0].tech
        .map(
          (tech) =>
            `<li><button type="button" class="langbuttons">${tech}</button></li>`
        )
        .join("")}
    </ul>
    <button type="button" class="project"">See Project</button>
    </div>
</div>`;
// create a div and assign to 'thirdcontainerdiv variable
const thirdcontainerdiv = document.createElement("div");
// load the thirdcontainer html content inside the div
// variable we just created (thirdcontainerdiv)
thirdcontainerdiv.innerHTML = thirdcontainer;
// insert the html code stored in the thirdcontainerdiv variable
// inside the section works represented with the variable works
works.appendChild(thirdcontainerdiv);
const firstProjectButton = document.querySelector('.project');
firstProjectButton.addEventListener('click', () => {
  popupOpen(0);
});

// The other of the projects
const otherProjects = projects.slice(1);
let fourthcontainer1 = `<div class="fourth-1">`;
otherProjects.forEach((project, index) => {
  fourthcontainer1 += `
    <div class="fourth-container">
      <h3 class="profesional">${project.title}</h3>
      <p class="app-description-2">${project.desc_short}</p>
      <ul class="langs2">
        ${project.tech
          .map(
            (tech) =>
              `<li><button type="button" class="langbuttons2">${tech}</button></li>`
          )
          .join("")}
      </ul>
      <button type="button" class="project2" data-index="${index + 1}">See Project</button>
    </div>`;
});
fourthcontainer1 += `</div>`;
// create a div and assign to 'fourthcontainer1div variable
const fourthcontainer1div = document.createElement("div");
// load the fourthcontainer1 html content inside the div variable
// we just created (fourthcontainer1div)
fourthcontainer1div.innerHTML = fourthcontainer1;
// insert the html code stored in the fourthontainer1div variable
// inside the section works represented with the variable works
works.appendChild(fourthcontainer1div);

const projectButtons = document.querySelectorAll('.project2');
projectButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');
    popupOpen(index);
  });
});

// MODAL POPUP WINDOW

// select the position where class 'works' is located and store in sectionWorks variable
const sectionWorks = document.querySelector(".works");

function popupwindow(index) {
  const project = projects[index];
  const popupHTML = `
  <div class="popup-main">
      <div class="popup-header">
        <h3 class="multi2">${project.title}</h3>
        <button data-index="${index}" class="closebutton">&times;</button>
      </div>
      <ul class="popup-langs">
          ${project.tech
            .map((tech) => `<li class="popupli">${tech}</li>`)
            .join("")}
      </ul>
      <div class=popup-mainbody>
          <img src="${project.image}" alt="Snapshoot Portfolio">
          <div class="popup-body">
              <p>${project.desc_long}</p>
              <div class="popup-buttons">
                  <a href="${project.demo}" target="_blank">
                      <button type="button" class="popup-live">See Live</button>
                  </a>
                  <a href="${project.src}" target="_blank">
                      <button type="button" class="popup-source">See Source</button>
                  </a>
              </div>
          </div>
      </div>
  <div>`;

  const popwindow = document.createElement("div");
  popwindow.innerHTML = popupHTML;
  popwindow.classList.add("close1");
  sectionWorks.prepend(popwindow);

  const closeButton = popwindow.querySelector(".closebutton");
  closeButton.addEventListener("click", () => {
    popupClose(index);
  });

  return popwindow;
}

// Generate the pop-up windows for all projects in a loop,
// storing the resulting div elements in an array.
const popwindows = projects.map((project, index) => {
  return popupwindow(index);
});

// This functions are called when the user clicks the 'see project'
// buttons of each project. Class 'close1' is removed so its content
// is shown and class 'popup-container' is added to format the popup window
function popupOpen(index) {
  popwindows[index].classList.remove("close1");
  popwindows[index].classList.add("popup-container");
}

// This functions are called when the user press the x button in the
// popup window. It removes the 'popup container' class and adds the 'close1'
// class to the popup window in order to hide it
function popupClose(index) {
  popwindows[index].classList.remove("popup-container");
  popwindows[index].classList.add("close1");
}

// LOCAL STORAGE PART

// Form IDs and submit button are mapped into variables
const formName = document.querySelector("#name1");
const formEmail = document.querySelector("#mail");
const formText = document.querySelector("#msg");
const formButton = document.querySelector("#touch");

// This function activates when the submit button is clicked
// It will send the data to local storage
formButton.addEventListener("click", () => {
  // Create an object to store the values of the form
  const contactDataDeposit = {
    formName: formName.value,
    formEmail: formEmail.value,
    formText: formText.value,
  };
  // deposit the data of 'contactData' to local storage (formData key)
  // converting it to JSON format
  localStorage.setItem("formData", JSON.stringify(contactDataDeposit));
});

// This function activates when wabe page loads
// It will load the local storage data into the form
window.addEventListener("load", () => {
  // recover the data of local storage with 'formData' key and
  // parse JSON format to JS format
  const contactDataRecover = JSON.parse(localStorage.getItem("formData"));
  // load the data into the form values
  formName.value = contactDataRecover.formName;
  formEmail.value = contactDataRecover.formEmail;
  formText.value = contactDataRecover.formText;
});

// FORM EMAIL VALIDATION

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const textError = document.getElementById("text-error");
const submitError = document.getElementById("submit-error");

document.getElementById("name1").addEventListener("keyup", validateName);
document.getElementById("mail").addEventListener("keyup", validateEmail);
document.getElementById("msg").addEventListener("keyup", validateText);
document.querySelector(".touch").addEventListener("click", validateForm);

function validateName() {
  const name = document.getElementById("name1").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]* {1}[A-Za-z]*/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById("mail").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[a-z._\-[0-9]*[@][a-z]*\.[a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateText() {
  const text = document.getElementById("msg").value;
  // const required = 500;
  // const left = required - text.length;

  if (text.length === 0) {
    textError.innerHTML = "Comments required";
    return false;
  }

  textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName || !validateEmail || !validateText()) {
    submitError.innerHTML = "Please fix errors to submit";
    setTimeout(() => {
      submitError.innerHTML = "";
    }, 3000);
    return false;
  }
  return true;
}

validateForm();
