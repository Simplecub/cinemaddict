const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const FilterType = {
  ALL: 'all',
  WATCHLIST: 'watchlist',
  HISTORY: 'history',
  FAVORITES: 'favorites'
};

const filter = {
  [FilterType.ALL]: (movies) => movies,
  [FilterType.WATCHLIST]: (movies) => movies.filter(item => item.userDetails.watchlist),
  [FilterType.HISTORY]: (movies) => movies.filter(item => item.userDetails.alreadyWatched),
  [FilterType.FAVORITES]: (movies) => movies.filter(item => item.userDetails.favorite)
};

const SortType = {
  DEFAULT: 'default',
  DATE: 'date',
  RATE: 'rate'
}
export {UpdateType, FilterType, filter, SortType};
