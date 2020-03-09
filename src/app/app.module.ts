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
import {movieReducer} from './Components/sidenav/state/movies.reducers';
import {appReducer} from './AppState/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {MoviesEffects} from './Components/sidenav/state/movies.effects';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'movie/:id', component: MovieDetailsComponent },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    WorkspaceComponent,
    MovieDetailsComponent,
    FilterMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MoviesEffects]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
