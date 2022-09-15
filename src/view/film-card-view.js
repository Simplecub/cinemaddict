import AbstractStatefulView from '../framework/view/abstract-stateful-view';

const getFilmCard = (film) => {
  const {filmInfo,userDetails, id, comments,} = film;
  const {title, totalRating, release, runtime, genre, poster, description} = filmInfo;
  const {watchlist, favorite, alreadyWatched} = userDetails
  return (`
        <article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${release}</span>
              <span class="film-card__duration">${runtime}</span>
              <span class="film-card__genre">${genre}</span>
            </p>
            <img src="./${poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${description.length <=140 ? description: description.slice(139).splice('...')}</p>
            <span class="film-card__comments">0 comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
          </div>
        </article>
  `)
}
export default class FilmCardView extends AbstractStatefulView {
#film = null

  constructor(film) {
    super();
    this.#film = film
  }

  get template() {
    return getFilmCard(this.#film)
  }
}
