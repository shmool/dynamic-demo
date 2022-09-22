import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3LazyComponent } from './demo3-lazy.component';

describe('Demo3LazyComponent', () => {
  let component: Demo3LazyComponent;
  let fixture: ComponentFixture<Demo3LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Demo3LazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo3LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
