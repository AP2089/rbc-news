export interface Item {
  url: string;
  alt?: string;
}

export type Items = Item[];

export interface Props {
  items: Items;
}

export type NavButton = Ref<HTMLButtonElement>;

export type RefData = ComponentPublicInstance;
