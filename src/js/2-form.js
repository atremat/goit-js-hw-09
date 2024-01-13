const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';
const localEmail = 'email';
const localText = 'message';

//if localStorage isn't empty, then formData gets value from the localStorage
//if localStorage is empty, then formData equals empty object
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

//getting values of fields from localstorage
email.value = formData.email ?? '';
textarea.value = formData.message ?? '';

// if (localStorage.getItem(localStorageKey)) {
//   const parsedStorage = JSON.parse(localStorage.getItem(localStorageKey));
//   email.value = parsedStorage.email;
//   textarea.value = parsedStorage.textarea;
// }
// email.value = localStorage.getItem(localStorageKey) ?
// localStorage.getItem(localStorageKey).email ?? '';
// textarea.value = localStorage.getItem(localStorageKey).message ?? '';
// email.value = localStorage.getItem(localEmail) ?? '';
// textarea.value = localStorage.getItem(localText) ?? '';

form.addEventListener('input', evt => {
  // formData[evt.target.name] = evt.target.value;
  // localStorage.setItem(localStorageKey, JSON.stringify(formData));
  // localStorage.setItem(evt.target.name, evt.target.value);
  // console.log(`evt.target.name = ${evt.target.name}`);
  // console.log(`evt.target.value = ${evt.target.value}`);

  //localStorage before:
  // console.log('localStorage = ');
  // console.log(localStorage);

  //adding input data to the object
  formData[evt.target.name] = evt.target.value;
  // console.log('formData = ');
  // console.log(formData);

  //converting object to JSON format
  const strFormData = JSON.stringify(formData);
  // console.log('strFormData = ');
  // console.log(strFormData);

  //adding formatted object to localstorage
  localStorage.setItem(localStorageKey, strFormData); //отут перезаписуємо заново локалсторейдж
  // console.log('localStorage = ');
  // console.log(localStorage);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.elements);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
