import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';


export default class MoviesModel extends Observable {
  #moviesAPIService = null;
  #movies = [];
  #comments = [];

  constructor(moviesApiService) {
    super();
    this.#moviesAPIService = moviesApiService;
  }

  get movies() {
    return this.#movies;
  }

  get comments() {
    return this.#comments;
  }

  init = async () => {
    try {
      this.#comments = await this.#moviesAPIService.comments;
      const movies = await this.#moviesAPIService.movies;
      return this.#movies = movies.map(this.#adaptToClient);
    } catch (err) {
      this.#movies = [];
    }
  };

  #adaptToClient = (movie) => {
    const adaptedMovie = {
      ...movie,
      comments: movie['comments'],
      filmInfo: {
        ...movie['film_info'],
        ageRating: movie['film_info']['age_rating'],
        alternativeTitle: movie['film_info']['alternative_title'],
        release: {
          ...movie['film_info']['release'],
          releaseCountry: movie['film_info']['release']['release_country']
        },
        totalRating: movie['film_info']['total_rating']
      },
      userDetails: {
        ...movie['user_details'],
        alreadyWatched: movie['user_details']['already_watched'],
        watchingDate: movie['user_details']['watching_date']
      }
    };
    delete adaptedMovie['film_info'];
    delete adaptedMovie.filmInfo['age_rating'];
    delete adaptedMovie.filmInfo.release['release_country'];
    delete adaptedMovie.filmInfo['total_rating'];
    delete adaptedMovie['user_details'];
    delete adaptedMovie.userDetails['already_watched'];
    delete adaptedMovie.userDetails['watching_date'];
    return adaptedMovie;
  };
}
