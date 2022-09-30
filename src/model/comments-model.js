import Observable from '../framework/observable';


export default class CommentsModel extends Observable {
  #commentsAPIService = null
  #comments = [];
  constructor(commentsApiService) {
    super();
    this.#commentsAPIService = commentsApiService;
  }

  init = async (movie) => {
    try {
      const comments = await this.#commentsAPIService.comments(movie.id);
      return comments
     // return this.#comments = comments.map(this.#adaptToClient)
    }catch (err) {
      this.#comments = []
    }
  }
  #adaptToClient = (comment) => {
    console.log(comment)
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
    console.log(adaptedComment)
return adaptedComment

  }


}
