import AbstractView from '../framework/view/abstract-view';


const getStatistic = (movies) => {
  console.log(movies);
  const numFilms = movies.slice().reduce((p, v)=> v.id ? p+1 : p, 0)
  return (`
   <p>${numFilms} movies inside</p>
  `)
}

export default class FooterStatisticsView extends AbstractView {
  #movies = null
  constructor(movies) {
    super();
    this.#movies = movies
  }
  get template() {
    return getStatistic(this.#movies)
  }
}
