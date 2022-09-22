import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Demo1InModuleComponent } from '../../dynamic-components/demo1-in-module/demo1-in-module.component';

@Component({
  selector: 'app-dynamic-in-module',
  templateUrl: './dynamic-in-module.component.html',
  styleUrls: ['./dynamic-in-module.component.scss']
})
export class DynamicInModuleComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  addComponent() {
    this.addedComponent = this.placeholder.createComponent(Demo1InModuleComponent);
  }

  changeTitle(title: string) {
    if (!this.addedComponent) return;
    this.addedComponent.instance.title = title;
  }

  setInputTitle(title: string) {
    if (!this.addedComponent) return;
    this.addedComponent.setInput('title', title);
  }
}
