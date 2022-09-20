import AbstractView from '../framework/view/abstract-view';
import FilmCardView from '../view/film-card-view';
import {remove, render, RenderPosition} from '../framework/render';
import PopupPresenter from './popup-presenter';
import {MODE_POPUP} from '../const';
import FilmPopupSectionView from '../view/film-popup-section-view';


export default class FilmPresenter {
  #filmsListContainer = null;
  #film = null;
  #filmComponent = null;
  popupPresenter = null;
  mode = MODE_POPUP.CLOSED;
  #handleFilmOpenedPopup = () => {
  };
  #boardViewHandle = () => {
  };
  #filmPopupSectionComponent = null;
  #siteBodyContainer = null;
  constructor(filmsListContainer, siteBodyContainer, handleFilmOpenedPopup, boardViewHandle, movieModel) {
    this.#filmsListContainer = filmsListContainer;

    this.#siteBodyContainer = siteBodyContainer;
  //  this.#filmPopupSectionComponent = new FilmPopupSectionView();



    this.#handleFilmOpenedPopup = handleFilmOpenedPopup;
    this.#boardViewHandle = boardViewHandle;
  }

  init(film) {

    this.#film = film;
    this.#filmComponent = new FilmCardView(film);
    render(this.#filmComponent, this.#filmsListContainer.element, RenderPosition.AFTERBEGIN);
    this.#filmComponent.setHandleOpenPopup(this.#openPopup);
  }

  #openPopup = () => {
    console.log('need open popup');
    console.log(this.mode);
    if (this.mode === MODE_POPUP.OPEN) {
      return;
    }
    this.#filmPopupSectionComponent = new FilmPopupSectionView();
    render(this.#filmPopupSectionComponent, this.#siteBodyContainer)
    this.popupPresenter = new PopupPresenter(this.#filmPopupSectionComponent, this.handlePopupClose);

    this.#boardViewHandle(this.#film);
//remove()
    this.popupPresenter.init(this.#film);
    this.mode = MODE_POPUP.OPEN;
    console.log(this.mode);
    this.#handleFilmOpenedPopup(this.#film);

  };
  handlePopupClose = () => {
    this.mode = MODE_POPUP.CLOSED;
    console.log('film-presenter = closed popup');
    remove(this.#filmPopupSectionComponent);
    console.log(this.popupPresenter);
  };


}
