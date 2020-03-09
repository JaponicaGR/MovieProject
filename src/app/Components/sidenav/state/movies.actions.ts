import {Action} from '@ngrx/store';
import {Movie} from '../../../Models/MovieModel';

export enum MoviesActionEnum {
  FETCH_DATA_API = '[Movies] Fetch Data From Api',
  REFRESH_DATA_STORE = '[Movies] Refresh Data to Store',
  FETCH_DATA_ERROR = '[Movies] Error Occured',
  STORE_ACTIVE_MOVIE = '[Movies] Set Active Movie Details'
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

  constructor(public payload: string) {}

}


export class StoreActiveMovieClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.STORE_ACTIVE_MOVIE;

  constructor(public payload: number) {}

}


export type MoviesActionType = FetchDataAPIClass | RefreshDataStoreClass | StoreActiveMovieClass;
