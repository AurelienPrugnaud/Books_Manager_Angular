import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/books/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})
export class EditBookViewComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.bookService
      .getBookById(+id)
      .then((bookFound: Book) => this.book = bookFound);
  }

  askToEditBook(editedBook: Book) {
    this.bookService
      .editBook(editedBook)
      .then(() => {
        this.router.navigate(['/books', editedBook.id])
      });

  }

}
