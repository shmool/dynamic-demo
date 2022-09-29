import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { DynamicWrapper } from '../../dynamic-wrapper.component';
import { itemsConfig } from './dinos';

@Component({
  selector: 'app-dino-wrapper',
  templateUrl: './dino-wrapper.component.html',
  styleUrls: ['./dino-wrapper.component.scss']
})
export class DinoWrapperComponent extends DynamicWrapper implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
  @Input() dinoType = 0;
  @Input() name = 'Connectosaurus';

  constructor(el: ElementRef) {
    super(el);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
  }

  async ngAfterContentInit() {
  }

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes['dinoType']) {
      const itemConfig = itemsConfig[this.dinoType];
      super.insertItem(itemConfig, this.dinoType);
    }

  }


}
