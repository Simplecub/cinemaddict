import AbstractView from '../framework/view/abstract-view';
import FilmCardView from '../view/film-card-view';
import {render, RenderPosition} from '../framework/render';


export default class FilmPresenter {
  #filmsListContainer = null;
  #film = null;
  #filmComponent = null;

  constructor(filmsListContainer) {
    this.#filmsListContainer = filmsListContainer;

  }

  init(film) {
    this.#film = film;
this.#filmComponent = new FilmCardView(film)
    render(this.#filmComponent, this.#filmsListContainer.element, RenderPosition.AFTERBEGIN )
    this.#filmComponent.setHandleOpenPopup(this.#openPopup)
  }
#openPopup = () =>{
    console.log('need open popup')
}

}
