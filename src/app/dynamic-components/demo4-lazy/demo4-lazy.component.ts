import { Component, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo4-lazy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo4-lazy.component.html',
  styleUrls: ['./demo4-lazy.component.scss']
})
export class Demo4LazyComponent implements OnChanges {
  @Input() title = 'Hello!!!';
  @Output() close = new EventEmitter();

  @HostListener('dblclick') onDblClick() {
    console.log('dbl clicked');
  }

  constructor() {
  }

  ngOnChanges(): void {
    console.log('%cDynamic Component Changed!!!', 'background: #222; color: #bada55')
  }


}
