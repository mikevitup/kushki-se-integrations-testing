import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSPSEComponent } from './kushki-jspse.component';

describe('KushkiJSPSEComponent', () => {
  let component: KushkiJSPSEComponent;
  let fixture: ComponentFixture<KushkiJSPSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSPSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSPSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
