import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStandaloneComponent } from './dynamic-standalone.component';

describe('DynamicStandaloneComponent', () => {
  let component: DynamicStandaloneComponent;
  let fixture: ComponentFixture<DynamicStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
