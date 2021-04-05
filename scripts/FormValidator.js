export default class FormValidator {
    constructor(enableObject, formElement) {
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(enableObject.inputSelector));
        this._submitButtonElement = formElement.querySelector(enableObject.submitButtonSelector);
        this._inactiveButtonClass = enableObject.inactiveButtonClass;
        this._inputErrorClass = enableObject.inputErrorClass;
        this._errorClass = enableObject.errorClass;
    }

    _showInputError(inputElement, errorElement) {
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }

    _isValid() {
        this._inputList.forEach(inputElement => {
            const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

            if (!inputElement.validity.valid) {
                this._showInputError(inputElement, errorElement);
            } else {
                this._hideInputError(inputElement, errorElement);
            }
        });
    }

    _hasInvalidInput() {
        return this._inputList.some(inputElement => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._submitButtonElement.classList.add(this._inactiveButtonClass);
            this._submitButtonElement.setAttribute('disabled', true);
        } else {
            this._submitButtonElement.classList.remove(this._inactiveButtonClass);
            this._submitButtonElement.removeAttribute('disabled');
        }
    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._isValid();
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }
}