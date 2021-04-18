import Card from './Card.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import { initialCards } from '../utils/initial-сards.js';
import { openPopup, closePopup } from '../utils/utils.js';
import {
  profilePopup,
  addPopup,
  imagePopup,
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
  const card = new Card(data, template);
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

  //container.prepend(cardElement);
  cardContainer.addItem(cardElement);
  //closePopup(popupAddCard);
  addCardPopup.close();
}



// // Открывает попап профиля, заполняет поля имя и профессии, удаляет ошибки
// function openEditProfilePopup() {
//   openPopup(popupEditProfile);
//   inputName.value = profileName.textContent;
//   inputJob.value = profileProfession.textContent;
//   editProfileFormValidator.deleteErrors();
// }

// // Передает значиня полей в разметку, закрывает попап профиля
// function editProfileFormSubmitHandler(evt) {
//   evt.preventDefault();

//   profileName.textContent = inputName.value;
//   profileProfession.textContent = inputJob.value;
//   closePopup(popupEditProfile);
// }

// Открывает попап новой карточки, удаляет ошибки, деактивирует кнопку, очищает поля ввода
// function openPopupAdd() {
//   //openPopup(popupAddCard);
//   addCardPopup.open();

//   addCardFormValidator.deleteErrors();

//   submitButtonSelector.classList.add('popup__button_disabled');
//   submitButtonSelector.setAttribute('disabled', 'true');

//   inputTitle.value = '';
//   inputLink.value = '';
// }



// Вешает слушатели на все попапы
// popups.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup_is-opened')) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains('popup__button-close')) {
//       closePopup(popup);
//     }
//   });
// });

editProfilePopup.setEventListeners();
picturePopup.setEventListeners();
addCardPopup.setEventListeners();

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

// Слушатели функций
// formElement.addEventListener('submit', editProfileFormSubmitHandler);
formElementAdd.addEventListener('submit', addFormSubmit);
// popupEditProfileOpenBtn.addEventListener('click', openEditProfilePopup);
// popupAddCardOpenBtn.addEventListener('click', openPopupAdd);

addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();