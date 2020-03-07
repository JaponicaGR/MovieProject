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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
