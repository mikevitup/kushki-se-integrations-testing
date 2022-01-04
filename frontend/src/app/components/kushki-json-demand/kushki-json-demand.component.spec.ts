import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSOnDemandComponent } from './kushki-json-demand.component';

describe('KushkiJSOnDemandComponent', () => {
  let component: KushkiJSOnDemandComponent;
  let fixture: ComponentFixture<KushkiJSOnDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSOnDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSOnDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
