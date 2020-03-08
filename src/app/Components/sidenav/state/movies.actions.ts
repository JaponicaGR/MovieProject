import {Action} from '@ngrx/store';
import {Movie} from '../../../Models/MovieModel';

export enum MoviesActionEnum {
  FETCH_DATA_API = '[Movies] Fetch Data From Api',
  REFRESH_DATA_STORE = '[Movies] Refresh Data to Store'
}


export class FetchDataAPIClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.FETCH_DATA_API;

  constructor(public payload?: any) {}

}


export class RefreshDataStoreClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.REFRESH_DATA_STORE;

  constructor(public payload: Movie[]) {}

}


export type MoviesActionType = FetchDataAPIClass | RefreshDataStoreClass;
