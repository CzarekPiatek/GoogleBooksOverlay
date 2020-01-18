import {IBookModel} from './ibook-model';

export interface IBookResponseModel {
  items: IBookModel;
  kind: string;
  totalItems: number;
}
