import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { Dino1Component } from '../../dynamic-components/dino1/dino1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('dynamicPlaceholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {


  /*  const viewContainerRef = this.dyn.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<DynamicComponent>();
    componentRef.instance.data = adItem.data;*/

  }

  createComponent() {
    const dc = this.placeholder.createComponent(Dino1Component);
    // const dc = this.placeholder.createComponent(DynamicComponent);
    setTimeout(()=> dc.instance.name = 'Shmuela', 1000);
    setTimeout(()=> dc.setInput('name', 'Haggai'), 2000);
  }

}
