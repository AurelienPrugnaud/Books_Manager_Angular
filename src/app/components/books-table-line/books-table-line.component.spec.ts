import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTableLineComponent } from './books-table-line.component';

describe('BooksTableLineComponent', () => {
  let component: BooksTableLineComponent;
  let fixture: ComponentFixture<BooksTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
