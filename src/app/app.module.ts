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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'movie/:id', component: MovieDetailsComponent
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    WorkspaceComponent,
    MovieDetailsComponent,
    FilterMoviesComponent,
    HomeComponent
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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
