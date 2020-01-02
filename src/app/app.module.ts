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
  MdcTopAppBarModule, MdcTypographyModule
} from '@angular-mdc/web';
import {UserService} from './service/user.service';
import {MaterialNavbarComponent} from './material-navbar/material-navbar.component';
import {MaterialCardListComponent} from './material-card-list/material-card-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {HttpClientModule} from '@angular/common/http';

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
    MdcTypographyModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
