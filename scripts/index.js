import Card from './Card.js';
import { initialCards } from '../utils/initial-сards.js';
import { openPopup, closePopup } from '../utils/utils.js';
import {
  templateCard,
  popups,
  formElement,
  formElementAdd,
  popupEditProfileOpenBtn,
  popupAddCardOpenBtn,
  popupAddCard,
  submitButtonSelector,
  container,
  popupEditProfile,
  inputName,
  profileName,
  inputJob,
  profileProfession,
  inputTitle,
  inputLink
} from '../utils/constants.js';
import { validationConfig, FormValidator } from './FormValidator.js';

function openEditProfilePopup() {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileProfession.textContent;
  editProfileFormValidator.deleteErrors();
}

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputJob.value;
  closePopup(popupEditProfile);
}

function openPopupAdd() {
  openPopup(popupAddCard);

  addCardFormValidator.deleteErrors();

  submitButtonSelector.classList.add('popup__button_disabled');
  submitButtonSelector.setAttribute('disabled', 'true');

  inputTitle.value = '';
  inputLink.value = '';
}

function addFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard({ name: inputTitle.value, link: inputLink.value }, templateCard);

  container.prepend(cardElement);
  closePopup(popupAddCard);
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

function createCard(data, template) {
  const card = new Card(data, template);
  const cardElement = card.generateCard();
  return cardElement;
}

formElement.addEventListener('submit', editProfileFormSubmitHandler);
formElementAdd.addEventListener('submit', addFormSubmit);
popupEditProfileOpenBtn.addEventListener('click', openEditProfilePopup);
popupAddCardOpenBtn.addEventListener('click', openPopupAdd);

initialCards.forEach((item) => {
  const cardElement = createCard(item, templateCard);

  container.append(cardElement);
});

const editProfileFormValidator = new FormValidator(validationConfig, formElement);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, formElementAdd);
addCardFormValidator.enableValidation();