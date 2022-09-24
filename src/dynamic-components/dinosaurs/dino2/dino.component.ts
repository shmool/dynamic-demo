import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.scss']
})
export class DinoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
