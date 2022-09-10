import MoviesApiService from './movies-api-service.js';
import MoviesModel from './model/movies-model';


const AUTHORIZATION = 'Basic er883jdzbdw';
const END_POINT = 'https://18.ecmascript.pages.academy/cinemaddict';
const moviesModel = new MoviesModel(new MoviesApiService(END_POINT, AUTHORIZATION))


moviesModel.init().finally(() =>console.log('fff'))
