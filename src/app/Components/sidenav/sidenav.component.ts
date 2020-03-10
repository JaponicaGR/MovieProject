import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FetchDataAPIClass} from './state/movies.actions';
import {AppState} from '../../AppState/app.reducers';
import {Movie} from '../../Models/MovieModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // public movies$: Observable<MoviesState>;
  public movies: Movie[] = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.store.dispatch(new FetchDataAPIClass());

    this.store.select('moviesReducer').subscribe(state => {

      this.movies = (state.filteredMovies.length) ? state.filteredMovies : state.movies;

    });


  }

}
