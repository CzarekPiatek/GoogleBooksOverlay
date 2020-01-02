import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {MaterialCardListComponent} from './material-card-list/material-card-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SingleBookDetailsComponent} from './single-book-details/single-book-details.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'material-card-list', component: MaterialCardListComponent, canActivate: [AuthGuard]},
  { path: 'home-page', component: HomePageComponent},
  { path: 'single-book-details/:bookId', component: SingleBookDetailsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
