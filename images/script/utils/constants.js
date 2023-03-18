export const imagePopup = document.querySelector('.popup_image');
export const  imageName = imagePopup.querySelector('.popup__image-name');
export const  imagePicture = imagePopup.querySelector('.popup__image')
export const placePhoto = document.querySelector('.element__photo')
export const photoName = document.querySelector ('.element__name')
export const initialCards = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  
    }
  ];
export const buttonsClosePopup = document.querySelectorAll('.popup__closing-icon');
export const popups = document.querySelectorAll(".popup")
export const placeTitle = document.getElementById('placename');
export const placeImage = document.getElementById('link');
export const formCreateCard = document.getElementById('create-form')
export const buttonOpenAddCardPopup = document.querySelector('.profile__add-button')
export const elements = document.querySelector('.elements')
export const submitButtonAddForm = document.getElementById ('addcard')


export const nameInput = document.getElementById('Name')
export const jobInput = document.getElementById('Job')
export const profileName = document.querySelector('.profile__heading')
export const profileJob = document.querySelector('.profile__subheading')


export const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__savebutton',
  inactiveButtonClass: 'popup__savebutton_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error',
}


export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
export const profileForm = document.getElementById('profileForm')

