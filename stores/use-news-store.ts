import { getNews } from '@/api/news.ts';

import type { Items } from '@/types/news.ts';

const useNewsStore = defineStore('news', () => {
  const { $toast } = useNuxtApp();
  const items = ref<Items>([]);

  const getItems = async () => {
    try {
      items.value = await getNews();

      return items.value;
    } catch (error) {
      if (error instanceof Error) {
        $toast.error(error.message);
      }
    }
  };

  const getItem = async (id: string) => {
    try {
      if (items.value.length === 0) {
        await getItems();
      }

      return items.value.find((item) => {
        return item.id === id;
      });
    } catch (error) {
      if (error instanceof Error) {
        $toast.error(error.message);
      }
    }
  };

  return {
    items,
    getItems,
    getItem,
  };
});

export default useNewsStore;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot));
}
