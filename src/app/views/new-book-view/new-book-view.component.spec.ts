import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookViewComponent } from './new-book-view.component';

describe('NewBookViewComponent', () => {
  let component: NewBookViewComponent;
  let fixture: ComponentFixture<NewBookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
