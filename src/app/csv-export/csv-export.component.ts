import { Component, OnInit } from '@angular/core';
import {BookshelfService} from "../service/bookshelf.service";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.scss']
})
export class CsvExportComponent implements OnInit {
  data;
  constructor(private bookshelfService: BookshelfService,
              private bookService: BookService) { }

  ngOnInit() {
    this.bookshelfService.getBooksIdsFromMyBookshelf(0).subscribe(
      data => {
        this.data = data.items;
        console.log(data);
      }
    );
  }
  bookshelf() {
    this.bookshelfService.getMyAllBookshelves().subscribe(
      data => {
        this.data = data;
        console.log(data);
      }
    );
  }
}
