const editAvatarForm = document.querySelector('.popup__form_update-avatar');
const inputAvatar = document.querySelector('.popup__input_update-avatar');
const popupEditAvatarOpen = document.querySelector('.profile__avatar');
const popupEditProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupAddCardOpenBtn = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const formElementAdd = document.querySelector('.popup__form_add');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const container = document.querySelector('.elements__content');
const templateCard = '.template';
const profilePopup = '.popup_edit-profile';
const addPopup = '.popup_add';
const imagePopup = '.popup_img';
const popupConfirm = '.popup_confirm';
const popupEditAvatar = '.popup_update-avatar';

export {
  editAvatarForm,
  inputAvatar,
  popupConfirm,
  popupEditAvatar,
  popupEditAvatarOpen,
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
};