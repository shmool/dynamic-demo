import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentRef, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { dinosConfig} from './dinos';

@Component({
  selector: 'app-dino-wrapper',
  templateUrl: './dino-wrapper.component.html',
  styleUrls: ['./dino-wrapper.component.scss']
})
export class DinoWrapperComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;
  @Input() dinoType = 0;
  @Input() clickEvent: any;
  @Input() name = 'Connectosaurus';
  @Input() scale = 1;
  @Input() flip = 1;
  @Output() close = new EventEmitter();
  dinoComponentInstance: ComponentRef<any> | undefined;

  get transform() {
    return `scale(${this.scale}) scaleX(${this.flip})`;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  async ngAfterContentInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dinoType']) {
      this.insertDino(this.dinoType);
    }
    if (changes['plantType']) {
      this.insertPlant();
    }
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
    this.dinoComponentInstance?.destroy();
    this.vc?.clear();
    const dinoComponent = await dinoConfig.component();
    this.dinoComponentInstance = this.vc.createComponent(dinoComponent);
  }

  async insertPlant() {


}

}
