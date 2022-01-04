import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSTransferComponent } from './kushki-jstransfer.component';

describe('KushkiJSTransferComponent', () => {
  let component: KushkiJSTransferComponent;
  let fixture: ComponentFixture<KushkiJSTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
