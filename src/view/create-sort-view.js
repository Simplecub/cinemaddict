import AbstractView from '../framework/view/abstract-view.js';
import {SortType} from '../const';

const createSortTemplate = (currentSortType) => {

return (`
  <ul class="sort">
    <li><a href="#" class="sort__button ${currentSortType === SortType.DEFAULT ? 'sort__button--active' : ''}" data-action="${SortType.DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button ${currentSortType === SortType.DATE ? 'sort__button--active' : ''}" data-action="${SortType.DATE}">Sort by date</a></li>
    <li><a href="#" class="sort__button ${currentSortType === SortType.RATE ? 'sort__button--active' : ''}" data-action="${SortType.RATE}">Sort by rating</a></li>
  </ul>
`)
}



export default class CreateSortView extends AbstractView {
  #currentSortType = null;

  constructor(currentSortType) {
    super();
    this.#currentSortType = currentSortType;
  }
  get template() {
    return createSortTemplate(this.#currentSortType)
  }
//в коллбэке лежит #handleSortTypeChange из board-presenter,
// котрый будет вызван при клике и ему передано evt.target.dataset.action
  sortSelectHandler = (callback) => {
    this._callback.sortSelect = callback;
    this.element.addEventListener('click', this.#sortHandler)
  }
  #sortHandler = (evt) => {
    evt.preventDefault();
   this._callback.sortSelect(evt.target.dataset.action)
  }
}
