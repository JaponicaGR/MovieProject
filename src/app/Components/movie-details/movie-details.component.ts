import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../../Models/MovieModel';
import {Store} from '@ngrx/store';
import {AppState} from '../../AppState/app.reducers';
import {StoreActiveMovieClass} from '../sidenav/state/movies.actions';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public activeMovie: Movie = null;
  public rate: number;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {

      // We get the id of the movie when user navigate here from the list
      // This is not working when user is already navigate here and reload the page
      // because when dispatch this action the state does't have the data yet from the API


      // This check is for urls like /movie/sd2323s, no valid id
      if (+param.get('id')) {

        this.id = +param.get('id');
        this.store.dispatch(new StoreActiveMovieClass(this.id));

      } else {

        this.router.navigate(['/404']);

      }

    });


    this.store.select('moviesReducer').subscribe(state => {

      /********************************************************
       *  3 CASES TO HANDLE
       *
       *  1) User normally navigates from sidebar
       *  2) User reload page when is on a valid (movie/:id) url
       *  3) User manually gives a 'valid like' url with wrong id (ex. /movie/73489)
       *     but this id dosn't match any movie
       *
       ********************************************************/



      //-- CASE 1 ----------
      if (this.id && !!state.detailMovie && state.httpEnd && !state.wrongId) {
        this.activeMovie = state.detailMovie;
        this.rate = Math.round(state.detailMovie.voteAverage) / 2;
      }



      //-- CASE 2 ----------
      if (this.id && state.httpEnd && !state.wrongId && !state.detailMovie) {
        this.store.dispatch(new StoreActiveMovieClass(this.id));
      }



      //-- CASE 3 ----------
      if (this.id && state.httpEnd && state.wrongId) {
        this.router.navigate(['/404']);
      }



    });

  }

}
