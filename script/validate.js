
const showError = (formSelector, inputSelector, errorMessage) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(config.inputErrorClass);
  errorClass.textContent = errorMessage;
};

const hideError = (formSelector, inputSelector) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(config.inputErrorClass);
  errorClass.textContent = ''
};

const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showError(formSelector, inputSelector, inputSelector.validationMessage)
  }
  else {
    hideError(formSelector, inputSelector)
  }
};

const setEventListeners = (formSelector, {submitButtonSelector, inputSelector}) => {
  const submitButton = formSelector.querySelector(submitButtonSelector)
  const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
  toggleButtonState(inputList, submitButton);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(formSelector, input);
      toggleButtonState(inputList, submitButton);
    });
  });
}

function toggleButtonState(inputList, submitButtonSelector) {
  const formIsValid = inputList.every((item) => item.validity.valid);

  if (formIsValid) {
    submitButtonSelector.classList.remove(config.inactiveButtonClass);
    submitButtonSelector.removeAttribute("disabled")
  } else {
    submitButtonSelector.classList.add(config.inactiveButtonClass);
    submitButtonSelector.setAttribute("disabled", "disabled");
  }
};

function enableValidation (config) {
  
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formSelector) => {  
      setEventListeners(formSelector, config)
  });
}
const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__savebutton',
  inactiveButtonClass: 'popup__savebutton_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error',
}

enableValidation(config);

