import AbstractView from '../framework/view/abstract-view';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';

const Rate = ['Novice', 'Fan', 'Movie Buff'];

const getProfileRating = (movies) => {
  const profileRate = movies.slice().map((movie)=> movie.userDetails.alreadyWatched ? 1 : 0).reduce((p, v) => v+p, 0)
  const rateName = (0 < profileRate && profileRate <= 10) ? Rate[0] : (10 < profileRate && profileRate <= 20) ? Rate[1] : profileRate > 20 ? Rate[2] : '';
  return (`
  <section class="header__profile profile">
    <p class="profile__rating">${rateName}</p>
    <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
`);
};


export default class ProfileRatingView extends AbstractView {
  #movies = null;

  constructor(movies) {
    super();
    this.#movies = movies;
  }

  get template() {
    return getProfileRating(this.#movies);
  }

}
