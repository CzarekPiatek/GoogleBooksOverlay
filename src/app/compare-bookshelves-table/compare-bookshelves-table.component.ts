import {Component, Input, OnChanges} from '@angular/core';
import {BookshelfService} from "../service/bookshelf.service";
import {IBookshelf} from "../model/Bookshelf/ibookshelf";

@Component({
  selector: 'app-compare-bookshelves-table',
  templateUrl: './compare-bookshelves-table.component.html',
  styleUrls: ['./compare-bookshelves-table.component.scss']
})
export class CompareBookshelvesTableComponent implements OnChanges {
  @Input() bookshelfId;
  bookshelfInfo: IBookshelf;
  booksInBookshelf;
  constructor(private bookshelfService: BookshelfService) { }

  ngOnChanges() {
    this.bookshelfService.getMyBookshelfWithBookshelfId(this.bookshelfId).subscribe(
      data => {
        this.bookshelfInfo = data;
        console.log(data);
      }
    );
  }

}
