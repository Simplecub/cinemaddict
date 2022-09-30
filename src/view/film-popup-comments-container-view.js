import AbstractStatefulView from '../framework/view/abstract-stateful-view';



const getCommentsContainerView = () => {
  return (`
 <div class="film-details__bottom-container"> </div>
  `)
}
export default  class FilmPopupCommentsContainerView extends AbstractStatefulView {

  constructor() {
    super();
  }

  get template() {
    return getCommentsContainerView();
  }
}
