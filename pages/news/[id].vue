<script lang="ts" setup>
import { Paths } from '@/enums/paths.ts';

const newsStore = useNewsStore();
const route = useRoute();
const routeParamsId = route.params.id as string;

const { data } = await useAsyncData(`new:${routeParamsId}`, () => {
  return newsStore.getItem(routeParamsId);
});

const isGallery = computed(() => {
  return data.value?.enclosure && data.value.enclosure.length > 0;
});

if (data.value) {
  useHead({
    title: data.value.title,
  });
} else {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>

<template>
  <div v-if="data" class="new">
    <div class="new__head">
      <h1 class="new__title">{{ data.title }}</h1>

      <NuxtLinkLocale :to="Paths.HOME">
        {{ $t('back') }}
      </NuxtLinkLocale>
    </div>

    <div class="new__caption">
      <div class="new__date">
        {{ formatDate(data.pubDate) }}
      </div>

      <div v-if="data?.author" class="new__author">
        {{ data.author }}
      </div>
    </div>

    <div class="new__wrap">
      <div v-if="isGallery" class="new__gallery">
        <SliderBase :items="data.enclosure" />
      </div>

      <div class="new__content">
        <div class="new__row" v-html="data.content" />

        <div class="new__link new__row">
          <NuxtLink :to="data.link" target="_blank">{{ data.link }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__head {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  &__title {
    margin: 0;
  }

  &__caption {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  &__author {
    color: var(--brand-primary);
  }

  &__row {
    margin-bottom: 15px;
  }

  &__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  &__gallery {
    width: 300px;
  }

  &__content {
    flex: 1;
  }

  &__link {
    word-break: break-all;
  }

  @media (min-width: $breakpoint-lg) {
    &__head {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &__caption {
      align-items: center;
      flex-direction: row;
    }

    &__wrap {
      flex-direction: row;
    }
  }
}
</style>
