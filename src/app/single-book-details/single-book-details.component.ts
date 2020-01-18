import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../service/book.service';
import {Location} from '@angular/common';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {BookLanguage} from "../model/book-language.enum";

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.scss']
})
export class SingleBookDetailsComponent implements OnInit {
  bookId;
  book;
  authors;
  lang: BookLanguage;
  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private location: Location) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('bookId');
    });
    this.bookService.getBookId(this.bookId).subscribe(
      data => {
        this.book = data;
        this.authors = data.volumeInfo.authors;

        //console.log(this.lang[data.volumeInfo.language.toString()]);
      });
  }
}
