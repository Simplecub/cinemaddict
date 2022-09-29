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


const getCommentDate = (date) => {
  const diffDate = dayjs(dayjs(date).diff(dayjs().toDate())).format('DD')
if (+diffDate === 0 ){ return 'Today'}
if (+diffDate === 1) {return '1 day ago'}
  if (+diffDate === 2) {return '2 days ago'}
  else
return dayjs(date).format('YYYY/MM/DD HH:mm')
}
export {humanizeTime, sortMovieToRate, sortMovieToDate, getCommentDate};
