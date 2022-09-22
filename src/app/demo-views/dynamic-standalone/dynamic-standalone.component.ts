import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Demo2StandaloneComponent } from '../../dynamic-components/demo2-standalone/demo2-standalone.component';

@Component({
  selector: 'app-dynamic-standalone',
  templateUrl: './dynamic-standalone.component.html',
  styleUrls: ['./dynamic-standalone.component.scss']
})
export class DynamicStandaloneComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  addComponent() {
    this.addedComponent = this.placeholder.createComponent(Demo2StandaloneComponent);
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
