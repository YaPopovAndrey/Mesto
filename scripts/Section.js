export default class Section {
    constructor({item, renderer}, selectorContainer) {
        this._renderItems = item;
        this._renderer = renderer;
        this._container = document.querySelector(selectorContainer);
    }

    renderItems() {
        this._renderItems.forEach(item => this._renderer(item));
    }

    addItem(element) {
        this._container.append(element);
    }
}