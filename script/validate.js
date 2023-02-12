
const showError = (formSelector, inputSelector, errorMessage) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('inputErrorClass');
  errorClass.textContent = errorMessage;
  errorClass.classList.add('errorClass_active')
};

const hideError = (formSelector, inputSelector) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('inputErrorClass');
  errorClass.classList.remove('errorClass_active')
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



const setEventListeners = (formSelector) => {

  const inputList = Array.from(formSelector.querySelectorAll('.popup__info'));
  const submitButtonSelector = formSelector.querySelector('.popup__savebutton');



  toggleButtonState(inputList, submitButtonSelector);
  inputList.forEach((inputSelector) => {

    inputSelector.addEventListener('input', () => {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
}


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formSelector) => {
    const fieldsetList = Array.from(formSelector.querySelectorAll('.popup__set'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);

    });
  });
}

function toggleButtonState(inputList, submitButtonSelector) {
  const hasInvalidInput = inputList.every(({ validity }) => validity.valid);
  if (hasInvalidInput) {
    submitButtonSelector.classList.remove('savebutton_inactive');
    submitButtonSelector.removeAttribute("disabled", "disabled")
  } else {
    submitButtonSelector.classList.add('savebutton_inactive');
    submitButtonSelector.setAttribute("disabled", "disabled");
  }
};

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__savebutton',
  inactiveButtonClass: 'savebutton_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error',
  popupEditProfile: '.popup_edit-profile',
  formCreateCard: 'create-form'
});

enableValidation()
