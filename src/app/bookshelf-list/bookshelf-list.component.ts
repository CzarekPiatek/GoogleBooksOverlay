import { Component, OnInit } from '@angular/core';
import {BookshelfService} from "../service/bookshelf.service";
import {MdcList} from "@angular-mdc/web";

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.scss']
})
export class BookshelfListComponent implements OnInit {
  myBookshelf;
  constructor(private bookshelfService: BookshelfService) { }
  ngOnInit() {
    this.bookshelfService.getMyAllBookshelves().subscribe(
      data => {
          this.myBookshelf = data;
          console.log(data);
        }
      );
  }
}
