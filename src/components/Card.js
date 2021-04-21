export default class Card {
  constructor(data, templateCard, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateCard = templateCard;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard) 
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
    this._elementCaption = this._element.querySelector('.elements__caption');


    this._elementsImage.src = this._link;
    this._elementsImage.alt = this._name;
    this._elementCaption.textContent = this._name;

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
      this._handleCardClick(this._elementsImage, this._elementCaption);
    });
  }

  _likeCard() {
    this._elementsLike.classList.toggle('elements__like_active');
  }

  _deleteCard() {
    this._elementsdelete.closest('.card').remove();
  }
}