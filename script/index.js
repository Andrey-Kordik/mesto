import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { imagePopup,initialCards } from "./utils/constants.js"
import { openPopup, closePopup } from "./utils/utils.js"

const popup = document.querySelector('.popup')
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const buttonCloseEditProfilePopup = document.querySelector('.popup__closing-icon');
const nameInput = document.getElementById('Name')
const jobInput = document.getElementById('Job')
const profileName = document.querySelector('.profile__heading')
const profileJob = document.querySelector('.profile__subheading')
const profileForm = document.getElementById('profileForm')
const placeTitle = document.getElementById('placename');
const placeImage = document.getElementById('link');
const formCreateCard = document.getElementById('create-form')

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

buttonOpenEditProfilePopup.addEventListener('click', function () {
  openPopup(popupEditProfile);
  openEditProfilePopup()

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

buttonOpenAddCardPopup.addEventListener('click', function () {
  openPopup(popupAddCard);
  formCreateCard.reset()
  createCardValidator.disableSubmitButton();
});

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

const elements = document.querySelector('.elements')

const createCard = (item) => { 
  const card = new Card (item, '.element') 
  const cardElement = card.generateCard() 
  return cardElement
} 

const addCard = (item) => {
  elements.prepend(createCard(item));
}

initialCards.forEach((item) => {
  createCard(item)
  addCard(item)
})

function createCardFormSubmit(evt) {
  evt.preventDefault();
  const title = placeTitle.value
  const image = placeImage.value
  createCard({title:title, link:image})
  addCard({title:title, link:image})

  closePopup(popupAddCard);
  formCreateCard.reset()
}

formCreateCard.addEventListener('submit', createCardFormSubmit);

