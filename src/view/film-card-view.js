import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import {Dayjs} from 'dayjs';
import dayjs from 'dayjs';
import {humanizeTime} from '../util';

const getFilmCard = (film) => {
  const {filmInfo,userDetails, id, comments,} = film;
  const {title, totalRating, release, runtime, genre, poster, description} = filmInfo;
  const {watchlist, favorite, alreadyWatched} = userDetails

 // console.log(description);
  return (`
        <article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${dayjs(release.date).format(`YYYY`)}</span>
              <span class="film-card__duration">${humanizeTime(runtime)}</span>
              <span class="film-card__genre">${genre.splice(' ')}</span>
            </p>
            <img src="./${poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${description.length <=140 ? description : `${description.slice(0, 139)}...`}</p>
            <span class="film-card__comments">${comments.length}</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched  ${alreadyWatched ? 'film-card__controls-item--active' : ''}" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite  ${favorite ? 'film-card__controls-item--active' : ''}" type="button">Mark as favorite</button>
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
