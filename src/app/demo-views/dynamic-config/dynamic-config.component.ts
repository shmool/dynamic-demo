import {
  Component,
  ComponentRef, ContentChild,
  createComponent, ElementRef,
  EventEmitter,
  OnInit, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { fromEvent } from 'rxjs';

interface DynamicComponent {
  close: EventEmitter<any>;
}

const dynamicConfig = [
  {
    componentName: 'dino',
    component: async () => (await import('src/dynamic-components/dino2/dino1.component')).Dino1Component,
    inputs: {
      name: 'ShmuelaSaurus'
    }
  },
  {
    componentName: 'note',
    component: async () => (await import('../../dynamic-components/demo4-lazy/demo4-lazy.component')).Demo4LazyComponent
  }
];

@Component({
  selector: 'app-dynamic-config',
  templateUrl: './dynamic-config.component.html',
  styleUrls: ['./dynamic-config.component.scss']
})
export class DynamicConfigComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef })
  placeholder!: ViewContainerRef;
  @ContentChild('projection', {read: ContentChild} ) projection!: any;
  addedComponents: ComponentRef<any>[] = [];
  selectedComponent: ComponentRef<any> | undefined;
  _componentsArray: string[] = [];

  set components(cmpStr: string) {
    this._componentsArray = cmpStr.split(',').map(str => str.trim());
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  async addComponents() {
    this._componentsArray.forEach(async (componentName: string) => {
      const componentConfig = dynamicConfig.find(config => config.componentName === componentName);
      if (!componentConfig) {
        console.warn(`No such component: ${componentName}`);
        return;
      }
      await this.addComponent(componentConfig);
    });
  }

  async addComponent(componentConfig: any) {
    // const cmp = (await import('../../dynamic-components/demo4-lazy/demo4-lazy.component')).Demo4LazyComponent;
    const footer = document.createElement('p');
    footer.innerText = 'footer';

    const addedComponent = this.placeholder.createComponent<DynamicComponent>(await componentConfig.component(), {
      projectableNodes: [[this.projection]]
    });
    if (!!componentConfig.inputs) {
      Object.entries(componentConfig.inputs).forEach(([key, val]) => {
        addedComponent.setInput(key, val);
      });
    }
    this.addedComponents.push(addedComponent);

    addedComponent.instance.close.subscribe(() => addedComponent.destroy());

    const clickSubscription = fromEvent(addedComponent.location.nativeElement, 'click')
      .subscribe((pointerEvent) => {
        this.addedComponents.forEach(cmp => cmp.location.nativeElement.classList.remove('selected'));
        addedComponent.location.nativeElement.classList.add('selected');
        this.selectedComponent = addedComponent;
      });

    addedComponent.instance.close.subscribe(console.log)
    const destroy = fromEvent(addedComponent.location.nativeElement, 'close')
      .subscribe((pointerEvent) => addedComponent.destroy());

    addedComponent.onDestroy(() => {
      const cmpIndex = this.addedComponents.findIndex((cmp) => cmp === addedComponent);
      this.addedComponents = [...this.addedComponents.slice(0, cmpIndex), ...this.addedComponents.slice(cmpIndex + 1, this.addedComponents.length)];
      clickSubscription.unsubscribe();
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
