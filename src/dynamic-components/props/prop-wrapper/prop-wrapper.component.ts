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
import { propsConfig } from './props';

@Component({
  selector: 'app-prop-wrapper',
  templateUrl: './prop-wrapper.component.html',
  styleUrls: ['./prop-wrapper.component.scss']
})
export class PropWrapperComponent extends DynamicWrapper implements OnInit, AfterViewInit, AfterContentInit, OnChanges {
  @Input() propType = 0;

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
    if (changes['propType']) {
      const itemConfig = propsConfig[this.propType];
      super.insertItem(itemConfig, this.propType);
    }

  }


}
