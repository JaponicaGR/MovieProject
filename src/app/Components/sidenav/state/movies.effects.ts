import {Actions, Effect, ofType} from '@ngrx/effects';
import * as MoviesStateTypes from './movies.actions';
import {catchError, map, pluck, switchMap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {Movie, RawMovie} from '../../../Models/MovieModel';
import {Injectable} from '@angular/core';
import {FetchDataAPIClass, FetchErrorAPIClass} from './movies.actions';
import {API} from '../../../Constants/GlobalConsts';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class MoviesEffects {
  @Effect()
  fetchData = this.actions$.pipe(
    ofType(MoviesStateTypes.MoviesActionEnum.FETCH_DATA_API),
    switchMap((some: FetchDataAPIClass) => {

      const queryParams = new HttpParams()
        .set('sort_by', 'popularity.desc')
        .set('page', some.payload)
        .set('api_key', API.KEY);


      return this.http
        .get(API.PATH, {params: queryParams})
        .pipe(
          pluck('results'),
          map((rawMoviesArray: RawMovie[]) => {
            return rawMoviesArray.map((movie: RawMovie) => {
              return new Movie(
                movie.id,
                movie.title,
                movie.vote_average,
                movie.vote_count,
                API.IMAGE_PATH + movie.poster_path,
                movie.overview || 'No summary provided',
                movie.release_date
              );
            });
          }),
          map(data => new MoviesStateTypes.RefreshDataStoreClass(data)),
          catchError((error: HttpErrorResponse) => {
            return of(new FetchErrorAPIClass(error));
          })
        );

    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}

}
