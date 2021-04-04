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

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.template')
    .content
    .querySelector('.template__card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__caption').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._likeCard();
    });
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openPopupImg();
    })
  }

  _likeCard() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _deleteCard() {
    this._element.querySelector('.elements__delete').closest('.card').remove();
  }

  _openPopupImg() {
    this._element.closest('.card');
  
    const caption = this._element.querySelector('.elements__caption').textContent;
    const link = this._element.querySelector('.elements__image').src;
 
    captionPopup.textContent = caption;
    linkPopup.src = link;
    linkPopup.alt = caption;
 
    openPopup(popupImg);
  }

}

initialCards.forEach((item) => {
  const card = new Card(item, '.template__card');
  const cardElement = card.generateCard();
  const container = document.querySelector('.elements__content');

  container.append(cardElement);
});
//Конец класса Card



// Кнопки формы
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupEditProfileCloseBtn = document.querySelector('.popup__button-close');

// Кнопка добавления нового места
// Кнопки формы
const popupAddCard = document.querySelector('.popup_add');
const popupAddCardOpenBtn = document.querySelector('.profile__add-button');
const popupAddCardCloseBtn = document.querySelector('.popup__button-close_add');

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

const popups = document.querySelectorAll('.popup');

const inputList = Array.from(popupAddCard.querySelectorAll('.popup__input'));
const submitButtonSelector = popupAddCard.querySelector('.popup__button');

//Редактирование профиля
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

// Добавление нового места
function openPopupAdd() {
  openPopup(popupAddCard);

  submitButtonSelector.setAttribute('disabled', 'true');
}

function addFormSubmit(evt) {
  evt.preventDefault();
  const inputAddTitle = inputTitle.value;
  const inputAddLink = inputLink.value;

  const card = new Card({name: inputAddTitle, link: inputAddLink});
  const newCard = card.generateCard();

  container.prepend(newCard);
  closePopup(popupAddCard);
  inputTitle.value = '';
  inputLink.value = '';
}

// открытие всех поп-апов
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}
// закрытие всех поп-апов
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