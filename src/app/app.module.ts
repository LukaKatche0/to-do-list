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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoComponent,
    CustomInputComponent,
    CounterComponent,
    NgModelTestComponent
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
