import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public showNavBar = 0;
  constructor() { }

  ngOnInit() {
  }

  showNav() {
    if (this.showNavBar === 0) {
      this.showNavBar = 1; } else if (this.showNavBar === 1) {
        this.showNavBar = 0; }

  }


}
