
export default class FormValidator {
    constructor(config, formSelector, submitButtonSelector, inputList) {
        this.config = config;
        this._formSelector = formSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inputList = inputList;
    }

    _showError(inputSelector, errorMessage) {
        const errorClass = this._formSelector.querySelector(`.${inputSelector.id}-error`);
        inputSelector.classList.add(this.config.inputErrorClass);
        errorClass.textContent = errorMessage;
    };

    _hideError(inputSelector) {
        const errorClass = this._formSelector.querySelector(`.${inputSelector.id}-error`);
        inputSelector.classList.remove(this.config.inputErrorClass);
        errorClass.textContent = ''
    };

    _checkInputValidity(inputSelector) {
        if (!inputSelector.validity.valid) {
            this._showError(inputSelector, inputSelector.validationMessage)
        }
        else {
            this._hideError(inputSelector)
        }
    };

    _setEventListeners() {

        this._submitButtonSelector = this._formSelector.querySelector(this.config.submitButtonSelector)
        this._inputList = Array.from(this._formSelector.querySelectorAll(this.config.inputSelector));
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState(this._inputList, this._submitButtonSelector);
            });
        });
    }

    _toggleButtonState() {
        const formIsValid = this._inputList.every((item) => item.validity.valid);

        if (formIsValid) {
            this.enableSubmitButton(this._submitButtonSelector)
        } else {
            this.disableSubmitButton(this._submitButtonSelector)
        }
    }

    enableSubmitButton = () => {
        this._submitButtonSelector.removeAttribute('disabled')
        this._submitButtonSelector.classList.remove(this.config.inactiveButtonClass)
    }

    disableSubmitButton = () => {

        this._submitButtonSelector.setAttribute('disabled', 'disabled')
        this._submitButtonSelector.classList.add(this.config.inactiveButtonClass)

    }


    enableValidation() {
        this._setEventListeners(this._formSelector, this.config)
    }

}