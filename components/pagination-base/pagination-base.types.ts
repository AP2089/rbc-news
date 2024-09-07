export interface Props {
  modelValue: number;
  totalPages: number;
}

export interface Emits {
  (event: 'onChange', value: number): void;
}
