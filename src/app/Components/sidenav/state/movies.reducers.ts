import * as MoviesStateTypes from './movies.actions';
import {Movie} from '../../../Models/MovieModel';
import {MoviesActionEnum} from './movies.actions';


export interface MoviesState {
  movies: Movie[];
  detailMovie: Movie;
}

const initialState: MoviesState = {
  movies: [],
  detailMovie: null
};


export function movieReducer(state = initialState, action: MoviesStateTypes.MoviesActionType) {

  switch (action.type) {
    case MoviesActionEnum.REFRESH_DATA_STORE:
      console.log('REFRESH_DATA_STORE');
      console.log(action.payload)
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };
    case MoviesActionEnum.STORE_ACTIVE_MOVIE:
      console.log('STORE_ACTIVE_MOVIE');
      const activeMovie = state.movies.find(movie => movie.id === action.payload);
      return {
        ...state,
        detailMovie: activeMovie
      };
    default:
      console.log('DEFAULT');
      return state;
  }
}
