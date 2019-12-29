import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {BookService} from '../service/book.service';
import {Book} from '../book';

@Component({
  selector: 'app-books-result',
  templateUrl: './books-result.component.html',
  styleUrls: ['./books-result.component.css']
})
export class BooksResultComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource: MatTableDataSource<Book>;
  books;
  booksData: any = [];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'photo', 'volumeInfo'];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  getBooks($event) {
    this.books = $event;
    console.log(this.books);
    this.bookService.searchBooks(this.books).subscribe(
      data => {
        console.log(data);
        this.booksData = data;
        this.dataSource = new MatTableDataSource<Book>(this.booksData);
        console.log(this.dataSource);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      }
    );
  }
}
