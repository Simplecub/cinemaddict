import AbstractView from '../framework/view/abstract-view';

const getSectionFilms = () => {
  return (`
  <section class="films"> </section>
  `)
}

export default class SectionFilmsView extends AbstractView {

  get template() {
    return getSectionFilms()
  }
}
