import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-for-books-single-card',
  templateUrl: './search-for-books-single-card.component.html',
  styleUrls: ['./search-for-books-single-card.component.scss']
})
export class SearchForBooksSingleCardComponent implements OnInit {
  @Input() card;
  @Input() booksInFavoriteBookshelfIds;
  isFavorited = false;

  constructor() {
  }

  ngOnInit() {
    if (this.booksInFavoriteBookshelfIds.items) {
      for (const ids of this.booksInFavoriteBookshelfIds.items) {
        if (this.card.id === ids.id) {
          this.isFavorited = true;
        }
      }
    }
  }

  toPreview(url: string) {
    window.location.href = url;
  }
}
