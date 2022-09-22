import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-villaggio-del-pescatore',
  templateUrl: './villaggio-del-pescatore.component.html',
  styleUrls: ['./villaggio-del-pescatore.component.scss']
})
export class VillaggioDelPescatoreComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  addedComponents: ComponentRef<any>[] = [];
  selectedComponent: ComponentRef<any> | undefined;
  add = true;

  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponent(e: any) {
    if (!this.add) return;
    const cmp = (await import('../../dynamic-components/dino2/dino1.component')).Dino1Component;
    const addedComponent = this.placeholder.createComponent(cmp);
    addedComponent.location.nativeElement.style.position = 'absolute';
    addedComponent.location.nativeElement.style.left = e.clientX + 'px';
    addedComponent.location.nativeElement.style.top = e.clientY + 'px';

    this.addedComponents.push(addedComponent);

    const clickSubscription = fromEvent(addedComponent.location.nativeElement, 'click')
      .subscribe((pointerEvent: any) => {
        pointerEvent.stopPropagation();
        this.addedComponents.forEach(cmp => cmp.location.nativeElement.classList.remove('selected'));

        if (addedComponent === this.selectedComponent) {
          addedComponent.location.nativeElement.classList.remove('selected');
          this.selectedComponent = undefined;
        } else {
          addedComponent.location.nativeElement.classList.add('selected');
          this.selectedComponent = addedComponent;
        }
      });

    const destroy = fromEvent(addedComponent.location.nativeElement, 'dblclick')
      .subscribe((pointerEvent) => addedComponent.destroy());

    addedComponent.onDestroy(() => {
      const cmpIndex = this.addedComponents.findIndex((cmp) => cmp === addedComponent);
      this.addedComponents = [...this.addedComponents.slice(0, cmpIndex), ...this.addedComponents.slice(cmpIndex + 1, this.addedComponents.length)];
      clickSubscription.unsubscribe();
    });

  }
}
