export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.template')
    .content
    .querySelector('.template__card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__caption').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._likeCard();
    });
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._openPopupImg();
    })
  }

  _likeCard() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _deleteCard() {
    this._element.querySelector('.elements__delete').closest('.card').remove();
  }

  _openPopupImg() {
    this._element.closest('.card');
  
    const caption = this._element.querySelector('.elements__caption').textContent;
    const link = this._element.querySelector('.elements__image').src;
 
    captionPopup.textContent = caption;
    linkPopup.src = link;
    linkPopup.alt = caption;
 
    openPopup(popupImg);
  }

}

import {captionPopup, linkPopup, popupImg, openPopup} from './index.js';