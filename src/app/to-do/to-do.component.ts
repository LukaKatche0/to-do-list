import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../models/to-do.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: TodoModel;
  isInEditMode = false;
  @Output() deleted = new EventEmitter<number>();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  get editBtnTitle() {
    if (this.isInEditMode) {
      return 'Stop Editing';
    } else {
      return 'Edit Todo'; 
    }
  }

  deleteTodo() {
    this.deleted.emit(this.todo.id);
  }

  editTodo() {
    if (this.isInEditMode) {
      this.todoService.editTodo(this.todo)
      .subscribe((data) => {
        alert('successfully edited');
      });
    }
    this.isInEditMode = !this.isInEditMode;
    // თუ არის editMode-ში, აქვე გამოიძახეთ edit-ის ფუნქცია ბექში, ჩვენი todoService-ის გამოყენებით
    
  }

}
