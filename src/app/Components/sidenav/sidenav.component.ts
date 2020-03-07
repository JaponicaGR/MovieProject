import { Component, OnInit } from '@angular/core';
import {PopularMoviesService} from '../../Services/popular-movies.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private pmApi: PopularMoviesService) { }

  ngOnInit(): void {

    this.pmApi.getPopularMovies().subscribe(data => {
      console.log(data);
    });

  }

}
