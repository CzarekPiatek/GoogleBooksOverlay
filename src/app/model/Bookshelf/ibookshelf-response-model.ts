import {IBookshelf} from './ibookshelf';

export interface IBookshelfResponseModel {
  kind: string;
  items: IBookshelf[];
}
