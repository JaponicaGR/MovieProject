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


    this.store.select('moviesReducer').subscribe(data => {


      // Here we check :
      // a) If the the id from url exist
      // b) If the detail movie is empty
      // c) If the data(movies) are in the state
      // d) If Movies never searched beacuse data werenot ready
      // If TRUE then it means we are in the case that use reload the page while he was
      // already navigate to detail movie component

      if (this.id && (data.detailMovie === null) && (data.movies.length > 0) && !data.wrongId) {
        this.store.dispatch(new StoreActiveMovieClass(this.id));
      }



      // This belongs to the strange case user try to fill the url manually with
      // an Id that doesnt exist in any movie from the list

      if (this.id && (data.detailMovie === null) && (data.movies.length > 0) && data.wrongId) {
        this.router.navigate(['/404']);
      }


      // If TRUE we are in the case user normally navigate through the link on the sidebar
      // The action despatched on the ngOnInit

      if (this.id && data.detailMovie) {
        this.activeMovie = data.detailMovie;
        this.rate = Math.round(data.detailMovie.voteAverage) / 2;
      }

    });

  }

}
