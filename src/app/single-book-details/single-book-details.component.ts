import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../service/book.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.scss']
})
export class SingleBookDetailsComponent implements OnInit {
  bookId;
  book;
  authors;
  state$: Observable<object>;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('bookId');
    });
    this.state$ = this.route.paramMap
      .pipe(map(() => window.history.state));
    this.bookService.getBookId(this.bookId).subscribe(
      data => {
        this.book = data;
        this.authors = data.volumeInfo.authors;
        console.log(this.authors);
        console.log(data);
      });
    console.log(this.state$);
  }
}
