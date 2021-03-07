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
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupIEditProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupIEditProfileCloseBtn = document.querySelector('.popup__button-close');

// Кнопка добавления нового места
// Кнопки формы
const popupIAddCard = document.querySelector('.popup_add');
const popupIAddCardOpenBtn = document.querySelector('.profile__add-button');
const popupIAddCardCloseBtn = document.querySelector('.popup__button-close_add');

// Поля ввода формы профиля
const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');

// Поля ввода формы нового места
const formElementAdd = document.querySelector('.popup__form_add');
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');

// Поля профиля
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const container = document.querySelector('.elements__content');
const templateElement = document.querySelector('.template');

const popupImg = document.querySelector('.popup_img');
const popupImgCloseBtn = document.querySelector('.popup__button-close_img');

const captionPopup = document.querySelector('.popup__caption');
const linkPopup = document.querySelector('.popup__image');
const altPopup = document.querySelector('.popup__image');

const popup = document.querySelectorAll('.popup');
