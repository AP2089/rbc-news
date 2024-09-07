export type ModelValue =
  | string
  | number
  | undefined
  | null
  | Array<string | number>;

export type OptionValue = string | number;

export interface Option {
  text: string;
  value: OptionValue;
  selected?: boolean;
}

export type Options = Option[];

export interface Props {
  modelValue: ModelValue;
  options: Options;
}
