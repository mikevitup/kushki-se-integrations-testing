import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajitaUniqueComponent } from './cajita-unique.component';

describe('CajitaUniqueComponent', () => {
  let component: CajitaUniqueComponent;
  let fixture: ComponentFixture<CajitaUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajitaUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajitaUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
