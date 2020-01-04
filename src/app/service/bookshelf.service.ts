import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IBookshelf} from "../model/Bookshelf/ibookshelf";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {

  constructor(private http: HttpClient) { }

  public getAccessToken(): string {
    return sessionStorage.getItem('accessToken');
  }

  public getMyBookshelfWithBookshelfId(bookshelfId: number): Observable<IBookshelf> {
    const url = 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + bookshelfId
      + '?access_token=' + this.getAccessToken();
    return this.http.get<IBookshelf>(url)
      .pipe(map((data) => {
        return data;
      }));
  }
  public getIdsFromMyBookshelf() {
    const url = 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes?fields=items(id)&access_token='
      + this.getAccessToken();
    return this.http.get<any>(url)
      .pipe(map((data) => {
        return data;
      }));
  }
  public removeBookFromBookshelf(bookshelfId: number, volumeId: string) {
    const url = 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + bookshelfId
      + '/removeVolume?volumeId=' + volumeId + '&access_token=' + this.getAccessToken();
    return this.http.post<any>(url, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
    );
  }
  public addBookToBookshelf(bookshelfId: number, volumeId: string) {
    const url = 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + bookshelfId
      + '/addVolume?volumeId=' + volumeId + '&access_token=' + this.getAccessToken();
    return this.http.post<any>(url, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
        },
      response => {
          console.log('POST call in error', response);
        },
      );
  }
}

