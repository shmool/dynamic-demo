import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-dino1',
  standalone: true,
  imports: [CommonModule, MatCommonModule, MatCardModule],
  templateUrl: './dino1.component.html',
  styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css',
    './dino1.component.scss',
  ]
})
export class Dino1Component implements OnInit {
  @Input() name = 'Connectosaurus';
  @Input() scale = 1;
  @Output() close = new EventEmitter();

  get transform() {
    return `scale(${this.scale})`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
