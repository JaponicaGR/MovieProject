import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailsComponent} from './movie-details.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import {MoviesState} from '../sidenav/state/movies.reducers';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../AppState/app.reducers';
import {Store} from '@ngrx/store';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {Observable, of} from 'rxjs';

describe('TestComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let mockStore: MockStore<AppState>;


  const fakeState: MoviesState = {
    movies: [],
    detailMovie: null,
    filteredMovies: [],
    httpError: null,
    httpStart: false,
    httpEnd: false,
    wrongId: false,
    pageIndex: 1
  };

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
      declarations: [ MovieDetailsComponent ],
      providers: [
        provideMockStore({initialState: fakeState}),
        {provide: APP_BASE_HREF, useValue: '/'},
      ]
    })
      .compileComponents();

    mockStore = TestBed.get(Store);

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Movie will not be initialized', () => {
    expect(component.activeMovie).toBeFalsy();
  });






});
