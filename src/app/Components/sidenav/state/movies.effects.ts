import {Actions, Effect, ofType} from '@ngrx/effects';
import * as MoviesStateTypes from './movies.actions';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Movie} from '../../../Models/MovieModel';
import {Injectable} from '@angular/core';

@Injectable()
export class MoviesEffects {
  @Effect()
  fetchData = this.actions$.pipe(
    ofType(MoviesStateTypes.MoviesActionEnum.FETCH_DATA_API),
    switchMap(_ => {

      return this.http
        .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9198fa6d9a9713bc6b03ee9582525917')
        .pipe(
          pluck('results'),
          map((rawMoviesArray: any[]) => rawMoviesArray.map(movie => new Movie(movie.id, movie.title))),
          map(data => {
            return new MoviesStateTypes.RefreshDataStoreClass(data);
          }),
          catchError()
        );

    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}

}
