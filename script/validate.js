const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add('popup__info_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add ('popup__info-error_active')
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__info_type_error');
  errorElement.classList.remove ('popup__info-error_active')
  errorElement.textContent = ''
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage)
  }
  else {
    hideError(formElement, inputElement)
  } 
};



  const setEventListeners = (formElement) =>  {
    
    const inputList = Array.from(formElement.querySelectorAll('.popup__info'));
    const buttonElement = formElement.querySelector('.popup__savebutton');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
  
      inputElement.addEventListener('input', () => {
   checkInputValidity(formElement, inputElement);
   toggleButtonState(inputList, buttonElement);
      });
  });
 }    
 
 
 const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container')); 
formList.forEach((formElement) => {
  const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
    
  }); 
  });
}

function toggleButtonState (inputList, buttonElement) {
  const hasInvalidInput = inputList.every(({validity}) => validity.valid);
    if (hasInvalidInput){
      buttonElement.classList.remove('savebutton_inactive');
      buttonElement.removeAttribute("disabled", "disabled")
    } else {
      buttonElement.classList.add('savebutton_inactive');
      buttonElement.setAttribute("disabled", "disabled");
    }
  }; 





  
  enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__savebutton',
    inactiveButtonClass: 'savebutton_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__info-error'
  }); 
  


