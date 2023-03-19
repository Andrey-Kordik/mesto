import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = popupSelector
    }

    open(picture, title) {
        super.open()
        this._popup.querySelector('.popup__image').src = picture
        this._popup.querySelector('.popup__image-name').textContent = title
    }

    setEventListeners() {
        super.setEventListeners()
    }
}