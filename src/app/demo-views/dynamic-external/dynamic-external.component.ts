import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-external',
  templateUrl: './dynamic-external.component.html',
  styleUrls: ['./dynamic-external.component.scss']
})
export class DynamicExternalComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponent(path: string) {
    // const file = await fetch(path);
    // console.log(file)
    const cmp = (await import(path)).Demo3LazyComponent;
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
