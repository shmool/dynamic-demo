import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyDirective } from '../directives/fly.directive';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule, FlyDirective],
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnChanges {
  @Input() name: string | undefined;

  constructor() { }

  ngOnChanges(): void {
    console.log('changed')
  }

}
