// добавляем класс с ошибкой для поля ввода
const showInputError = (formSelector, inputSelector, errorMessage) => {
    const inputError = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add('popup__input_type_error');
    inputError.textContent = errorMessage;
    inputError.classList.add('popup__error_visible');
};

// удаляем класс с ошибкой для поля ввода
const hideInputError = (formSelector, inputSelector) => {
    const inputError = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__input_type_error');
    inputError.classList.remove('popup__error_visible');
    inputError.textContent = '';
};

// проверяем валидность поля ввода
const isValid = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputError(formSelector, inputSelector);
    }
};

// вешаем слушаетель на все поля ввода с функцией которая проверяет 
// валидность поля(так при каждом нажатии она будет валидировать поле)





const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
};

const toggleButtonState = (inputList, submitButtonSelector) => {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add('popup__button_disabled');
        submitButtonSelector.setAttribute('disabled', 'true');
    } else {
        submitButtonSelector.classList.remove('popup__button_disabled');
        submitButtonSelector.removeAttribute('disabled');
    }
};

const setEventListeners = (formSelector) => {
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const submitButtonSelector = formSelector.querySelector('.popup__button');
    
    toggleButtonState(inputList, submitButtonSelector);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            isValid(formSelector, inputSelector);
            toggleButtonState(inputList, submitButtonSelector);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formSelector);
    });
};

enableValidation();