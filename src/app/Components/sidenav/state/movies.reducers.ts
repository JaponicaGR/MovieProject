import * as MoviesStateTypes from './movies.actions';
import {Movie} from '../../../Models/MovieModel';
import {MoviesActionEnum} from './movies.actions';
import {HttpErrorResponse} from '@angular/common/http';


export interface MoviesState {
  movies: Movie[];
  detailMovie: Movie;
  filteredMovies: Movie[];
  httpError: HttpErrorResponse;
}

const initialState: MoviesState = {
  movies: [],
  detailMovie: null,
  filteredMovies: [],
  httpError: null
};


export function movieReducer(state = initialState, action: MoviesStateTypes.MoviesActionType) {

  switch (action.type) {

    case MoviesActionEnum.REFRESH_DATA_STORE:
      console.log('REFRESH REDUCER');
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        httpError: null
      };

    case MoviesActionEnum.STORE_ACTIVE_MOVIE:
      console.log('STORE ACTIVE REDUCER');
      const activeMovie = state.movies.find(movie => movie.id === action.payload);
      return {
        ...state,
        detailMovie: activeMovie ?? null
      };

    case MoviesActionEnum.FILTER_MOVIES:
      console.log('FILTER MOVIES REDUCER');
      if ((action.payload as string).length >= 3) {
        const filterMovies = state.movies.filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase()));
        return {
          ...state,
          filteredMovies: filterMovies
        };
      }

      return { ...state, filteredMovies: [] };

    case MoviesActionEnum.FETCH_DATA_ERROR:
      console.log('HTTP ERROR REDUCER');
      return {
        ...state,
        movies: [],
        detailMovie: null,
        filteredMovies: [],
        httpError: action.payload
      };

    default:
      console.log('DEFAULT REDUCER');
      return state;
  }

}
