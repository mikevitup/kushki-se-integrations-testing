import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendResponseComponent } from './backend-response.component';

describe('BackendResponseComponent', () => {
  let component: BackendResponseComponent;
  let fixture: ComponentFixture<BackendResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
