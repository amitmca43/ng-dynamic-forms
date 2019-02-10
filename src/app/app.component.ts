import { Component }       from '@angular/core';

import { FormsService } from './services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [FormsService]
})
export class AppComponent {
  formFields: any[];

  constructor(service: FormsService) {
    this.formFields = service.getQuestions();
  }
}
