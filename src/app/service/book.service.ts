import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  searchBooks(title: string) {
    const encodedURI = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + title + '&maxResults=20');
    return this.http.get(encodedURI)
      .pipe(map((res: Response) => {
        // @ts-ignore
          return res.items || {}; }),
        catchError(error => throwError('Its a Trap in searchBooks function!'))
      );
  }
}
