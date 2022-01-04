import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendResponseUniqueComponent } from './backend-response-unique.component';

describe('BackendResponseUniqueComponent', () => {
  let component: BackendResponseUniqueComponent;
  let fixture: ComponentFixture<BackendResponseUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendResponseUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendResponseUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
