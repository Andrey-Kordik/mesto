import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popup = popup
        this._picture = this._popup.querySelector('.popup__image')
        this._title = this._popup.querySelector('.popup__image-name')
        
    }

    open(picture, title) {
        super.open()
        this._picture.src = picture
        this._picture.alt = title
        this._title.textContent = title
    }

}