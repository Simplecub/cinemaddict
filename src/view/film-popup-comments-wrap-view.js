import AbstractStatefulView from '../framework/view/abstract-stateful-view';




const getCommentsWrap = (comments) => {

  return (`
  <section class="film-details__comments-wrap">
           <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
   </section>
  `)
}

export default class FilmPopupCommentsWrapView extends AbstractStatefulView {
#comments = null
  constructor(comments) {
    super();
    this.#comments = comments
  }

  get template() {
    return getCommentsWrap(this.#comments);
  }
}
