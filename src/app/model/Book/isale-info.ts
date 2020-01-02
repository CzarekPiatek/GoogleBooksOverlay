import {IListPrice} from './ilist-price';
import {IRetailPrice} from './iretail-price';

export interface ISaleInfo {
  buyLink?: string;
  listPrice?: IListPrice[];
  isEBook: boolean;
  retailPrice?: IRetailPrice;
}
