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
  altPopup.alt = caption;
  // Открыть popup
  popupImg.classList.toggle('popup-img_is-opened');
}

function closePopupImg() {
  popupImg.classList.toggle('popup-img_is-opened');
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
  const link = newItem.querySelector('.elements__image');

  addCardListeners(newItem);

  name.textContent = item.name;
  link.src = item.link;

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
  popupEditProfile.classList.add('popup_is-opened');
  inputName.value = profileName.textContent;
  inputJob.value = profileProfession.textContent;
}

function closePopup() {
  popupEditProfile.classList.remove('popup_is-opened');
}

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputJob.value;
  closePopup();
}

// Добавление нового места
function openPopupAdd() {
  popupIAddCard.classList.add('popup_is-opened');
}

function closePopupAdd() {
  popupIAddCard.classList.remove('popup_is-opened');
}

function AddFormSubmit(evt) {
  evt.preventDefault();
  const inputAddTitle = inputTitle.value;
  const inputAddLink = inputLink.value;

  const newCard = createCard({ link: inputAddLink, name: inputAddTitle });

  addCardListeners(newCard);

  container.prepend(newCard);
  closePopupAdd();
  inputTitle.value = '';
  input.value = '';
}

formElement.addEventListener('submit', editProfileFormSubmitHandler);
popupIEditProfileOpenBtn.addEventListener('click', openEditProfilePopup);
popupIEditProfileCloseBtn.addEventListener('click', closePopup);

popupIAddCardOpenBtn.addEventListener('click', openPopupAdd);
popupIAddCardCloseBtn.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', AddFormSubmit);

popupImgCloseBtn.addEventListener('click', closePopupImg);