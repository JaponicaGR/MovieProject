import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {

  private readonly _API_KEY: string = '9198fa6d9a9713bc6b03ee9582525917';
  private readonly _DB_URL: string = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) { }



}
