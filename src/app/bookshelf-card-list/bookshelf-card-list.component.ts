import {Component, Input, OnInit} from '@angular/core';
import {BookshelfService} from '../service/bookshelf.service';
import {IBookshelf} from '../model/Bookshelf/ibookshelf';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-bookshelf-card-list',
  templateUrl: './bookshelf-card-list.component.html',
  styleUrls: ['./bookshelf-card-list.component.scss']
})
export class BookshelfCardListComponent implements OnInit {
  @Input() src: string;
  myBookshelf: IBookshelf;
  bookshelfId: number;
  constructor(private bookshelfService: BookshelfService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookshelfId = +params.get('bookshelfId');
    });
    this.getBooksFromMyBookshelf(this.bookshelfId);
  }
  getBooksFromMyBookshelf(bookshelfId: number) {
    this.bookshelfService.getBooksFromMyBookshelf(bookshelfId).subscribe(
      data => {
        this.myBookshelf = data;
      });
  }
  updateUrl($event) {
    this.src = 'https://material-components-web.appspot.com/images/1-1.jpg';
  }
  deleteBookFromBookshelf(bookId: string) {
    this.bookshelfService.removeBookFromBookshelf(this.bookshelfId, bookId);
    this.router.navigate(['/bookshelf-card-list', this.bookshelfId]);
  }
  navigateToBook(bookId: string) {
    this.router.navigate(['/single-book-details', bookId]);
  }
}
