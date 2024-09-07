export type ModelValue = string | number;

export interface Props {
  modelValue: ModelValue;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
}
