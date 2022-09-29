import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  template: ``
})
export abstract class DynamicWrapper implements OnChanges, OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;
  @Input() clickEvent: any;
  @Input() scale = 1;
  @Output() close = new EventEmitter();
  @Input() flip = 1;
  internalComponentInstance: ComponentRef<any> | undefined;

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

  async insertItem(itemConfig: any, itemType: string | number) {
    if (!itemConfig) {
      console.warn('Item not found in config:', itemType);
      return;
    }
    this.internalComponentInstance?.destroy();
    this.vc?.clear();
    const itemComponent = await itemConfig.component();
    this.internalComponentInstance = this.vc.createComponent(itemComponent);
  }
}
