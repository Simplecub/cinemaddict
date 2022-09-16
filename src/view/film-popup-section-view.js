import AbstractView from '../framework/view/abstract-view';


const getFilmPopupSection = () => {
  return (`<section class="film-details"> </section>`);
};

export default class FilmPopupSectionView extends AbstractView {

  get template() {
    return getFilmPopupSection();
  }
}
