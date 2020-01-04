import {IBook} from './ibook';
import {ISaleInfo} from './isale-info';
import {IUserInfo} from "./iuser-info";

export interface IBookModel {
  id: string;
  etag?: string;
  volumeInfo: IBook;
  saleInfo: ISaleInfo;
  userInfo: IUserInfo;
  selfLink: string;
}
