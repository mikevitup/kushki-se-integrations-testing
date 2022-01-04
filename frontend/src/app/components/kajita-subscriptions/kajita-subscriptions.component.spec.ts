import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajitaSubscriptionsComponent } from './kajita-subscriptions.component';

describe('KajitaSubscriptionsComponent', () => {
  let component: KajitaSubscriptionsComponent;
  let fixture: ComponentFixture<KajitaSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KajitaSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KajitaSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
