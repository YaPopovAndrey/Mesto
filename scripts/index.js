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

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputJob.value;
  closePopup(popupEditProfile);
}

// Добавление нового места
function openPopupAdd() {
  openPopup(popupAddCard);

  toggleButtonState(inputList, submitButtonSelector);
}

function addFormSubmit(evt) {
  evt.preventDefault();
  const inputAddTitle = inputTitle.value;
  const inputAddLink = inputLink.value;

  const newCard = createCard({ link: inputAddLink, name: inputAddTitle });

  addCardListeners(newCard);

  container.prepend(newCard);
  closePopup(popupAddCard);
  inputTitle.value = '';
  inputLink.value = '';
}

// открытие всех поп-апов
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}
// закрытие всех поп-апов
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

formElement.addEventListener('submit', editProfileFormSubmitHandler);
formElementAdd.addEventListener('submit', addFormSubmit);
popupEditProfileOpenBtn.addEventListener('click', openEditProfilePopup);
popupAddCardOpenBtn.addEventListener('click', openPopupAdd);