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

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe(param => {

      this.store.dispatch(new StoreActiveMovieClass(+param.get('id')));

      this.store.select('moviesReducer').subscribe(data => {

        this.activeMovie = data.detailMovie;

      });



    });



  }

}
