import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  isAdvanced = false;
  title;
  @Output() basicSearchBooksTitle = new EventEmitter();
  @Output() advancedSearchBooksValues = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  advancedSearch(isAdvanced: boolean) {
    this.isAdvanced = isAdvanced;
  }

  getAdvancedSearchBooksValues($event) {
    this.advancedSearchBooksValues.emit($event);
  }

  getBasicSearchTitle($event) {
    this.basicSearchBooksTitle.emit($event);
  }
}
