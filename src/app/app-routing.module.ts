import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {MaterialCardListComponent} from './material-card-list/material-card-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SingleBookDetailsComponent} from './single-book-details/single-book-details.component';
import {MaterialCardComponent} from './material-card/material-card.component';
import {BookshelfListComponent} from './bookshelf-list/bookshelf-list.component';
import {BookshelfCardListComponent} from "./bookshelf-card-list/bookshelf-card-list.component";
import {AdvancedSearchComponent} from "./advanced-search/advanced-search.component";


const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'material-card-list', component: MaterialCardListComponent, canActivate: [AuthGuard]},
  { path: 'material-card', component: MaterialCardComponent, canActivate: [AuthGuard]},
  { path: 'home-page', component: HomePageComponent},
  { path: 'bookshelf-list', component: BookshelfListComponent, canActivate: [AuthGuard]},
  { path: 'bookshelf-card-list/:bookshelfId', component: BookshelfCardListComponent, canActivate: [AuthGuard]},
  { path: 'single-book-details/:bookId', component: SingleBookDetailsComponent, canActivate: [AuthGuard]},
  { path: 'advanced-search', component: AdvancedSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
