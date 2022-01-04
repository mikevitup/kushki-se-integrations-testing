import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSCardComponent } from './kushki-jscard.component';

describe('KushkiJSCardComponent', () => {
  let component: KushkiJSCardComponent;
  let fixture: ComponentFixture<KushkiJSCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
