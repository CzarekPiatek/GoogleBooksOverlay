import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {
  constructor(private userService: UserService) {}

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

}
