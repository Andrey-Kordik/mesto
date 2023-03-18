import { popups, buttonsClosePopup } from "./utils/constants.js"

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close()
    }
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _closePopupByArea() {
    popups.forEach((popup) => {
      popup.addEventListener('click', (evt) => {
        if (evt.target === popup) {
          this.close(popup)
        }
      })
    });
  }

  _closePopupByClosingIcon() {
    buttonsClosePopup.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        popups.forEach((popup) => {
          this.close(popup)
        })
      })
    })
  }
  
  setEventListeners() {
    this._closePopupByArea()
    this._closePopupByClosingIcon()

  }
}