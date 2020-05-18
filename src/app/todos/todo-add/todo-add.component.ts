import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as actions from './../todo.actions'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput:FormControl;

  constructor( private store:Store<AppState> ) {
    this.txtInput = new FormControl( '', Validators.required );
  }

  ngOnInit(): void {
  }

  add() {
    if(this.txtInput.invalid) return;
    this.store.dispatch(actions.create({ text: this.txtInput.value }));
    this.txtInput.reset();
  }
}
