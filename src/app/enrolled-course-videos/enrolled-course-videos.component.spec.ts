import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledCourseVideosComponent } from './enrolled-course-videos.component';

describe('EnrolledCourseVideosComponent', () => {
  let component: EnrolledCourseVideosComponent;
  let fixture: ComponentFixture<EnrolledCourseVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolledCourseVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledCourseVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
