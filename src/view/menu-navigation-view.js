import AbstractStatefulView from '../framework/view/abstract-stateful-view';


const getWatchedCount = () => {

}

const getOneItemMenu = (filters, currentFilter) => {

}
const getMenuTemplate = (filters, currentFilter) =>{
  const {filter} = currentFilter
  console.log(filters);
  console.log(filter);
  return  (`
  <nav class="main-navigation">
    <a href="#all" class="main-navigation__item ${filter==='all'? 'main-navigation__item--active':''}">All movies (${filters.filter(i=>i.type ==='all')[0].count})</a>
    <a href="#watchlist" class="main-navigation__item ${filter==='watchlist'? 'main-navigation__item--active':''}">Watchlist <span class="main-navigation__item-count">${filters.filter(i=>i.type ==='watchlist')[0].count}</span></a>
    <a href="#history" class="main-navigation__item ${filter==='history'? 'main-navigation__item--active':''}">History <span class="main-navigation__item-count">${filters.filter(i=>i.type ==='history')[0].count}</span></a>
    <a href="#favorites" class="main-navigation__item ${filter==='favorites'? 'main-navigation__item--active':''}">Favorites <span class="main-navigation__item-count">${filters.filter(i=>i.type ==='favorites')[0].count}</span></a>
  </nav>
  `)
}

export default class MenuNavigationView extends AbstractStatefulView {
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
