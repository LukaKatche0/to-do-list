import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() deleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.deleted.emit(this.todo.id);
  }

}
