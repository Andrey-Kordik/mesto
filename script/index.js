let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__container-closing-icon');

popupOpen.addEventListener('click', function () {
    popup.classList.add('active');
});

popupClose.addEventListener('click', function () {
    popup.classList.remove('active');
});

let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__container-username')
let jobInput = document.querySelector('.popup__container-userjob')
let saveButton = document.querySelector('.popup__container-savebutton')
let profileName = document.querySelector('.profile__heading')
let profileJob = document.querySelector('.profile__subheading')


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}


formElement.addEventListener('submit', handleFormSubmit);

saveButton.addEventListener('click', function () {
    popup.classList.remove('active');
    
});


