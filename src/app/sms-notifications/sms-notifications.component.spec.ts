import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsNotificationsComponent } from './sms-notifications.component';

describe('SmsNotificationsComponent', () => {
  let component: SmsNotificationsComponent;
  let fixture: ComponentFixture<SmsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
