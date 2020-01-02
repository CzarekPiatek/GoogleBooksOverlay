import {IListPrice} from './ilist-price';
import {IRetailPrice} from './iretail-price';

export interface ISaleInfo {
  buyLink?: string;
  listPrice?: IListPrice[];
  isEbook: boolean;
  retailPrice?: IRetailPrice[];
  saleability?: string;
}
