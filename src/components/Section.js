export default class Section {
    constructor({items, renderer}, container, api) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
        this._api = api;
    }

    _saveItems(data) {
        this._api
        .addNewCard(data)
        .then((element) => this.addItem(element))
        .catch((err) => alert(err));
    }

    renderItems() {
        this._items.forEach(item => this._renderer(item))
    }

    addItem(element) {
        this._container.prepend(element);
    }
}