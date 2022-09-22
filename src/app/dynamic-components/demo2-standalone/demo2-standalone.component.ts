import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo2-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo2-standalone.component.html',
  styleUrls: ['./demo2-standalone.component.scss']
})
export class Demo2StandaloneComponent implements OnChanges {
  @Input() title = 'Hello!';

  constructor() {
  }

  ngOnChanges(): void {
    console.log('%cDynamic Component Changed!!', 'background: #222; color: #bada55')
  }

}
