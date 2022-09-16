import dayjs from 'dayjs';

const humanizeTime = (minutes) => {
  if (+minutes < 60) {
    return `${+minutes}m`;
  } else {
    return `${Math.floor(+minutes / 60)}H ${(+minutes % 60) ? `${+minutes % 60}m` : ''}`;
  }
};

const sortMovieToRate = (movieA, movieB) => {
  return movieA.filmInfo.totalRating - movieB.filmInfo.totalRating;
};
const sortMovieToDate = (movieA, movieB) => {
  return dayjs(movieA.filmInfo.release.date).diff(dayjs().toDate()) - dayjs(movieB.filmInfo.release.date).diff(dayjs().toDate());
};
export {humanizeTime, sortMovieToRate, sortMovieToDate};
