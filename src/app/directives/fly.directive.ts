import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFly]',
  standalone: true
})
export class FlyDirective implements OnDestroy {
  @Input()
  set appFly(v: boolean) {
    if (v) {
      this.fly();
    } else {
      clearInterval(this.intervalId);
    }
  }

  x = 0;
  y = 0;
  w = 0;
  h = 0;
  direction = { x: 1, y: 1 };

  intervalId: number | undefined;

  constructor(private el: ElementRef) {
  }

  fly() {
    this.el.nativeElement.classList.add('fly');

    const [height, width] = [this.el.nativeElement.height, this.el.nativeElement.width];
    this.w = Math.max(window.innerWidth || 0) - width * 4 - 30;
    this.h = Math.max(window.innerHeight || 0) - height * 4 - 30;

    this.el.nativeElement.style.position = 'absolute';
    this.y = this.el.nativeElement.offsetTop;
    this.x = this.el.nativeElement.offsetLeft;
    this.intervalId = setInterval(() => this.step(), 20);
  }

  step() {
    if(this.x > this.w) this.direction.x = -1;
    if(this.y > this.h) this.direction.y = -1;
    if(this.x < 0) this.direction.x = 1;
    if(this.y < 0) this.direction.y = 1;

    this.x += this.direction.x * 5;
    this.y += this.direction.y * 5;
    this.el.nativeElement.style.top = this.y + 'px';
    this.el.nativeElement.style.left = this.x + 'px';
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}
