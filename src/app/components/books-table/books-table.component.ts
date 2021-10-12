import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  @Input() books: Array<Book>

  constructor() { }

  ngOnInit(): void {
  }

}
