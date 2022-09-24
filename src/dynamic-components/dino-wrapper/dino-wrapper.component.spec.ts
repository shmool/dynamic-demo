import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoWrapperComponent } from './dino-wrapper.component';

describe('DinoWrapperComponent', () => {
  let component: DinoWrapperComponent;
  let fixture: ComponentFixture<DinoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinoWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
