<script lang="ts" setup>
import type {
  Props,
  FilterDateValue,
  FilterDateOptions,
} from './news-base.type.ts';

import type { Items } from '@/types/news.ts';

const props = withDefaults(defineProps<Props>(), {
  maxPages: 5,
});

const { $i18n } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const filterSearchPhrase = ref('');
const filterDate = ref<FilterDateValue>('new');
const currentPage = ref(1);

const filterDateOptions: FilterDateOptions = [
  { text: $i18n.t('new'), value: 'new' },
  { text: $i18n.t('old'), value: 'old' },
];

const filteredItems = computed(() => {
  const items = props.items;

  if (filterSearchPhrase.value.length > 0) {
    return onSortByDate(onSearchByTitle(items));
  }

  return onSortByDate(items);
});

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / props.maxPages);
});

const renderedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * props.maxPages;
  const endIndex = startIndex + props.maxPages;

  return filteredItems.value.slice(startIndex, endIndex);
});

const isPagination = computed(() => {
  return totalPages.value > 1;
});

const isNotFound = computed(() => {
  return renderedItems.value.length === 0;
});

const onSearchByTitle = (items: Items) => {
  return items.filter((item) => {
    return item.title
      .toLowerCase()
      .includes(filterSearchPhrase.value.toLowerCase());
  });
};

const onSortByDate = (items: Items) => {
  return items.sort((a, b) => {
    const dateA = new Date(a.pubDate).getTime();
    const dateB = new Date(b.pubDate).getTime();

    if (filterDate.value === 'new') {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
};

const onChangePage = (page: number, isScroll: boolean = true) => {
  router.push({
    query: {
      page,
    },
  });

  if (isScroll) {
    smoothScroll();
  }
};

const onQueryPage = () => {
  const routeQueryPage = Number(route.query.page);

  if (!routeQueryPage || routeQueryPage > totalPages.value) {
    const queryPage = 1;

    router.push({
      query: {
        page: queryPage,
      },
    });

    return queryPage;
  }

  return routeQueryPage;
};

watch([filterSearchPhrase, filterDate], () => {
  currentPage.value = 1;

  onChangePage(currentPage.value, false);
});

currentPage.value = onQueryPage();
</script>

<template>
  <div class="news-base">
    <div class="news-base__filter">
      <InputBase v-model="filterSearchPhrase" :placeholder="$t('search')" />

      <SelectBase v-model="filterDate" :options="filterDateOptions" />
    </div>

    <div class="news-base__list">
      <div
        v-for="item in renderedItems"
        :key="item.link"
        class="news-base__item"
      >
        <div class="news-base__date">
          {{ formatDate(item.pubDate) }}
        </div>
        <div class="news-base__title">
          <NuxtLinkLocale :to="item.url" class="news-base__title-link">
            {{ item.title }}
          </NuxtLinkLocale>
        </div>
        <div class="news-base__description" v-html="item.contentSnippet" />
      </div>
    </div>

    <div v-if="isPagination" class="news-base__pagination">
      <PaginationBase
        v-model="currentPage"
        :totalPages="totalPages"
        @onChange="onChangePage"
      />
    </div>

    <div v-if="isNotFound" class="news-base__not-found">
      {{ $t('not.found') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-base {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__filter {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    border: 1px solid var(--brand-extra);
    border-radius: 15px;
  }

  &__date {
    font-size: 14px;
  }

  &__title {
    &-link {
      text-decoration: none;
      color: var(--brand-primary);
      transition: color $transition-base;

      &:hover {
        text-decoration: none;
        color: var(--brand-secondary);
      }
    }
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__not-found {
    font-size: 16px;
  }

  @media (min-width: $breakpoint-lg) {
    &__filter {
      flex-direction: row;
    }
  }
}
</style>
