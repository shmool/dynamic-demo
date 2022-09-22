import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaggioDelPescatoreComponent } from './villaggio-del-pescatore.component';

describe('VillaggioDelPescatoreComponent', () => {
  let component: VillaggioDelPescatoreComponent;
  let fixture: ComponentFixture<VillaggioDelPescatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaggioDelPescatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaggioDelPescatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
