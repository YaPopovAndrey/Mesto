import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards } from '../utils/initial-сards.js';
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
  profileProfession,
  popupConfirm,
  popupEditAvatar,
  popupEditAvatarOpen,
  editAvatarForm,
  inputAvatar
} from '../utils/constants.js';
import { validationConfig, FormValidator } from '../components/FormValidator.js';

// экземпляры классов
const userInfo = new UserInfo({ profileName, profileProfession });
const popupImage = new PopupWithImage(imagePopup);
const popupProfile = new PopupWithForm(profilePopup, profileFormSubmit);
const popupAddCard = new PopupWithForm(addPopup, addFormSubmit);
const avatarEditPopup = new PopupWithForm(popupEditAvatar, avatarFormSubmit);
const confirmPopup = new PopupWithForm(popupConfirm, confirmFormSubmit);
const editProfileFormValidator = new FormValidator(validationConfig, formElement);
const addCardFormValidator = new FormValidator(validationConfig, formElementAdd);
const editAvatarFormValidator = new FormValidator(validationConfig, editAvatarForm);
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23/cards',
  headers: {
    authorization: '6bb43f5c-9c55-4b96-82c0-2583ec7e1ebb',
    "content-type": "application/json"
  }
});

const allCards = api.getAllCards();
allCards.then((res) => {
  const cardList = new Section({
    items: res,
    renderer: (data) => {
      const cardElement = createCard(data);
      cardList.addItem(cardElement);
    }
  }, container,
  api);
  cardList.renderItems(); 
})
.catch((err) => alert(err));

// Создает новые элементы
function createCard(data) {
  const card = new Card(data, templateCard, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(elementImage, elementCaption) {
  popupImage.open(elementImage, elementCaption);
}

// Сабмит формы смены аватара
function avatarFormSubmit() {
  popupEditAvatarOpen.src = inputAvatar.value;
  avatarEditPopup.close();
}

// Сабмит подтверждения
function confirmFormSubmit() {
  confirmPopup.close();
}

// Сабмит профиля
function profileFormSubmit(userData) {
  userInfo.setUserInfo(userData);
  popupProfile.close();
}

// Сабмит новых карточек
function addFormSubmit(data) {
  const cardElement = createCard(data);
  cardList._saveItems(cardElement);
  popupAddCard.close();
}

popupEditAvatarOpen.addEventListener('click', () => {
  avatarEditPopup.open();
  inputAvatar.value = popupEditAvatarOpen.src;
  editAvatarFormValidator.deleteErrors();
});

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
avatarEditPopup.setEventListeners();

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();