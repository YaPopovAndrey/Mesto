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
let popup = document.querySelector('.popup');
let showPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');

// Кнопка добавления нового места
// Кнопки формы
let popupAdd = document.querySelector('.popup_add');
let showPopupButtonAdd = document.querySelector('.profile__add-button');
let closePopupButtonAdd = document.querySelector('.popup__button-close_add');

// Поля ввода формы профиля
let formElement = document.querySelector('.popup__form');
let Inputs = document.querySelectorAll('.popup__input');

// Поля ввода формы нового места
let formElementAdd = document.querySelector('.popup__form_add');
let InputsAdd = document.querySelectorAll('.popup__input_add');

// Поля профиля
let profileName =  document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

const container = document.querySelector('.elements__content');
const templateElement = document.querySelector('.template');

const popupImgOpen = document.querySelector('.popup-img');
const popupImgClose = document.querySelector('.popup-img__button-close');

// Найти карточку по которой был клик
function imgPopup(evt) {
  evt.preventDefault();

  const target = evt.target;
  const currentTarget = target.closest('.card');
  // Получить данные (адрес картинки, название места)
  const caption = currentTarget.querySelector('.elements__caption').textContent;
  const link = currentTarget.querySelector('.elements__image').src;
// Передать данные в popup
  const captionPopup = document.querySelector('.popup-img__caption');
  captionPopup.textContent = caption;
  const linkPopup = document.querySelector('.popup-img__image');
  linkPopup.src = link;
// Открыть popup
  popupImgOpen.classList.toggle('popup-img_is-opened');
// Закрыть popup
}

function closePopupImg() {
  popupImgOpen.classList.toggle('popup-img_is-opened');
}





function deleteCard(evt) {
  const target = evt.target;
  const currentCard = target.closest('.card');

  currentCard.remove();
}

function likeCard(evt) {
  const target = evt.target;

  target.classList.toggle('elements__like_active');
}

function addCardListeners(card) {
  const deleteButton = card.querySelector('.elements__delete');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = card.querySelector('.elements__like');
  likeButton.addEventListener('click', likeCard);

  const clickImage = card.querySelector('.elements__image');
  clickImage.addEventListener('click', imgPopup);
}

function createNewCards(item) {
  const newItem = templateElement.content.cloneNode(true);
  const name = newItem.querySelector('.elements__caption');
  const link = newItem.querySelector('.elements__image');

  name.textContent = item.name;
  link.src = item.link;

  return newItem;
}

function renderList() {
  const result = initialCards.map(function(item) {
    const newCard = createNewCards(item);
    addCardListeners(newCard);

    return newCard;
  });

  container.append(...result);
}

renderList();

// Редактирование профиля
function openPopup() {
    popup.classList.add('popup_is-opened');
    Inputs[0].value = profileName.textContent;
    Inputs[1].value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_is-opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = Inputs[0].value;
  profileProfession.textContent = Inputs[1].value;
  closePopup();
}

// Добавление нового места
function openPopupAdd() {
  popupAdd.classList.add('popup_is-opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_is-opened');
}

function AddFormSubmit(evt) {
  evt.preventDefault();
  const InputAddTitle = InputsAdd[0].value;
  const InputAddLink = InputsAdd[1].value;

  const newCard = createNewCards({link: InputAddLink, name: InputAddTitle});

  addCardListeners(newCard);

  container.prepend(newCard);
  closePopupAdd();
  InputsAdd[0].value = '';
  InputsAdd[1].value = '';
}

formElement.addEventListener('submit', formSubmitHandler);
showPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

showPopupButtonAdd.addEventListener('click', openPopupAdd);
closePopupButtonAdd.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', AddFormSubmit);

popupImgClose.addEventListener('click', closePopupImg);