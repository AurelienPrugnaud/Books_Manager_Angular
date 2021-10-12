import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/books/book.service';
import { Router } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-new-book-view',
  templateUrl: './new-book-view.component.html',
  styleUrls: ['./new-book-view.component.css']
})
export class NewBookViewComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  askToAddBook(bookToAdd: Book) {
    this.bookService
      .addBook(bookToAdd)
      .then(() => {
        this.router.navigateByUrl('home');
      });
  }

}
