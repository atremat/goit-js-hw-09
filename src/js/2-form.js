const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

//if localStorage isn't empty, then formData gets value from the localStorage
//if localStorage is empty, then formData equals empty object
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

//getting values of fields from localstorage
email.value = formData.email ?? '';
textarea.value = formData.message ?? '';

form.addEventListener('input', evt => {
  //adding input data to the object
  formData[evt.target.name] = evt.target.value;

  //converting object to JSON format
  const strFormData = JSON.stringify(formData);

  //adding formatted object to localstorage
  localStorage.setItem(localStorageKey, strFormData);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  //output the object with fields "email", "message" and their values
  console.log(formData);

  //clear localstorage
  localStorage.removeItem(localStorageKey);

  //clear fields of the form
  form.reset();
});
