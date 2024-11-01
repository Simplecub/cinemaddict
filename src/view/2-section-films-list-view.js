import AbstractView from '../framework/view/abstract-view';

const getSectionFilmsList = () => {
  return (`
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>
  `);
};

export default class SectionFilmsListView extends AbstractView {

  get template() {
    return getSectionFilmsList();
  }
}
