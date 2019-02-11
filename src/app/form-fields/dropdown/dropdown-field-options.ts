import { FieldOptions } from '../base-field/field-options';
import { KeyValuePair } from './key-value-pair';

export class DropDownFieldOptions<T> extends FieldOptions<T> {
    options: KeyValuePair[];
}
