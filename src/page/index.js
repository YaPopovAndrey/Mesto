import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirm from '../components/PopupConfirm.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  profileAvatar,
  profileImage,
  containerSelector,
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
  profileName,
  profileProfession,
  popupConfirm,
  popupEditAvatar,
  editAvatarForm
} from '../utils/constants.js';
import { validationConfig, FormValidator } from '../components/FormValidator.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '6bb43f5c-9c55-4b96-82c0-2583ec7e1ebb',
    "content-type": "application/json"
  }
});

const popupImage = new PopupWithImage(imagePopup);

const popupProfile = new PopupWithForm(profilePopup, profileFormSubmit);
const avatarEditPopup = new PopupWithForm(popupEditAvatar, addFormSubmit);

const confirmPopup = new PopupConfirm(popupConfirm, api.delete);

const userInfo = new UserInfo({ name: profileName, about: profileProfession, avatar: profileAvatar });

const editProfileFormValidator = new FormValidator(validationConfig, formElement);
const addCardFormValidator = new FormValidator(validationConfig, formElementAdd);
const editAvatarFormValidator = new FormValidator(validationConfig, editAvatarForm);

Promise.all([
  api.getUserInfo(),
  api.getAllCards()
])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);

    function createCard(cardData) {
      return new Card({ userData, ...cardData }, templateCard, popupImage, confirmPopup, api).generateCard();
    };

    function handleAddFormSubmit(cardData) {
      api.addNewCard(cardData)
        .then(data => {
          const newCard = createCard(data);
          cardContainer.addItem(newCard);
          addCardPopup.close();
        })
        .catch(error => console.log(error))
        .finally(() => {
          addCardPopup.renderLoading(false);
        });
    };

    const cardContainer = new Section((cardData) => {
      const cardElement = createCard(cardData);
      cardContainer.addItem(cardElement);
    }, containerSelector);

    cardContainer.renderItems(cardsData);

    const addCardPopup = new PopupWithForm(addPopup, handleAddFormSubmit);

    addCardPopup.setEventListeners();
    popupAddCardOpenBtn.addEventListener('click', () => {
      addCardFormValidator.deleteErrors();
      addCardFormValidator.resetButtonSubmit();
      addCardPopup.open();
    });
  })
  .catch(error => console.log(error));

function addFormSubmit({ avatar }) {
  api.editAvatar(avatar)
    .then(data => {
      profileAvatar.src = data.avatar;
      avatarEditPopup.close();
    })
    .catch(error => console.log(error))
    .finally(() => {
      avatarEditPopup.renderLoading(false);
    });
}

function profileFormSubmit(userData) {
  api.editUserInfo(userData)
    .then(data => {
      userInfo.setUserInfo(data);
      popupProfile.close();
    })
    .catch(error => console.log(error))
    .finally(() => {
      popupProfile.renderLoading(false);
    });
}

profileImage.addEventListener('click', () => {
  avatarEditPopup.open();
  editAvatarFormValidator.deleteErrors();
  editAvatarFormValidator.resetButtonSubmit();
});

popupEditProfileOpenBtn.addEventListener('click', () => {
  popupProfile.open();
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputJob.value = userData.about;
  editProfileFormValidator.deleteErrors();
  editProfileFormValidator.resetButtonSubmit();
});

popupProfile.setEventListeners();
avatarEditPopup.setEventListeners();
popupImage.setEventListeners();
confirmPopup.setEventListeners();

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();