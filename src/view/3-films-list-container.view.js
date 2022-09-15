import AbstractView from '../framework/view/abstract-view';

const getFilmsListContainer = () => {
  return (`
  <div class="films-list__container"> </div>
  `)
}
export default class FilmsListContainerView extends AbstractView {

  get template() {
    return getFilmsListContainer()
  }
}
