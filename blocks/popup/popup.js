let popup = document.querySelector('.popup');
let showPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');
let savePopupButton = document.querySelector('.popup__button-save');

function togglePopup() {
    if (popup.classList.contains('popup_is-opened')) {}

    popup.classList.toggle('popup_is-opened');

}

showPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
savePopupButton.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelectorAll('.popup__input');
let jobInput = document.querySelectorAll('.popup__input');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let profileName =  document.querySelector('.profile__name');
    let profileProfession = document.querySelector('.profile__profession');

    profileName.textContent = nameInput[0].value;
    profileProfession.textContent = jobInput[1].value;
}

formElement.addEventListener('submit', formSubmitHandler);