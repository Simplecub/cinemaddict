import AbstractView from '../framework/view/abstract-view';


const showMoreButton = (show, all) => {

  return (`
  <button class="films-list__show-more">Show more... (${show} of ${all}) </button>
  `)
}


export default class ShowMoreButtonView extends AbstractView {
  #countShow = null;
  #countMovies = null
  constructor(countShow, countMovies) {
    super();
    this.#countShow = countShow;
    this.#countMovies = countMovies
  }

  get template() {
    return showMoreButton(this.#countShow,this.#countMovies)
  }

  showMoreButtonHandler = (callback) => {
    this._callback.showMore = callback
    this.element.addEventListener('click', this.#showMore)
  }

  #showMore = (evt) => {
    this._callback.showMore()

  }
}
