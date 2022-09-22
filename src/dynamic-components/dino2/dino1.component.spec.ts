import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dino1Component } from './dino1.component';

describe('Dino1Component', () => {
  let component: Dino1Component;
  let fixture: ComponentFixture<Dino1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Dino1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dino1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
