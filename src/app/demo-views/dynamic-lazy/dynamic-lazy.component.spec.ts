import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLazyComponent } from './dynamic-lazy.component';

describe('DynamicLazyComponent', () => {
  let component: DynamicLazyComponent;
  let fixture: ComponentFixture<DynamicLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
