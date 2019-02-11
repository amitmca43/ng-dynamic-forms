import { FieldOptions } from './field-options';
import { FieldValidator } from './validator';

export class BaseField<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  validators: FieldValidator[];

  constructor(options = new  FieldOptions<T>()) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators || [];
  }
}
