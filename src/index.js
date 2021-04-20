import '../src/page/index.css';
import Card from './components/Card.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import { initialCards } from './utils/initial-сards.js';
import {
  inputName,
  inputJob,
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
  profileProfession
} from './utils/constants.js';
import { validationConfig, FormValidator } from './components/FormValidator.js';

// экземпляры классов
const userInfo = new UserInfo({ profileName, profileProfession });
const popupImage = new PopupWithImage(imagePopup);
const popupProfile = new PopupWithForm(profilePopup, profileFormSubmit);
const popupAddCard = new PopupWithForm(addPopup, addFormSubmit);
const editProfileFormValidator = new FormValidator(validationConfig, formElement);
const addCardFormValidator = new FormValidator(validationConfig, formElementAdd);

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data);
    cardList.addItem(cardElement);
  }
}, container);

cardList.renderItems();

// Создает новые элементы
function createCard(data) {
  const card = new Card(data, templateCard, popupImage);
  const cardElement = card.generateCard();
  return cardElement;
}

// Сабмит профиля
function profileFormSubmit(userData) {
  userInfo.setUserInfo(userData);
  popupProfile.close();
}

// Сабмит новых карточек
function addFormSubmit(data) {
  const cardElement = createCard(data);
  cardList.addItem(cardElement);
  popupAddCard.close();
}

popupEditProfileOpenBtn.addEventListener('click', () => {
  popupProfile.open();
  const userData = userInfo.getUserInfo();
  inputName.value = userData.profileName;
  inputJob.value = userData.profileProfession;
  editProfileFormValidator.deleteErrors();
});

popupAddCardOpenBtn.addEventListener('click', () => {
  popupAddCard.open();
  addCardFormValidator.deleteErrors();
  addCardFormValidator.resetButtonSubmit();
});

popupProfile.setEventListeners();
popupImage.setEventListeners();
popupAddCard.setEventListeners();

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();