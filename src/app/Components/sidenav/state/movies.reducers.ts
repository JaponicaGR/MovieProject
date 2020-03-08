import * as MoviesStateTypes from './movies.actions';
import {Movie} from '../../../Models/MovieModel';
import {MoviesActionEnum} from './movies.actions';


export interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [
    new Movie(1, 'The Godfather'),
    new Movie(2, 'Butterfly Effect')
  ]
};


export function movieReducer(state = initialState, action: MoviesStateTypes.RefreshDataClass) {

  switch (action.type) {
    case MoviesActionEnum.REFRESH_DATA:
      return {
        ...initialState,
        movies: [...state.movies, ...action.payload]};
    default:
      return state;
  }
}
