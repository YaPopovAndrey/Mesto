const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileOpenBtn = document.querySelector('.profile__edit-button');
const popupAddCard = document.querySelector('.popup_add');
const popupAddCardOpenBtn = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const formElementAdd = document.querySelector('.popup__form_add');
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const container = document.querySelector('.elements__content');
const popupImg = document.querySelector('.popup_img');
const captionPopup = document.querySelector('.popup__caption');
const linkPopup = document.querySelector('.popup__image');
const popups = document.querySelectorAll('.popup');
const submitButtonSelector = popupAddCard.querySelector('.popup__button');
const templateCard = document.querySelector('.template');

export {
    templateCard,
    captionPopup,
    linkPopup,
    popupImg,
    popupEditProfile,
    popupEditProfileOpenBtn,
    popupAddCard,
    popupAddCardOpenBtn,
    formElement,
    inputName,
    inputJob,
    formElementAdd,
    inputTitle,
    inputLink,
    profileName,
    profileProfession,
    container,
    popups,
    submitButtonSelector
};