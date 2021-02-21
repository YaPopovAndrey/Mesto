let popup = document.querySelector('.popup');
let showPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');

function togglePopup() {
    if (popup.classList.contains('popup_is-opened')) {}

    popup.classList.toggle('popup_is-opened');

}

showPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);