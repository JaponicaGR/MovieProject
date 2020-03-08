import {Action} from '@ngrx/store';
import {Movie} from '../../../Models/MovieModel';

export enum MoviesActionEnum {
  REFRESH_DATA = '[Movies] Refresh Data'
}

export class RefreshDataClass implements Action {

  readonly type: MoviesActionEnum = MoviesActionEnum.REFRESH_DATA;

  constructor(public payload: Movie[]) {}

}

export type MoviesActionType = RefreshDataClass;
