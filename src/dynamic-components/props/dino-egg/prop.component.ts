import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
