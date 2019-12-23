import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BooksResultComponent } from './books-result/books-result.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {GoogleApiModule, NgGapiClientConfig} from 'ng-gapi';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '295138372837-gshg3a6836h85gp0p44hd5d8natbbhlo.apps.googleusercontent.com',
  discoveryDocs: ['https://books.googleapis.com/$discovery/rest?version=v1']
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    GoogleApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
