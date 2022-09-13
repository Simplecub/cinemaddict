import Observable from '../framework/observable.js';
import {FilterType} from '../const.js';


export default class MenuNavigationModel extends Observable {
  #filter = FilterType.ALL

  get filter() {
    return this.#filter
  }
  setFilter = (UpdateType, newFilter) => {
    this.#filter = newFilter
    this._notify(UpdateType, newFilter)
    console.log(newFilter)
  }

}
