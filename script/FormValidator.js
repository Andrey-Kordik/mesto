
export default class FormValidator {
    constructor(config, formSelector) {
        this.config = config;
        this._formSelector = formSelector;
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
        const submitButton = this._formSelector.querySelector(this.config.submitButtonSelector)
        const inputList = Array.from(this._formSelector.querySelectorAll(this.config.inputSelector));
        this._toggleButtonState(inputList, submitButton);
        inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState(inputList, submitButton);
            });
        });
    }


    _toggleButtonState(inputList, submitButtonSelector) {
        const formIsValid = inputList.every((item) => item.validity.valid);

        if (formIsValid) {
            submitButtonSelector.classList.remove(this.config.inactiveButtonClass);
            submitButtonSelector.removeAttribute("disabled")
        } else {
            submitButtonSelector.classList.add(this.config.inactiveButtonClass);
            submitButtonSelector.setAttribute("disabled", "disabled");
        }
    }


    enableValidation() {
        this._setEventListeners(this._formSelector, this.config)
    }
}