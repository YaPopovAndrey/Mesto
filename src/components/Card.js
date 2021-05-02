export default class Card {
  constructor({ userData, name, link, _id, likes, owner }, templateCard, handleCardClick, handleDeleteClick, api) {
    this._templateCard = templateCard;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._api = api;
    this._myId = userData._id;
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

    this._elementsLikeButton = this._element.querySelector('.elements__like');
    this._elementsImage = this._element.querySelector('.elements__image');
    this._elementCaption = this._element.querySelector('.elements__caption');
    this._elementsLike = this._element.querySelector('.elements__like-count'); 

    const myLike = this._likes.some((user) => user._id === this._myId);
    if(myLike) this._elementsLikeButton.classList.add('elements__like_active');

    this._elementsLike.textContent = this._likes.length;
    this._elementsImage.src = this._link;
    this._elementsImage.alt = this._name;
    this._elementCaption.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._elementsLikeButton.addEventListener('click', () => {
      if (!this._elementsLikeButton.classList.contains('elements__like_active')) {
        this._api.like(this._id)
          .then(data => {
            this._elementsLike.textContent = data.likes.length;
            this._elementsLikeButton.classList.add('elements__like_active');
          })
          .catch(error => console.log(error));
      } else {
        this._api.dislike(this._id)
          .then(data => {
            this._elementsLike.textContent = data.likes.length;
            this._elementsLikeButton.classList.remove('elements__like_active');
          })
          .catch(error => console.log(error));
      }
    });

    const deleteButton = this._element.querySelector('.elements__delete');
    
    if (this._owner._id !== this._myId) {
      deleteButton.remove();
    } else {
      deleteButton.addEventListener('click', () => {
        this._handleDeleteClick.open();
        this._handleDeleteClick.setArguments(this);
      });
    }

    this._elementsImage.addEventListener('click', () => {
      this._handleCardClick.open(this._elementsImage, this._elementCaption);
    });
  }

  delete() {
    this._element.remove();
  }
}