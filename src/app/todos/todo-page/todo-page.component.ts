import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from './../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: []
})
export class TodoPageComponent implements OnInit {
  completed:boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completed = !this.completed;
    this.store.dispatch( actions.toggleAll({ completed: this.completed }) )
  }
}
