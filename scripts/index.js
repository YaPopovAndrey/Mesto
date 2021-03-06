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

  const container = document.querySelector('.elements__content');
  
  function createNewCards (item) {
    return `
<li>
    <div class="elements__element">
        <img src=${item.link} alt="Домбай" class="elements__image">
        <h2 class="elements__caption">${item.name}</h2>
        <button type="button" class="elements__like"></button>
    </div>
</li>
`;
  };

  function renderList() {
    const result = initialCards.map(createNewCards).join('');

    container.insertAdjacentHTML('afterbegin', result);
  }

renderList();

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

// Редактирование профиля
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
  container.insertAdjacentHTML('afterbegin', newCard);
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