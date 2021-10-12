import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() title: string;
  @Input() submitLabel: string;
  @Input() bookToEdit: Book | undefined;

  @Output() formSubmitted: EventEmitter<Book>;

  bookForm: FormGroup;
  book: Book;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Book>();
  }

  ngOnInit(): void {
    this.initForm();

    if(this.bookToEdit) {
      this.book = this.bookToEdit;
    } else {
      this.book = new Book('', '', 'Libre');
    };
  }

  onSubmitBookForm() {
    if(this.bookForm.valid) {
      this.formSubmitted.emit(this.book);
    }
  }

  private initForm() {
    this.bookForm = this.fb.group({
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(14)
      ]),
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      status: new FormControl(null)
    });
  }

}
