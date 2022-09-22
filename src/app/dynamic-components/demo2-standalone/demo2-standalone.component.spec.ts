import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2StandaloneComponent } from './demo2-standalone.component';

describe('Demo2StandaloneComponent', () => {
  let component: Demo2StandaloneComponent;
  let fixture: ComponentFixture<Demo2StandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Demo2StandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo2StandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
