import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutServiceComponent } from './logout-service.component';

describe('LogoutServiceComponent', () => {
  let component: LogoutServiceComponent;
  let fixture: ComponentFixture<LogoutServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
