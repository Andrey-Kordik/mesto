export function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closePopupByEsc)
  };

  export function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      const popupActive = document.querySelector('.popup_opened')
      closePopup(popupActive)
    }
  };

  export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc)
  };
  