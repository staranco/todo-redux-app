import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('phInput') txtPhInput:ElementRef;
  
  chkCompleted:FormControl;
  txtInput:FormControl;
  editing:boolean = false;

  constructor( private store:Store<AppState> ) { }

  ngOnInit(): void {
    
    this.chkCompleted = new FormControl( this.todo.completed )
    this.txtInput = new FormControl( this.todo.text, Validators.required )

    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) )
    })
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue( this.todo.text )

    setTimeout(() => {
      this.txtPhInput.nativeElement.select();
    }, 1);
    
  }

  endEdit() {
    this.editing = false;

    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.text) return;

    this.store.dispatch( actions.edit({ 
      id: this.todo.id, 
      text: this.txtInput.value
    }) )
  }

  erase(){
    this.store.dispatch(actions.erase({ id: this.todo.id }))
  }
}
