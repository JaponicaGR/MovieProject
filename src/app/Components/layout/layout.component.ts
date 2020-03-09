import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isCollapsed: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.navigate(['/home']);

  }

  toggleClass() {
    console.log('asdsdsdss');
    this.isCollapsed = !this.isCollapsed;
  }

}
