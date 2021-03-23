// Найти карточку по которой был клик
function openImagePopup(evt) {
  evt.preventDefault();

  const target = evt.target;
  const currentTarget = target.closest('.card');
  // Получить данные (адрес картинки, название места)
  const caption = currentTarget.querySelector('.elements__caption').textContent;
  const link = currentTarget.querySelector('.elements__image').src;
  // Передать данные в popup
  captionPopup.textContent = caption;
  linkPopup.src = link;
  linkPopup.alt = caption;
  // Открыть popup
  openPopup(popupImg);
}

function closePopupImg() {
  closePopup(popupImg);
}

function deleteCard(evt) {
  const target = evt.target;
  const currentCard = target.closest('.card');

  currentCard.remove();
}

function likeCard(evt) {
  const target = evt.target;

  target.classList.toggle('elements__like_active');
}

function addCardListeners(card) {
  const deleteButton = card.querySelector('.elements__delete');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = card.querySelector('.elements__like');
  likeButton.addEventListener('click', likeCard);

  const clickImage = card.querySelector('.elements__image');
  clickImage.addEventListener('click', openImagePopup);
}

function createCard(item) {
  const newItem = templateElement.content.cloneNode(true);
  const name = newItem.querySelector('.elements__caption');
  const cardImage = newItem.querySelector('.elements__image');
  addCardListeners(newItem);

  name.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  return newItem;
}

function renderInitialCards() {
  const result = initialCards.map(function (item) {
    const newCard = createCard(item);

    return newCard;
  });

  container.append(...result);
}

renderInitialCards();

// Редактирование профиля
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileProfession.textContent;
}

function closeEditProfilePopup() {
  closePopup(popupEditProfile);
}

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputJob.value;
  closeEditProfilePopup();
}

// Добавление нового места
function openPopupAdd() {
  openPopup(popupAddCard);

  const inputList = Array.from(popupAddCard.querySelectorAll('.popup__input'));
  const submitButtonSelector = popupAddCard.querySelector('.popup__button');

  toggleButtonState(inputList, submitButtonSelector);
}

function closePopupAdd() {
  closePopup(popupAddCard);
  inputTitle.value = '';
  inputLink.value = '';
}

function addFormSubmit(evt) {
  evt.preventDefault();
  const inputAddTitle = inputTitle.value;
  const inputAddLink = inputLink.value;

  const newCard = createCard({ link: inputAddLink, name: inputAddTitle });

  addCardListeners(newCard);

  container.prepend(newCard);
  closePopupAdd();
  inputTitle.value = '';
  inputLink.value = '';
}

// открытие всех поп-апов
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}
// закрытие всех поп-апов
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

const closePopupOverlayEsc = () => {
    closePopup(popupAddCard);
    closePopup(popupEditProfile);
    closePopup(popupImg);
    inputTitle.value = '';
    inputLink.value = '';
};

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closePopupOverlayEsc();
  }
});

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopupOverlayEsc();
  }
});

formElement.addEventListener('submit', editProfileFormSubmitHandler);
popupEditProfileOpenBtn.addEventListener('click', openEditProfilePopup);
popupEditProfileCloseBtn.addEventListener('click', closeEditProfilePopup);

popupAddCardOpenBtn.addEventListener('click', openPopupAdd);
popupAddCardCloseBtn.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', addFormSubmit);

popupImgCloseBtn.addEventListener('click', closePopupImg);