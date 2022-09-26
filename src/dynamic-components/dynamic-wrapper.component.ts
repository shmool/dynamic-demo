import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild, ViewContainerRef
} from '@angular/core';
import { dinosConfig } from './dino-wrapper/dinos';

@Component({
  template: ``
})
export abstract class DynamicWrapper implements OnChanges, OnInit{
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;

  @Input() clickEvent: any;
  @Input() scale = 1;
  @Output() close = new EventEmitter();
  internalComponentInstance: ComponentRef<any> | undefined;
  flip = 1;
  get transform() {
    return `scale(${this.scale}) scaleX(${this.flip})`;
  }

  protected constructor(private el: ElementRef) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['scale'] || changes['flip']) {
      this.el.nativeElement.style['transform'] = this.transform;
      console.log(this.el.nativeElement.style['transform'])
    }
  }

  async insertDino(dinoType: number) {
    const dinoConfig = dinosConfig[dinoType];
    if (!dinoConfig) {
      console.warn('Dino not found in config:', dinoType);
      return;
    }
    this.internalComponentInstance?.destroy();
    this.vc?.clear();
    const dinoComponent = await dinoConfig.component();
    this.internalComponentInstance = this.vc.createComponent(dinoComponent);
  }
}
