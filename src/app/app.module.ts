import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CounterComponent } from './counter/counter.component';
import { NgModelTestComponent } from './ng-model-test/ng-model-test.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesTestComponent } from './template-variables-test/template-variables-test.component';
import { UserFormTestComponent } from './user-form-test/user-form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoComponent,
    CustomInputComponent,
    CounterComponent,
    NgModelTestComponent,
    TemplateVariablesTestComponent,
    UserFormTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
