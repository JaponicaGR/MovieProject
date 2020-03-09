import {Actions, Effect, ofType} from '@ngrx/effects';
import * as MoviesStateTypes from './movies.actions';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {Movie, RawMovie} from '../../../Models/MovieModel';
import {Injectable} from '@angular/core';
import {FetchErrorAPIClass} from './movies.actions';

@Injectable()
export class MoviesEffects {
  @Effect()
  fetchData = this.actions$.pipe(
    ofType(MoviesStateTypes.MoviesActionEnum.FETCH_DATA_API),
    switchMap(_ => {

      return this.http
        .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=100&api_key=9198fa6d9a9713bc6b03ee9582525917')
        .pipe(
          pluck('results'),
          map((rawMoviesArray: RawMovie[]) => {
            return rawMoviesArray.map((movie: RawMovie) => {
              return new Movie(
                movie.id,
                movie.title,
                movie.vote_average,
                movie.vote_count,
                movie.poster_path,
                movie.overview,
                movie.release_date
              );
            });
          }),
          map(data => new MoviesStateTypes.RefreshDataStoreClass(data)),
          catchError((error: HttpErrorResponse) => {
            return of(new FetchErrorAPIClass('Something Went Wrong'));
          })
        );

    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}

}
