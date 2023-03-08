import Card from "./Card.js";
import FormValidator from "./FormValidator.js";



const popup = document.querySelector('.popup')
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const buttonCloseEditProfilePopup = document.querySelector('.popup__closing-icon');


const nameInput = document.getElementById('Name')
const jobInput = document.getElementById('Job')
const profileName = document.querySelector('.profile__heading')
const profileJob = document.querySelector('.profile__subheading')
const formProfileButton = document.getElementById('editform')
const profileForm = document.getElementById('profileForm')


buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEditProfile);
  openEditProfilePopup()
  formProfileButton.removeAttribute('disabled')
  formProfileButton.classList.remove('popup__savebutton_inactive')
});

function openEditProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};


const popups = document.querySelectorAll(".popup")

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup(popup)
    }
  })
});


export function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupByEsc)
};



const formEditProfile = document.querySelector('.popup_edit-profile')


function submitFormEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);

}

formEditProfile.addEventListener('submit', submitFormEditProfile);


const popupAddCard = document.querySelector('.popup_add-card');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button')
const buttonCloseAddCardPopup = document.getElementById('addclose')
const buttonCreateCard = document.getElementById('addcard')

buttonOpenAddCardPopup.addEventListener('click', function () {
  openPopup(popupAddCard);
  buttonCreateCard.setAttribute('disabled', 'disabled')
  buttonCreateCard.classList.add('popup__savebutton_inactive')
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc)

};

buttonCloseEditProfilePopup.addEventListener('click', function () {
  closePopup(popupEditProfile);
});


buttonCloseAddCardPopup.addEventListener('click', function () {
  closePopup(popupAddCard);

});

const buttonCloseImagePopup = document.getElementById('imageclose')

buttonCloseImagePopup.addEventListener('click', function () {
  closePopup(imagePopup);
});


function closePopupByEsc(evt) {
  if (evt.keyCode === 27) {
    const popupActive = document.querySelector('.popup_opened')
    closePopup(popupActive)
  }
};

export const imagePopup = document.querySelector('.popup_image');
export const  imageName = imagePopup.querySelector('.popup__image-name');
export const  imagePicture = imagePopup.querySelector('.popup__image')


const initialCards = [
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




initialCards.forEach((item) => {
  const card = new Card(item, '.element')
  const cardElement = card.generateCard()

  document.querySelector('.elements').append(cardElement)
})



const placeTitle = document.getElementById('placename');
const placeImage = document.getElementById('link');
const formCreateCard = document.getElementById('create-form')

function createCardFormSubmit(evt) {
  evt.preventDefault();

  const title = placeTitle.value
  const image = placeImage.value
  const card = new Card({ title: title, link: image})
   const cardElement =card.generateCard()

  document.querySelector('.elements').prepend(cardElement)
  closePopup(popupAddCard);

  placeImage.value = ''
  placeTitle.value = ''

}

formCreateCard.addEventListener('submit', createCardFormSubmit);



const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__savebutton',
  inactiveButtonClass: 'popup__savebutton_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error',
}
 

 const editProfileValidator = new FormValidator(config, profileForm)
 editProfileValidator.enableValidation()
 const createCardValidator = new FormValidator(config, formCreateCard)
 createCardValidator.enableValidation()

