import AbstractView from '../framework/view/abstract-view';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';


const getProfileRating = (movies) => {
  const profileRate = movies.map((movie)=> movie.user.details.wached ? 1:0).reduce((p, v) => v+p, 0)

return (`
  <section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="/public/images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
`)
}


export default class ProfileRatingView extends AbstractView {
  #movies = null

constructor(movies) {
  super();
  this.#movies = movies
}
  get template() {
    return getProfileRating(this.#movies);
  }

}
