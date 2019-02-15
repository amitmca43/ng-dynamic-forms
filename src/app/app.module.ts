import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [BrowserModule, DragDropModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormFieldComponent, TextBoxComponent, FormBuilderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
