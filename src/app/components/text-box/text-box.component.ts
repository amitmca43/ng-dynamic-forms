import { Component, OnInit, Input } from '@angular/core';
import { TextboxField } from 'src/app/form-fields/textbox/textbox-field';
import { FormGroup } from '@angular/forms';
import { ValidationType } from 'src/app/form-fields/validations/validationType-Enum';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.less']
})
export class TextBoxComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: TextboxField = new TextboxField();

  constructor() {
    console.log(name);
  }

  ngOnInit() {
    console.log(name);
  }

  get control() {
    return this.form.controls[this.field.key];
  }

  get required() {
    return this.field.validators.find(x => x.type === ValidationType.required);
  }

  get minLength() {
    const validator = this.field.validators.find(x => x.type === ValidationType.minLength);
    if (validator) {
      return validator.value;
    }

    return 0;
  }

  get maxLength() {
    const validator = this.field.validators.find(x => x.type === ValidationType.maxLength);
    if (validator) {
      return validator.value;
    }

    return 0;
  }
}
