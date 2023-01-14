let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__closing-icon');

function popupAppearance () {
    popup.classList.add('popup_opened');
};

popupOpen.addEventListener('click', popupAppearance); 


function popupDisabled() {
    popup.classList.remove('popup_opened');
};


popupClose.addEventListener('click', popupDisabled); 


let formElement = document.querySelector('.popup__container')
let nameInput = document.getElementById('Name')
let jobInput = document.getElementById ('Job')
let profileName = document.querySelector('.profile__heading')
let profileJob = document.querySelector('.profile__subheading')

console.log(nameInput)

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}


formElement.addEventListener('submit', handleFormSubmit);




