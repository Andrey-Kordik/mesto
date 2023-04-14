import '../pages/index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  imagePopup, initialCards, formCreateCard, buttonOpenAddCardPopup, elements, imagePicture, imageName, config, popupEditProfile,
  buttonOpenEditProfilePopup, nameInput, jobInput, profileForm, placeTitle, placeImage, inputList, profileName, 
  profileJob, popupDelete, popupAvatar, editAvatarButton,cardPopup, formChangeAvatar} from "../components/utils/constants.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {api} from "../components/Api.js";
import PopupDeleteConfirm from '../components/PoopupDeleteConfirm';

const editProfileValidator = new FormValidator(config, profileForm)
editProfileValidator.enableValidation()
const createCardValidator = new FormValidator(config, formCreateCard)
createCardValidator.enableValidation()

const pictureOpened = new PopupWithImage(imagePopup)
pictureOpened.setEventListeners()

const handleCardClick = (picture, name) => {
  pictureOpened.open(picture, name)
}

function handleTrashClick(id, card) {
  popupDeleteConfirm.submitDelete(() => handleDeleteConfirm(id, card))
  popupDeleteConfirm.open();
}

function handleDeleteConfirm(id, card) {
  api.deleteCard(id)
    .then(() => {
      card.removeCard();
      popupDeleteConfirm.close();
    })
    .catch(err => {
      console.log(err.message)
    });
}

const popupChangeAvatar = new PopupWithForm(popupAvatar, handleChangeAvatar);

popupChangeAvatar.setEventListeners();

const validityPopupAvatar= new FormValidator(config, formChangeAvatar);
validityPopupAvatar.enableValidation();

function handleChangeAvatar(inputValues) {
  popupChangeAvatar.renderSaving(true)
  api.editAvatar(inputValues)
    .then((data) => {
      console.log(data)
      userInformation.setUserInfo(data);
      popupChangeAvatar.close();
    })
    .catch(err => {
      console.log(err.message)
    })
    .finally(() => {
      popupChangeAvatar.renderSaving(false);
    })
}

editAvatarButton.addEventListener('click', () => {
  popupChangeAvatar.open();
  validityPopupAvatar.disableSubmitButton()
});

const popupDeleteConfirm = new PopupDeleteConfirm(popupDelete);
popupDeleteConfirm.setEventListeners();

function createCard(data, userId) {
  const card = new Card(data, userId, '.element', handleCardClick, handleLikeClick, handleTrashClick)
  const cardElement = card.generateCard()
  return cardElement
}
function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    api.removeLike(id)
    .then((data) => {            
      card.setLikes(data.likes);            
    })

} else {
 api.putLike(card.id)
    .then((data) => {
      card.setLikes(data.likes);
    })
}
}

let userId = null

function createCardFormSubmit(inputValues) {
  popupAddForm.renderSaving(true)
  api.addCard({placename: inputValues.placename, link:inputValues.link})
  .then ((data) =>  { const card = createCard(data, userId)
  defaultCardList.addItem(card),
  popupAddForm.close()
})
  .catch(err => {
    console.log(err.message)
  })
  .finally(() => {
    popupAddForm.renderSaving(false);
  })
}

function editProfileformSubmit(inputValues) {
  popupProfile.renderSaving(true)
  api.editUserData({name: inputValues.name, job: inputValues.job})
  .then((data) => {
    userInformation.setUserInfo(data)
    popupProfile.close()
  })
  .catch(err => {
    console.log(err.message)
  })
  .finally(() => {
    popupProfile.renderSaving(false);
  })
}

const popupAddCard = document.querySelector('.popup_add-card');
const popupAddForm = new PopupWithForm(popupAddCard, createCardFormSubmit)

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddForm.open()
  createCardValidator.disableSubmitButton()
})
popupAddForm.setEventListeners()

const userInformation = new UserInfo({
  name: '.profile__heading',
  job: '.profile__subheading',
  avatar: '.profile__avatar'
})

const popupProfile = new PopupWithForm(popupEditProfile, editProfileformSubmit)

buttonOpenEditProfilePopup.addEventListener('click', () => {
  const userOriginValue = userInformation.getUserInfo()
  nameInput.value = userOriginValue.name
  jobInput.value = userOriginValue.job

  popupProfile.open()

});

popupProfile.setEventListeners()

Promise.all([ api.getUserData(), api.getCards()])
  .then(([ resUser, resCards ]) => {
    userId = resUser._id
    userInformation.setUserInfo(resUser)
    defaultCardList.renderItems(resCards.reverse())
  })
  .catch(err => {
    console.log(err.message)
  })

  const defaultCardList = new Section({
    data: {},
    renderer: (data) => {
      const card = createCard(data, userId)
      defaultCardList.addItem(card)
    }
  }, '.elements');