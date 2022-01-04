import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSTokenChargeComponent } from './kushki-jstoken-charge.component';

describe('KushkiJSTokenChargeComponent', () => {
  let component: KushkiJSTokenChargeComponent;
  let fixture: ComponentFixture<KushkiJSTokenChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSTokenChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSTokenChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
