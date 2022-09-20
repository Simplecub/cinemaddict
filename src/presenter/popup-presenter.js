import FilmPopupSectionView from '../view/film-popup-section-view';
import FilmPopupView from '../view/film-popup-view';
import FilmPopupContainerView from '../view/film-popup-container-view';
import {render, createElement, RenderPosition, remove} from '../framework/render';
import {MODE_POPUP} from '../const';

export default class PopupPresenter {
  #filmPopupSectionComponent = null;
  #filmPopupContainerComponent = null;
  #filmPopupComponent = null;
  #siteBodyContainer = null;
  #mode = MODE_POPUP.OPEN;
  #handlePopupMode = () => {
  };


  constructor(siteBodyContainer, handlePopupMode) {

    this.#siteBodyContainer = siteBodyContainer;
    this.#handlePopupMode = handlePopupMode;

  }

  init(movie) {
    if (this.#filmPopupComponent) {
      remove(this.#filmPopupSectionComponent);
    }
    this.#filmPopupComponent = new FilmPopupView(movie);

    this.#filmPopupComponent.setClosePopupHandler(this.#handlePopupClose);
    this.#filmPopupSectionComponent = new FilmPopupSectionView();
    this.#filmPopupContainerComponent = new FilmPopupContainerView();
    render(this.#filmPopupComponent, this.#filmPopupContainerComponent.element, RenderPosition.BEFOREEND);
    render(this.#filmPopupContainerComponent, this.#filmPopupSectionComponent.element); //render top-container Popup
    //need render comment??

    render(this.#filmPopupSectionComponent, this.#siteBodyContainer);

  }

  #handlePopupClose = () => {
    console.log('close popup');
    // remove(this.#filmPopupComponent);
    // remove(this.#filmPopupContainerComponent);
    this.removePopup()
    this.#handlePopupMode();
  };
removePopup = () => {
  remove(this.#filmPopupSectionComponent);
}

}
