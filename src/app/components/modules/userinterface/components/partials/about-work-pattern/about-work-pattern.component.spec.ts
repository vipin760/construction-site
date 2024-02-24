import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkPatternComponent } from './about-work-pattern.component';

describe('AboutWorkPatternComponent', () => {
  let component: AboutWorkPatternComponent;
  let fixture: ComponentFixture<AboutWorkPatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutWorkPatternComponent]
    });
    fixture = TestBed.createComponent(AboutWorkPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
