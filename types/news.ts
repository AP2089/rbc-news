export interface Image {
  link: string;
  url: string;
  title: string;
}

export interface Enclosure {
  url: string;
  type: string;
  length: string;
}

export type Enclosures = Enclosure[];

export interface ItemResponse {
  creator?: string;
  title: string;
  link: string;
  pubDate: string;
  author?: string;
  enclosure?: Enclosure | Enclosures;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
}

export type ItemsResponse = ItemResponse[];

export interface Response {
  items: ItemsResponse;
  image: Image;
  title: string;
  description: string;
  link: string;
  language: string;
  ttl: string;
}

export interface Item extends ItemResponse {
  id: string;
  url: string;
  enclosure: Enclosures;
}

export type Items = Item[];

export type ItemFetch = Item | undefined;
