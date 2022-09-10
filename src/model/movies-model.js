import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';


export default class MoviesModel extends Observable {
  #moviesAPIService = null;
  #movies = [];
  #comments = [];
  constructor(moviesApiService) {
    super();
    this.#moviesAPIService = moviesApiService
  }
  get movies() {
    return this.#movies
  }
  get comments() {
    return this.#comments
  }

  init = async () => {
    try {
      this.#comments = this.#moviesAPIService.comments;
      const movies = this.#moviesAPIService.movies;
      this.#movies = movies.map(this.#adaptToClient)
    } catch (err) {
      this.#movies = []
    }
  }

  #adaptToClient = (movie) => {
    const adaptedMovie = {...movie,


    }
//delete
  return adaptedMovie
  }

}
