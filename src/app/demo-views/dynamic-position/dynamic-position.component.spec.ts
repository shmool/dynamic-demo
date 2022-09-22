import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPositionComponent } from './dynamic-position.component';

describe('DynamicPositionComponent', () => {
  let component: DynamicPositionComponent;
  let fixture: ComponentFixture<DynamicPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
