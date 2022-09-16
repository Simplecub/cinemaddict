import AbstractView from '../framework/view/abstract-view';


const getFilmPopupContainer = () => {
  return (`<div class="film-details__inner"> </div>`);
};

export default class FilmPopupContainerView extends AbstractView {

  get template() {
    return getFilmPopupContainer();
  }
}
