import Popup from './Popup.js';

export default class PopupDeleteConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupSelector = popupSelector
    this._buttonConfirm = this.popupSelector.querySelector('.popup__savebutton');
  }

  submitDelete (submitDelete) {
    this._handleSubmitDelete = submitDelete;
  }



  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmitDelete(evt)
    });
  }

}
