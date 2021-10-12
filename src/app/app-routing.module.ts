import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { SingleBookViewComponent } from './views/single-book-view/single-book-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { NewBookViewComponent } from './views/new-book-view/new-book-view.component';
import { EditBookViewComponent } from './views/edit-book-view/edit-book-view.component';

const routes: Routes = [
  { path : '', canActivate: [AuthGuard], component: BooksViewComponent },
  { path : 'home', canActivate:[AuthGuard], component: BooksViewComponent },
  { path : 'books/new', canActivate: [AuthGuard], component: NewBookViewComponent},
  { path : 'books/:id', canActivate:[AuthGuard], component: SingleBookViewComponent },
  { path: 'books/:id/edit', canActivate: [AuthGuard], component: EditBookViewComponent},
  { path : 'auth', component: AuthViewComponent },
  { path : 'not-found', component: ErrorViewComponent },
  { path : '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
