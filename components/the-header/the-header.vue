<script lang="ts" setup>
import { Paths } from '@/enums/paths.ts';
</script>

<template>
  <header class="header">
    <div class="header__center center">
      <div class="header__wrap">
        <NuxtLinkLocale :to="Paths.HOME" class="header__logo">
          {{ $t('logo') }}
        </NuxtLinkLocale>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;

  &__wrap {
    padding: 15px 0;
    border-bottom: 1px solid var(--brand-extra);
  }

  &__logo {
    text-transform: uppercase;
    font-size: 20px;
    list-style: 1;
    text-decoration: none;
    color: var(--brand-primary);
    transition: color $transition-base;

    &:hover {
      text-decoration: none;
      color: var(--brand-secondary);
    }
  }
}
</style>
