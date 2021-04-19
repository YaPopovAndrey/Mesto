class FormValidator {
    constructor(validationConfig, formElement) {
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
        this._submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector);
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
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

    deleteErrors() {
        Array.from(this._formElement.querySelectorAll(validationConfig.inputSelector)).forEach(input => {
            input.classList.remove(validationConfig.inputErrorClass);
        });
        Array.from(this._formElement.querySelectorAll(validationConfig.inputError)).forEach(error => {
            error.classList.remove(validationConfig.errorClass);
        });
        this._formElement.querySelector(validationConfig.submitButtonSelector).classList.remove(validationConfig.inactiveButtonClass);
    }

    resetButtonSubmit() {
        this._submitButtonElement.classList.add('popup__button_disabled');
        this._submitButtonElement.setAttribute('disabled', 'true');
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

const validationConfig = {
    inputError: '.popup__error',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export { validationConfig, FormValidator };