import AbstractStatefulView from '../framework/view/abstract-stateful-view';


const getWatchedCount = () => {

}

const getOneItemMenu = (filters, currentFilter) => {

}
const getMenuTemplate = (filters, currentFilter) =>{

  return  (`
  <nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  </nav>
  `)
}

export default class MainNavigationView extends AbstractStatefulView {
  #filters = null
  #currentFilter = null
constructor(filters, currentFilters) {
  super();
  this.#filters = filters;
  this.#currentFilter = currentFilters
}
  get template() {
    return getMenuTemplate(this.#filters, this.#currentFilter)
  }
}
