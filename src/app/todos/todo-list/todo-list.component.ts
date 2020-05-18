import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from './../../app.state';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todos:Todo[] = [];
  currFilter:validFilters;
  
  constructor( private store:Store<AppState> ) {}

  ngOnInit(): void {

    this.store.subscribe( ({ todos, filter }) => { //({ todos, filter }) es desestructuracion del argumento que viene del subscribe (el state)
      this.todos = todos;
      this.currFilter = filter;
    })
  }

}
