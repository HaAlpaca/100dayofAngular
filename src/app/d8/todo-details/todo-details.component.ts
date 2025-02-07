import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/todos';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.sass'],
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo?: ITodo;
  @Output() select = new EventEmitter<ITodo>();
  constructor() {}

  ngOnInit(): void {}
}
