import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.scss']
})
export class BasicSearchComponent implements OnInit {
  @Output() booksTitle = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search(booksTitle: string) {
    if (booksTitle !== undefined) {
      this.booksTitle.emit(booksTitle);
    }
  }
}
