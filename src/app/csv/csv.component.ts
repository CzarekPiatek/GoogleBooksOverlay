import { Component, OnInit } from '@angular/core';
import {BookshelfService} from '../service/bookshelf.service';
import {BookService} from '../service/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CsvToJson} from 'convert-csv-to-json';
import {Papa} from 'ngx-papaparse';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.scss']
})
export class CsvComponent implements OnInit {
  formGroup: FormGroup;
  allBookshelves;
  booksFromBookshelf;
  idOfBookshelf;
  booleanForUnwantedBookshelves = false;
  constructor(private bookshelfService: BookshelfService,
              private bookService: BookService,
              private formBuilder: FormBuilder,
              private papa: Papa) { }

  ngOnInit() {
    this.getAllBookshelves();
    this.formGroup = this.formBuilder.group({
      idOfBookshelf: ['', Validators.required],
    });
  }
  showOptions() {
    this.checkBookshelfValue();
    this.getItemsFromBookshelf();
    if (this.idOfBookshelf !== '' && this.idOfBookshelf !== 9 && this.idOfBookshelf !== 1
      && this.idOfBookshelf !== 5 && this.idOfBookshelf !== 7 && this.idOfBookshelf !== 8) {
      this.booleanForUnwantedBookshelves = true;
    } else {
      this.booleanForUnwantedBookshelves = false;
    }
  }
  checkBookshelfValue() {
    this.idOfBookshelf = this.formGroup.value.idOfBookshelf;
  }
  importCSV(bookshelfId: number) {
    const csvData = '"Hello","World!"';
    const options = {
      complete: (results, file) => {
        console.log('Parsed: ', results, file);
      }
      // Add your options here
    };

    this.papa.parse(csvData, options);
  }

  deleteEverythingFromBookshelf(bookshelfId: number) {
    this.bookshelfService.removeEverythingFromBookshelf(bookshelfId);
  }
  getAllBookshelves() {
    this.bookshelfService.getMyAllBookshelves().subscribe(
      data => {
        this.allBookshelves = data;
        console.log(data);
      }
    );
  }
  getItemsFromBookshelf() {
    if (this.idOfBookshelf !== '' && this.idOfBookshelf !== 9) {
      this.bookshelfService.getBooksIdsFromMyBookshelf(this.idOfBookshelf).subscribe(
        data => {
          this.booksFromBookshelf = data;
          console.log(data);
        }
      );
    }
  }
}
