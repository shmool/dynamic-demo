import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dynamic-managed',
  templateUrl: './dynamic-managed.component.html',
  styleUrls: ['./dynamic-managed.component.scss']
})
export class DynamicManagedComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponents: ComponentRef<any>[] = [];
  selectedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponent() {
    const cmp = (await import('../../dynamic-components/demo3-lazy/demo3-lazy.component')).Demo3LazyComponent;

    const addedComponent = this.placeholder.createComponent(cmp);
    this.addedComponents.push(addedComponent);

    const closeSub = addedComponent.instance.close
      .subscribe(() => addedComponent.destroy());

    const clickSubscription = fromEvent(addedComponent.location.nativeElement, 'click')
      .subscribe((pointerEvent) => {
        this.addedComponents.forEach(cmp => cmp.location.nativeElement.classList.remove('selected'));
        addedComponent.location.nativeElement.classList.add('selected');
        this.selectedComponent = addedComponent;
      });

    // this doesn't work!
    const destroy = fromEvent(addedComponent.location.nativeElement, 'close')
      .subscribe((pointerEvent) => {
        console.log('pointerEvent');
        addedComponent.destroy();
      });

    addedComponent.onDestroy(() => {
      const cmpIndex = this.addedComponents.findIndex((cmp) => cmp === addedComponent);
      this.addedComponents = [...this.addedComponents.slice(0, cmpIndex), ...this.addedComponents.slice(cmpIndex+1, this.addedComponents.length)];
      clickSubscription.unsubscribe();
      closeSub.unsubscribe();
    });
  }

  changeTitle(title: string) {
    if (!this.selectedComponent) return;
    this.selectedComponent.instance.title = title;
  }

  setInputTitle(title: string) {
    if (!this.selectedComponent) return;
    this.selectedComponent.setInput('title', title);
  }
}
