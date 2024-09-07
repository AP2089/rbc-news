<script setup lang="ts">
import type { Swiper } from 'swiper/types';
import type { Props, RefData, NavButton } from './slider-base.types.ts';

const props = defineProps<Props>();

const navPrev = ref(null);
const navNext = ref(null);
const isDisabledNavPrev = ref(true);
const isDisabledNavNext = ref(false);
const visibleGallery = ref(false);
const indexGallery = ref(0);

const isNavigation = computed(() => {
  return props.items.length > 1;
});

const imgsGallery = computed(() => {
  return props.items.map((item) => {
    return item.url;
  });
});

const onSlideChange = (swiper: Swiper) => {
  isDisabledNavPrev.value = swiper.isBeginning;
  isDisabledNavNext.value = swiper.isEnd;
};

const onShowGallery = (index: number) => {
  indexGallery.value = index;
  visibleGallery.value = true;
};

const onHideGallery = () => {
  visibleGallery.value = false;
};
</script>

<template>
  <div class="slider-base">
    <Swiper
      :slidesPerView="1"
      :navigation="{
        prevEl: navPrev,
        nextEl: navNext,
      }"
      :spaceBetween="0"
      :modules="[SwiperNavigation]"
      class="slider-base__list"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-for="(item, i) in items"
        :key="item.url"
        class="slider-base__item"
      >
        <picture class="slider-base__picture" @click="() => onShowGallery(i)">
          <img
            :src="item.url"
            :alt="item.alt"
            loading="lazy"
            class="slider-base__img"
          />
        </picture>
      </SwiperSlide>
    </Swiper>

    <NavigationBase
      v-if="isNavigation"
      :ref="(data: RefData): NavButton => (navPrev = data?.$el)"
      :disabled="isDisabledNavPrev"
      direction="prev"
      class="slider-base__nav-prev"
    />

    <NavigationBase
      v-if="isNavigation"
      :ref="(data: RefData): NavButton => (navNext = data?.$el)"
      :disabled="isDisabledNavNext"
      direction="next"
      class="slider-base__nav-next"
    />
  </div>

  <VueEasyLightbox
    :visible="visibleGallery"
    :imgs="imgsGallery"
    :index="indexGallery"
    @hide="onHideGallery"
  />
</template>

<style lang="scss" scoped>
.slider-base {
  $rs: &;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &__list {
    &:not(.swiper-initialized) {
      overflow: hidden;

      #{$rs}__item {
        margin: 0 !important;

        & ~ #{$rs}__item {
          position: absolute;
          left: -100vw;
          opacity: 0;
        }
      }
    }
  }

  &__picture {
    display: block;
    width: 300px;
    height: 300px;
    cursor: pointer;
    background-color: var(--brand-extra);
    background-image: url('@/assets/images/no-photo.svg');
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__nav {
    &-prev,
    &-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    &-prev {
      left: 5px;
    }

    &-next {
      right: 5px;
    }
  }
}
</style>
