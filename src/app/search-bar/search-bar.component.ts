import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() books = new EventEmitter();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  onSearch(value: string) {
    this.books.emit(value);
  }
}
