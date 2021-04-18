import Card from './Card.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import { initialCards } from '../utils/initial-сards.js';
import {
  profilePopup,
  addPopup,
  imagePopup,
  templateCard,
  formElement,
  formElementAdd,
  popupEditProfileOpenBtn,
  popupAddCardOpenBtn,
  container,
  profileName,
  profileProfession,
  inputTitle,
  inputLink
} from '../utils/constants.js';
import { validationConfig, FormValidator } from './FormValidator.js';

// экземпляры классов
const userInfo = new UserInfo({ profileName, profileProfession });
const picturePopup = new PopupWithImage(imagePopup);
const editProfilePopup = new PopupWithForm(profilePopup, ProfileFormSubmit);
const addCardPopup = new PopupWithForm(addPopup, addFormSubmit);
const editProfileFormValidator = new FormValidator(validationConfig, formElement);
const addCardFormValidator = new FormValidator(validationConfig, formElementAdd);

const cardContainer = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardContainer.addItem(cardElement);
  }
}, container);

cardContainer.renderItems();

// Создает новые элементы
function createCard(data, template) {
  const card = new Card(data, template, picturePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

// Сабмит профиля
function ProfileFormSubmit(userData) {
  userInfo.setUserInfo(userData);
  editProfilePopup.close();
}

// Сабмит новых карточек
function addFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard({ name: inputTitle.value, link: inputLink.value }, templateCard);
  cardContainer.addItem(cardElement);
  addCardPopup.close();
}

popupEditProfileOpenBtn.addEventListener('click', () => {
  editProfilePopup.open();
  const userData = userInfo.getUserInfo();
  profileName.value = userData.inputName;
  profileProfession.value = userData.inputJob;
  editProfileFormValidator.deleteErrors();
});

popupAddCardOpenBtn.addEventListener('click', () => {
  addCardPopup.open();
  
  addCardFormValidator.deleteErrors();
});

editProfilePopup.setEventListeners();
picturePopup.setEventListeners();
addCardPopup.setEventListeners();

formElementAdd.addEventListener('submit', addFormSubmit);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();