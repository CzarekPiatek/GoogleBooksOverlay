import {Component, Input, OnInit} from '@angular/core';

import {BookshelfService} from "../service/bookshelf.service";

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent implements OnInit {
  @Input() card;
  @Input() booksInFavoriteBookshelfIds;
  isFavorited = false;
  constructor() { }

  ngOnInit() {
    for (const ids of this.booksInFavoriteBookshelfIds.items) {
      if (this.card.id === ids.id) {
        this.isFavorited = true;
      }
    }
  }
  toPreview(url: string) {
    window.location.href = url;
  }
}
