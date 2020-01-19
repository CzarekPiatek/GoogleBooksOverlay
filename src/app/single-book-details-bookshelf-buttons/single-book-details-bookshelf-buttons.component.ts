import {Component, Input, OnInit} from '@angular/core';
import {BookshelfService} from '../service/bookshelf.service';
import {MdcDialog, MdcSnackbar} from '@angular-mdc/web';
import {SingleBookDetailsBookshelfDialogComponent} from '../single-book-details-bookshelf-dialog/single-book-details-bookshelf-dialog.component';

import {forkJoin} from 'rxjs';
import {IBookResponseModel} from '../model/Book/ibook-response-model';
import {IBookshelf} from '../model/Bookshelf/ibookshelf';


@Component({
  selector: 'app-single-book-details-bookshelf-buttons',
  templateUrl: './single-book-details-bookshelf-buttons.component.html',
  styleUrls: ['./single-book-details-bookshelf-buttons.component.scss']
})

export class SingleBookDetailsBookshelfButtonsComponent implements OnInit {
  allBookshelvesWithBooks = [];
  booleanTableToCheckIfBookIsInBookshelf = [];
  @Input() bookId;
  allBookshelves: IBookshelf[] = [];

  constructor(private bookshelfService: BookshelfService,
              public dialog: MdcDialog,
              private snackbar: MdcSnackbar) {
  }

  ngOnInit() {
    this.getAllBookshelvesWithBooks();
  }

  openSnackbar(message: string) {
    const snackbarRef = this.snackbar.open(message);
    snackbarRef.afterDismiss().subscribe(reason => {
      console.log(reason);
    });
  }

  add() {
    const dialogRef = this.dialog.open(SingleBookDetailsBookshelfDialogComponent,
      {
        clickOutsideToClose: true,
        escapeToClose: true,
        data: {
          allBookshelvesWithBooks: this.allBookshelvesWithBooks,
          title: 'Dodaj do półki',
          addFunction: true,
        }
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'close') {
        console.log('Zamknięto');
      } else {
        this.bookshelfService.addBookToBookshelf(+result, this.bookId);
        this.getAllBookshelvesWithBooks();
        this.openSnackbar('Dodano do półki');
      }
    });
  }

  delete() {
    const dialogRef = this.dialog.open(SingleBookDetailsBookshelfDialogComponent,
      {
        clickOutsideToClose: true,
        escapeToClose: true,
        data: {
          allBookshelvesWithBooks: this.allBookshelvesWithBooks,
          title: 'Usuń z półki',
          addFunction: false,
        }
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'close') {
        console.log('Zamknięto');
      } else {
        this.bookshelfService.removeBookFromBookshelf(+result, this.bookId);
        this.getAllBookshelvesWithBooks();
        this.openSnackbar('Usunięto z półki');
      }
    });
  }

  getAllBookshelvesWithBooks() {
    this.allBookshelvesWithBooks = [];
    forkJoin(
      this.bookshelfService.getMyAllBookshelves()
    ).subscribe((data) => {
      this.allBookshelves = data[0];
      this.allBookshelves.forEach((bookshelf: IBookshelf) => {
        if (bookshelf.id !== 8 && bookshelf.id !== 9 && bookshelf.id !== 6 && bookshelf.id !== 1 && bookshelf.id !== 5) {
          this.bookshelfService.getBooksFromMyBookshelf(bookshelf.id)
            .subscribe((d: IBookResponseModel) => {
              if (d.items !== undefined) {
                for (let i = 0; i < d.totalItems; i++) {
                  if (this.bookId === d.items[i].id) {
                    this.booleanTableToCheckIfBookIsInBookshelf[bookshelf.id] = true;
                    break;
                  }
                  this.booleanTableToCheckIfBookIsInBookshelf[bookshelf.id] = false;
                }
              } else {
                this.booleanTableToCheckIfBookIsInBookshelf[bookshelf.id] = false;
              }
              this.allBookshelvesWithBooks.push({
                bookshelfTitle: bookshelf.title,
                bookshelfId: bookshelf.id,
                books: d.items,
                isInBookshelf: this.booleanTableToCheckIfBookIsInBookshelf[bookshelf.id]
              });
              console.log(this.allBookshelvesWithBooks);
            });
        }
      });
    });
  }
}
