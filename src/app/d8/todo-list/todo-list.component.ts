import { Component, OnInit } from '@angular/core';
import { ITodo, todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos = todos;
  currentTodo = todos[0];
  changeTodo(selectedTodo: ITodo) {
    this.currentTodo = selectedTodo;
  }
  constructor() {}

  ngOnInit(): void {}
}
