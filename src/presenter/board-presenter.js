import {SortType, UpdateType} from '../const.js';
import CreateSortView from '../view/000-create-sort-view';
import {remove, render, RenderPosition} from '../framework/render';
import SectionFilmsView from '../view/1-section-films-view';
import SectionFilmsListView from '../view/2-section-films-list-view';
import FilmsListContainerView from '../view/3-films-list-container.view';
import FilmPresenter from './film-presenter';

export default class BoardPresenter {
  #siteBoard = null;
  #currentSortType = SortType.DEFAULT;
  #sortComponent = null;

  #sectionFilmsComponent = null;
  #sectionFilmsListComponent = null;
  #filmsListContainer = null
  #movies = null
  #moviePresenter = new Map()
  #menuNavigation = null
  constructor(siteBoardEl, menuNavigation) {
    this.#siteBoard = siteBoardEl;
    this.#menuNavigation = menuNavigation
    //при смене фильтра в menu-navigation-view -> вызовет через колбэк в menu-navigation-presenter #handleMenuChange
    //который в menu-navigation-model вызовет setFilter и установит новый фильтр и вызовит _notify для выполнения
    //колбэков, передает ему чтобы перерендерить страницу с новым фильтом this.#handleOnModelChange

    this.#menuNavigation.addObserver(this.#handleOnModelChange)
  }

  init = (movies) => {
    this.#movies = movies
    this.#renderBoard();
  };

  //колбэк для наблюдателя - вызывается для ререндеринга
  #handleOnModelChange = (updateType, dataThisMovie) => {
switch (updateType) {
  case UpdateType.MAJOR:    // обновить всю доску(при перекл фильра)
    this.#clearBoard();
    this.#renderBoard();
    break
}
  }
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
  renderFIlm = (movie) => {
    const moviePresenter = new FilmPresenter(this.#filmsListContainer)
    moviePresenter.init(movie)
    this.#moviePresenter.set(movie.id,moviePresenter)
  }
#renderFilms = (movies) => {
  movies.forEach((movie)=>this.renderFIlm(movie))
}

  #renderBoard = () => {
    this.#renderSort();
    this.#sectionFilmsComponent = new SectionFilmsView()
    this.#sectionFilmsListComponent = new SectionFilmsListView()
    this.#filmsListContainer = new FilmsListContainerView()
    render(this.#sectionFilmsComponent, this.#siteBoard, RenderPosition.BEFOREEND)
    render(this.#sectionFilmsListComponent, this.#sectionFilmsComponent.element, RenderPosition.BEFOREEND)
    render(this.#filmsListContainer, this.#sectionFilmsListComponent.element, RenderPosition.BEFOREEND)
    this.#renderFilms(this.#movies) //film-presenter
  };

  #clearBoard = () => {
    remove(this.#sortComponent);
    remove(this.#sectionFilmsComponent)
    remove(this.#sectionFilmsListComponent)
    remove(this.#filmsListContainer)
  };

}
