const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('btn-login');
const ratingDiv = document.querySelector('.radio-rating');
const checkTerms = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textComment = document.getElementById('textarea');

function handleLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function createRatingLabels() {
  for (let index = 1; index <= 10; index += 1) {
    const newLabel = document.createElement('label');
    const newDiv = document.createElement('div');
    newDiv.classList.add('rate-div');

    newLabel.innerText = index;
    newLabel.setAttribute('for', `rate-${index}`);

    document.querySelector('.label-rating').appendChild(newDiv);
    newDiv.appendChild(newLabel);
  }
}

function createRating() {
  for (let index = 1; index <= 10; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('rate-div');

    const newInput = document.createElement('input');
    newInput.setAttribute('name', 'rate');
    newInput.setAttribute('value', index);
    newInput.type = 'radio';
    newInput.classList.add('form-check-input');
    newInput.id = `rate-${index}`;

    ratingDiv.appendChild(newDiv);
    newDiv.appendChild(newInput);
  }

  createRatingLabels();
}

function handleTerms() {
  if (checkTerms.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

createRating();

function countText() {
  counter.innerHTML = 500 - textComment.value.length;
}

button.addEventListener('click', handleLogin);
checkTerms.addEventListener('click', handleTerms);
textComment.addEventListener('keyup', countText);
