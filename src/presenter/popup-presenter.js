import FilmPopupSectionView from '../view/film-popup-section-view';
import FilmPopupView from '../view/film-popup-view';
import FilmPopupContainerView from '../view/film-popup-container-view';
import {render, createElement, RenderPosition} from '../framework/render';

export default class PopupPresenter {
  #filmPopupSectionComponent = null
  #filmPopupContainerComponent = null
  #filmPopupComponent = null
  #siteBodyContainer = null
  constructor(siteBodyContainer) {
    this.#filmPopupSectionComponent = new FilmPopupSectionView()
    this.#filmPopupContainerComponent = new FilmPopupContainerView()
  this.#siteBodyContainer = siteBodyContainer

  }

  init(movie) {
    this.#filmPopupComponent = new FilmPopupView(movie)
    render(this.#filmPopupComponent, this.#filmPopupContainerComponent.element, RenderPosition.BEFOREEND)
    render(this.#filmPopupContainerComponent, this.#filmPopupSectionComponent.element)
    render(this.#filmPopupSectionComponent, this.#siteBodyContainer)



  }
}
