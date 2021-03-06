import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseField } from '../../form-fields/base-field/base-field';
import { ValidationType } from '../../form-fields/validations/validationType-Enum';

@Component({
  selector: 'app-form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent {
  @Input() field: BaseField<any>;
  @Input() form: FormGroup;

  get control() {
    return this.form.controls[this.field.key];
  }

  get required() {
    return this.field.validators.find(x => x.type === ValidationType.required);
  }
}
