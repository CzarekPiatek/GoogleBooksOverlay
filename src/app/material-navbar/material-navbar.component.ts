import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-material-navbar',
  templateUrl: './material-navbar.component.html',
  styleUrls: ['./material-navbar.component.scss']
})
export class MaterialNavbarComponent implements OnInit {
  destinations = [
    {label: 'Inbox', icon: 'inbox', activated: true, route: 'material-card-list'},
    {label: 'Twoje książki', icon: 'star', activated: false, route: 'material-card-list'},
    {label: 'Sent Mail', icon: 'send', activated: false, route: 'material-card-list'},
    {label: 'Wyloguj', icon: 'drafts', activated: false, route: 'home-page'}
  ];
  tabs = [
    { label: 'Flights', icon: 'airplanemode_active' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Favorites', icon: 'favorite' }
  ];

  links = [
    { label: 'Inbox', icon: 'inbox' },
    { label: 'Star', icon: 'star' },
    { label: 'Sent Mail', icon: 'send' },
    { label: 'Drafts', icon: 'drafts' }
  ];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }

  public logOut() {
    this.userService.signOut();
  }
}
