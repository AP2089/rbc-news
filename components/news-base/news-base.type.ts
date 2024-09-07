import type { Items } from '@/types/news.ts';

export type FilterDateValue = 'new' | 'old';

export interface FilterDateOption {
  text: string;
  value: FilterDateValue;
}

export type FilterDateOptions = FilterDateOption[];

export interface Props {
  items: Items;
  maxPages?: number;
}
