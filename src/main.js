import MoviesApiService from './movies-api-service.js';
import MoviesModel from './model/movies-model';
import ProfileRatingView from './view/profile-raiting-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import {render, RenderPosition} from './framework/render.js';
import MenuNavigationPresenter from './presenter/menu-navigation-presenter';
import MenuNavigationModel from './model/menu-navigation-model';

const siteMainEl = document.querySelector('.header');
const siteFooterEl = document.querySelector('.footer__statistics')
const siteMenuEl = document.querySelector('.main')
const AUTHORIZATION = 'Basic er883jdzbdw';
const END_POINT = 'https://18.ecmascript.pages.academy/cinemaddict';
const moviesModel = new MoviesModel(new MoviesApiService(END_POINT, AUTHORIZATION));

const menuNavigation = new MenuNavigationPresenter(new MenuNavigationModel(), siteMenuEl, moviesModel)

moviesModel.init().then((res) => {
  console.log(`start main = ` + res.length);
  render(new ProfileRatingView(res), siteMainEl, RenderPosition.BEFOREEND);
  render(new FooterStatisticsView(res), siteFooterEl, RenderPosition.BEFOREEND)

  menuNavigation.init()
});
