import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSCashComponent } from './kushki-jscash.component';

describe('KushkiJSCashComponent', () => {
  let component: KushkiJSCashComponent;
  let fixture: ComponentFixture<KushkiJSCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
