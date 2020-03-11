import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {LayoutComponent} from './Components/layout/layout.component';
import {HeaderComponent} from './Components/header/header.component';
import {SidenavComponent} from './Components/sidenav/sidenav.component';
import {WorkspaceComponent} from './Components/workspace/workspace.component';
import {MovieDetailsComponent} from './Components/movie-details/movie-details.component';
import {FilterMoviesComponent} from './Components/filter-movies/filter-movies.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './AppState/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {MoviesEffects} from './Components/sidenav/state/movies.effects';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {StarRatingModule} from 'angular-star-rating';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ErrorModalComponent } from './Components/error-modal/error-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'movie/:id', component: MovieDetailsComponent
  },
  {
    path: '404', component: PageNotFoundComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
];



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    WorkspaceComponent,
    MovieDetailsComponent,
    FilterMoviesComponent,
    HomeComponent,
    ErrorModalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MoviesEffects]),
    RouterModule.forRoot(appRoutes),
    StarRatingModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [LayoutComponent]
})

export class AppModule { }
