import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../AppState/app.reducers';
import {FilterMoviesClass} from '../sidenav/state/movies.actions';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.scss']
})
export class FilterMoviesComponent implements OnInit {

  public placeholder = 'Filter keywords (ex. the go, Indep)';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  onKeyPress($event: KeyboardEvent) {
    const textValue = ($event.target as HTMLInputElement).value;
    this.store.dispatch(new FilterMoviesClass(textValue));
  }

}
