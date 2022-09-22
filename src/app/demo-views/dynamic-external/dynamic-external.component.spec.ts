import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicExternalComponent } from './dynamic-external.component';

describe('DynamicExternalComponent', () => {
  let component: DynamicExternalComponent;
  let fixture: ComponentFixture<DynamicExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicExternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
