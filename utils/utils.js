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

    submitButtonSelector.classList.add('popup__button_disabled');
    submitButtonSelector.setAttribute('disabled', 'true');
  }
  
  function addFormSubmit(evt) {
    evt.preventDefault();
    const inputAddTitle = inputTitle.value;
    const inputAddLink = inputLink.value;
  
    const card = new Card({ name: inputAddTitle, link: inputAddLink }, '.template');
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

  function hideInputError() {
      const formInputElement = document.querySelector('.popup__input');
      const formErrorElement = document.querySelector(`${formInputElement.id}-error`);

      if (!formInputElement.validity.valid) {
        formInputElement.classList.remove('popup__input_type_error');
      }
      if (!formErrorElement.validity.valid) {
        formErrorElement.classList.remove('popup__error_visible');
        formErrorElement.textContent = '';
      }
  }
  
  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    inputTitle.value = '';
    inputLink.value = '';
  
    document.removeEventListener('keydown', closeByEscape);

    hideInputError();
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

  export {
    openEditProfilePopup,
    editProfileFormSubmitHandler,
    openPopupAdd,
    addFormSubmit,
    openPopup,
    closePopup
  };

  import {
    popups,
    formElement,
    formElementAdd,
    popupEditProfileOpenBtn,
    popupAddCardOpenBtn,
    popupAddCard,
    submitButtonSelector,
    inputTitle,
    inputLink,
    container,
    popupEditProfile,
    inputName,
    profileName,
    inputJob,
    profileProfession
} from './constants.js';
  import Card from '../scripts/Card.js';