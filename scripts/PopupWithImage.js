import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(elementImage, elementCaption) {
        const image = this._popup.querySelector('.popup__image');
        const caption = this._popup.querySelector('.popup__caption');

        image.src = elementImage.src;
        caption.textContent = elementCaption.textContent;
        caption.alt = elementCaption.textContent;

        super.open();
    }
}