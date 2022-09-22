import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInModuleComponent } from './dynamic-in-module.component';

describe('DynamicInModuleComponent', () => {
  let component: DynamicInModuleComponent;
  let fixture: ComponentFixture<DynamicInModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicInModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicInModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
