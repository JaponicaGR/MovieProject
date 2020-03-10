import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {

      this.id = +param.get('id');
      this.store.dispatch(new StoreActiveMovieClass(this.id));

    });

    this.store.select('moviesReducer').subscribe(data => {


      if (this.id && !data.detailMovie && (data.movies.length > 0)) {
        this.store.dispatch(new StoreActiveMovieClass(this.id));
        console.log('fromurl');
      }

      if (this.id && data.detailMovie) {
        this.activeMovie = data.detailMovie;
        this.rate = Math.round(data.detailMovie.voteAverage) / 2;
      }



        // if (this.id && !data.detailMovie) {
      //   console.log('asds')
      //   this.store.dispatch(new StoreActiveMovieClass(this.id));
      // } else {
      //   this.activeMovie = data.detailMovie;
      //   this.rate = Math.round(data.detailMovie.voteAverage) / 2;
      // }



    });




  }

}
