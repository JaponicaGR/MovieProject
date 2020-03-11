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

  public movies: Movie[] = [];
  public httpEnd = false;
  private pageIndex = 1;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    // The 'setTimout' function is only for presentation
    // in order to delay dispatch action for http request and give us time
    // to see the initial spinner on the sidebar.

    setTimeout(_ => {
      this.store.dispatch(new FetchDataAPIClass(this.pageIndex));
    }, 500);



    this.store.select('moviesReducer').subscribe(state => {

      this.movies = (state.filteredMovies.length) ? state.filteredMovies : state.movies;
      this.httpEnd = state.httpEnd;
      this.pageIndex = state.pageIndex;

    });


  }


  onGetMoreMovies(): void {
    this.store.dispatch(new FetchDataAPIClass(this.pageIndex));
  }

}
