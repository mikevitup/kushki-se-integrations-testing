import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajitaComponent } from './cajita.component';

describe('CajitaComponent', () => {
  let component: CajitaComponent;
  let fixture: ComponentFixture<CajitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
