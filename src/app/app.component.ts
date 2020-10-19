import { Component } from '@angular/core';
import { TodoModel } from './models/to-do.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<TodoModel> = [
    new TodoModel(1, 'ძაღლის გასეირნება', '7ზე უნდა გავასეირნო ჩარლი'),
    new TodoModel(2, 'კატის გასეირნება', '7ზე უნდა გავასეირნო ტოტო'),
  ];
  disabled: boolean = false;
  counter: number = 0;
  onCounterEntered(event) {
    this.counter = event;
  }
}
