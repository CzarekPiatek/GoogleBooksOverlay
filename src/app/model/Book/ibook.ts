import {IImageLinks} from './iimage-links';
import {IIndustryIdentifiers} from './iindustry-identifiers';

export interface IBook {
  authors?: string[];
  title: string;
  language: string;
  printType: string;
  previewLink: string;
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  imageLinks?: IImageLinks[];
  industryIdentifiers?: IIndustryIdentifiers[];
}
