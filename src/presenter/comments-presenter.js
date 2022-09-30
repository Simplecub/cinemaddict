


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
     return await this.#commentsModel.init(movie)

    } catch (err) {
      this.#comments = []
      console.log('no get -comments')
    }
  //  this.#movie = movie

  }

}
