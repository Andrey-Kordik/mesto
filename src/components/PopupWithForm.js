import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, form, submitForm) {
        super(popupSelector);
        this._popup = popupSelector
        this._submitForm = submitForm;
        this._form = form
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__info'))
        this._inputList.forEach((input) =>
            (this._inputValues[input.name] = input.value))

        return this._inputValues;
    }

    close() {
        super.close()
        this._form.reset()
    }


    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(this._getInputValues())
            this.close()
        })
    }
}

