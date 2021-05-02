import Popup from './Popup.js';

export default class PopupConfirn extends Popup {
    constructor(popupSelector, submitHendler) {
        super(popupSelector);
        this._submitHandler = submitHendler;
        this._button = this._popup.querySelector('.popup__button');
    }

    setArguments(card) {
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', () => {
            this._submitHandler(this._card._id)
                .then(() => {
                    this._card.delete();
                    this.close();
                })
                .catch(error => console.log(error));
        })
    }
}