import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/books/book.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit, OnDestroy {

  books: Array<Book>;
  booksSub: Subscription;

  constructor(private bookService: BookService) {
  }

  onClickSwitchAllStatus(newStatus: string) {
    this.bookService.switchAllStatus(newStatus);

  }

  ngOnInit(): void {
    this.booksSub = this.bookService
      .books
      .subscribe(
        (books: Array<Book>) => {this.books = books});
  }

  ngOnDestroy() {
    this.booksSub.unsubscribe();
  }

}
