import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { BaseField }              from '../../form-fields/base-field';
import { FormFieldsControlService }    from '../../services/form-field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormFieldsControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: BaseField<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormFieldsControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
