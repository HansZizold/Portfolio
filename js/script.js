import { projects } from "./projects.js";

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
