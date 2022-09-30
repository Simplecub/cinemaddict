import FilmPopupCommentsContainerView from '../view/film-popup-comments-container-view';
import FilmPopupCommentsWrapView from '../view/film-popup-comments-wrap-view';
import FilmPopupCommentsPublishedView from '../view/film-popup-comments-published-view';
import {render, RenderPosition} from '../framework/render';
import FilmPopupCommentsNewView from '../view/film-popup-comments-new-view';


export default class CommentsPresenter {
  #filmPopupContainerComponent = null;
  #commentsModel = null
  #comments = null
  #commentsContainer = new FilmPopupCommentsContainerView()
  #commentsWrap = null
  #commentsComponent = null
  #newCommentComponent = new FilmPopupCommentsNewView()

  constructor(filmPopupContainer, commentsModel) {
    this.#filmPopupContainerComponent = filmPopupContainer;
    this.#commentsModel = commentsModel
  }

  init = (movie) =>  {
this.#getComments(movie)
  .then(r => {
    this.#renderCommentsTemplate(r)
    this.#renderNewCommentTemplate()
  })
  }

  #getComments = async (movie) => {
    try {
      return await this.#commentsModel.init(movie)
    } catch (err) {
      this.#comments = []
      console.log('no can get -comments')
    }
  }

  #renderCommentsTemplate = (comments) => {
    this.#commentsWrap = new FilmPopupCommentsWrapView(comments)
    this.#commentsComponent = new FilmPopupCommentsPublishedView(comments); //comments
    render(this.#commentsComponent, this.#commentsWrap.element, RenderPosition.BEFOREEND) // render in wrap
    render(this.#commentsWrap, this.#commentsContainer.element, RenderPosition.AFTERBEGIN) // render in div
    render(this.#commentsContainer, this.#filmPopupContainerComponent.element, RenderPosition.BEFOREEND) //render in section after details
    this.#commentsComponent.setDeleteCommentHandler(this.#handleDeleteComment);
  //  this.#commentsComponent.setSelectedEmoji()
  }

    #handleDeleteComment = (id) => {
      console.log(`need delete comment ${id}`);
    };

  #renderNewCommentTemplate = () => {
render(this.#newCommentComponent,  this.#commentsWrap.element, RenderPosition.BEFOREEND)
  }
}
