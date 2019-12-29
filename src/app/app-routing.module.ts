import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {BooksResultComponent} from './books-result/books-result.component';
import {CardBooksResultComponent} from './card-books-result/card-books-result.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'books-result', component: BooksResultComponent, canActivate: [AuthGuard]},
  { path: 'card-books-result', component: CardBooksResultComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
