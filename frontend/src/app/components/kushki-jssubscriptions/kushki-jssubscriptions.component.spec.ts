import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSSubscriptionsComponent } from './kushki-jssubscriptions.component';

describe('KushkiJSSubscriptionsComponent', () => {
  let component: KushkiJSSubscriptionsComponent;
  let fixture: ComponentFixture<KushkiJSSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
