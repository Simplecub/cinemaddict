import ApiService from './framework/api-service';


const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
}

export default class CommentsApiService extends  ApiService {
  comments = (id) => {
    return this._load( {url: `/comments/${id}`}).then(ApiService.parseResponse)
  }
}
