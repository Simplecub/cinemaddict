import Observable from '../framework/observable.js';
import {FilterType} from '../const.js';


export default class MenuNavigationModel extends Observable {
  #filter = FilterType.ALL

  get filter() {
    return this.#filter
  }
}
