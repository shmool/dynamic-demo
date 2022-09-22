import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-starter',
  templateUrl: './angular-starter.component.html',
  styleUrls: ['./angular-starter.component.scss']
})
export class AngularStarterComponent implements OnInit {
  title = 'dynamic-demo';
  ngLogoFly = false;
  rocketFly = false;

  constructor() { }

  ngOnInit(): void {
  }

}
