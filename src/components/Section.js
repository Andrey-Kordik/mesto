
export default class Section {
    constructor({data, renderer}, containerSelector) {
      this._items = data;
      this._container = document.querySelector(containerSelector);
      this._renderer = renderer;
    }

    addItem (item)  {
      this._container.prepend(item);
    }


    renderItems (cards) {
      cards.forEach((card) => {
        this._renderer(card)
      })
    }
}