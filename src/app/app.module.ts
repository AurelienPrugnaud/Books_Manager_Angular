import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/books/book.service';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BooksTableLineComponent } from './components/books-table-line/books-table-line.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { SingleBookViewComponent } from './views/single-book-view/single-book-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBookViewComponent } from './views/new-book-view/new-book-view.component';
import { EditBookViewComponent } from './views/edit-book-view/edit-book-view.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksViewComponent,
    BooksTableComponent,
    BooksTableLineComponent,
    AuthViewComponent,
    HeaderComponent,
    SingleBookViewComponent,
    ErrorViewComponent,
    NewBookViewComponent,
    EditBookViewComponent,
    BookFormComponent,
    ErrorsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
