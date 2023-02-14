

const popup = document.querySelector('.popup')
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');
const buttonCloseEditProfilePopup = document.querySelector('.popup__closing-icon');


const nameInput = document.getElementById('Name')
const jobInput = document.getElementById('Job')
const profileName = document.querySelector('.profile__heading')
const profileJob = document.querySelector('.profile__subheading')



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


function openPopup(popup) {
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

buttonOpenAddCardPopup.addEventListener('click', function () {
  openPopup(popupAddCard);
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


function closePopupByEsc (evt) {  
  if (evt.keyCode === 27) {
  const popupActive = document.querySelector('.popup_opened')
  closePopup(popupActive)
}
};


const elementsList = document.querySelector('.elements')
const elementTemplate = document.querySelector('.element').content.querySelector('.element__item')


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

function createCard(element) {
  const elementData = elementTemplate.cloneNode(true);
  elementData.querySelector('.element__name').textContent = element.title

  const cardImage = elementData.querySelector('.element__photo')
  cardImage.src = element.link
  cardImage.alt = "фотография места"

  elementData.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  })
  elementData.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    elementData.remove();
  })
  cardImage.addEventListener('click', function () {

    imagePicture.src = element.link
    imagePicture.alt = "фотография места"
    imageName.textContent = element.title

    openPopup(imagePopup);
  })
  return elementData;
}


const imagePopup = document.querySelector('.popup_image');
const imageName = imagePopup.querySelector('.popup__image-name');
const imagePicture = imagePopup.querySelector('.popup__image')

function renderCards(elements) {
  const cards = elements.map((element) => {
    return createCard(element)
  });
  elementsList.append(...cards);
}

renderCards(initialCards);

const placeTitle = document.getElementById('placename');
const placeImage = document.getElementById('link');
const formCreateCard = document.getElementById('create-form')

function createCardFormSubmit(evt) {
  evt.preventDefault();

  const title = placeTitle.value
  const image = placeImage.value
  const card = createCard({ title: title, link: image })

  elementsList.prepend(card)
  closePopup(popupAddCard);

  placeImage.value = ''
  placeTitle.value = ''
}

formCreateCard.addEventListener('submit', createCardFormSubmit);

