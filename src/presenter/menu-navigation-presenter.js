import MenuNavigationView from '../view/menu-navigation-view';
import {render, RenderPosition} from '../framework/render';
import {filter, FilterType, UpdateType} from '../const';

export default class MenuNavigationPresenter {
  #menuModel = null;
  #menuContainer = null;
  #menuTemplate = null;
  #moviesModel = null;

  constructor(mainNavigationModel, siteMenu, movies) {
    this.#menuModel = mainNavigationModel;
    this.#menuContainer = siteMenu;
    this.#moviesModel = movies;
  }

  //создает массив объектов со всеми возможными фильтрами в которых уже подсчитано число фильмов
  get filters() {
    const movies = this.#moviesModel.movies;
    return [{
      type: FilterType.ALL,
      name: 'All movies ',
      count: filter[FilterType.ALL](movies).length
    },
      {
        type: FilterType.WATCHLIST,
        name: 'Watchlist ',
        count: filter[FilterType.WATCHLIST](movies).length
      },
      {
        type: FilterType.HISTORY,
        name: 'History ',
        count: filter[FilterType.HISTORY](movies).length

      },
      {
        type: FilterType.FAVORITES,
        name: 'Favorites ',
        count: filter[FilterType.FAVORITES](movies).length
      }
    ];
  }

  init() {
//создается элемент-вьюха, которой передаются данные
// из геттера(массив с фильтрами - this.filters)
// и модели this.#menuModel = mainNavigationModel (текущий выбранный фильтр)
    this.#menuTemplate = new MenuNavigationView(this.filters, this.#menuModel);
    //рендерится вьюха-меню(фильтров) на страницу
    render(this.#menuTemplate, this.#menuContainer, RenderPosition.BEFOREEND);

    this.#menuTemplate.menuSelectHandler(this.#handleMenuChange);
  }

  //коллбэк в menu-navigation-view - вызывается при клике на мень фильтров
  #handleMenuChange = (filterType) => {
    if (this.#menuModel.filter === filterType) {
      return;
    }
    if (filterType) {
      this.#menuModel.setFilter(UpdateType.MAJOR, filterType);
    }
  }

}
