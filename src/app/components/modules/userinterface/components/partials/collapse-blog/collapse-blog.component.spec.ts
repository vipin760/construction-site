import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseBlogComponent } from './collapse-blog.component';

describe('CollapseBlogComponent', () => {
  let component: CollapseBlogComponent;
  let fixture: ComponentFixture<CollapseBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CollapseBlogComponent]
    });
    fixture = TestBed.createComponent(CollapseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
