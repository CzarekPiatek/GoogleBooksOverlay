import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {GoogleApiService, GoogleAuthService} from 'ng-gapi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
    this.gapiService.onLoad().subscribe();
  }
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }

}
