import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Subject => On peut observer ses changements mais il n'y a pas de cache

  // BehaviorSubject => Subject + le cache de la dernière valeur envoyée

  // ReplaySubject => behavior subject + on peut gérer des caches n-1

  books: BehaviorSubject<Array<Book>>;

  constructor() {

    const booksToPush = [
      new Book('Titre 1', 'Auteur 1', 'Libre'),
      new Book('Titre 2', 'Auteur 2', 'Libre'),
      new Book('Titre 3', 'Auteur 3', 'Pris'),
      new Book('Titre 4', 'Auteur 4', 'Libre'),
      new Book('Titre 5', 'Auteur 5', 'Pris'),
      new Book('Titre 6', 'Auteur 6', 'Libre')
    ];

    this.books = new BehaviorSubject<Array<Book>>(booksToPush);

  }

  getBookById(bookId: number): Promise<Book> {
    return new Promise<Book>(
      (res, rej) => {
        const books = this.books.getValue();

        for(let book of books) {
          if(book.id === bookId) {
            res(book);
            break;
          }
        }
      }
    );
  }

  addBook(bookToAdd: Book): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const books = this.books.getValue();
          books.push(bookToAdd);
          this.books.next(books);
          res();
        }, 300);
      }
    );
  }

  editBook(editedBook: Book): Promise<void>{
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const books = this.books.getValue();

          for(let [index, book] of books.entries()) {
            if (book.id === editedBook.id) {
              books[index] = editedBook;
              this.books.next(books);
              res();
              break;
            }
          }
        }, 300);
      }
    )

  }

  switchAllStatus(newStatus: string) {
    const booksToEdit = this.books.getValue();
    booksToEdit.forEach(book => book.status = newStatus);
    this.books.next(booksToEdit);
  }

  switchStatus(bookId: number, newStatus: string) {
    const booksToEdit = this.books.getValue();
    for(let book of booksToEdit) {
      if(book.id === bookId){
        book.status = newStatus;
        this.books.next(booksToEdit);
        break;
      }
    }
  }

  deleteBook(bookIdToDelete: number) {
    const books = this.books.getValue();
    for (let [index, book] of books.entries()) {
      if (book.id === bookIdToDelete) {
        books.splice(index,1);
        this.books.next(books);
        break;
      }
    }
  }



}
