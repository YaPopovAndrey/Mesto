import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValue = {};
        
        this._inputList.forEach(input => this._formValue[input.name] = input.value);
        console.log(this._formValue);
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