let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__closing-icon');

function popupAppearance() {
  popup.classList.add('popup_opened');
  popup.style.transitionDuration = '0.5s';
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

popupOpen.addEventListener('click', popupAppearance);


function popupDisabled() {
  popup.classList.remove('popup_opened');
};


popupClose.addEventListener('click', popupDisabled);


let formElement = document.querySelector('.popup__container')
let nameInput = document.getElementById('Name')
let jobInput = document.getElementById('Job')
let profileName = document.querySelector('.profile__heading')
let profileJob = document.querySelector('.profile__subheading')

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupDisabled();
}


formElement.addEventListener('submit', handleFormSubmit);

const elementsList = document.querySelector('.elements')
const elementTemplate = document.querySelector('.element').content.querySelector('.element__item')
const deleteButton = document.querySelector(".element__delete-button")

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'

  }
];


function renderCards(elements) {

  const cards = elements.map((element) => {
    const elementData = elementTemplate.cloneNode(true);
    elementData.querySelector('.element__name').textContent = element.name
    elementData.querySelector('.element__photo').src = element.link
    elementData.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    })
    elementData.querySelector('.element__delete-button').addEventListener('click', function (evt) {
      elementData.remove();
    })
    return elementData;
  });


  elementsList.append(...cards);
}

renderCards(initialCards);

let addCard = document.getElementById('addcard');
let placeTitle = document.getElementById('placename');
let placeImage = document.getElementById('link');


addCard.addEventListener("click", (evt) => {
  evt.preventDefault()
  let title = placeTitle.value
  let image = placeImage.value
  const elementData = elementTemplate.cloneNode(true);
  elementData.querySelector('.element__name').textContent = title
  elementData.querySelector('.element__photo').src = image
  elementData.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  })
  elementData.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    elementData.remove();
  })
  elementsList.prepend(elementData)
  addformDisabled()
})


let addform = document.getElementById('addform');
let addformOpen = document.querySelector('.profile__add-button')
let addformClose = document.getElementById('addclose')

function addformAppearance() {
  addform.classList.add('popup_opened')
  addform.style.transitionDuration = '0.5s';;
};

addformOpen.addEventListener('click', addformAppearance);

function addformDisabled() {
  addform.classList.remove('popup_opened');
};

addformClose.addEventListener('click', addformDisabled)


let imagePopup = document.getElementById('image');
let imageOpen = document.querySelectorAll('.element__photo');
let imageClose = document.getElementById('imageclose');
let imageName = document.querySelector('.popup__image-name');
let imagePicture = document.querySelector('.popup__image') 
let photoTitle = document.querySelectorAll('.element__name')


function openImages () {
for (let i = 0; i< imageOpen.length; i++) {
  imageOpen[i].addEventListener('click', function () {
    imagePopup.classList.add('popup_opened');
    imagePopup.style.transitionDuration = '0.5s';
    imagePicture.src = imageOpen[i].getAttribute('src')
    imagesName ()
  })
}
}

function imagesName () {
  for (let i = 0; i< photoTitle.length; i++) {
    imageOpen[i].addEventListener('click', function () {
      imageName.textContent = photoTitle[i].textContent})
  }
}

openImages ()

function imageDisabled() {
  image.classList.remove('popup_opened');
};

imageClose.addEventListener('click', imageDisabled);