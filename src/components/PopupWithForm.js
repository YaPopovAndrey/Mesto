import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._button = this._form.querySelector('.popup__button');
        this._buttonText = this._button.textContent;
    }

    renderLoading(isLoading) {
        if (isLoading) {
          this._button.textContent = 'Сохранение...'
        } else {
          this._button.textContent = this._buttonText;
        }
      }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValue = {};
        
        this._inputList.forEach(input => this._formValue[input.name] = input.value);
        return this._formValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._submitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}