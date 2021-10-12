import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsFormComponent } from './errors-form.component';

describe('ErrorsFormComponent', () => {
  let component: ErrorsFormComponent;
  let fixture: ComponentFixture<ErrorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
