
export default class Card {
  constructor(data, userId, templateSelector, popupOpener, handleLikeClick, handleTrashClick) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this.id = data._id;
    this._myId = userId;
    this._templateSelector = templateSelector
    this._popupOpener = popupOpener
    this.handleLikeClick = handleLikeClick;
    this._handleTrashClick = handleTrashClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector('.element').content.querySelector('.element__item').cloneNode(true)
    return cardElement
  }

  generateCard() {
    this._element = this._getTemplate()
    this._setEventListeners()

    this._element.querySelector('.element__photo').src = this._link
    this._element.querySelector('.element__photo').alt = this._name
    this._element.querySelector('.element__name').textContent = this._name
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._like = this._element.querySelector('.element__like');
    this._likeCounter = this._element.querySelector('.element__likecounter');

    if (this._myId !== this._ownerId) {
      this._deleteButton.remove();
    }
    this.setLikes(this._likes)

    return this._element
  }

  addLike() {
    this._like.classList.add('element__like_active');
  }

  _checkLike() {
    if (this._likes.some((like) => like._id === this._myId)) {
      return true;
    }
    return false;
  }

  removeLike() {
    this._like.classList.remove('element__like_active');      
  }

  setLikes(arr) {
    this._likeCounter.textContent = arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this.addLike()
    } else {
      this.removeLike()
    }
  }

  _setEventListeners() {
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleImageClick()
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this.handleLikeClick(this.id, this._checkLike(),this);
    });

    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleTrashClick(this.id, this);
    })
  }

  _handleImageClick() {
    this._popupOpener(this._link, this._name)
  }

  removeCard() {
    this._element.remove()
    this._element = null
  }
}

