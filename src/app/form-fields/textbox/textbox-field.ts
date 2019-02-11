import { BaseField } from '../base-field/base-field';
import { TextboxFieldOptions } from './textbox-field-options';

export class TextboxField extends BaseField<string> {
  controlType = 'textbox';
  type: string;

  constructor(options = new TextboxFieldOptions<string>()) {
    super(options);
    this.type = options.type;
  }
}
