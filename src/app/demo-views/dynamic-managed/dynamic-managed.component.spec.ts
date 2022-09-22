import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicManagedComponent } from './dynamic-managed.component';

describe('DynamicManagedComponent', () => {
  let component: DynamicManagedComponent;
  let fixture: ComponentFixture<DynamicManagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicManagedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicManagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
