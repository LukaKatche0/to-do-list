import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // bad way to do stuff
  // private http2: HttpClient;
  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Array<TodoModel>> {
    // get-ის შემდეგ, <>-ში ვუწერთ, სერვერი უკან რა ტიპის მონაცემს დაგვიბრუნებს
    // ამ შემთხვევაში სერვერი უკან დააბრუნებს todomodel-ის კლასის ობიექტებს.
    return this.http.get<Array<TodoModel>>('http://localhost:3000/todos');
  }

  addTodo(todo: TodoModel): Observable<TodoModel> {
    // პოსტის რექვესთის გაგზავნა სერვერზე, რომელიც უკან გვიბრუნებს todomodel-ს
    return this.http.post<TodoModel>('http://localhost:3000/todos', todo);
  }

  editTodo(todo: TodoModel): Observable<TodoModel> {
    // put-ის რექვესთის გაგზავნა სერვერზე, რომელიც უკან გვიბრუნებს todomodel-ს
    return this.http.put<TodoModel>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  deleteTodo(id: number | string) {
    // delete-ის რექვესთის გაგზავნა სერვერზე
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }

}
