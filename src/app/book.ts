export class Book {
  id: string;
  authors?: string[];
  title: string;
  subtitle: string;
  publisher: string;
  publishedDate: string;
  image?: string;
  link: string;
  rating: number;

  constructor(id: string, authors: string[], title: string, subtitle: string,
              publisher: string, publishedDate: string,
              image: string, link: string, rating: number) {
    this.id = id;
    this.authors = authors;
    this.title = title;
    this.subtitle = subtitle;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.image = image;
    this.link = link;
    this.rating = rating;
  }
}
