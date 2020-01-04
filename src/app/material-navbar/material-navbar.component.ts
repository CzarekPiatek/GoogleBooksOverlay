import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {BookshelfService} from "../service/bookshelf.service";

@Component({
  selector: 'app-material-navbar',
  templateUrl: './material-navbar.component.html',
  styleUrls: ['./material-navbar.component.scss']
})
export class MaterialNavbarComponent implements OnInit {
  destinations = [
    {label: 'Szukaj książek', icon: 'search', activated: true, route: 'material-card-list'},
    {label: 'Twoje książki', icon: 'star', activated: false, route: 'material-card-list'},
    {label: 'Sent Mail', icon: 'send', activated: false, route: 'material-card-list'},
    {label: 'Twój profil', icon: 'account_box', activated: false, route: 'material-card-list'},
    {label: 'Wyloguj', icon: 'drafts', activated: false, route: 'home-page'}
  ];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public getUserInfo() {
    this.userService.getCurrentUser();
  }
  public signIn() {
    this.userService.signIn();
    if (this.isLoggedIn()) {
      this.router.navigate(['home-page']);
    }
  }
  public logOut() {
    this.userService.signOut();
    this.router.navigate(['home-page']);
  }
}
