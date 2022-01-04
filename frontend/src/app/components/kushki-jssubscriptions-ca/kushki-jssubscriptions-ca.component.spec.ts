import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSSubscriptionsCAComponent } from './kushki-jssubscriptions-ca.component';

describe('KushkiJSSubscriptionsCAComponent', () => {
  let component: KushkiJSSubscriptionsCAComponent;
  let fixture: ComponentFixture<KushkiJSSubscriptionsCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSSubscriptionsCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSSubscriptionsCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
