const enableObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

class FormValidator {
    constructor(enableObject, formValidateSelector) {
      this._formSelector = enableObject.formSelector;
      this._inputSelector = enableObject.inputSelector;
      this._submitButtonSelector = enableObject.submitButtonSelector;
      this._inactiveButtonClass = enableObject.inactiveButtonClass;
      this._inputErrorClass = enableObject.inputErrorClass;
      this._errorClass = enableObject.errorClass;
      this._formValidateSelector = formValidateSelector;
    }

    _showInputError(formSelector, inputSelector, errorMessage) {
        const inputError = formSelector.querySelector(`.${inputSelector.id}-error`);
        inputSelector.classList.add(enableObject.inputErrorClass);
        inputError.textContent = errorMessage;
        inputError.classList.add(enableObject.errorClass);
    }
    
    _hideInputError(formSelector, inputSelector) {
        const inputError = formSelector.querySelector(`.${inputSelector.id}-error`);
        inputSelector.classList.remove(enableObject.inputErrorClass);
        inputError.classList.remove(enableObject.errorClass);
        inputError.textContent = '';
    }
    
    _isValid(formSelector, inputSelector) {
        if (!inputSelector.validity.valid) {
            showInputError(formSelector, inputSelector, inputSelector.validationMessage);
        } else {
            hideInputError(formSelector, inputSelector);
        }
    }
    
    _hasInvalidInput(inputList) {
        return inputList.some((inputSelector) => {
            return !inputSelector.validity.valid;
        });
    }
    
    _toggleButtonState(inputList, submitButtonSelector) {
        if (hasInvalidInput(inputList)) {
            submitButtonSelector.classList.add(enableObject.inactiveButtonClass);
            submitButtonSelector.setAttribute('disabled', 'true');
        } else {
            submitButtonSelector.classList.remove(enableObject.inactiveButtonClass);
            submitButtonSelector.removeAttribute('disabled');
        }
    }
    
    _setEventListeners(formSelector) {
        const inputList = Array.from(formSelector.querySelectorAll(enableObject.inputSelector));
        const submitButtonSelector = formSelector.querySelector(enableObject.submitButtonSelector);
    
        toggleButtonState(inputList, submitButtonSelector);
    
        inputList.forEach((inputSelector) => {
            inputSelector.addEventListener('input', () => {
                isValid(formSelector, inputSelector);
                toggleButtonState(inputList, submitButtonSelector);
            });
        });
    }
    
    enableValidation() {
        const formList = Array.from(document.querySelectorAll(enableObject.formSelector));
    
        formList.forEach((formSelector) => {
            formSelector.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
    
            setEventListeners(formSelector);
        });
    }
    
  }
  const newFormValid = new FormValidator();

  newFormValid.enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

