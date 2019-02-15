import { ValidationType } from '../validations/validationType-Enum';

export class FieldValidator {
    type: ValidationType;
    value: string | number | boolean;

    constructor(type: ValidationType, value: string | number | boolean) {
        this.type = type;
        this.value = value;
    }
}
