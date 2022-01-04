import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajitaComponent } from './kajita.component';

describe('KajitaComponent', () => {
  let component: KajitaComponent;
  let fixture: ComponentFixture<KajitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KajitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KajitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
