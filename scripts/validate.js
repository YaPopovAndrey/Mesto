const enableObject = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

class FormValidator {
    constructor(enableObject, formElement) {
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(enableObject.inputSelector));
        this._submitButtonSelector = formElement.querySelector(enableObject.submitButtonSelector);
        this._inactiveButtonClass = formElement.querySelector(enableObject.inactiveButtonClass);
        this._inputErrorClass = formElement.querySelector(enableObject.inputErrorClass);
        this._errorClass = formElement.querySelector(enableObject.errorClass);
        this._inputError = formElement.querySelector(`.${this._inputList.id}-error`);
    }

    

    _showInputError(errorMessage) {
        this._inputList.classList.add(this._inputErrorClass);
        this._inputError.textContent = errorMessage;
        this._inputError.classList.add(this._errorClass);
    }

    _hideInputError() {
        this._inputList.classList.remove(this._inputErrorClass);
        this._inputError.classList.remove(this._errorClass);
        this._inputError.textContent = '';
    }

    _isValid(inputList) {
        inputList.forEach(inputElement => {
            if (!inputElement.validity.valid) {
                this._showInputError(inputElement.validationMessage);
            } else {
                this._hideInputError();
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
            this._submitButtonSelector.classList.add(this._inactiveButtonClass);
            this._submitButtonSelector.setAttribute('disabled', 'true');
        } else {
            this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
            this._submitButtonSelector.removeAttribute('disabled');
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

  const someFormElement = document.querySelector('.popup__form');
  const newFormValid = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
    }, someFormElement );

  newFormValid.enableValidation();