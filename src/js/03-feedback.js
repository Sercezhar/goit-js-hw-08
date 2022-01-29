import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

formRef.addEventListener('input', throttle(saveInput, 500));
formRef.addEventListener('submit', submitMessage);
updateInput();

function saveInput() {
  const user = {
    email: inputRef.value,
    message: textareaRef.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function updateInput() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  // inputRef.value = savedData.email || '';
  // textareaRef.value = savedData.message || '';
  if (localStorage.length > 0) {
    inputRef.value = savedData.email;
    textareaRef.value = savedData.message;
  }
}

function submitMessage(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  formRef.reset();
}
