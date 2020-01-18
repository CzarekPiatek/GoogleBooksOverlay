import { Component } from '@angular/core';
import {UserService} from "./service/user.service";
import {ActivatedRoute} from "@angular/router";
import {GoogleApiService, GoogleAuthService} from "ng-gapi";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GoogleBooksOverlay';
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
    this.gapiService.onLoad().subscribe();

  }
}
