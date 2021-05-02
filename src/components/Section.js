export default class Section {
    constructor(renderer, container) {
      this._renderer = renderer;
      this._container = document.querySelector(container);
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  
    renderItems(cardsData) {
      cardsData.reverse().forEach(item => this._renderer(item));
    }
  }
  