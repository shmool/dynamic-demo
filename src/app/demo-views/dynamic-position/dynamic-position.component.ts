import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-position',
  templateUrl: './dynamic-position.component.html',
  styleUrls: ['./dynamic-position.component.scss']
})
export class DynamicPositionComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponent(e: any) {
    console.log(e)
    const cmp = (await import('../../dynamic-components/demo3-lazy/demo3-lazy.component')).Demo3LazyComponent;
    this.addedComponent = this.placeholder.createComponent(cmp);
    // console.log(this.addedComponent.location.nativeElement)
    this.addedComponent.location.nativeElement.style.position = 'absolute';
    this.addedComponent.location.nativeElement.style.left = e.clientX + 'px';
    this.addedComponent.location.nativeElement.style.top = e.clientY + 'px';
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
