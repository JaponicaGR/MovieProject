import * as MoviesStateTypes from './movies.actions';
import {Movie} from '../../../Models/MovieModel';
import {MoviesActionEnum} from './movies.actions';


export interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: []
};


export function movieReducer(state = initialState, action: MoviesStateTypes.MoviesActionType) {

  switch (action.type) {
    case MoviesActionEnum.REFRESH_DATA_STORE:
      return {
        ...initialState,
        movies: [...state.movies, ...action.payload]};
    case MoviesActionEnum.FETCH_DATA_API:
      return state;
    default:
      return state;
  }
}
