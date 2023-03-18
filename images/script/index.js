import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  imagePopup, initialCards, formCreateCard, buttonOpenAddCardPopup, elements, submitButtonAddForm, imagePicture, imageName, config, popupEditProfile,
  buttonOpenEditProfilePopup, nameInput, jobInput, profileForm, placeTitle, placeImage
} from "./utils/constants.js"
import Section from "./Section.js"
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const editProfileValidator = new FormValidator(config, profileForm)
editProfileValidator.enableValidation()
const createCardValidator = new FormValidator(config, formCreateCard)
createCardValidator.enableValidation()

const pictureOpened = new PopupWithImage(imagePopup, imagePicture, imageName)
const handleCardClick = (picture, title) => {
  pictureOpened.open(picture, title)
  pictureOpened.setEventListeners()
}

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.element', handleCardClick)
    const cardElement = card.generateCard()
    defaultCardList.addItem(cardElement)

  }
}, '.elements');

defaultCardList.renderItems()
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddForm = new PopupWithForm(popupAddCard, formCreateCard, createCardFormSubmit)

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddForm.open()
  createCardValidator.disableSubmitButton()
})
popupAddForm.setEventListeners()

const createCard = (item) => {
  const card = new Card(item, '.element', handleCardClick)
  const cardElement = card.generateCard()
  return cardElement
}

const addCard = (item) => {
  elements.prepend(createCard(item));
}

function createCardFormSubmit() {
  const title = placeTitle.value
  const image = placeImage.value
  createCard({ title: title, link: image })
  addCard({ title: title, link: image })
}

const userInformation = new UserInfo(nameInput, jobInput)

const popupProfile = new PopupWithForm(popupEditProfile, profileForm, submitFormEditProfile)

buttonOpenEditProfilePopup.addEventListener('click', () => {
  userInformation.getUserInfo()
  popupProfile.open()

});

function submitFormEditProfile() {
  userInformation.setUserInfo()
}

popupProfile.setEventListeners()
