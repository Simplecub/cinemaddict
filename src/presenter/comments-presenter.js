


export default class CommentsPresenter {
  #filmPopupContainerComponent = null;
  #commentsModel = null
  #comments = null

  constructor(filmPopupContainer, commentsModel) {
    this.#filmPopupContainerComponent = filmPopupContainer;
    this.#commentsModel = commentsModel
  }

  init = async (movie) =>{
    try {
      this.#comments = await this.#commentsModel.init(movie.id)
      console.log(this.#comments)
    } catch (err) {
      this.#comments = []
      console.log('no get -comments')
    }
  //  this.#movie = movie

  }

}
