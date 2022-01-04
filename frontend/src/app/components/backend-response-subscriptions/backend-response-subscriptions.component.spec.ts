import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendResponseSubscriptionsComponent } from './backend-response-subscriptions.component';

describe('BackendResponseSubscriptionsComponent', () => {
  let component: BackendResponseSubscriptionsComponent;
  let fixture: ComponentFixture<BackendResponseSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendResponseSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendResponseSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
