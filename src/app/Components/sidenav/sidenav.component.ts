import { Component, OnInit } from '@angular/core';
import {PopularMoviesService} from '../../Services/popular-movies.service';
import {Store} from '@ngrx/store';
import {Movie} from '../../Models/MovieModel';
import {from, Observable, of} from 'rxjs';
import {FetchDataAPIClass} from './state/movies.actions';
import {AppState} from '../../AppState/app.reducers';
import {MoviesState} from './state/movies.reducers';
import {flatMap, map, mergeMap, pluck, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public movies: Observable<MoviesState>;

  constructor(
    private pmApi: PopularMoviesService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.movies = this.store.select('moviesReducer');

    this.store.dispatch(new FetchDataAPIClass());

    // this.pmApi.getPopularMovies()
    //
    //   .pipe(
    //
    //     pluck('results'),
    //
    //     map((rawMoviesArray: any[]) => rawMoviesArray.map(movie => new Movie(movie.id, movie.title)))
    //
    //   ).subscribe(data => {
    //
    //     this.store.dispatch(new FetchDataAPIClass());
    //
    //   });

  }

}
