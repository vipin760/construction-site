import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipecardComponent } from './swipecard.component';

describe('SwipecardComponent', () => {
  let component: SwipecardComponent;
  let fixture: ComponentFixture<SwipecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SwipecardComponent]
    });
    fixture = TestBed.createComponent(SwipecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
