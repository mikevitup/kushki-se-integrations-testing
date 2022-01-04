import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSOnDemandCAComponent } from './kushki-json-demand-ca.component';

describe('KushkiJSOnDemandCAComponent', () => {
  let component: KushkiJSOnDemandCAComponent;
  let fixture: ComponentFixture<KushkiJSOnDemandCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSOnDemandCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSOnDemandCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
