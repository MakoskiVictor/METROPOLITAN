import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessSectionComponent } from './fitness-section.component';

describe('FitnessSectionComponent', () => {
  let component: FitnessSectionComponent;
  let fixture: ComponentFixture<FitnessSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessSectionComponent]
    });
    fixture = TestBed.createComponent(FitnessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
