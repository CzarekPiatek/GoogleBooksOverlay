import {Component, OnInit} from '@angular/core';
import {BookshelfService} from '../service/bookshelf.service';

@Component({
  selector: 'app-compare-bookshelves',
  templateUrl: './compare-bookshelves.component.html',
  styleUrls: ['./compare-bookshelves.component.scss']
})
export class CompareBookshelvesComponent implements OnInit {
  allBookshelves;
  idOfLeftBookshelf;
  idOfRightBookshelf;

  constructor(private bookshelfService: BookshelfService) {
  }

  ngOnInit() {
    this.bookshelfService.getMyAllBookshelves().subscribe(
      data => {
        this.allBookshelves = data;
        console.log(data);
      }
    );
  }

  getLeftBookshelf($event) {
    this.idOfLeftBookshelf = +$event;
  }

  getRightBookshelf($event) {
    this.idOfRightBookshelf = +$event;
  }
}
