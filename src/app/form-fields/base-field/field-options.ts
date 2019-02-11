import { FieldValidator } from './validator';


export class FieldOptions<T> {
    value?: T;
    key?: string;
    label?: string;
    order?: number;
    controlType?: string;
    validators: FieldValidator[];
}

