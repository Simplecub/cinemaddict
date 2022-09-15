import MoviesApiService from './movies-api-service.js';
import MoviesModel from './model/movies-model';
import ProfileRatingView from './view/profile-raiting-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import {render, RenderPosition} from './framework/render.js';
import MenuNavigationPresenter from './presenter/menu-navigation-presenter';
import MenuNavigationModel from './model/menu-navigation-model';
import BoardPresenter from './presenter/board-presenter';

const siteHeadEl = document.querySelector('.header');
const siteFooterEl = document.querySelector('.footer__statistics')
const siteMainEl = document.querySelector('.main')
const AUTHORIZATION = 'Basic er883jdzbdw';
const END_POINT = 'https://18.ecmascript.pages.academy/cinemaddict';
const moviesModel = new MoviesModel(new MoviesApiService(END_POINT, AUTHORIZATION));

const menuNavigation = new MenuNavigationPresenter(new MenuNavigationModel(), siteMainEl, moviesModel)

const boardPresenter = new BoardPresenter(siteMainEl)

moviesModel.init().then((res) => {
  console.log(`start main = ` + res.length);
  render(new ProfileRatingView(res), siteHeadEl, RenderPosition.BEFOREEND); //рендер рейтинга в header
  render(new FooterStatisticsView(res), siteFooterEl, RenderPosition.BEFOREEND) //рендер в footer

  menuNavigation.init() //рендер фильтра
  boardPresenter.init() //рендер сортировки -afterBegin
});
