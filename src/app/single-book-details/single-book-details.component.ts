import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../service/book.service';
import {BookLanguage} from '../model/enums/book-language.enum';
import {BookSellAbility} from "../model/enums/book-sell-ability.enum";

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.scss']
})
export class SingleBookDetailsComponent implements OnInit {
  bookId;
  book;
  authors;
  lang = BookLanguage;
  saleAbility = BookSellAbility;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('bookId');
    });
    this.bookService.getBookId(this.bookId).subscribe(
      data => {
        this.book = data;
        this.authors = data.volumeInfo.authors;
      });
  }
}
