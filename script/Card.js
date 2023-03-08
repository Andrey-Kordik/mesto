import {imagePopup,imagePicture,imageName } from "./index.js"
import { openPopup } from "./index.js";


export default class Card {
    constructor(data, templateSelector) {
      this._title = data.title;
      this._link = data.link;
      this._templateSelector = templateSelector
      console.log(data.title)
      console.log(data.link)
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
        this._handleOpenPopup()
      });
  
      this._toggleLikebutton();
  
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._removeCard () 
      })
     }
    
  
    _handleOpenPopup() {
      imagePicture.src = this._link
      imageName.textContent = this._title
      openPopup(imagePopup)
    }
  
    _handleClosePopup() {
      closePopup(imagePopup);
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

