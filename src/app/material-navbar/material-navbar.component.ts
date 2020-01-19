import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-material-navbar',
  templateUrl: './material-navbar.component.html',
  styleUrls: ['./material-navbar.component.scss']
})
export class MaterialNavbarComponent implements OnInit {
  destinations = [
    {label: 'Strona Główna', icon: 'home', activated: true, route: 'home-page'},
    {label: 'Szukaj książek', icon: 'search', activated: false, route: 'search-for-books'},
    {label: 'Porównaj półki', icon: 'folder', activated: false, route: 'compare-bookshelves'},
    {label: 'Twoje książki', icon: 'star', activated: false, route: 'bookshelf-list'},
    {label: 'Importuj/Eksportuj CSV', icon: 'import_export', activated: false, route: 'csv'},
  ];
  username;
  email;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    if (this.userService.isUserSignedIn()) {
      this.username = sessionStorage.getItem('username');
      this.email = sessionStorage.getItem('email');
      return true;
    } else {
      return false;
    }
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
