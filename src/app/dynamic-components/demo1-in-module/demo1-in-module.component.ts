import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo1-in-module',
  templateUrl: './demo1-in-module.component.html',
  styleUrls: ['./demo1-in-module.component.scss']
})
export class Demo1InModuleComponent implements OnChanges {
  @Input() title = 'Hello!';

  constructor() {
  }

  ngOnChanges(): void {
    console.log('%cDynamic Component Changed!', 'background: #222; color: #bada55')
  }

}
