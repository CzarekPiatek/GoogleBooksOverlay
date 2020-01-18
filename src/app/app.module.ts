import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from 'ng-gapi';
import {
  MdcButtonModule, MdcCardModule,
  MdcDrawerModule, MdcFabModule,
  MdcFormFieldModule, MdcIconButtonModule, MdcIconModule,
  MdcListModule,
  MdcMenuModule, MdcTabBarModule,
  MdcTopAppBarModule, MdcTypographyModule, MdcElevationModule,
  MDCDataTableModule, MdcTextFieldModule, MdcDialogModule, MdcSnackbarModule,
} from '@angular-mdc/web';
import {UserService} from './service/user.service';
import {MaterialNavbarComponent} from './material-navbar/material-navbar.component';
import {MaterialCardListComponent} from './material-card-list/material-card-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { SingleBookDetailsComponent } from './single-book-details/single-book-details.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { BookshelfListComponent } from './bookshelf-list/bookshelf-list.component';
import { BookshelfCardListComponent } from './bookshelf-card-list/bookshelf-card-list.component';
import { AddBookToBookshelfButtonComponent } from './add-book-to-bookshelf-button/add-book-to-bookshelf-button.component';
import { MaterialDialogSimpleComponent } from './material-dialog-simple/material-dialog-simple.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import { BasicSearchComponent } from './basic-search/basic-search.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";




const gapiClientConfig: NgGapiClientConfig = {
  client_id: '295138372837-gshg3a6836h85gp0p44hd5d8natbbhlo.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/books/v1/rest'],
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'openid',
    'https://www.googleapis.com/auth/books'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    MaterialNavbarComponent,
    MaterialCardListComponent,
    HomePageComponent,
    SearchBarComponent,
    SingleBookDetailsComponent,
    MaterialCardComponent,
    BookshelfListComponent,
    BookshelfCardListComponent,
    AddBookToBookshelfButtonComponent,
    MaterialDialogSimpleComponent,
    AdvancedSearchComponent,
    BasicSearchComponent,
  ],
  entryComponents: [
    MaterialDialogSimpleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcFabModule,
    MdcMenuModule,
    MdcIconModule,
    MdcCardModule,
    MdcDrawerModule,
    MdcTabBarModule,
    MdcListModule,
    MdcButtonModule,
    MdcFormFieldModule,
    MdcTopAppBarModule,
    MdcIconButtonModule,
    HttpClientModule,
    MdcSnackbarModule,
    MdcTypographyModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
    MdcElevationModule,
    MDCDataTableModule,
    MdcTextFieldModule,
    MdcDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
