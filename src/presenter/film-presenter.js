import AbstractView from '../framework/view/abstract-view';
import FilmCardView from '../view/film-card-view';
import {remove, render, RenderPosition} from '../framework/render';
import PopupPresenter from './popup-presenter';
import {MODE_POPUP} from '../const';


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
  constructor(filmsListContainer, siteBodyContainer, handleFilmOpenedPopup, boardViewHandle) {
    this.#filmsListContainer = filmsListContainer;
    this.popupPresenter = new PopupPresenter(siteBodyContainer, this.handlePopupClose);
    this.#handleFilmOpenedPopup = handleFilmOpenedPopup;
    this.#boardViewHandle = boardViewHandle
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


    this.#boardViewHandle(this.#film)
//remove()
    this.popupPresenter.init(this.#film);
    this.mode = MODE_POPUP.OPEN;
    console.log(this.mode);
    this.#handleFilmOpenedPopup(this.#film);

  };
  handlePopupClose = () => {
     this.mode = MODE_POPUP.CLOSED;
    console.log('film-presenter = closed popup');

  };

}
