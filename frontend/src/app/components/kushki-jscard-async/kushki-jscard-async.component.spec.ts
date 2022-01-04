import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSCardAsyncComponent } from './kushki-jscard-async.component';

describe('KushkiJSCardAsyncComponent', () => {
  let component: KushkiJSCardAsyncComponent;
  let fixture: ComponentFixture<KushkiJSCardAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSCardAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSCardAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
