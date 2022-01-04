import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushkiJSComponent } from './kushki-js.component';

describe('KushkiJSComponent', () => {
  let component: KushkiJSComponent;
  let fixture: ComponentFixture<KushkiJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushkiJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KushkiJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
