import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';

function randomInt(count: number, min = 0) {
  return Math.floor(Math.random() * count + min);
}

const itemTypesConfig: {[index: string]:any}= {
  dino: {
    component: async () => (await import('../../dynamic-components/dinosaurs/dino-wrapper/dino-wrapper.component')).DinoWrapperComponent,
    number: 6,
    typeInput: 'dinoType'
  }, plant: {
    component: async () => (await import('../../dynamic-components/plants/plant-wrapper/plant-wrapper.component')).PlantWrapperComponent,
    number: 3,
    typeInput: 'plantType'
  }, prop: {
    component: async () => (await import('../../dynamic-components/props/prop-wrapper/prop-wrapper.component')).PropWrapperComponent,
    number: 3,
    typeInput: 'propType'
  }
};

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
  itemType = 'dino';
  // add = true;

  addedComponent: ComponentRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponent(e: any) {
    // if (!this.add) return;
    const cmpConfig = itemTypesConfig[this.itemType];
    const cmp = await cmpConfig.component();
    const addedComponent = this.placeholder.createComponent(cmp);
    addedComponent.setInput(cmpConfig.typeInput, randomInt(cmpConfig.number));
    addedComponent.setInput('clickEvent', e);
    addedComponent.location.nativeElement.style.position = 'absolute';
    addedComponent.location.nativeElement.style.left = e.clientX - 100 + 'px';
    addedComponent.location.nativeElement.style.top = e.clientY - 100 + 'px';

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
      .subscribe((pointerEvent) => {
        addedComponent.destroy();
        this.selectedComponent = undefined;
      });

    addedComponent.onDestroy(() => {
      const cmpIndex = this.addedComponents.findIndex((cmp) => cmp === addedComponent);
      this.addedComponents = [...this.addedComponents.slice(0, cmpIndex), ...this.addedComponents.slice(cmpIndex + 1, this.addedComponents.length)];
      clickSubscription.unsubscribe();
    });

  }

  changeDino() {
    this.selectedComponent?.setInput('dinoType', randomInt(6));
  }

  moveDino(axis: string, direction: number) {
    const location = +this.selectedComponent!.location.nativeElement.style[axis].replace('px', '');
    this.selectedComponent!.location.nativeElement.style[axis] = location + (10 * direction) + 'px';
  }

  scaleDino(direction: number) {
    let newScale = this.selectedComponent!.instance.scale;
    do {
      newScale = newScale + (0.2 * direction)
    } while (newScale < 0.01 && newScale > -0.01);
    this.selectedComponent!.setInput('scale', newScale);
  }

  flipDino() {
    this.selectedComponent!.setInput('flip', -this.selectedComponent!.instance.flip);
  }

  save() {
    // console.log(this.addedComponents)
    const dinoData = this.addedComponents.map((cmp => {
      return {
        dinoType: cmp.instance.dinoType,
        plantType: cmp.instance.plantType,
        propType: cmp.instance.propType,
        flip: cmp.instance.flip,
        scale: cmp.instance.scale,
        left: cmp.location.nativeElement.style.left,
        top: cmp.location.nativeElement.style.top
      }
    }));
    console.log(dinoData);
  }

  load(dinoData: any) {
    dinoData.forEach()

  }
}
