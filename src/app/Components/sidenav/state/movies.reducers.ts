import * as MoviesStateTypes from './movies.actions';
import {Movie} from '../../../Models/MovieModel';
import {MoviesActionEnum} from './movies.actions';
import {HttpErrorResponse} from '@angular/common/http';


export interface MoviesState {
  movies: Movie[];
  detailMovie: Movie;
  filteredMovies: Movie[];
  httpError: HttpErrorResponse;
  httpStart: boolean;
  httpEnd: boolean;
  wrongId: boolean;
  pageIndex: number;
}

const initialState: MoviesState = {
  movies: [],
  detailMovie: null,
  filteredMovies: [],
  httpError: null,
  httpStart: false,
  httpEnd: false,
  wrongId: false,
  pageIndex: 1
};


export function movieReducer(state = initialState, action: MoviesStateTypes.MoviesActionType) {

  switch (action.type) {

    case MoviesActionEnum.FETCH_DATA_API:
      console.log('FETCH REDUCER');

      return {
        ...state,
        httpStart: true,
        httpEnd: false
      };

    case MoviesActionEnum.REFRESH_DATA_STORE:
      console.log('REFRESH REDUCER');

      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        httpError: null,
        httpEnd: true,
        pageIndex: state.pageIndex + 1
      };

    case MoviesActionEnum.STORE_ACTIVE_MOVIE:
      console.log('STORE ACTIVE REDUCER');

      const activeMovie = state.movies.find(movie => movie.id === action.payload);

      // State is filled with data and the id from URL match
      if (state.httpEnd && activeMovie) {
        return {
          ...state,
          detailMovie: activeMovie,
          wrongId: false
        };

      }

      // State is filled with data but the id from URL doesn't match
      if (state.httpEnd && (activeMovie === undefined)) {
        return {
          ...state,
          detailMovie: null,
          wrongId: true
        };
      }

      // Any other case (http request doesn't resolved yet)
      return {
        ...state,
        detailMovie: null,
        wrongId: false
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
        httpError: action.payload,
        httpEnd: true
      };

    default:
      console.log('DEFAULT REDUCER');
      return state;
  }

}
