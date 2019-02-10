import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { BaseField }     from '../../form-fields/base-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent {
  @Input() field: BaseField<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}