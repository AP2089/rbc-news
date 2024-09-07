import Parser from 'rss-parser';

import type { Response, Items, Enclosures, Enclosure } from '@/types/news.ts';

const NEWS_URL = '/api/rbc/logical/footer/news.rss';

export async function getNews(): Promise<Items> {
  const parser = new Parser();
  const response = (await $fetch(NEWS_URL)) as string;
  const data = (await parser.parseString(response)) as Response;

  return data.items.map((item) => {
    const id = item.link.split('/').pop();

    const enclosure = Array.isArray(item.enclosure)
      ? item.enclosure
      : ([] as Enclosures);

    if (typeof item.enclosure === 'object') {
      enclosure.push(item.enclosure as Enclosure);
    }

    return {
      ...item,
      id,
      enclosure,
      url: `/news/${id}`,
    };
  }) as Items;
}
