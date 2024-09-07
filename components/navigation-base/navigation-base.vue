<script lang="ts" setup>
import { type Props } from './navigation-base.types.ts';

defineProps<Props>();
</script>

<template>
  <button class="navigation-base">
    <IconChevronLeft v-if="direction === 'prev'" />
    <IconChevronRight v-else />
  </button>
</template>

<style lang="scss" scoped>
.navigation-base {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: auto;
  min-height: auto;
  padding: 0;
  background-color: var(--brand-primary);
  border-radius: 50%;
  color: var(--brand-light);
  border: none;
  outline: none;
  margin: 0;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
}
</style>
