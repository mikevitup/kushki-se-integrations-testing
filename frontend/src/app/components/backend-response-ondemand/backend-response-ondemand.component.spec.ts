import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendResponseOndemandComponent } from './backend-response-ondemand.component';

describe('BackendResponseOndemandComponent', () => {
  let component: BackendResponseOndemandComponent;
  let fixture: ComponentFixture<BackendResponseOndemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendResponseOndemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendResponseOndemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
