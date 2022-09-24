import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { Demo4LazyComponent } from '../../dynamic-components/demo4-lazy/demo4-lazy.component';
// import Demo4LazyComponent from '../../dynamic-components/demo4-lazy/demo4-lazy.component';
// import '../../../../../dynamic-lazy-loading/demo3';
// import {Demo3LazyComponent} from '../../dynamic-components/demo3-lazy/demo3-lazy.component';

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
    // const filepath = '../../dynamic-components/demo4-lazy/demo4-lazy.component';
    // const filepath = 'Users/shmuela/Angular/projects/dynamic-lazy-loading/demo3'
    const imp = await import('../../dynamic-components/demo4-lazy/demo4-lazy.component');
    // const imp = await import(filepath);
    const cmp = imp['Demo4LazyComponent'];
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
