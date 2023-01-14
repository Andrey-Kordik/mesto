let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__closing-icon');

function popupAppearance () {
    popup.classList.add('popup_opened');
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
let jobInput = document.getElementById ('Job')
let profileName = document.querySelector('.profile__heading')
let profileJob = document.querySelector('.profile__subheading')

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupDisabled();
}


formElement.addEventListener('submit', handleFormSubmit);




