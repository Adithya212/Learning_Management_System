import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgressTrackingComponent } from './admin-progress-tracking.component';

describe('AdminProgressTrackingComponent', () => {
  let component: AdminProgressTrackingComponent;
  let fixture: ComponentFixture<AdminProgressTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProgressTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProgressTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
