import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {SearchForBooksComponent} from './search-for-books/search-for-books.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SingleBookDetailsComponent} from './single-book-details/single-book-details.component';
import {SearchForBooksSingleCardComponent} from './search-for-books-single-card/search-for-books-single-card.component';
import {BookshelfListComponent} from './bookshelf-list/bookshelf-list.component';
import {BookshelfCardListComponent} from "./bookshelf-card-list/bookshelf-card-list.component";
import {AdvancedSearchComponent} from "./advanced-search/advanced-search.component";
import {CompareBookshelvesComponent} from "./compare-bookshelves/compare-bookshelves.component";


const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'search-for-books', component: SearchForBooksComponent, canActivate: [AuthGuard]},
  { path: 'search-for-books-single-card', component: SearchForBooksSingleCardComponent, canActivate: [AuthGuard]},
  { path: 'home-page', component: HomePageComponent},
  { path: 'bookshelf-list', component: BookshelfListComponent, canActivate: [AuthGuard]},
  { path: 'bookshelf-card-list/:bookshelfId', component: BookshelfCardListComponent, canActivate: [AuthGuard]},
  { path: 'single-book-details/:bookId', component: SingleBookDetailsComponent, canActivate: [AuthGuard]},
  { path: 'advanced-search', component: AdvancedSearchComponent, canActivate: [AuthGuard]},
  { path: 'compare-bookshelves', component: CompareBookshelvesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
