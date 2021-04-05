import Card from './Card.js';
import FormValidator from './FormValidator.js';

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

initialCards.forEach((item) => {
  const card = new Card(item, '.template__card');
  const cardElement = card.generateCard();
  const container = document.querySelector('.elements__content');

  container.append(cardElement);
});

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileOpenBtn = document.querySelector('.profile__edit-button');

const popupAddCard = document.querySelector('.popup_add');
const popupAddCardOpenBtn = document.querySelector('.profile__add-button');

const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');

const formElementAdd = document.querySelector('.popup__form_add');
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const container = document.querySelector('.elements__content');

const popupImg = document.querySelector('.popup_img');

const captionPopup = document.querySelector('.popup__caption');
const linkPopup = document.querySelector('.popup__image');

const popups = document.querySelectorAll('.popup');

const submitButtonSelector = popupAddCard.querySelector('.popup__button');

export { captionPopup, linkPopup, popupImg, openPopup };

function openEditProfilePopup() {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileProfession.textContent;
}

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputJob.value;
  closePopup(popupEditProfile);
}

function openPopupAdd() {
  openPopup(popupAddCard);

  submitButtonSelector.setAttribute('disabled', 'true');
}

function addFormSubmit(evt) {
  evt.preventDefault();
  const inputAddTitle = inputTitle.value;
  const inputAddLink = inputLink.value;

  const card = new Card({ name: inputAddTitle, link: inputAddLink });
  const newCard = card.generateCard();

  container.prepend(newCard);
  closePopup(popupAddCard);
  inputTitle.value = '';
  inputLink.value = '';
}

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');


  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});



formElement.addEventListener('submit', editProfileFormSubmitHandler);
formElementAdd.addEventListener('submit', addFormSubmit);
popupEditProfileOpenBtn.addEventListener('click', openEditProfilePopup);
popupAddCardOpenBtn.addEventListener('click', openPopupAdd);

const enableObject = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const formElementValidator = new FormValidator(enableObject, formElement);
formElementValidator.enableValidation();
const formElementAddValidator = new FormValidator(enableObject, formElementAdd);
formElementAddValidator.enableValidation();