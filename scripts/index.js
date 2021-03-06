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

  function renderList() {
    const result = initialCards.map(function(item) {
      return `
  <li>
      <div class="elements__element">
          <img src=${item.link} alt="Домбай" class="elements__image">
          <h2 class="elements__caption">${item.name}</h2>
          <button type="button" class="elements__like"></button>
      </div>
  </li>
  `;
    }).join('');

    container.insertAdjacentHTML('afterbegin', result);
  }

renderList();





























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