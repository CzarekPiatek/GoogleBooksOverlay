import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IBookResponseModel} from '../model/Book/ibook-response-model';
import {IBookModel} from "../model/Book/ibook-model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  searchBooks(title: string) {
    const encodedURI = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + title + '&maxResults=12');
    return this.http.get(encodedURI)
      .pipe(map((res: Response) => {
          // @ts-ignore
          return res.items || {}; }),
        catchError(error => throwError('Its a Trap in searchBooks function!'))
      );
  }

  getAdvancedSearchBooks(title: string, start: number): Observable<IBookResponseModel[]> {
    return this.http.get<IBookResponseModel[]>('https://www.googleapis.com/books/v1/volumes?q=' + title +
      '&startIndex=' + start + '&maxResults=12').pipe(map((data) => {
      return data;
    }));
  }

  getBookId(bookId: string): Observable<IBookModel> {
    return this.http.get<IBookModel>('https://www.googleapis.com/books/v1/volumes/' + bookId).pipe
    (map((data) => {
      return data;
    }));
  }

  getBasicSearchTwelveBooks(title: string, start: number): Observable<IBookResponseModel[]> {
    return this.http.get<IBookResponseModel[]>('https://www.googleapis.com/books/v1/volumes?q=' + title +
      '&startIndex=' + start + '&maxResults=12').pipe(map((data) => {
      return data;
    }));
  }

  getAdvancedSearchTwelveBooks(title: string, start: number, filter: string, langRestrict: string,
                               maxAllowedMaturityRating: string, orderBy: string, printType: string,
                               projection: string): Observable<IBookResponseModel[]> {
    return this.http.get<IBookResponseModel[]>('https://www.googleapis.com/books/v1/volumes?q='
      + title + '&filter=' + filter + '&langRestrict=' + langRestrict + '&maxAllowedMaturityRating=' +
      maxAllowedMaturityRating + '&orderBy=' + orderBy + '&printType=' + printType + '&projection=' +
      projection + '&startIndex=' + start + '&maxResults=12').pipe(
        map((data) => {
      return data;
    }));
  }
}
