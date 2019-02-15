import { Injectable } from '@angular/core';

import { DropdownField } from '../form-fields/dropdown/dropdown-field';
import { TextboxField } from '../form-fields/textbox/textbox-field';
import { BaseField } from '../form-fields/base-field/base-field';
import { ValidationType } from '../form-fields/validations/validationType-Enum';
import { FieldValidator } from '../form-fields/base-field/validator';

@Injectable()
export class FormsService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getFormFields() {

    const validators: FieldValidator[] = [];
    validators.push(
      new FieldValidator(ValidationType.required, ''),
      new FieldValidator(ValidationType.minLength, 3),
      new FieldValidator(ValidationType.maxLength, 20)
    );

    const formFields: BaseField<any>[] = [

      new DropdownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 4,
        validators : [ new FieldValidator(ValidationType.required, '')]
      }),

      new TextboxField({
        key: 'firstName',
        label: 'First name',
        type: 'text',
        order: 1,
        validators
      }),

      new TextboxField({
        key: 'lastName',
        label: 'Last name',
        type: 'text',
        order: 2,
        validators
      }),

      new TextboxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3,
        validators: [ new FieldValidator(ValidationType.required, ''), new FieldValidator(ValidationType.email, '')]
      })
    ];

    return formFields.sort((a, b) => a.order - b.order);
  }
}
