<script lang="ts" setup>
const newsStore = useNewsStore();
const { $i18n } = useNuxtApp();

const { data } = await useAsyncData('news', () => {
  return newsStore.getItems();
});

useHead({
  title: $i18n.t('title.news'),
});
</script>

<template>
  <h1>{{ $t('title.news') }}</h1>

  <NewsBase v-if="data" :items="data" />
</template>
