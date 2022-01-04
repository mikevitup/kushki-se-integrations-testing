import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajitaUniqueComponent } from './kajita-unique.component';

describe('KajitaUniqueComponent', () => {
  let component: KajitaUniqueComponent;
  let fixture: ComponentFixture<KajitaUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KajitaUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KajitaUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
