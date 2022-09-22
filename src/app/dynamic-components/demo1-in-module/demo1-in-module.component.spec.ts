import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1InModuleComponent } from './demo1-in-module.component';

describe('Demo1InModuleComponent', () => {
  let component: Demo1InModuleComponent;
  let fixture: ComponentFixture<Demo1InModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo1InModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo1InModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
