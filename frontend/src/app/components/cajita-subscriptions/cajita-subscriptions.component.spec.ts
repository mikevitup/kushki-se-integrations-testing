import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajitaSubscriptionsComponent } from './cajita-subscriptions.component';

describe('CajitaSubscriptionsComponent', () => {
  let component: CajitaSubscriptionsComponent;
  let fixture: ComponentFixture<CajitaSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajitaSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajitaSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
