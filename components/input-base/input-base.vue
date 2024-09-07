<script setup lang="ts">
import type { Props, ModelValue } from './input-base.types.ts';

withDefaults(defineProps<Props>(), {
  type: 'text',
});

const value = defineModel<ModelValue>();
</script>

<template>
  <input v-model="value" :type="type" class="input-base" />
</template>

<style lang="scss" scoped>
.input-base {
  display: block;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  border-radius: 15px;
  margin: 0;
  outline: none;
  background-color: transparent;
  color: var(--text-input-default);
  border: 1px solid var(--brand-extra);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  transition: border-color $transition-base;

  &:hover,
  &:focus {
    border-color: var(--brand-primary);
  }

  @include placeholder() {
    color: var(--text-input-default);
  }
}
</style>
