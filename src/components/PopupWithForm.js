import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup,submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__container')
        this._buttonConfirm = this._popup.querySelector('.popup__savebutton');
        this._inputList = this._form.querySelectorAll('.popup__info')
        this._textButton = this._buttonConfirm.textContent;
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputList.forEach((input) =>
            (this._inputValues[input.name] = input.value))

        return this._inputValues;
    }

    close() {
        super.close()
        this._form.reset()
    }

    renderSaving(status){
        if(status){
          this._buttonConfirm.textContent = `Cохранение...`;
        } else {
          this._buttonConfirm.textContent = this._textButton;
        }
      }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(this._getInputValues())
        })
    }
}

