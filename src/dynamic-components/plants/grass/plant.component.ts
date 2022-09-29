import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
