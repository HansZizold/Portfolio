import projects from './projects.js';

let popupOpen;
let popupClose;

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

// card generator
function generateProjectCard(
  project,
  titleClass,
  descriptionClass,
  buttonClass,
  toolsClass,
  containerClass,
  hasImage = false,
) {
  const imageHTML = hasImage
    ? `<img src="${project.image}" alt="${project.title}" class="img2">`
    : '';
  return `
    <div class="${containerClass}">
      ${imageHTML}
      <div class="${containerClass}-2">
        <h3 class="${titleClass}">${project.title}</h3>
        <p class="${descriptionClass}">${project.desc_short}</p>
        <ul class="${toolsClass}">
          ${project.tech
    .map(
      (tech) => `<li><button type="button" class="${toolsClass}-1">${tech}</button></li>`,
    )
    .join('')}
        </ul>
        <button type="button" class="${buttonClass}" data-index="${
  project.index
}">See Project</button>
      </div>
    </div>`;
}

// First project
// create a variable containing the third container html code
projects[0].index = 0; // add index to the first project
const firstProjectHTML = generateProjectCard(
  projects[0],
  'multi',
  'app-description-1',
  'project',
  'tools',
  'third-container',
  true,
);
// create a div and assign to 'firstProjectHTMLdiv' variable
const firstProjectHTMLdiv = document.createElement('div');
// load the firstProjectHTML content inside the div variable we just created
firstProjectHTMLdiv.innerHTML = firstProjectHTML;
// insert the html code stored in the firstProjectHTMLdiv variable
// inside the section works represented with the variable works
works.appendChild(firstProjectHTMLdiv);
const firstProjectButton = document.querySelector('.project');
firstProjectButton.addEventListener('click', () => {
  popupOpen(0);
});

// Other projects
const otherProjectsHTML = projects
  .slice(1)
  .map((project, index) => {
    project.index = index + 1; // Adjust the index
    return generateProjectCard(
      project,
      'profesional',
      'app-description-2',
      'project2',
      'tools2',
      'fourth-container',
    );
  })
  .join('');
const otherProjectsHTMLdiv = document.createElement('div');
otherProjectsHTMLdiv.className = 'fourth-1'; // Set the class of the div to 'fourth-1'
otherProjectsHTMLdiv.innerHTML = otherProjectsHTML;
works.appendChild(otherProjectsHTMLdiv);

const projectButtons = document.querySelectorAll('.project2');
projectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');
    popupOpen(index);
  });
});

// MODAL POPUP WINDOW

// select the position where class 'works' is located and store in sectionWorks variable
const sectionWorks = document.querySelector('.works');

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
    .join('')}
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

  const popwindow = document.createElement('div');
  popwindow.innerHTML = popupHTML;
  popwindow.classList.add('close1');
  sectionWorks.prepend(popwindow);

  const closeButton = popwindow.querySelector('.closebutton');
  closeButton.addEventListener('click', () => {
    popupClose(index);
  });

  return popwindow;
}

// Generate the pop-up windows for all projects in a loop,
// storing the resulting div elements in an array.
const popwindows = projects.map((project, index) => popupwindow(index));

// This functions are called when the user clicks the 'see project'
// buttons of each project. Class 'close1' is removed so its content
// is shown and class 'popup-container' is added to format the popup window
popupOpen = function popupOpen(index) {
  popwindows[index].classList.remove('close1');
  popwindows[index].classList.add('popup-container');
};

// This functions are called when the user press the x button in the
// popup window. It removes the 'popup container' class and adds the 'close1'
// class to the popup window in order to hide it
popupClose = function popupClose(index) {
  popwindows[index].classList.remove('popup-container');
  popwindows[index].classList.add('close1');
};
