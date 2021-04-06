export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.template__card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementsLike = this._element.querySelector('.elements__like');
    this._elementsdelete = this._element.querySelector('.elements__delete');
    this._elementsImage = this._element.querySelector('.elements__image');


    this._elementsImage.src = this._link;
    this._elementsImage.alt = this._name;
    this._element.querySelector('.elements__caption').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._elementsLike.addEventListener('click', () => {
      this._likeCard();
    });
    this._elementsdelete.addEventListener('click', () => {
      this._deleteCard();
    });
    this._elementsImage.addEventListener('click', () => {
      this._openPopupImg();
    })
  }

  _likeCard() {
    this._elementsLike.classList.toggle('elements__like_active');
  }

  _deleteCard() {
    this._elementsdelete.closest('.card').remove();
  }

  _openPopupImg() {
    const caption = this._element.querySelector('.elements__caption').textContent;
    const link = this._elementsImage.src;

    captionPopup.textContent = caption;
    linkPopup.src = link;
    linkPopup.alt = caption;

    openPopup(popupImg);
  }

}

import { captionPopup, linkPopup, popupImg } from '../utils/constants.js';
import { openPopup } from '../utils/utils.js';