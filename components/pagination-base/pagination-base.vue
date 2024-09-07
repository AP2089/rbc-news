<script lang="ts" setup>
import type { Props, Emits } from './pagination-base.types.ts';

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const activePage = defineModel<number>({ default: 1 });

const onChange = (page: number) => {
  emits('onChange', page);
};

const buttonBackClasses = computed(() => {
  return ['paginate-button-back', { disabled: activePage.value === 1 }];
});

const buttonNextClasses = computed(() => {
  return [
    'paginate-button-next',
    { disabled: activePage.value === props.totalPages },
  ];
});
</script>

<template>
  <div class="pagination-base">
    <VueAwesomePaginate
      v-model="activePage"
      :total-items="totalPages"
      :items-per-page="1"
      :max-pages-shown="5"
      :onClick="onChange"
    >
      <template #prev-button>
        <div :class="buttonBackClasses">
          <IconChevronLeft />
        </div>
      </template>

      <template #next-button>
        <div :class="buttonNextClasses">
          <IconChevronRight />
        </div>
      </template>
    </VueAwesomePaginate>
  </div>
</template>

<style lang="scss" scoped>
.pagination-base {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin: 0 0 30px 0;
}

.pagination-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;

  :deep(li) {
    display: none;
    margin: 0;
    padding: 0;

    &:first-child,
    &:last-child {
      display: flex;
    }
  }
}

:deep(.back-button),
:deep(.next-button) {
  cursor: default;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
}

:deep(.back-button) {
  margin-right: 8px;
}

:deep(.next-button) {
  margin-left: 8px;
}

:deep(.paginate-button-back),
:deep(.paginate-button-next) {
  display: flex;
  min-width: 68px;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 32px;
  background-color: var(--brand-light);
  color: var(--brand-dark);
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: color $transition-base, border-color $transition-base,
    background-color $transition-base;

  svg {
    width: 20px;
    height: 20px;
    color: inherit;
  }

  &:hover {
    background-color: var(--brand-light);
    border-color: var(--brand-extra);
  }

  &:focus {
    background-color: var(--brand-light);
    border-color: var(--brand-extra);
  }

  &:focus {
    background-color: var(--brand-light);
    border-color: var(--brand-extra);
  }

  &.disabled {
    background-color: var(--brand-light) !important;
    border-color: transparent !important;
    color: var(--brand-disable) !important;
    cursor: not-allowed !important;
  }
}

:deep(.starting-breakpoint-button),
:deep(.ending-breakpoint-button) {
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--brand-dark);
}

:deep(.first-button),
:deep(.number-buttons),
:deep(.last-button) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border-radius: 32px;
  color: var(--brand-dark);
  background-color: var(--brand-light);
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: color $transition-base, border-color $transition-base,
    background-color $transition-base;

  &:hover {
    color: var(--brand-dark);
    background-color: var(--brand-light);
    border-color: var(--brand-extra);
  }

  &:focus {
    color: var(--brand-dark);
    background-color: var(--brand-light);
    border-color: var(--brand-extra);
  }

  &.disabled {
    color: var(--brand-disable);
    background-color: var(--brand-light);
    border-color: transparent;
  }

  &.active-page {
    color: var(--brand-light);
    background-color: var(--brand-primary);
    border-color: transparent;
  }
}

@media (min-width: $breakpoint-md) {
  .pagination-container {
    :deep(li) {
      display: flex;
    }
  }
}
</style>
