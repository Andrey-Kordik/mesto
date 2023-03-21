import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, picture, title) {
        super(popupSelector);
        this._popup = popupSelector
        this._picture = picture
        this._title = title
    }

    open(picture, title) {
        super.open()
        this._picture.src = picture
        this._picture.alt = title
        this._title.textContent = title
    }

}