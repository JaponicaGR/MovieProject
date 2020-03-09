import * as MoviesStateTypes from './movies.actions';
import {Movie} from '../../../Models/MovieModel';
import {MoviesActionEnum} from './movies.actions';


export interface MoviesState {
  movies: Movie[];
  detailMovie: Movie;
  filteredMovies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
  detailMovie: null,
  filteredMovies: []
};


export function movieReducer(state = initialState, action: MoviesStateTypes.MoviesActionType) {

  switch (action.type) {

    case MoviesActionEnum.REFRESH_DATA_STORE:
      console.log('REFRESH REDUCER');
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };

    case MoviesActionEnum.STORE_ACTIVE_MOVIE:
      console.log('STORE ACTIVE REDUCER');
      const activeMovie = state.movies.find(movie => movie.id === action.payload);
      return {
        ...state,
        detailMovie: {...activeMovie}
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
      console.log('asdsd')
      return {
        ...state,
        filteredMovies: []
      };

    default:
      console.log('DEFAULT REDUCER');
      return state;
  }

}
