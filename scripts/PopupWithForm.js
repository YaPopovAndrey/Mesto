import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._formValue = {};
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._inputList.forEach((items) => {
            this._formValue[items.name] = items.value;
        });

        return this._formValue;
    }

    _formSubmitHandler = (evt) => {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._formSubmitHandler);
    }

    close() {
        super.close();
        this._form.reset();
    }
}