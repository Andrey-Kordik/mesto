import '../pages/index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  imagePopup, initialCards, formCreateCard, buttonOpenAddCardPopup, elements, imagePicture, imageName, config, popupEditProfile,
  buttonOpenEditProfilePopup, nameInput, jobInput, profileForm, placeTitle, placeImage, inputList,
} from "../components/utils/constants.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const editProfileValidator = new FormValidator(config, profileForm)
editProfileValidator.enableValidation()
const createCardValidator = new FormValidator(config, formCreateCard)
createCardValidator.enableValidation()

const pictureOpened = new PopupWithImage(imagePopup, imagePicture, imageName)
pictureOpened.setEventListeners()

const handleCardClick = (picture, title) => {
  pictureOpened.open(picture, title)
}

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item.title, item.link)
    defaultCardList.addItem(card)
  }
}, '.elements');

defaultCardList.renderItems()
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddForm = new PopupWithForm(popupAddCard, formCreateCard, createCardFormSubmit, inputList)

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddForm.open()
  createCardValidator.disableSubmitButton()
})
popupAddForm.setEventListeners()

function createCard(title, link) {
  const card = new Card({ title: title, link: link }, '.element', handleCardClick)
  const cardElement = card.generateCard()
  return cardElement
}

function createCardFormSubmit(inputValues) {
  const card = createCard(inputValues['placename'], inputValues['link'])
  defaultCardList.addItem(card)
}

const userInformation = new UserInfo({
  name: '.profile__heading',
  job: '.profile__subheading'
})

const popupProfile = new PopupWithForm(popupEditProfile, profileForm, editProdileformSubmit, inputList)

function editProdileformSubmit(inputValues) {
  userInformation.setUserInfo(inputValues['Name'], inputValues['Job'])
}

buttonOpenEditProfilePopup.addEventListener('click', () => {
  const userOriginValue = userInformation.getUserInfo()
  nameInput.value = userOriginValue.name
  jobInput.value = userOriginValue.job

  popupProfile.open()

});

popupProfile.setEventListeners()
