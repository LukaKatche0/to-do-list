import { Component, OnInit } from '@angular/core';
import { TodoModel } from './models/to-do.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService){

  }

  todos: Array<TodoModel> = [];
  showEven: boolean = false;
  showAll: boolean = false;
  numbers: Array<number> = [1, 2, 6, 3, 5, 7];
  // disabled: boolean = false;
  // counter: number = 0;
  // onCounterEntered(event) {
  //   this.counter = event;
  // }

  ngOnInit() {
    // ვწერთ ისეთ ლოგიკას, რომელიც გვინდა განხორციელდეს კომპონენტის ინიციალიზაციის დროს
    // სერვერიდან წამოვიღოთ todo-ების ლისტი და შემდეგ გამოვაჩინოთ
    // სერვისის შექმნა - ng g s {{სახელი}}
    this.todoService.getTodos()
    .subscribe((data) => {
      this.todos = data;
    });
  }

  addTodo() {
    const newTodo = new TodoModel(undefined, 'ენოტის გასეირნება', '7ზე უნდა გავასეირნო ჩარლი');
    this.todoService.addTodo(newTodo)
    .subscribe((data) => {
      newTodo.id = data.id;
      this.todos.push(newTodo);
    })
  }

  onTodoDeleted(id: number | string) {
    this.todoService.deleteTodo(id)
    .subscribe(() => {
      const todo = this.todos.find((todo) => {
        return todo.id === id;
      });
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    });
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
