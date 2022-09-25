import Observable from '../framework/observable';


export default class CommentsModel extends Observable {
  #commentsAPIService = null
  #comments = [];
  constructor(commentsApiService) {
    super();
    this.#commentsAPIService = commentsApiService;
  }

  init = async (id) => {
    try {
      const comments = await this.#commentsAPIService.comments(id);
      return this.#comments = comments.map(this.#adaptToClient(comment))
    }catch (err) {
      this.#comments = []
    }
  }
  #adaptToClient = (comment) => {
    const  adaptedComment = {...comment,
      id: comment['id'],
      author: comment['author'],
      emotion: comment['emotion'],
      comment: comment['comment'],
      date: comment['date']
    }
delete adaptedComment['id'];
    delete adaptedComment['author'];
    delete adaptedComment['emotion'];
    delete adaptedComment['comment'];
    delete adaptedComment['date'];
return adaptedComment

  }


}
