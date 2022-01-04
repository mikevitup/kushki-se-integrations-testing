import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajitaCardAsyncComponent } from './cajita-card-async.component';

describe('CajitaCardAsyncComponent', () => {
  let component: CajitaCardAsyncComponent;
  let fixture: ComponentFixture<CajitaCardAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajitaCardAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajitaCardAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
