import FilmPopupSectionView from '../view/film-popup-section-view';
import FilmPopupView from '../view/film-popup-view';
import FilmPopupContainerView from '../view/film-popup-container-view';
import {render, createElement, RenderPosition, remove} from '../framework/render';

export default class PopupPresenter {
  #filmPopupSectionComponent = null;
  #filmPopupContainerComponent = null;
  #filmPopupComponent = null;
  #siteBodyContainer = null;

  constructor(siteBodyContainer) {

    this.#siteBodyContainer = siteBodyContainer;

  }

  init(movie) {
if (this.#filmPopupComponent) {remove(this.#filmPopupSectionComponent)}
    this.#filmPopupComponent = new FilmPopupView(movie);

    this.#filmPopupComponent.setClosePopupHandler(this.#handlePopupClose);
    this.#filmPopupSectionComponent = new FilmPopupSectionView();
    this.#filmPopupContainerComponent = new FilmPopupContainerView();
    render(this.#filmPopupComponent, this.#filmPopupContainerComponent.element, RenderPosition.BEFOREEND);
    render(this.#filmPopupContainerComponent, this.#filmPopupSectionComponent.element);
    render(this.#filmPopupSectionComponent, this.#siteBodyContainer);


  }

  #handlePopupClose = () => {
    console.log('close popup');
   // remove(this.#filmPopupComponent);
   // remove(this.#filmPopupContainerComponent);
    remove(this.#filmPopupSectionComponent);
  };


}
