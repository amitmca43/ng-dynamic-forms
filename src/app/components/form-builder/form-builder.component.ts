import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BaseField } from 'src/app/form-fields/base-field/base-field';
import { FormGroup, FormControl } from '@angular/forms';
import { DropdownField } from 'src/app/form-fields/dropdown/dropdown-field';
import { TextboxField } from 'src/app/form-fields/textbox/textbox-field';
import { FieldValidator } from 'src/app/form-fields/base-field/validator';
import { ValidationType } from 'src/app/form-fields/validations/validationType-Enum';
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less']
})
export class FormBuilderComponent implements OnInit {
  todo = [
    'Text',
    'Checkbox'
  ];


  fields: BaseField<any>[] = [];
  form: FormGroup;
  payLoad = '';
  index = 0;
  constructor() { }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);
  }


  drop(event: CdkDragDrop<any[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    const type = event.item.dropContainer.data[event.previousIndex];
    const field = this.createControl(type);
    this.fields.push(field);
    this.form.addControl(field.key, new FormControl(field.value || ''));
    console.log(this.fields);
  }

  toFormGroup(formFields: BaseField<any>[]) {
    const group: any = {};

    if (formFields) {
      formFields.forEach(formField => {
        const control = new FormControl(formField.value || '');
        group[formField.key] = control;
      });
    }
    return new FormGroup(group);
  }

  get formData() {
    return JSON.stringify(this.form.value);
  }

  createControl(type: string) {
    this.index++;
    switch (type) {
      case 'Text':
        return new TextboxField({
          key: 'Text_' + this.index,
          label: 'Text_' + this.index,
          type: 'text',
          order: this.index,
          validators: null
        });
      case 'Checkbox':
        return new DropdownField({
          key: 'Checkbox_' + this.index,
          label: 'Checkbox_' + this.index,
          options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
          ],
          order: this.index,
          validators : [ new FieldValidator(ValidationType.required, '')]
        });


    }
  }

}
