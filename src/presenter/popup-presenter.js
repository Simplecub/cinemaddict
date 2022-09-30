import FilmPopupSectionView from '../view/film-popup-section-view';
import FilmPopupView from '../view/film-popup-view';
import FilmPopupContainerView from '../view/film-popup-container-view';
import {render, createElement, RenderPosition, remove} from '../framework/render';
import {MODE_POPUP} from '../const';
import CommentsPresenter from './comments-presenter';
import CommentsModel from '../model/comments-model';
import FilmPopupCommentsSectionView from '../view/film-popup-comments-section-view';

export default class PopupPresenter {
  #filmPopupSectionComponent = null;
  #filmPopupContainerComponent = null;
  #filmPopupComponent = null;
  #siteBodyContainer = null;
  #mode = MODE_POPUP.OPEN;
  #handlePopupMode = () => {
  };
  #movieModel = null;
  #commentsPresenter = null;
  #commentsModel = null;
  #commentsComponent = null;
  #movie = null

  constructor(filmPopupSectionComponent, commentsModel, handlePopupMode) {
    this.#filmPopupSectionComponent = filmPopupSectionComponent;
    //   this.#siteBodyContainer = siteBodyContainer;
    this.#handlePopupMode = handlePopupMode;

    this.#filmPopupContainerComponent = new FilmPopupContainerView(); //insert comments
    this.#commentsModel = commentsModel;
    this.#commentsPresenter = new CommentsPresenter(this.#filmPopupContainerComponent, this.#commentsModel);
  }

  init(movie) {
    this.#movie = movie
    if (this.#filmPopupComponent) {
      remove(this.#filmPopupSectionComponent);
    }
    this.#filmPopupComponent = new FilmPopupView(movie);
    this.#filmPopupComponent.setClosePopupHandler(this.#handlePopupClose);

    // this.#filmPopupSectionComponent = new FilmPopupSectionView();

    render(this.#filmPopupComponent, this.#filmPopupContainerComponent.element, RenderPosition.AFTERBEGIN);
    render(this.#filmPopupContainerComponent, this.#filmPopupSectionComponent.element, RenderPosition.AFTERBEGIN); //render top-container Popup
    //need render comment??
    this.#renderComments(movie)
    ;
    // render(this.#filmPopupSectionComponent, this.#siteBodyContainer);

  }

  #handlePopupClose = () => {
    console.log('close popup');
    // remove(this.#filmPopupComponent);
    // remove(this.#filmPopupContainerComponent);
    //  this.removePopup()
    this.#handlePopupMode();
  };
  /*
  removePopup = () => {
    remove(this.#filmPopupSectionComponent);
  }
   */


  #renderComments = (movie) => {
    this.#commentsPresenter.init(movie)
      .then((comments) => {
        console.log(comments);
        this.#commentsComponent = new FilmPopupCommentsSectionView(comments);
        this.#commentsComponent.setDeleteCommentHandler(this.#handleDeleteComment);
        render(this.#commentsComponent, this.#filmPopupSectionComponent.element, RenderPosition.BEFOREEND);
      });

  };

  #handleDeleteComment = (movie) => {
    console.log(this.#movie);


  };
}
