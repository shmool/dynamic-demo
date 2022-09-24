import { EventEmitter, HostListener, Input, Output } from '@angular/core';

export interface DynamicComponent {
  title: string;
  close: EventEmitter<any>;

  onDblClick: Function;
}
