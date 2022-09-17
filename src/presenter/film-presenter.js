import AbstractView from '../framework/view/abstract-view';
import FilmCardView from '../view/film-card-view';
import {render, RenderPosition} from '../framework/render';
import PopupPresenter from './popup-presenter';


export default class FilmPresenter {
  #filmsListContainer = null;
  #film = null;
  #filmComponent = null;
  #popupPresenter = null

  constructor(filmsListContainer, siteBodyContainer) {
    this.#filmsListContainer = filmsListContainer;
    this.#popupPresenter = new PopupPresenter(siteBodyContainer)
  }

  init(film) {
    this.#film = film;
this.#filmComponent = new FilmCardView(film)
    render(this.#filmComponent, this.#filmsListContainer.element, RenderPosition.AFTERBEGIN )
    this.#filmComponent.setHandleOpenPopup(this.#openPopup)
  }

#openPopup = () =>{
  console.log('need open popup')
  this.#popupPresenter.init(this.#film)
}

}
