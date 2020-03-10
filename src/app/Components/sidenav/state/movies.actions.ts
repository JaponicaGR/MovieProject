import {Action} from '@ngrx/store';
import {Movie} from '../../../Models/MovieModel';
import {HttpErrorResponse} from '@angular/common/http';

export enum MoviesActionEnum {
  FETCH_DATA_API = '[Movies] Fetch Data From Api',
  REFRESH_DATA_STORE = '[Movies] Refresh Data to Store',
  FETCH_DATA_ERROR = '[Movies] Error Occured',
  STORE_ACTIVE_MOVIE = '[Movies] Set Active Movie Details',
  FILTER_MOVIES = '[Movies] Filter Movies on Keypress'
}



export class FetchDataAPIClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.FETCH_DATA_API;

  constructor(public payload?: any) {}

}


export class RefreshDataStoreClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.REFRESH_DATA_STORE;

  constructor(public payload: Movie[]) {}

}

export class FetchErrorAPIClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.FETCH_DATA_ERROR;

  constructor(public payload: HttpErrorResponse) {}

}


export class StoreActiveMovieClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.STORE_ACTIVE_MOVIE;

  constructor(public payload: number) {}

}

export class FilterMoviesClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.FILTER_MOVIES;

  constructor(public payload: string) {}

}


export type MoviesActionType =
  FetchDataAPIClass |
  RefreshDataStoreClass |
  StoreActiveMovieClass |
  FilterMoviesClass |
  FetchErrorAPIClass;
