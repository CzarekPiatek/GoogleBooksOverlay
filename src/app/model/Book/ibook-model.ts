import {IBook} from './ibook';
import {ISaleInfo} from './isale-info';

export interface IBookModel {
  id: string;
  etag?: string;
  volumeInfo: IBook;
  saleInfo: ISaleInfo;
  selfLink: string;
}
