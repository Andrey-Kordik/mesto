
export default class Card {
    constructor({title, link}, templateSelector, popupOpener) {
      this._title = title;
      this._link = link;
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
      this._element.querySelector('.element__photo').alt = this._title
      this._element.querySelector('.element__name').textContent = this._title

  
      return this._element
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__photo').addEventListener('click', () => {
        this._handleImageClick ()
      });
  
      this._toggleLikebutton();
  
      this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._removeCard () 
      })
     }
    
  
   _handleImageClick () {
    this._popupOpener( this._link, this._title)
  }

    _toggleLikebutton() {
      this._element.querySelector('.element__like').addEventListener('click',  (evt) => {
        this._toggleLike(evt)
      })
    }
  

    _toggleLike(evt){
      evt.target.classList.toggle('element__like_active'); 
} 

    _removeCard () {
      this._element.remove()
      }
    }

