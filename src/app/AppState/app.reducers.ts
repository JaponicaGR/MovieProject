import * as MoviesStateTypes from '../Components/sidenav/state/movies.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  moviesReducer: MoviesStateTypes.MoviesState;
}

export const appReducer: ActionReducerMap<AppState> = {
  moviesReducer: MoviesStateTypes.movieReducer
};
