import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.scss']
})
export class FilterMoviesComponent implements OnInit {

  public filterCriteria: FormControl;
  public placeholder: string = 'Filter keywords (ex. the go, Indep)';

  constructor() {
    this.filterCriteria = new FormControl('');
  }

  ngOnInit(): void {
  }

}
