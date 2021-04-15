export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = document.querySelector('.popup__button-close');
    }

    open() {
        this._popup.classList.add('popup_is-opened');
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
          }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}