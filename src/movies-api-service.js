import ApiService from './framework/api-service.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
}

export default class MoviesApiService extends ApiService {
  get movies() {
    return this._load({url: 'movies'})
      .then(ApiService.parseResponse)
  }
  get comments() {
    return this._load( {url: '/comments/0'}).then(ApiService.parseResponse)
  }
}
