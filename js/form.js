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
    setTimeout(() => {
      submitError.innerHTML = '';
    }, 3000);
    return false;
  }
  return true;
}

document.getElementById('name1').addEventListener('keyup', validateName);
document.getElementById('mail').addEventListener('keyup', validateEmail);
document.getElementById('msg').addEventListener('keyup', validateText);
document.querySelector('.touch').addEventListener('click', validateForm);

validateForm();
