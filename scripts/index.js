import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { formElement, formElementAdd } from '../utils/constants.js';
import { initialCards } from '../utils/initial-сards.js';

initialCards.forEach((item) => {
  const card = new Card(item, '.template');
  const cardElement = card.generateCard();
  const container = document.querySelector('.elements__content');

  container.append(cardElement);
});

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const editProfileFormValidator = new FormValidator(validationConfig, formElement);
editProfileFormValidator.enableValidation();
const addCardFormValidator = new FormValidator(validationConfig, formElementAdd);
addCardFormValidator.enableValidation();