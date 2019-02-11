import { BaseField } from '../base-field/base-field';
import { KeyValuePair } from './key-value-pair';
import { DropDownFieldOptions } from './dropdown-field-options';

export class DropdownField extends BaseField<string> {
  controlType = 'dropdown';
  options: KeyValuePair[] = [];

  constructor(options = new DropDownFieldOptions<string>()) {
    super(options);
    this.options = options.options;
  }
}
