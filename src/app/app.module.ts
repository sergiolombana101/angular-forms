import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequiredTextboxComponent } from './controlValueAccessor/required-textbox.component';
import { PhoneTextboxComponent } from './controlValueAccessor/phone-textbox.component';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';

import { ShowError } from './shared/showError.component';
import { ShowModelError } from './shared/showModelError.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, AppRoutingModule.components, RequiredTextboxComponent, PhoneTextboxComponent, CamelToTitlePipe, ShowError,ShowModelError],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }