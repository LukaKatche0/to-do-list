import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: TodoModel;
  constructor() { }

  ngOnInit() {
  }

}
