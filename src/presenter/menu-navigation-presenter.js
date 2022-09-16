import MenuNavigationView from '../view/00-menu-navigation-view';
import {remove, render, RenderPosition, replace} from '../framework/render';
import {filter, FilterType, UpdateType} from '../const';

export default class MenuNavigationPresenter {
  #menuModel = null;
  #menuContainer = null;
  #menuTemplate = null;
  #moviesModel = null;

  constructor(menuNavigationModel, siteMenu, movies) {
    this.#menuModel = menuNavigationModel;
    this.#menuContainer = siteMenu;
    this.#moviesModel = movies;
    //добавляем в наблюдатель модели MenuNavigationModel функцию,
    // которая будет вызвана при событии
    this.#menuModel.addObserver(this.#handleModelEvent);
  }

  //создает массив объектов со всеми возможными фильтрами
  // в которых уже подсчитано число фильмов
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
    const prevMenuComponent = this.#menuTemplate;
//создается элемент-вьюха, которой передаются данные
// из геттера(массив с фильтрами - this.filters)
// и модели this.#menuModel = mainNavigationModel (текущий выбранный фильтр)
    this.#menuTemplate = new MenuNavigationView(this.filters, this.#menuModel);
    //через интерфейс MenuNavigationView - в menuSelectHandler передаем колбэк
    this.#menuTemplate.menuSelectHandler(this.#handleMenuChange);
//реализация проверки на уже отрендеренное меню и её замены
    if (prevMenuComponent === null) {
      //рендерится вьюха-меню(фильтров) на страницу
      render(this.#menuTemplate, this.#menuContainer, RenderPosition.BEFOREEND);
      console.log('init.menu-presenter');
      return;
    }
    replace(this.#menuTemplate, prevMenuComponent);
    remove(prevMenuComponent);
    console.log('init.menu-presenter + replace');
  }

  #handleModelEvent = () => {
    this.init();
  };


  //коллбэк в menu-navigation-view - вызывается при клике на меню фильтров
  #handleMenuChange = (filterType) => {
    if (this.#menuModel.filter === filterType) {
      return;
    }
    if (filterType) {
      this.#menuModel.setFilter(UpdateType.MAJOR, filterType);
    }
  };
}
