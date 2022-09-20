import Observable from '../framework/observable';


export default class CommentsModel extends Observable {
  #commentsAPIService = null
  #comments = [];
  constructor(commentsApiService) {
    super();
    this.#commentsAPIService = commentsApiService;
  }

  init = async () => {
    try {
      this.#comments = await this.#commentsAPIService.comments;
    }catch (err) {
      this.#comments = []
    }
  }

}
