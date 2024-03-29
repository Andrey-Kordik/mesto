
export default class Popup {
  constructor(popup) {
    this._popup = popup;
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
      this._popup.addEventListener('click', (evt) => {
        if (evt.target === this._popup) {
          this.close()
        }
      })
  }

  _closePopupByClosingIcon() {
    this._popup.querySelector('.popup__closing-icon').addEventListener('click', () => {
          this.close()
        })
  }
  
  setEventListeners() {
    this._closePopupByArea()
    this._closePopupByClosingIcon()

  }
}