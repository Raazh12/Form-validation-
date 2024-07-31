const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirm.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 6) {
    setErrorFor(password, 'Password must be at least 6 characters long');
  } else {
    setSuccessFor(password);
  }

  if (confirmValue === '') {
    setErrorFor(confirm, 'Confirm password cannot be blank');
  } else if (passwordValue !== confirmValue) {
    setErrorFor(confirm, 'Passwords do not match');
  } else {
    setSuccessFor(confirm);
  }
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  const icon = formControl.querySelector('i');

  formControl.className = 'form-control error';
  small.innerText = message;
  icon.className = 'fas fa-exclamation-circle';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const icon = formControl.querySelector('i');

  formControl.className = 'form-control success';
  icon.className = "fas fa-check-circle";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}