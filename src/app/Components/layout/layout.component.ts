import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../AppState/app.reducers';
import {MatDialog} from '@angular/material/dialog';
import {ErrorModalComponent} from '../error-modal/error-modal.component';
import {FetchDataAPIClass} from '../sidenav/state/movies.actions';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  httpError: HttpErrorResponse = null;
  isCollapsed = false;


  constructor(private router: Router, private store: Store<AppState>, public dialog: MatDialog) { }

  ngOnInit(): void {

    // this.router.navigate(['/home']);

    this.store.select('moviesReducer').subscribe(state => {

      this.httpError = state.httpError ?? null;

      if (this.httpError) {

        const dialogRef = this.dialog.open(ErrorModalComponent, {
          width: '600px',
          minWidth: '320px',
          data: {error: this.httpError}
        });



        dialogRef.afterClosed().subscribe((retry: boolean) => {
          if (retry) {
            this.store.dispatch(new FetchDataAPIClass());
          }
        });

      }

    });

  }

  toggleClass() {
    this.isCollapsed = !this.isCollapsed;
  }

}
