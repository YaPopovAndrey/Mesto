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

  // Кнопки формы
const popup = document.querySelector('.popup');
const showPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');

// Кнопка добавления нового места
// Кнопки формы
const popupAdd = document.querySelector('.popup_add');
const showPopupButtonAdd = document.querySelector('.profile__add-button');
const closePopupButtonAdd = document.querySelector('.popup__button-close_add');

// Поля ввода формы профиля
const formElement = document.querySelector('.popup__form');
const Inputs = document.querySelectorAll('.popup__input');

// Поля ввода формы нового места
const formElementAdd = document.querySelector('.popup__form_add');
const InputsAdd = document.querySelectorAll('.popup__input_add');

// Поля профиля
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const container = document.querySelector('.elements__content');
const templateElement = document.querySelector('.template');

const popupImgOpen = document.querySelector('.popup-img');
const popupImgClose = document.querySelector('.popup-img__button-close');