import {Component, OnInit} from '@angular/core';
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
  csvData;

  constructor(private bookshelfService: BookshelfService,
              private bookService: BookService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getAllBookshelves();
    this.formGroup = this.formBuilder.group({
      idOfBookshelf: ['', Validators.required],
    });
  }

  showOptions() {
    this.checkBookshelfValue();
    this.getItemsFromBookshelf();
    this.booleanForUnwantedBookshelves = this.idOfBookshelf !== '' && this.idOfBookshelf !== 9 && this.idOfBookshelf !== 1
      && this.idOfBookshelf !== 5 && this.idOfBookshelf !== 7 && this.idOfBookshelf !== 8;
  }

  checkBookshelfValue() {
    this.idOfBookshelf = this.formGroup.value.idOfBookshelf;
  }

  public fileChangeListener(files: FileList) {
    if (files && files.length > 0) {
      const file: File = files.item(0);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const csv: string = reader.result as string;
        this.csvData = csv.trim()
          .replace(/(\r\n|\n|\r)/gm, '')
          .replace('"id"', '')
          .slice(1, -1).split('""');
        console.log(this.csvData);
      };
    }
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

  importBooksToBookshelf() {
    this.csvData.forEach((id) => {
      this.bookshelfService.addBookToBookshelf(this.idOfBookshelf, id);
    });
  }
}
