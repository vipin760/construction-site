import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContainerCardComponent } from './about-container-card.component';

describe('AboutContainerCardComponent', () => {
  let component: AboutContainerCardComponent;
  let fixture: ComponentFixture<AboutContainerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutContainerCardComponent]
    });
    fixture = TestBed.createComponent(AboutContainerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
