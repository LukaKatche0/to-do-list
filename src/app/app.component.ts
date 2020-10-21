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
  showEven: boolean = false;
  showAll: boolean = false;
  numbers: Array<number> = [1, 2, 6, 3, 5, 7];
  // disabled: boolean = false;
  // counter: number = 0;
  // onCounterEntered(event) {
  //   this.counter = event;
  // }

  addTodo() {
    const newTodo = new TodoModel(3, 'ენოტის გასეირნება', '7ზე უნდა გავასეირნო ჩარლი');
    this.todos.push(newTodo);
  }

  onTodoDeleted(id: number) {
    const todo = this.todos.find((todo) => {
      return todo.id === id;
    });
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  get numbersArr() {
    if (this.showAll) {
      return this.numbers;
    }
    const numbersToReturn = this.numbers.filter((number) => {
      return (number % 2 === 0 && this.showEven) || (number % 2 !== 0 && !this.showEven);
    });
    return numbersToReturn;
  }

  showMessage: boolean = true;
}
