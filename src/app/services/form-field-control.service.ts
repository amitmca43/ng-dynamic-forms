import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { BaseField } from '../form-fields/base-field/base-field';
import { ValidationType } from '../form-fields/validations/validationType-Enum';

@Injectable()
export class FormFieldsControlService {
  constructor() { }

  toFormGroup(formFields: BaseField<any>[]) {
    const group: any = {};

    formFields.forEach(formField => {
      const control = new FormControl(formField.value || '');

      const validators: ValidatorFn[] = [];
      validators.push(Validators.required);

      control.setValidators(this.getValidators(formField));

      group[formField.key] = control;
    });
    return new FormGroup(group);
  }

  getValidators(field: BaseField<any>) {
    const validators: any = [];

    if (!field.validators) {
      return validators;
    }

    field.validators.forEach(validator => {

      switch (validator.type) {
        case ValidationType.required:
          validators.push(Validators.required);
          break;
        case ValidationType.minLength:
          validators.push(Validators.minLength(+validator.value));
          break;
        case ValidationType.maxLength:
          validators.push(Validators.maxLength(+validator.value));
          break;
        case ValidationType.email:
          validators.push(Validators.email);
          break;
        case ValidationType.pattern:
          validators.push(Validators.pattern(validator.value as string));
          break;
        case ValidationType.min:
          validators.push(Validators.min(+validator.value));
          break;
        case ValidationType.max:
          validators.push(Validators.max(+validator.value));
          break;
        default:
          break;
      }
    });

    return validators;
  }
}
