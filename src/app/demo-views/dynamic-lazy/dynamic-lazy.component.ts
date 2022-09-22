import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dynamic-lazy',
  templateUrl: './dynamic-lazy.component.html',
  styleUrls: ['./dynamic-lazy.component.scss']
})
export class DynamicLazyComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponent() {
    const cmp = (await import('../../dynamic-components/demo3-lazy/demo3-lazy.component')).Demo3LazyComponent;
    this.addedComponent = this.placeholder.createComponent(cmp);
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
