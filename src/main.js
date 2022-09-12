import MoviesApiService from './movies-api-service.js';
import MoviesModel from './model/movies-model';
import ProfileRatingView from './view/profile-raiting-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import {render, RenderPosition} from './framework/render.js';

const siteMainEl = document.querySelector('.header');
const siteFooterEl = document.querySelector('.footer__statistics')
const AUTHORIZATION = 'Basic er883jdzbdw';
const END_POINT = 'https://18.ecmascript.pages.academy/cinemaddict';
const moviesModel = new MoviesModel(new MoviesApiService(END_POINT, AUTHORIZATION));


moviesModel.init().then((res) => {
  console.log('fff');
  render(new ProfileRatingView(res), siteMainEl, RenderPosition.BEFOREEND);
  render(new FooterStatisticsView(res), siteFooterEl, RenderPosition.BEFOREEND)
});
