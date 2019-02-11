import { ValidationType } from '../validations/validationType-Enum';

export class FieldValidator {
    type: ValidationType;
    value: string | number;

    constructor(type: ValidationType, value: string | number) {
        this.type = type;
        this.value = value;
    }
}
