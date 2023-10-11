import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTopArrowComponent } from './to-top-arrow.component';

describe('ToTopArrowComponent', () => {
  let component: ToTopArrowComponent;
  let fixture: ComponentFixture<ToTopArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToTopArrowComponent]
    });
    fixture = TestBed.createComponent(ToTopArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
