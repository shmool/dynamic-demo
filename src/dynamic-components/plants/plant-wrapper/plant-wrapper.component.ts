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
import { plantsConfig } from './plants';

@Component({
  selector: 'app-dino-wrapper',
  templateUrl: './plant-wrapper.component.html',
  styleUrls: ['./plant-wrapper.component.scss']
})
export class PlantWrapperComponent extends DynamicWrapper implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
  @Input() plantType = 0;

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
    if (changes['plantType']) {
      const itemConfig = plantsConfig[this.plantType];
      super.insertItem(itemConfig, this.plantType);
    }

  }


}
