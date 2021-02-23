// Кнопки формы
let popup = document.querySelector('.popup');
let showPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');

// Поля ввода формы
let formElement = document.querySelector('.popup__form');
let Inputs = document.querySelectorAll('.popup__input');

// Поля профиля
let profileName =  document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function openPopup() {
    popup.classList.add('popup_is-opened');
    Inputs[0].value = profileName.textContent;
    Inputs[1].value = profileProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = Inputs[0].value;
    profileProfession.textContent = Inputs[1].value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
showPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);