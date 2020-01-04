import {IImageLinks} from './iimage-links';
import {IIndustryIdentifiers} from './iindustry-identifiers';
import {IDimensions} from './idimensions';

export interface IBook {
  authors?: string[];
  categories?: string[];
  title: string;
  subtitle?: string;
  language?: string;
  printType?: string;
  previewLink: string;
  publisher?: string;
  averageRating?: number;
  ratingsCount?: number;
  contentVersion?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  dimensions: IDimensions;
  imageLinks?: IImageLinks[];
  industryIdentifiers?: IIndustryIdentifiers[];
}
