<script lang="ts" setup>
import type { Props, ModelValue } from './select-base.types.ts';

defineProps<Props>();

const selected = defineModel<ModelValue>();
</script>

<template>
  <select v-model="selected" class="select-base">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="option.selected"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.select-base {
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
}
</style>
