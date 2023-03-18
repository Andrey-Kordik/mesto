import {imagePopup,imagePicture,imageName } from "./utils/constants.js"


export default class Card {
    constructor(data, templateSelector, popupOpener) {
      this._title = data.title;
      this._link = data.link;
      this._templateSelector = templateSelector
      this._popupOpener = popupOpener
    }
  
    _getTemplate() {
      const cardElement = document.querySelector('.element').content.querySelector('.element__item').cloneNode(true)
      return cardElement
    }
  
    generateCard() {
      this._element = this._getTemplate()
      this._setEventListeners()
  
      this._element.querySelector('.element__photo').src = this._link
      this._element.querySelector('.element__name').textContent = this._title

  
      return this._element
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__photo').addEventListener('click', () => {
        this._handleOpenPopup ()
      });
  
      this._toggleLikebutton();
  
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._removeCard () 
      })
     }
    
  
  _handleOpenPopup () {
    this._popupOpener( this._link, this._title)
  }

    _toggleLikebutton() {
      this._element.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
      })
    }
  
    _removeCard () {
      this._element.remove()
      }
    }

