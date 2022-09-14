import {SortType} from '../const.js';
import CreateSortView from '../view/create-sort-view';
import {remove, render, RenderPosition} from '../framework/render';

export default class BoardPresenter {
  #siteBoard = null;
  #currentSortType = SortType.DEFAULT;
  #sortComponent = null;

  constructor(siteBoardEl) {
    this.#siteBoard = siteBoardEl;
  }

  init = () => {
    this.#renderBoard();
  };

  #renderSort = () => {
    this.#sortComponent = new CreateSortView(this.#currentSortType);
    this.#sortComponent.sortSelectHandler(this.#handleSortTypeChange);
    render(this.#sortComponent, this.#siteBoard, RenderPosition.BEFOREEND);
  };
//в create-sort-view при клике вызывает для перерисовки борда - если выбрана новая сортировка
  #handleSortTypeChange = (selectedSortType) => {
    if (selectedSortType && selectedSortType === this.#currentSortType) {
      return;
    }
    if (selectedSortType) {
      console.log(selectedSortType);
      this.#currentSortType = selectedSortType;
      this.#clearBoard();
      this.#renderBoard();
    }
  };

  #renderBoard = () => {
    this.#renderSort();
  };

  #clearBoard = () => {
    remove(this.#sortComponent);
  };

}
