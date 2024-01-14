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
  formData[evt.target.name] = evt.target.value.trim();

  //converting object to JSON format
  const strFormData = JSON.stringify(formData);

  //adding formatted object to localstorage
  localStorage.setItem(localStorageKey, strFormData);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  //output the object with fields "email", "message" and their values
  console.log(formData);

  //vars for check if email and message are filled
  const isEmailFilled = formData.email && formData.email !== '';
  const isMessageFilled = formData.message && formData.message !== '';

  //if email and message are filled, then submit
  if (isEmailFilled && isMessageFilled) {
    //clear localstorage
    localStorage.removeItem(localStorageKey);

    //clear fields of the form
    form.reset();

    //delete fields "email" and "message" from object formData
    delete formData.email;
    delete formData.message;
  } else {
    //output to console, that field is empty
    if (!isEmailFilled) console.log('Email field cannot be empty!');
    if (!isMessageFilled) console.log('Message field cannot be empty!');
  }
});
